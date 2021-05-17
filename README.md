# Steam-Hour-Boost
This is a simple script to boost your steam game hours like **Counter-Strike: Global Offensive**.

Modify the `Config.json` file as you want.

## How to install

Clone this repository.

Open command prompt (You can use Windows Powershell with `shift + right click` and `Open PowerShell window here`) and write:

`npm install` or `npm i`

Modify the **Config.json** as you want.

## How to run

type `node bot.js` in command prompt.

## Config.json

`"username": "Replace here with your own steam username",`

`"password": "Replace here with your own steam password",`

`"state": "Replace here with a number between 0 and 7",`

`"customgameactive": "Replace here with true or false"`

`"customgame": "Replace here with what you want to show what game was playing on your profile"`

`"gamelist": [Replace here with the app ids of the games you want]`

## What is state
State shows your online/offline status. My recommend for online is "1" and offline for "7".

List of states:

```
Offline: 0
Online: 1
Busy: 2
Away: 3
Snooze: 4
LookingToTrade: 5
LookingToPlay: 6
Invisible: 7
```

## What is customgameactive and customgame settings
Custom game shows which game you are playing but as you wrote it.

Example: If you write `"customgame": "Minecraft",` this shows that you are playing Minecraft in your profile but it appears as a non-steam game and doesn't affect other game's hours. And it only works if you type `customgameactive: "true"`

## What is gamelist
Gamelist allows you to choose which game you will boost your hours.

Example: If you write `"gamelist": [730,440]` this will boost your **Counter-Strike: Global Offensive (730)** and **Team Fortress 2 (440)** hours.

**Warning! You can only boost your hours 32 games at the same time.**
