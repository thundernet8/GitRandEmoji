## GitRandEmoji
Add random emoji as git commit message prefix.

### Update
Add 颜文字 support also.

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

emoji

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

颜文字

```
gcy your-commit-message
```

or select a text from a specified collection
```
gcy your-commit-message -c happy
```

these are equivalent to commands below:
```
git add -A
git commit -m "[颜文字] your-commit-message"
```