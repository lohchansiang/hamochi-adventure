import { DialogData } from "../DialogData";

export const Dialog_Y1_C1_001B_ZH: DialogData =  {
    key: "Dialog_Y1_C1_001B_ZH",
    audioAssetPath: "/learn/audio/Dialog_Y1_C1_001B_ZH",
    lines: [
        {
            sequenceKey: "S1010",
            message: "老师手中有两个盒子。",
            delayCallbacks: [
                { delay: 0, key: "s1010-reset" },
                { delay: 500, key: "s1010-show-box" },
            ]
        },
        {
            sequenceKey: "S1020",
            message: "可以帮老师打开盒子吗？",
            delayCallbacks: [
                { delay: 0, key: "s1020-sync" },
            ],
            lineEndKey: 's1020-open-box-input',
            isPaused: true
        },
        {
            sequenceKey: "S1030",
            message: "哇！盒子里都装了苹果。",
            delayCallbacks: [
                { delay: 0, key: "s1030-sync" },
            ]
        },
        {
            sequenceKey: "S1040",
            message: "让我们看看哪个盒子里的苹果比较多呢？",
            delayCallbacks: []
        },
        {
            sequenceKey: "S1050",
            message: "我们一起来数一数。",
            delayCallbacks: []
        },
        {
            sequenceKey: "S1060",
            message: "盒子A里有 1。2。3。4。5。。。有五颗。",
            delayCallbacks: [
                { delay: 1000, key: "s1060-show-left-1" },
                { delay: 2000, key: "s1060-show-left-2" },
                { delay: 3000, key: "s1060-show-left-3" },
                { delay: 4000, key: "s1060-show-left-4" },
                { delay: 5000, key: "s1060-show-left-5" },
            ]
        },
        {
            sequenceKey: "S1070",
            message: "那另一盒呢？我们再数一数。",
            delayCallbacks: [
                { delay: 0, key: "s1070-sync" },
            ]
        },
        {
            sequenceKey: "S1080",
            message: "盒子B里有 1。2。。。只有两颗。",
            delayCallbacks: [
                { delay: 1000, key: "s1080-show-right-1" },
                { delay: 2000, key: "s1080-show-right-2" },
            ]
        },
        {
            sequenceKey: "S1090",
            message: "那么，你知道哪个盒子的苹果比较多呢？",
            delayCallbacks: [
                { delay: 0, key: "s1090-sync" },
            ],
            lineEndKey: 's1090-show-buttons',
            isPaused: true,
        },
        {
            sequenceKey: "S1100",
            message: "哦？你确定吗？",
            delayCallbacks: []
        },
        {
            sequenceKey: "S1110",
            message: "数量 5 可是比 2 大，正确答案是盒子A。",
            delayCallbacks: [],
            nextSequenceKey: 'S1140'
        },
        {
            sequenceKey: "S1120",
            message: "太棒了，你答对了！",
            delayCallbacks: []
        },
        {
            sequenceKey: "S1130",
            message: "所以5个苹果的是“多”，2个苹果的是“少”。",
            delayCallbacks: []
        },
        {
            sequenceKey: "S1140",
            message: "同学们，你们明白了吗？如果不明白，可以再看一遍。",
            delayCallbacks: [
                { delay: 0, key: "s1140-sync" },
            ]
        },
    ]
}