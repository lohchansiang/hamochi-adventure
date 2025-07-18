import { Scene, GameObjects } from "phaser";

export interface IScrollViewConfig {
    x: number;
    y: number;
    maskX?: number; // Required if put in container
    maskY?: number; // Required if put in container
    width: number;
    height: number;
    padding?: number;
    backgroundColor?: number;
    borderColor?: number;
    borderWidth?: number;
}

export class ScrollView {
    private scene: Scene;
    private container: GameObjects.Container;
    private mask: GameObjects.Graphics;
    private background: GameObjects.Rectangle;
    private oriY: number = 0;
    private scrollY: number = 0;
    private viewWidth: number;
    private viewHeight: number;
    private contentHeight: number = 0;
    private padding: number;
    private scrollHandler: (pointer: Phaser.Input.Pointer, gameObjects: any[], deltaX: number, deltaY: number) => void;
    private isDragging: boolean = false;
    private dragStartY: number = 0;

    constructor(scene: Scene, config: IScrollViewConfig) {
        this.scene = scene;
        this.viewWidth = config.width;
        this.viewHeight = config.height;
        this.padding = config.padding ?? 10;
        this.oriY = config.y;

        // Create background (interactive for dragging)
        this.background = scene.add.rectangle(
            config.x + config.width / 2,
            config.y + config.height / 2,
            config.width,
            config.height,
            config.backgroundColor ?? 0x333333,
            0.8
        );
        if (config.borderColor && config.borderWidth) {
            this.background.setStrokeStyle(config.borderWidth, config.borderColor);
        }
        this.background.setInteractive(); // Enable input events on the background

        // Create container
        this.container = scene.add.container(config.x, config.y);
        
        // Create mask
        this.mask = scene.make.graphics().fillRect(
                            config.maskX ?? config.x, 
                            config.maskY ?? config.y, 
                            config.width,
                            config.height
                        );
        this.container.setMask(this.mask.createGeometryMask());

        // Wheel scroll handler
        this.scrollHandler = (pointer: Phaser.Input.Pointer, gameObjects: any[], deltaX: number, deltaY: number) => {
            this.scroll(deltaY * 0.5);
        };

        this.disableScroll()
    }

    public addContent(items: GameObjects.GameObject[]): void {
        this.clearContent();

        let currentY: number = 0;
        items.forEach((item: GameObjects.GameObject, index: number) => {
            if( item instanceof GameObjects.Text
                || item instanceof GameObjects.Container
            ){
                item.setPosition(0, currentY);
                this.container.add(item);
                currentY += item.height + this.padding;
            }
        });

        this.contentHeight = currentY - this.padding;
        this.updateScrollBounds();
    }

    public clearContent(): void {
        this.container.getAll().forEach((child: GameObjects.GameObject) => child.destroy());
        this.scrollY = 0;
        this.container.y = this.oriY;
        this.contentHeight = 0;
    }

    private scroll(delta: number): void {
        const maxScroll = Math.max(0, this.contentHeight - this.viewHeight);
        this.scrollY += delta;
        this.scrollY = Phaser.Math.Clamp(this.scrollY, -maxScroll, 0);
        this.container.y = this.oriY + this.scrollY;
    }

    private updateScrollBounds(): void {
        const maxScroll = Math.max(0, this.contentHeight - this.viewHeight);
        this.scrollY = Phaser.Math.Clamp(this.scrollY, -maxScroll, 0);
        this.container.y = this.oriY + this.scrollY;
    }

    public getContainer(): GameObjects.Container {
        return this.container;
    }

    public getBackground(): GameObjects.Rectangle {
        return this.background;
    }

    public enableScroll(){
        this.scene.input.on("wheel", this.scrollHandler);

        // Drag scroll handlers
        this.background.setInteractive();
        this.background.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
            this.isDragging = true;
            this.dragStartY = pointer.y - this.scrollY;
        });

        this.background.on("pointermove", (pointer: Phaser.Input.Pointer) => {
            if (this.isDragging) {
                const deltaY = (pointer.y - this.dragStartY) - this.scrollY;
                this.scroll(-deltaY); // Invert delta for natural drag direction
                this.dragStartY = pointer.y - this.scrollY; // Update start point for smooth dragging
            }
        });

        this.background.on("pointerup", () => {
            this.isDragging = false;
        });
        this.background.on("pointerout", () => {
            this.isDragging = false; // Stop dragging if mouse leaves the game
        });
    }

    public disableScroll(){
        this.scene.input.off("wheel", this.scrollHandler);
        this.background.off("pointerdown");
        this.background.off("pointermove");
        this.background.off("pointerup");
        this.background.off("pointerout");
    }

    public destroy(): void {
        this.scene.input.off("wheel", this.scrollHandler);
        this.background.off("pointerdown");
        this.background.off("pointermove");
        this.background.off("pointerup");
        this.background.off("pointerout");
        this.container.destroy();
        this.mask.destroy();
        this.background.destroy();
    }
}