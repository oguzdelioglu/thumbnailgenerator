/**
 * Data Module - Central export for all datasets
 */

import { turkishData } from './datasets-tr.js';
import { englishData } from './datasets-en.js';

// Data pool object for backward compatibility
export const dataPool = {
    tr: turkishData,
    en: englishData
};

// Preset definitions
export const presets = {
    clickbait: {
        expr: 'Shocked', outfit: 'Black Hoodie', obj: 'Stack of Money',
        bg: 'Neon Studio', txt: 'OMG!', light: 'dramatic teal and orange cinematic lighting',
        angle: 'wide angle gopro style', fx: 'floating dust particles'
    },
    minimal: {
        expr: 'Happy', outfit: 'White T-Shirt', obj: '', bg: 'clean studio',
        txt: '', light: 'bright high-key studio lighting', angle: 'eye level portrait', fx: 'clean no effects'
    },
    gaming: {
        expr: 'Mind Blown', outfit: 'Gaming headset', bg: 'Gaming Room',
        obj: 'Gamepad', txt: 'EPIC', light: 'vibrant neon cyberpunk pink and blue lighting',
        angle: 'dutch angle tilted', fx: 'digital glitch distortion effect'
    },
    tutorial: {
        expr: 'Thinking', outfit: 'Casual smart', bg: 'Office',
        obj: 'Laptop', txt: 'HOW TO', light: 'bright high-key studio lighting',
        angle: 'eye level portrait', fx: 'clean no effects'
    },
    vlog: {
        expr: 'Happy', outfit: 'Casual', bg: 'Living Room',
        obj: '', txt: '', light: 'warm golden hour sunset lighting',
        angle: 'selfie angle', fx: 'bokeh depth of field'
    },
    mystery: {
        expr: 'Suspicious', outfit: 'Dark hoodie', bg: 'Dark alley',
        obj: 'Mystery Box', txt: 'THE TRUTH', light: 'moody dark rembrandt lighting',
        angle: 'dutch angle tilted', fx: 'floating dust particles'
    },
    money: {
        expr: 'Greedy', outfit: 'Luxury Suit', bg: 'Bank Vault',
        obj: 'Stack of Money', txt: '$100,000', light: 'dramatic teal and orange cinematic lighting',
        angle: 'low angle hero shot', fx: 'floating money bills'
    },
    horror: {
        expr: 'Terrified', outfit: 'Torn clothes', bg: 'Abandoned house',
        obj: '', txt: 'RUN!', light: 'eerie green toxic horror lighting',
        angle: 'dutch angle tilted', fx: 'fog and mist atmosphere'
    },
    storytime: {
        expr: 'Happy', outfit: 'Cozy sweater', bg: 'Cozy bedroom',
        obj: 'Coffee mug', txt: 'MY STORY', light: 'warm golden hour sunset lighting',
        angle: 'eye level portrait', fx: 'bokeh depth of field'
    },
    reaction: {
        expr: 'Shocked', outfit: 'Casual T-Shirt', bg: 'Gaming Room',
        obj: '', txt: 'WATCH THIS!', light: 'vibrant neon cyberpunk pink and blue lighting',
        angle: 'wide angle gopro style', fx: 'floating dust particles'
    },
    review: {
        expr: 'Thinking', outfit: 'Casual smart', bg: 'clean studio',
        obj: 'Product Box', txt: 'HONEST REVIEW', light: 'bright high-key studio lighting',
        angle: 'eye level portrait', fx: 'clean no effects'
    },
    unboxing: {
        expr: 'Happy', outfit: 'Casual', bg: 'clean studio',
        obj: 'Gift Box', txt: 'UNBOXING!', light: 'bright high-key studio lighting',
        angle: 'overhead top-down', fx: 'bokeh depth of field'
    },
    cooking: {
        expr: 'Happy', outfit: 'Chef Apron', bg: 'Modern Kitchen',
        obj: 'Cooking Pan', txt: 'RECIPE', light: 'warm golden hour sunset lighting',
        angle: 'overhead top-down', fx: 'steam and smoke atmosphere'
    },
    travel: {
        expr: 'Happy', outfit: 'Casual summer', bg: 'Beach Paradise',
        obj: 'Passport', txt: 'TRAVEL VLOG', light: 'warm golden hour sunset lighting',
        angle: 'wide angle gopro style', fx: 'lens flare sunlight'
    },
    fitness: {
        expr: 'Determined', outfit: 'Gym clothes', bg: 'Gym Environment',
        obj: 'Dumbbell', txt: 'WORKOUT', light: 'dramatic teal and orange cinematic lighting',
        angle: 'low angle hero shot', fx: 'floating dust particles'
    },
    tech: {
        expr: 'Curious', outfit: 'Modern casual', bg: 'clean studio',
        obj: 'Smartphone', txt: 'TECH REVIEW', light: 'vibrant neon cyberpunk pink and blue lighting',
        angle: 'eye level portrait', fx: 'digital glitch distortion effect'
    }
};
