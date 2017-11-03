"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const yans_1 = require("./yans");
const child_process_1 = require("child_process");
const allYans = Object.keys(yans_1.default).reduce((previous, current) => {
    return previous.concat(yans_1.default[current]);
}, []);
const collectionMap = {
    "0": allYans,
    all: allYans,
    "1": yans_1.default.general,
    general: yans_1.default.general,
    "2": yans_1.default.angry,
    angry: yans_1.default.angry,
    "3": yans_1.default.animal,
    animal: yans_1.default.animal,
    "4": yans_1.default.aojiao,
    aojiao: yans_1.default.aojiao,
    "5": yans_1.default.apologize,
    apologize: yans_1.default.apologize,
    "6": yans_1.default.bye,
    bye: yans_1.default.bye,
    "7": yans_1.default.cry,
    cry: yans_1.default.cry,
    "8": yans_1.default.deyi,
    deyi: yans_1.default.deyi,
    "9": yans_1.default.eat,
    eat: yans_1.default.eat,
    "10": yans_1.default.fear,
    fear: yans_1.default.fear,
    "11": yans_1.default.amaze,
    amaze: yans_1.default.amaze,
    "12": yans_1.default.happy,
    happy: yans_1.default.happy,
    "13": yans_1.default.hard,
    hard: yans_1.default.hard,
    "14": yans_1.default.jian,
    jian: yans_1.default.jian,
    "15": yans_1.default.jiong,
    jiong: yans_1.default.jiong,
    "16": yans_1.default.like,
    like: yans_1.default.like,
    "17": yans_1.default.meme,
    meme: yans_1.default.meme,
    "18": yans_1.default.mou,
    mou: yans_1.default.mou,
    "19": yans_1.default.other,
    other: yans_1.default.other,
    "20": yans_1.default.shy,
    shy: yans_1.default.shy,
    "21": yans_1.default.sleep,
    sleep: yans_1.default.sleep,
    "22": yans_1.default.wunai,
    wunai: yans_1.default.wunai,
    "23": yans_1.default.yun,
    yun: yans_1.default.yun
};
const version = require("../package.json").version;
const argv = yargs
    .version(version)
    .alias("v", "version")
    .alias("c", "collection")
    .alias("t", "test")
    .usage("Usage: $0 <command> [options]")
    .example("$0 your-commit-message -c people", "")
    .default("c", 0)
    .default("t", false)
    .describe("c", "Yan test collection, available values: 0 or all, 1 or general, 2 or angry, 3 or animal, 4 or aojiao, 5 or apologize, 6 or bye, 7 or cry, 8 or deyi, 9 or eat, 10 or fear, 11 or amaze, 12 happy, 13 or hard, 14 or jian, 15 or jiong, 16 or like, 17 or meme, 18 or mou, 19 or other, 20 or shy, 21 or sleep, 22 or wunai, 23 or yun default is 1")
    .describe("t", "Test mode, only print commit message generated")
    .epilog("Copyright " + new Date().getFullYear())
    .help().argv;
let collectionKey = argv.c !== null && argv.c !== undefined ? argv.c.toString() : "";
if (!Object.keys(collectionMap).includes(collectionKey)) {
    collectionKey = "general";
}
const collection = collectionMap[collectionKey];
let yan = "";
if (collection && collection.length > 0) {
    const count = collection.length;
    const index = Math.floor(Math.random() * count);
    yan = collection[index].entry;
}
const message = argv._.join(" ");
if (message.trim().length < 1) {
    console.log("Warning: You must add some message for this commit.");
}
else {
    const commitMsg = `${yan} ${message}`;
    if (argv.t) {
        console.log(`Generated Message: ${commitMsg}`);
    }
    else {
        console.log("git add -A");
        console.log(`git commit -m "${commitMsg}"`);
        child_process_1.exec(`git add -A && git commit -m "${commitMsg}"`, err => {
            if (err) {
                console.log(err.message);
                return;
            }
        });
    }
}
