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

// Preset definitions with positions (all values in English for prompt generation)
export const presets = {
    clickbait: {
        expr: 'shocked expression', outfit: 'black hoodie', obj: 'cash stack',
        bg: 'neon studio', txt: 'İNANILMAZ!', light: 'cinematic teal and orange lighting',
        angle: 'wide angle GoPro shot', fx: 'dust particles effect',
        font: 'impact', charPos: 'right', txtPos: 'left', txtColor: 'bright yellow'
    },
    minimal: {
        expr: 'happy expression', outfit: 'white t-shirt', obj: '', bg: 'clean studio',
        txt: '', light: 'bright high-key studio lighting', angle: 'eye-level shot', fx: 'clean no effects',
        font: 'montserrat', charPos: 'center', txtPos: 'top', txtColor: 'pure white'
    },
    gaming: {
        expr: 'mind blown expression', outfit: 'gaming headset', bg: 'rgb gaming room',
        obj: 'game controller', txt: 'EPİK', light: 'neon cyberpunk pink-blue lighting',
        angle: 'dutch angle', fx: 'digital glitch effect',
        font: 'titan-one', charPos: 'center', txtPos: 'bottom', txtColor: 'neon blue glow'
    },
    tutorial: {
        expr: 'thoughtful expression', outfit: 'classic suit', bg: 'office',
        obj: 'laptop', txt: 'NASIL?', light: 'bright studio lighting',
        angle: 'eye-level portrait shot', fx: 'clean no effects',
        font: 'roboto', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    vlog: {
        expr: 'happy expression', outfit: 'casual clothes', bg: 'living room',
        obj: '', txt: '', light: 'warm golden hour lighting',
        angle: 'selfie angle shot', fx: 'bokeh background blur effect',
        font: 'poppins', charPos: 'right', txtPos: 'left', txtColor: 'pure white'
    },
    mystery: {
        expr: 'skeptical expression', outfit: 'dark hoodie', bg: 'dark street',
        obj: 'mystery box', txt: 'GERÇEK', light: 'dark rembrandt lighting',
        angle: 'dutch angle', fx: 'dust and atmosphere effect',
        font: 'anton', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    money: {
        expr: 'money hungry expression', outfit: 'luxury suit', bg: 'bank vault',
        obj: 'cash stack', txt: '100.000$', light: 'cinematic teal and orange lighting',
        angle: 'low angle hero shot', fx: 'flying money effect',
        font: 'alfa-slab', charPos: 'center', txtPos: 'top', txtColor: 'metallic gold'
    },
    horror: {
        expr: 'scared expression', outfit: 'tattered clothes', bg: 'abandoned house',
        obj: '', txt: 'KAÇ!', light: 'poisonous green horror lighting',
        angle: 'dutch angle', fx: 'fog and mist atmosphere effect',
        font: 'creepster', charPos: 'left', txtPos: 'right', txtColor: 'intense red'
    },
    storytime: {
        expr: 'happy expression', outfit: 'sweater', bg: 'cozy bedroom',
        obj: 'coffee cup', txt: 'HİKAYEM', light: 'warm golden hour lighting',
        angle: 'eye-level portrait shot', fx: 'bokeh blur effect',
        font: 'comfortaa', charPos: 'right', txtPos: 'left', txtColor: 'pure white'
    },
    reaction: {
        expr: 'shocked expression', outfit: 't-shirt', bg: 'rgb gaming room',
        obj: '', txt: 'BUNU İZLEYİN!', light: 'neon cyberpunk pink-blue lighting',
        angle: 'wide angle shot', fx: 'dust particles effect',
        font: 'bebas-neue', charPos: 'center', txtPos: 'bottom', txtColor: 'vibrant orange'
    },
    review: {
        expr: 'thoughtful expression', outfit: 'smart casual outfit', bg: 'clean studio',
        obj: 'product box', txt: 'DÜRÜST İNCELEME', light: 'bright studio lighting',
        angle: 'eye-level portrait shot', fx: 'clean no effects',
        font: 'raleway', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    unboxing: {
        expr: 'happy expression', outfit: 'casual clothes', bg: 'clean studio',
        obj: 'gift box', txt: 'KUTU AÇILIYORUZ!', light: 'bright studio lighting',
        angle: 'top-down view shot', fx: 'bokeh blur effect',
        font: 'bangers', charPos: 'center', txtPos: 'top', txtColor: 'hot pink'
    },
    cooking: {
        expr: 'happy expression', outfit: 'chef apron', bg: 'modern kitchen',
        obj: 'cooking pan', txt: 'TARİF', light: 'warm golden hour lighting',
        angle: 'top-down view shot', fx: 'steam and mist effect',
        font: 'luckiest-guy', charPos: 'right', txtPos: 'left', txtColor: 'vibrant orange'
    },
    travel: {
        expr: 'happy expression', outfit: 'summer outfit', bg: 'tropical beach',
        obj: 'passport', txt: 'SEYAHAT VLOG', light: 'golden hour lighting',
        angle: 'wide angle GoPro shot', fx: 'lens flare effect',
        font: 'righteous', charPos: 'left', txtPos: 'right', txtColor: 'pure white'
    },
    fitness: {
        expr: 'determined expression', outfit: 'sportswear', bg: 'gym',
        obj: 'dumbbell', txt: 'ANTRENMAN', light: 'cinematic teal and orange lighting',
        angle: 'low angle hero shot', fx: 'dust particles effect',
        font: 'black-ops', charPos: 'center', txtPos: 'top', txtColor: 'intense red'
    },
    tech: {
        expr: 'curious expression', outfit: 'modern casual outfit', bg: 'clean studio',
        obj: 'smartphone', txt: 'TEKNOLOJİ İNCELEME', light: 'neon cyberpunk lighting',
        angle: 'eye-level portrait shot', fx: 'digital glitch effect',
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
