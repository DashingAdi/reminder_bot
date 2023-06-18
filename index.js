const Telegram = require("node-telegram-bot-api");
const date = require('date-and-time');
const now = new Date();
const day = date.format(now, 'DD');
const month = date.format(now, 'MM');
const D_day = [18,8];
const temp = Number(D_day[1]) - month
const timeAwait = temp*30 + D_day[0] - day
require("dotenv").config();
const token = process.env.BOT_TOKEN;

const bot = new Telegram(token, {polling:true});

bot.onText(/\/remind/, (msg) => {
const chatId = msg.chat.id;
const text = msg.text;
bot.sendMessage(chatId, `@Heisenberg7908 You have to remind @PeopleMakeGoodTools to watch The Flash. \nTime until release ${timeAwait} days.`);

}) 

 

