import * as yargs from "yargs";
import yans from "./yans";
import { exec } from "child_process";

const allYans = Object.keys(yans).reduce((previous, current) => {
    return previous.concat(yans[current]);
}, []);

const collectionMap = {
    "0": allYans,
    all: allYans,
    "1": yans.general,
    general: yans.general,
    "2": yans.angry,
    angry: yans.angry,
    "3": yans.animal,
    animal: yans.animal,
    "4": yans.aojiao,
    aojiao: yans.aojiao,
    "5": yans.apologize,
    apologize: yans.apologize,
    "6": yans.bye,
    bye: yans.bye,
    "7": yans.cry,
    cry: yans.cry,
    "8": yans.deyi,
    deyi: yans.deyi,
    "9": yans.eat,
    eat: yans.eat,
    "10": yans.fear,
    fear: yans.fear,
    "11": yans.amaze,
    amaze: yans.amaze,
    "12": yans.happy,
    happy: yans.happy,
    "13": yans.hard,
    hard: yans.hard,
    "14": yans.jian,
    jian: yans.jian,
    "15": yans.jiong,
    jiong: yans.jiong,
    "16": yans.like,
    like: yans.like,
    "17": yans.meme,
    meme: yans.meme,
    "18": yans.mou,
    mou: yans.mou,
    "19": yans.other,
    other: yans.other,
    "20": yans.shy,
    shy: yans.shy,
    "21": yans.sleep,
    sleep: yans.sleep,
    "22": yans.wunai,
    wunai: yans.wunai,
    "23": yans.yun,
    yun: yans.yun
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
    .describe(
        "c",
        "Yan test collection, available values: 0 or all, 1 or general, 2 or angry, 3 or animal, 4 or aojiao, 5 or apologize, 6 or bye, 7 or cry, 8 or deyi, 9 or eat, 10 or fear, 11 or amaze, 12 happy, 13 or hard, 14 or jian, 15 or jiong, 16 or like, 17 or meme, 18 or mou, 19 or other, 20 or shy, 21 or sleep, 22 or wunai, 23 or yun default is 1"
    )
    .describe("t", "Test mode, only print commit message generated")
    .epilog("Copyright " + new Date().getFullYear())
    .help().argv;

let collectionKey =
    argv.c !== null && argv.c !== undefined ? argv.c.toString() : "";
if (!Object.keys(collectionMap).includes(collectionKey)) {
    collectionKey = "general";
}

const collection: any[] = collectionMap[collectionKey];
let yan = "";
if (collection && collection.length > 0) {
    const count = collection.length;
    const index = Math.floor(Math.random() * count);
    yan = collection[index].entry;
}

const message = argv._.join(" ");

if (message.trim().length < 1) {
    console.log("Warning: You must add some message for this commit.");
} else {
    const commitMsg = `${yan} ${message}`;

    if (argv.t) {
        console.log(`Generated Message: ${commitMsg}`);
    } else {
        console.log("git add -A");
        console.log(`git commit -m "${commitMsg}"`);
        exec(`git add -A && git commit -m "${commitMsg}"`, err => {
            if (err) {
                console.log(err.message);
                return;
            }
        });
    }
}
