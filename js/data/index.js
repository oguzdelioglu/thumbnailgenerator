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

// Preset definitions with positions (all values MUST match dataset-en.js exactly!)
export const presets = {
    clickbait: {
        expr: 'Shocked open mouth', outfit: 'Black Hoodie with hood up', obj: 'Stack of Money',
        bg: 'neon-lit professional YouTube studio', txt: 'İNANILMAZ!', light: 'dramatic teal and orange cinematic color grading',
        angle: 'wide-angle fisheye lens distortion', fx: 'floating cinematic dust particles',
        font: 'impact', charPos: 'right', txtPos: 'left', txtColor: 'bright yellow'
    },
    minimal: {
        expr: 'Happy smiling', outfit: 'White cotton T-Shirt', obj: '', bg: 'professional photography studio',
        txt: '', light: 'bright high-key studio lighting clean white', angle: 'eye-level straight on shot', fx: 'clean sharp focus, no particles',
        font: 'montserrat', charPos: 'center', txtPos: 'top', txtColor: 'pure white'
    },
    gaming: {
        expr: 'Mind blown exploding head', outfit: 'Gaming headset', bg: 'RGB-lit gaming room',
        obj: 'Gamepad', txt: 'EPİK', light: 'vibrant neon cyberpunk pink and blue lighting',
        angle: 'tilted dutch angle dynamic', fx: 'digital glitch distortion effect',
        font: 'titan-one', charPos: 'center', txtPos: 'bottom', txtColor: 'neon blue glow'
    },
    tutorial: {
        expr: 'Thinking pondering', outfit: 'Luxury three-piece suit', bg: 'professional office',
        obj: 'Laptop', txt: 'NASIL?', light: 'bright high-key studio lighting clean white',
        angle: 'eye-level straight on shot', fx: 'clean sharp focus, no particles',
        font: 'roboto', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    vlog: {
        expr: 'Happy smiling', outfit: 'Black Hoodie with hood up', bg: 'cozy living room',
        obj: '', txt: '', light: 'warm golden hour magic hour lighting',
        angle: 'selfie angle hand holding phone', fx: 'bokeh depth of field background blur',
        font: 'poppins', charPos: 'right', txtPos: 'left', txtColor: 'pure white'
    },
    mystery: {
        expr: 'Focused analyzing', outfit: 'Black Hoodie with hood up', bg: 'dark alley street',
        obj: 'Mystery Box', txt: 'GERÇEK', light: 'rembrandt dramatic triangle light',
        angle: 'tilted dutch angle dynamic', fx: 'floating cinematic dust particles',
        font: 'anton', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    money: {
        expr: 'Greedy money eyes', outfit: 'Luxury three-piece suit', bg: 'bank vault gold stacks',
        obj: 'Stack of Money', txt: '100.000$', light: 'dramatic teal and orange cinematic color grading',
        angle: 'low-angle hero shot looking up powerful', fx: 'falling dollar bills raining down',
        font: 'alfa-slab', charPos: 'center', txtPos: 'top', txtColor: 'metallic gold'
    },
    horror: {
        expr: 'Terrified scared', outfit: 'Zombie torn bloody clothes', bg: 'haunted house interior',
        obj: '', txt: 'KAÇ!', light: 'eerie toxic green horror lighting',
        angle: 'tilted dutch angle dynamic', fx: 'thick volumetric fog and smoke',
        font: 'creepster', charPos: 'left', txtPos: 'right', txtColor: 'intense red'
    },
    storytime: {
        expr: 'Happy smiling', outfit: 'Black Hoodie with hood up', bg: 'bedroom interior',
        obj: 'Coffee cup', txt: 'HİKAYEM', light: 'warm golden hour magic hour lighting',
        angle: 'eye-level straight on shot', fx: 'bokeh depth of field background blur',
        font: 'comfortaa', charPos: 'right', txtPos: 'left', txtColor: 'pure white'
    },
    reaction: {
        expr: 'Shocked open mouth', outfit: 'Black graphic T-Shirt', bg: 'RGB-lit gaming room',
        obj: '', txt: 'BUNU İZLEYİN!', light: 'vibrant neon cyberpunk pink and blue lighting',
        angle: 'wide-angle fisheye lens distortion', fx: 'floating cinematic dust particles',
        font: 'bebas-neue', charPos: 'center', txtPos: 'bottom', txtColor: 'vibrant orange'
    },
    review: {
        expr: 'Thinking pondering', outfit: 'V-neck cashmere sweater', bg: 'professional photography studio',
        obj: 'Product box', txt: 'DÜRÜST İNCELEME', light: 'bright high-key studio lighting clean white',
        angle: 'eye-level straight on shot', fx: 'clean sharp focus, no particles',
        font: 'raleway', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    unboxing: {
        expr: 'Happy smiling', outfit: 'Black Hoodie with hood up', bg: 'professional photography studio',
        obj: 'Wrapped Gift Box', txt: 'KUTU AÇILIYORUZ!', light: 'bright high-key studio lighting clean white',
        angle: 'bird\'s eye view overhead', fx: 'bokeh depth of field background blur',
        font: 'bangers', charPos: 'center', txtPos: 'top', txtColor: 'hot pink'
    },
    cooking: {
        expr: 'Happy smiling', outfit: 'Chef whites with hat', bg: 'luxury modern kitchen',
        obj: 'Cooking pan', txt: 'TARİF', light: 'warm golden hour magic hour lighting',
        angle: 'bird\'s eye view overhead', fx: 'thick volumetric fog and smoke',
        font: 'luckiest-guy', charPos: 'right', txtPos: 'left', txtColor: 'vibrant orange'
    },
    travel: {
        expr: 'Happy smiling', outfit: 'Colorful Hawaiian shirt', bg: 'tropical beach with palm trees',
        obj: 'Passport', txt: 'SEYAHAT VLOG', light: 'warm golden hour magic hour lighting',
        angle: 'wide-angle fisheye lens distortion', fx: 'lens flare anamorphic streaks',
        font: 'righteous', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    fitness: {
        expr: 'Determined confident', outfit: 'Fitness gym wear', bg: 'gym with weights equipment',
        obj: 'Dumbbell', txt: 'ANTRENMAN', light: 'dramatic teal and orange cinematic color grading',
        angle: 'low-angle hero shot looking up powerful', fx: 'floating cinematic dust particles',
        font: 'black-ops', charPos: 'center', txtPos: 'top', txtColor: 'intense red'
    },
    tech: {
        expr: 'Focused analyzing', outfit: 'Oversized grey hoodie', bg: 'professional photography studio',
        obj: 'Smartphone', txt: 'TEKNOLOJİ İNCELEME', light: 'vibrant neon cyberpunk pink and blue lighting',
        angle: 'eye-level straight on shot', fx: 'digital glitch distortion effect',
        font: 'orbitron', charPos: 'right', txtPos: 'left', txtColor: 'electric blue'
    }
};

// Position presets only
export const positionPresets = {
    'focus-left': { charPos: 'left', txtPos: 'right', name: 'Sol Odak', nameEn: 'Focus Left' },
    'focus-center': { charPos: 'center', txtPos: 'top', name: 'Orta Odak', nameEn: 'Focus Center' },
    'focus-right': { charPos: 'right', txtPos: 'left', name: 'Sağ Odak', nameEn: 'Focus Right' },
    'classic-rule': { charPos: 'left', txtPos: 'right', name: 'Klasik Üçte', nameEn: 'Classic Rule' },
    'center-symmetry': { charPos: 'center', txtPos: 'bottom', name: 'Orta Simetrik', nameEn: 'Center Symmetry' },
    'dramatic-diagonal': { charPos: 'left', txtPos: 'bottom', name: 'Dramatik Diagonal', nameEn: 'Dramatic Diagonal' },
    'text-top-hero': { charPos: 'right', txtPos: 'top', name: 'Yazı Üst Kahraman', nameEn: 'Text Top Hero' },
    'side-by-side': { charPos: 'left', txtPos: 'right', name: 'Yan Yana', nameEn: 'Side by Side' }
};
