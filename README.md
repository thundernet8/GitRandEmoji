## GitRandEmoji
Add random emoji as git commit message prefix.

See more detail about emoji collections -> [Emojis](https://github.com/thundernet8/Emojis)

## Install

```
yarn global add gitrandemoji
```

or
```
npm install gitrandemoji -g
```

## Usage

```
gce your-commit-message
```

or select a emoji from a specified emoji collection
```
gce your-commit-message -c people
```

these are equivalent to commands below:
```
git add -A
git commit -m "[Emoji] your-commit-message"
```