'use strict'

require('dotenv').config()
import * as discord from 'discord.js';
import nickMember from './modules/renicker.js'

const client = new discord.Client({
	"fetchAllMembers": true
});

client.on('ready', () => {
	client.user.setActivity('to #BLM', {
		"type": "LISTENING"
	})
})

client.on('guildCreate', guild => {
	for (const member of guild.members) {
		setTimeout(() => nickMember(member[1]), 1000)
	}
})

client.on('guildMemberAdd', member => nickMember(member) )

client.login(process.env.BOT_TOKEN);