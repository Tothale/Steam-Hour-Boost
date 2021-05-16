const SteamUser = require("steam-user");
const config = require("./config.json");
var client = new SteamUser();
var dateTime = require("node-datetime");
var dt = dateTime.create();
var formatted = dt.format("d-m-Y H:M:S");
const logOnOptions =
{
	accountName: config.username,
	password: config.password
};

console.clear();
console.log("Checking state...");

if (config.state > 7)
{
console.log("ERROR: Please write a valid state.",config.state,"is invalid");
console.log("0 = Offline");
console.log("1 = Online");
console.log("2 = Busy");
console.log("3 = Away");
console.log("4 = Snooze");
console.log("5 = LookingToTrade");
console.log("6 = LookingToPlay");
console.log("7 = Invisible");
process.exit()
}

if (config.state < 0)
{
console.log("ERROR: Please write a valid state.",config.state,"is invalid");
console.log("0 = Offline");
console.log("1 = Online");
console.log("2 = Busy");
console.log("3 = Away");
console.log("4 = Snooze");
console.log("5 = LookingToTrade");
console.log("6 = LookingToPlay");
console.log("7 = Invisible");
process.exit()
}

if (Number.isInteger(0,1,2,3,4,5,6,7))
{
}
else
{
console.log("ERROR: Please write a valid state.",config.state,"is invalid");
console.log("0 = Offline");
console.log("1 = Online");
console.log("2 = Busy");
console.log("3 = Away");
console.log("4 = Snooze");
console.log("5 = LookingToTrade");
console.log("6 = LookingToPlay");
console.log("7 = Invisible");
process.exit()
}

if (config.state === "0")
{var selectedState = ("Entered state: 0 = You selected Offline state");}
if (config.state === "1")
{var selectedState = ("Entered state: 1 = You selected Online state");}
if (config.state === "2")
{var selectedState = ("Entered state: 2 = You selected Busy state");}
if (config.state === "3")
{var selectedState = ("Entered state: 3 = You selected Away state");}
if (config.state === "4")
{var selectedState = ("Entered state: 4 = You selected Snooze state");}
if (config.state === "5")
{var selectedState = ("Entered state: 5 = You selected LookingToTrade state");}
if (config.state === "6")
{var selectedState = ("Entered state: 6 = You selected LookingToPlay state");}
if (config.state === "7")
{var selectedState = ("Entered state: 7 = You selected Invisible state");}

console.clear();

if(config.customgameactive === true){
client.logOn(logOnOptions);
client.on("loggedOn", () =>
{
	client.setPersona(config.state);
	console.log(selectedState);
	
	client.gamesPlayed(config.customgame,config.gamelist);
	console.log("Entered Custom Game:",config.customgame);
	console.log("Successfully logged on into:",config.username);
	console.log("Started at:",formatted);
	console.log("If you want to stop the script you can press: ctrl + c");
	console.log("Entered app ids:",config.gamelist);
});
}else{
	client.logOn(logOnOptions);
    	client.on("loggedOn", () =>
{
	client.setPersona(config.state);
	console.log(selectedState);
	
	client.gamesPlayed(config.gamelist);
	console.log("Custom Game Disabled");
	console.log("Successfully logged on into:",config.username);
	console.log("Started at:",formatted);
	console.log("If you want to stop the script you can press: ctrl + c");
	console.log("Entered app ids:",config.gamelist);
});}

//Example for steam app id: 730 = Counter-Strike: Global Offensive, 440 = Team Fortress 2
//You can idle maximum 32 games
//Made by Tothale
//https://github.com/Tothale