//META{"name":"WikiaEmotes"}*//

function WikiaEmotes() {};

function replaceemoji(emoji,dest) {
		aaa = document.querySelectorAll("img[alt=\'" + emoji + "\']");
		for(xxx=1;xxx<=aaa.length;xxx++){aaa[xxx-1].src=dest;}
	};

WikiaEmotes.doReplace = function() {
	setTimeout(function() {
	replaceemoji(":angry:","https://images2.wikia.nocookie.net/__cb20110904035827/messaging/images/7/79/Emoticon_angry.png");
	replaceemoji(":blush:","https://images1.wikia.nocookie.net/__cb20110904035828/messaging/images/e/e2/Emoticon_blush.png");
	replaceemoji(":confused:","https://images4.wikia.nocookie.net/__cb20110904035828/messaging/images/c/cd/Emoticon_confused.png");
	replaceemoji(":sunglasses:","https://images4.wikia.nocookie.net/__cb20110904035828/messaging/images/a/a2/Emoticon_cool.png");
	replaceemoji(":cry:","https://images4.wikia.nocookie.net/__cb20110904035828/messaging/images/1/16/Emoticon_crying.png");
	replaceemoji(":fingers_crossed:","https://images2.wikia.nocookie.net/__cb20110904040556/messaging/images/7/7d/Emoticon_fingers_crossed.png");
	replaceemoji(":smiley:","https://images1.wikia.nocookie.net/__cb20110904035827/messaging/images/3/31/Emoticon_happy.png");
	replaceemoji(":smile:","https://images1.wikia.nocookie.net/__cb20110904035827/messaging/images/3/31/Emoticon_happy.png");
//	replaceemoji(":heart:","https://images1.wikia.nocookie.net/__cb20140721014548/crappyfartsgohome/images/9/94/Heart_apng.gif");
	replaceemoji(":laughing:","https://images1.wikia.nocookie.net/__cb20110904040558/messaging/images/a/ac/Emoticon_laughing.png");
	replaceemoji(":stuck_out_tongue:","https://images1.wikia.nocookie.net/__cb20110904041912/messaging/images/c/c2/Emoticon_silly.png");
	replaceemoji(":unamused:","https://images2.wikia.nocookie.net/__cb20110904041913/messaging/images/a/a2/Emoticon_unamused.png");
	replaceemoji(":neutral_face:","https://images2.wikia.nocookie.net/__cb20110904041913/messaging/images/a/a2/Emoticon_unamused.png");
	replaceemoji(":wink:","https://images1.wikia.nocookie.net/__cb20110904041913/messaging/images/8/87/Emoticon_wink.png");
	replaceemoji(":thumbsup:","https://images2.wikia.nocookie.net/__cb20110904041913/messaging/images/1/1c/Emoticon_yes.png");
	replaceemoji(":frowning:","https://images1.wikia.nocookie.net/__cb20110904041806/messaging/images/8/8a/Emoticon_sad.png");
	},250);
	
};

WikiaEmotes.prototype.load = function() {};

WikiaEmotes.prototype.unload = function() {};

WikiaEmotes.prototype.start = WikiaEmotes.doReplace;

WikiaEmotes.prototype.stop = function() {};

WikiaEmotes.prototype.onMessage = WikiaEmotes.doReplace;

WikiaEmotes.prototype.onSwitch = WikiaEmotes.doReplace;

WikiaEmotes.prototype.getSettingsPanel = function () {
    return "";
};

WikiaEmotes.prototype.getName = function() {
    return "Wikia Emotes";
};

WikiaEmotes.prototype.getDescription = function() {
    return "Something to suit the CFGH theme";
};

WikiaEmotes.prototype.getVersion = function() {
    return "0.0.0";
};

WikiaEmotes.prototype.getAuthor = function() {
    return "Zumi";
};