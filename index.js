const TelegramBot = require('node-telegram-bot-api');

// API Token Telegram
const token = '532721493:AAGCXkOh3XkjIPsRmbT1l0xri0tLvtn7yzI';

// Creamos un bot que usa 'polling'para obtener actualizaciones
const bot = new TelegramBot(token, {polling: true});
const request = require('request');

bot.on('message', (msg) => {
if (msg.text.toString().toLowerCase().indexOf("sao") === 0) {
	console.log(msg.chat);
	bot.sendMessage(msg.chat.id, "Sao mi patria, JoJo mi castigo.");
}
});