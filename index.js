const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
// var shared_secret = process.env.shared;

var games = [730];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});

var username2 = process.env.username2;
var password2 = process.env.password2;
// var shared_secret = process.env.shared;

var games2 = [252490, 440, 381210];  // Enter here AppIDs of the needed games
var status2 = 1;  // 1 - online, 7 - invisible


user2 = new steamUser();
user2.logOn({"accountName": username2, "password": password2});
user2.on('loggedOn', () => {
	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
	user2.setPersona(status2);               
	user2.gamesPlayed(games2);
});


var username3 = process.env.username3;
var password3 = process.env.password3;
// var shared_secret = process.env.shared;

var games3 = [730, 540];  // Enter here AppIDs of the needed games
var status3 = 1;  // 1 - online, 7 - invisible


user3 = new steamUser();
user3.logOn({"accountName": username3, "password": password3});
user3.on('loggedOn', () => {
	if (user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
	user3.setPersona(status3);               
	user3.gamesPlayed(games3);
});

var username5 = process.env.username5;
var password5 = process.env.password5;
// var shared_secret = process.env.shared;

var games5 = [218620];  // Enter here AppIDs of the needed games
var status5 = 1;  // 1 - online, 7 - invisible


user4 = new steamUser();
user4.logOn({"accountName": username4, "password": password4});
user4.on('loggedOn', () => {
	if (user4.steamID != null) console.log(user4.steamID + ' - Successfully logged on');
	user4.setPersona(status4);               
	user4.gamesPlayed(games4);
});

var username5 = process.env.username5;
var password5 = process.env.password5;
// var shared_secret = process.env.shared;

var games5 = [730];  // Enter here AppIDs of the needed games
var status5 = 1;  // 1 - online, 7 - invisible


user5 = new steamUser();
user5.logOn({"accountName": username5, "password": password5});
user5.on('loggedOn', () => {
	if (user5.steamID != null) console.log(user5.steamID + ' - Successfully logged on');
	user5.setPersona(status5);               
	user5.gamesPlayed(games5);
});

var username6 = process.env.username6;
var password6 = process.env.password6;
// var shared_secret = process.env.shared;

var games6 = [252490, 284160];  // Enter here AppIDs of the needed games
var status6 = 1;  // 1 - online, 7 - invisible


user6 = new steamUser();
user6.logOn({"accountName": username6, "password": password6});
user6.on('loggedOn', () => {
	if (user6.steamID != null) console.log(user6.steamID + ' - Successfully logged on');
	user6.setPersona(status6);               
	user6.gamesPlayed(games6);
});

var username7 = process.env.username7;
var password7 = process.env.password7;
// var shared_secret = process.env.shared;

var games7 = [730];  // Enter here AppIDs of the needed games
var status7 = 1;  // 1 - online, 7 - invisible


user7 = new steamUser();
user7.logOn({"accountName": username7, "password": password7});
user7.on('loggedOn', () => {
	if (user7.steamID != null) console.log(user7.steamID + ' - Successfully logged on');
	user7.setPersona(status7);               
	user7.gamesPlayed(games7);
});

var username8 = process.env.username8;
var password8 = process.env.password8;
// var shared_secret = process.env.shared;

var games8 = [730];  // Enter here AppIDs of the needed games
var status8 = 1;  // 1 - online, 7 - invisible


user8 = new steamUser();
user8.logOn({"accountName": username8, "password": password8});
user8.on('loggedOn', () => {
	if (user8.steamID != null) console.log(user8.steamID + ' - Successfully logged on');
	user8.setPersona(status8);               
	user8.gamesPlayed(games8);
});

var username9 = process.env.username9;
var password9 = process.env.password9;
// var shared_secret = process.env.shared;

var games9 = [730];  // Enter here AppIDs of the needed games
var status9 = 1;  // 1 - online, 7 - invisible


user9 = new steamUser();
user9.logOn({"accountName": username9, "password": password9});
user9.on('loggedOn', () => {
	if (user9.steamID != null) console.log(user9.steamID + ' - Successfully logged on');
	user9.setPersona(status12);               
	user9.gamesPlayed(games12);
});

var username10 = process.env.username10;
var password10 = process.env.password10;
// var shared_secret = process.env.shared;

var games10 = [240];  // Enter here AppIDs of the needed games
var status10 = 1;  // 1 - online, 7 - invisible


user10 = new steamUser();
user10.logOn({"accountName": username10, "password": password10});
user10.on('loggedOn', () => {
	if (user10.steamID != null) console.log(user10.steamID + ' - Successfully logged on');
	user10.setPersona(status10);               
	user10.gamesPlayed(games10);
});


var games11 = [730, 570];  // Enter here AppIDs of the needed games
var status11 = 1;  // 1 - online, 7 - invisible


user11 = new steamUser();
user11.logOn({"accountName": username11, "password": password11});
user11.on('loggedOn', () => {
	if (user11.steamID != null) console.log(user11.steamID + ' - Successfully logged on');
	user11.setPersona(status11);               
	user11.gamesPlayed(games11);
});

var games12 = [730];  // Enter here AppIDs of the needed games
var status12 = 1;  // 1 - online, 7 - invisible


user12 = new steamUser();
user12.logOn({"accountName": username12, "password": password12});
user12.on('loggedOn', () => {
	if (user12.steamID != null) console.log(user12.steamID + ' - Successfully logged on');
	user12.setPersona(status12);               
	user12.gamesPlayed(games12);
});

var games13 = [252490];  // Enter here AppIDs of the needed games
var status13 = 1;  // 1 - online, 7 - invisible


user13 = new steamUser();
user13.logOn({"accountName": username13, "password": password13});
user13.on('loggedOn', () => {
	if (user13.steamID != null) console.log(user13.steamID + ' - Successfully logged on');
	user13.setPersona(status13);               
	user13.gamesPlayed(games13);
});

var games14 = [700330, 252490];  // Enter here AppIDs of the needed games
var status14 = 1;  // 1 - online, 7 - invisible


user14 = new steamUser();
user14.logOn({"accountName": username14, "password": password14});
user14.on('loggedOn', () => {
	if (user14.steamID != null) console.log(user14.steamID + ' - Successfully logged on');
	user14.setPersona(status14);               
	user14.gamesPlayed(games14);
});
