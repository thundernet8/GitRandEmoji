import * as yargs from "yargs";
import emojis from "./emojis";
import { exec } from "child_process";

const allEmojis = Object.keys(emojis).reduce((previous, current) => {
    return previous.concat(emojis[current]);
}, []);

const collectionMap = {
    "0": allEmojis,
    all: allEmojis,
    "1": emojis.people,
    people: emojis.people,
    "2": emojis.activity,
    activity: emojis.activity,
    "3": emojis.flags,
    flags: emojis.flags,
    "4": emojis.foods,
    foods: emojis.foods,
    "5": emojis.nature,
    nature: emojis.nature,
    "6": emojis.objects,
    objects: emojis.objects,
    "7": emojis.places,
    places: emojis.places,
    "8": emojis.symbols,
    symbols: emojis.symbols
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
        "Emoji collection, available values: 0 or all, 1 or people, 2 or activity, 3 or flags, 4 or foods, 5 or nature, 6 or objects, 7 or places, 8 or symbols, default is 0"
    )
    .describe("t", "Test mode, only print commit message generated")
    .epilog("Copyright " + new Date().getFullYear())
    .help().argv;

let collectionKey = argv.c;
if (Object.keys(collectionMap).indexOf(collectionKey) < 0) {
    collectionKey = "all";
}

const collection: any[] = collectionMap[collectionKey];
let emoji = "";
if (collection && collection.length > 0) {
    const count = collection.length;
    const index = Math.floor(Math.random() * count);
    emoji = collection[index].emoji;
}

const message = argv._.join(" ");

if (message.trim().length < 1) {
    console.log("Warning: You must add some message for this commit.");
} else {
    const commitMsg = `${emoji} ${message}`;

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
