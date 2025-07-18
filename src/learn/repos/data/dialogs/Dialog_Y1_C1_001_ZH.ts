import { DialogData } from "../DialogData";

export const Dialog_Y1_C1_001_ZH: DialogData =  {
    key: "Dialog_Y1_C1_001_ZH",
    audioAssetPath: "/learn/audio/Dialog_Y1_C1_001_ZH",
    endKey: 'step1-ended',
    lines: [
        {
            sequenceKey: "S0010",
            message: "小朋友们，今天我们来学学多和少。",
            delayCallbacks: []
        },
        {
            sequenceKey: "S0020",
            message: "什么是多? 什么是少? 你们知道吗？",
            delayCallbacks: [
                { delay: 500, key: "s0020-show-text-many" },
                { delay: 2500, key: "s0020-show-text-less" },
            ]
        },
        {
            sequenceKey: "S0030",
            message: "多是数量比较大，而少是数量比较小。",
            delayCallbacks: [
                { delay: 0, key: "s0030-sync" },
                { delay: 200, key: "s0030-focus-many" },
                { delay: 1000, key: "s0030-show-ballon-many" },
                { delay: 3000, key: "s0030-focus-less" },
                { delay: 3800, key: "s0030-show-ballon-less" },
            ]
        },
        {
            sequenceKey: "S0040",
            message: "同学们，你们看得出分别吗？",
            delayCallbacks: [
                { delay: 0, key: "s0040-sync" },
            ]
        },
        {
            sequenceKey: "S0050",
            message: "这里的气球多。",
            delayCallbacks: [
                { delay: 0, key: "s0050-point-many" },
            ]
        },
        {
            sequenceKey: "S0060",
            message: "这里的气球少。",
            delayCallbacks: [
                { delay: 0, key: "s0060-point-less" },
            ]
        },
        {
            sequenceKey: "S0070",
            message: "你们明白了吗？",
            delayCallbacks: [
                { delay: 0, key: "s0070-sync" },
            ]
        },
        {
            sequenceKey: "S0080",
            message: "好了，接下来我们再看看其他的例子。",
            delayCallbacks: [
                { delay: 0, key: "s0080-sync" },
            ]
        },
        // {
        //     sequenceKey: "S0050",
        //     message: "好了，我们先看看这两个盒子。",
        //     delayCallbacks: [
        //         { delay: 0, key: "s0050-sync" },
        //         { delay: 200, key: "s0050-focus-less" },
        //         { delay: 500, key: "s0050-show-ballon-less" },
        //     ]
        // },
        // {
        //     sequenceKey: "S0060",
        //     message: "盒子A里有多少颗苹果？",
        // },
        // {
        //     sequenceKey: "S0070",
        //     message: "1。2。3。4。5。。。五颗苹果。",
        // },
        // {
        //     sequenceKey: "S0080",
        //     message: "盒子B里有多少颗苹果？",
        // },
        // {
        //     sequenceKey: "S0090",
        //     message: "1。2。。。两颗苹果。",
        // },
        // {
        //     sequenceKey: "S0100",
        //     message: "5 比 2 大",
        // },
        // {
        //     sequenceKey: "S0110",
        //     message: "所以盒子A的苹果比较。。多。",
        // },
        // {
        //     sequenceKey: "S0120",
        //     message: "盒子B的苹果比较。。。少。",
        // },
    ]
}