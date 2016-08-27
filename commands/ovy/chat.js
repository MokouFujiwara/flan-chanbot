exports.commands = [
	"talk"
]

var cleverbot = require("cleverbot-node");
talkbot = new cleverbot;
cleverbot.prepare(function(){});

exports.talk = {
	usage : "<message>",
	desc: "Talk directly to the bot",
    longDesc: "talk to the bot",
	main : function(bot,msg, suffix) {
			var conv = msg.content.split(" ");
			talkbot.write(conv, function (response) {
			bot.sendMessage(msg.channel, response.message)
			})
	}
}
