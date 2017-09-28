"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const emojis_1 = require("./emojis");
const child_process_1 = require("child_process");
const allEmojis = Object.keys(emojis_1.default).reduce((previous, current) => {
    return previous.concat(emojis_1.default[current]);
}, []);
const collectionMap = {
    "0": allEmojis,
    all: allEmojis,
    "1": emojis_1.default.people,
    people: emojis_1.default.people,
    "2": emojis_1.default.activity,
    activity: emojis_1.default.activity,
    "3": emojis_1.default.flags,
    flags: emojis_1.default.flags,
    "4": emojis_1.default.foods,
    foods: emojis_1.default.foods,
    "5": emojis_1.default.nature,
    nature: emojis_1.default.nature,
    "6": emojis_1.default.objects,
    objects: emojis_1.default.objects,
    "7": emojis_1.default.places,
    places: emojis_1.default.places,
    "8": emojis_1.default.symbols,
    symbols: emojis_1.default.symbols
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
    .describe("c", "Emoji collection, available values: 0 or all, 1 or people, 2 or activity, 3 or flags, 4 or foods, 5 or nature, 6 or objects, 7 or places, 8 or symbols, default is 0")
    .describe("t", "Test mode, only print commit message generated")
    .epilog("Copyright " + new Date().getFullYear())
    .help().argv;
const collection = collectionMap[argv.c];
let emoji = "";
if (collection && collection.length > 0) {
    const count = collection.length;
    const index = Math.floor(Math.random() * count);
    emoji = collection[index].emoji;
}
const message = argv._.join(" ");
if (message.trim().length < 1) {
    console.log("Warning: You must add some message for this commit.");
}
else {
    const commitMsg = `${emoji} ${message}`;
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
