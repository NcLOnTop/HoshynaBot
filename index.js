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

const commands = [
    new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Avertit un membre')