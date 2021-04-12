'use strict'

import * as discord from 'discord.js';
import generateName from './name_generator.js';

function nickMember(member: discord.GuildMember): void {
    if (member.user.bot)
        return;

    member.setNickname(generateName(member.user.username)).catch(reason => {
        console.error('Failed to nick the user \'%s\', because of the reason \'%s\'.', member.displayName, reason.toString());
    });
}

export default nickMember;