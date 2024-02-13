const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')


var username = process.env.username;
var password = process.env.password;
// var shared_secret = process.env.shared;

var games = [218620];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible

user = new steamUser();
user.logOn({"accountName": username, "password": password});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


var username1 = process.env.username1;
var password1 = process.env.password1;
// var shared_secret = process.env.shared;

var games1 = [730];  // Enter here AppIDs of the needed games
var status1 = 1;  // 1 - online, 7 - invisible

user1 = new steamUser();
user1.logOn({"accountName": username1, "password": password1});
user1.on('loggedOn', () => {
	if (user1.steamID != null) console.log(user1.steamID + ' - Successfully logged on');
	user1.setPersona(status1);               
	user1.gamesPlayed(games1);
});


var username2 = process.env.username2;
var password2 = process.env.password2;
// var shared_secret = process.env.shared;

var games2 = [240];  // Enter here AppIDs of the needed games
var status2 = 1;  // 1 - online, 7 - invisible

user2 = new steamUser();
user2.logOn({"accountName": username2, "password": password2});
user2.on('loggedOn', () => {
	if (user10.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
	user2.setPersona(status2);               
	user2.gamesPlayed(games2);
});


var games3 = [730, 570];  // Enter here AppIDs of the needed games
var status3 = 1;  // 1 - online, 7 - invisible

user3 = new steamUser();
user3.logOn({"accountName": username3, "password": password3});
user3.on('loggedOn', () => {
	if (user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
	user3.setPersona(status3);               
	user3.gamesPlayed(games3);
});


var games4 = [730];  // Enter here AppIDs of the needed games
var status4 = 1;  // 1 - online, 7 - invisible

user4 = new steamUser();
user4.logOn({"accountName": username4, "password": password4});
user4.on('loggedOn', () => {
	if (user4.steamID != null) console.log(user4.steamID + ' - Successfully logged on');
	user4.setPersona(status4);               
	user4.gamesPlayed(games4);
});


var games5 = [252490];  // Enter here AppIDs of the needed games
var status5 = 1;  // 1 - online, 7 - invisible

user5 = new steamUser();
user5.logOn({"accountName": username5, "password": password5});
user5.on('loggedOn', () => {
	if (user13.steamID != null) console.log(user5.steamID + ' - Successfully logged on');
	user5.setPersona(status5);               
	user5.gamesPlayed(games5);
});


var games6 = [700330, 252490];  // Enter here AppIDs of the needed games
var status6 = 1;  // 1 - online, 7 - invisible

user6 = new steamUser();
user6.logOn({"accountName": username6, "password": password6});
user6.on('loggedOn', () => {
	if (user6.steamID != null) console.log(user6.steamID + ' - Successfully logged on');
	user6.setPersona(status6);               
	user6.gamesPlayed(games6);
});


var games7 = [700330, 252490];  // Enter here AppIDs of the needed games
var status7 = 1;  // 1 - online, 7 - invisible

user7 = new steamUser();
user7.logOn({"accountName": username7, "password": password7});
user7.on('loggedOn', () => {
	if (user7.steamID != null) console.log(user7.steamID + ' - Successfully logged on');
	user7.setPersona(status7);               
	user7.gamesPlayed(games7);
});


var games8 = [730];  // Enter here AppIDs of the needed games
var status8 = 1;  // 1 - online, 7 - invisible

user8 = new steamUser();
user8.logOn({"accountName": username8, "password": password8});
user8.on('loggedOn', () => {
	if (user8.steamID != null) console.log(user8.steamID + ' - Successfully logged on');
	user8.setPersona(status8);               
	user8.gamesPlayed(games8);
});


var games9 = [730];  // Enter here AppIDs of the needed games
var status9 = 1;  // 1 - online, 7 - invisible

user9 = new steamUser();
user9.logOn({"accountName": username9, "password": password9});
user9.on('loggedOn', () => {
	if (user9.steamID != null) console.log(user9.steamID + ' - Successfully logged on');
	user9.setPersona(status9);               
	user9.gamesPlayed(games9);
});


var games10 = [730];  // Enter here AppIDs of the needed games
var status10 = 1;  // 1 - online, 7 - invisible

user10 = new steamUser();
user10.logOn({"accountName": username10, "password": password10});
user10.on('loggedOn', () => {
	if (user10.steamID != null) console.log(user10.steamID + ' - Successfully logged on');
	user10.setPersona(status10);               
	user10.gamesPlayed(games10);
});



var games11 = [730];  // Enter here AppIDs of the needed games
var status11 = 1;  // 1 - online, 7 - invisible

user11 = new steamUser();
user11.logOn({"accountName": username11, "password": password11});
user11.on('loggedOn', () => {
	if (user11.steamID != null) console.log(user11.steamID + ' - Successfully logged on');
	user11.setPersona(status11);               
	user11.gamesPlayed(games11);
});

