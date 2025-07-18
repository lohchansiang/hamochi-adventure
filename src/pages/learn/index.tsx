import * as React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const AppWithoutSSR = dynamic(() => import("@/AppLearn"), { ssr: false });

export default function Home() {
    const [orientation, setOrientation ] = React.useState('')

    React.useEffect(() => {
        // window is accessible here.
        const checkOrientation = ()=> {
            if(window.innerHeight > window.innerWidth){
                setOrientation('portrait')
            }else{
                setOrientation('landscape')
            }
        }

        checkOrientation();

        window.addEventListener("resize", () => {
            checkOrientation();
        })

    }, []);

    return (
        <>
            <Head>
                <title>Hamochi Learn</title>
                <meta name="description" content="Learn by hamochi." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <main className={`${styles.main} ${inter.className}`}>
                { orientation == 'landscape' &&
                    <div id="debug-container">
                        <div className="font-bold">Debug</div>
                        <ul>
                            <li>Orientation: {orientation}</li>
                        </ul>
                    </div>
                }
                {/* <div id="orientation-message">
                    Please play in portrait mode.
                </div> */}
                <AppWithoutSSR />
            </main>
        </>
    );
}
