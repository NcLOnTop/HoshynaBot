const { Client, GatewayIntentBits, Partials, REST, Routes, SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');
require('dotenv').config();
const express = require('express');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});

const PERM1_ID = '1444216040367329363';
const PERM2_ID = '1444216632095408228';
const PERM3_ID = '1444216894256058388';
const LOG_CHANNEL_ID = '1442224922641301716';
const REPORT_CHANNEL_ID = '1444315838734799026';
const BLACKLIST_ROLE_ID = '1429200766765240481';

const blacklist = new Set();
const whitelist = new Set();

// 14 commandes slash
const commands = [
    // /warn, /mute, /demute, /clear, /kick, /ban, /ping
    // /addrole, /removerole, /say, /report, /bl, /wl
    // /vmute, /vdeafen, /vunmute, /vundeafen
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

function getUserPermLevel(member) {
    if (!member) return 0;
    if (member.roles.cache.has(PERM3_ID)) return 3;
    if (member.roles.cache.has(PERM2_ID)) return 2;
    if (member.roles.cache.has(PERM1_ID)) return 1;
    return 0;
}

function parseDuration(input) {
    const match = input.match(/^(\d+)(s|m|h)$/i);
    if (!match) return null;
}

async function logAction(guild, message) {
    const logChannel = guild.channels.cache.get(LOG_CHANNEL_ID);
    if (logChannel) logChannel.send({ content: message });
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const member = interaction.member;
    const permLevel = getUserPermLevel(member);
    const { commandName, options } = interaction;
    // commandes ici
});

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
    client.user.setPresence({
        activities: [{ name: '.gg/hoshyna', type: 0 }],
        status: 'online'
    });
});

client.login(process.env.TOKEN);

const app = express();
app.get('/', (req, res) => res.send('Bot en ligne !'));
app.listen(3000, () => console.log('Serveur actif sur le port 3000'));
