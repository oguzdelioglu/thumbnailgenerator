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

// Preset definitions with positions
export const presets = {
    clickbait: {
        expr: 'Şok Olmuş', outfit: 'Siyah Hoodie', obj: 'Para Destesi',
        bg: 'Neon Stüdyo', txt: 'İNANILMAZ!', light: 'Sinematik teal & turuncu',
        angle: 'Geniş Açı (GoPro)', fx: 'Toz zerrecikleri',
        font: 'impact', charPos: 'right', txtPos: 'left', txtColor: 'Sarı'
    },
    minimal: {
        expr: 'Mutlu', outfit: 'Beyaz T-Shirt', obj: '', bg: 'Temiz stüdyo',
        txt: '', light: 'Parlak high-key stüdyo', angle: 'Göz hizası', fx: 'Temiz (efekt yok)',
        font: 'montserrat', charPos: 'center', txtPos: 'top', txtColor: 'Beyaz'
    },
    gaming: {
        expr: 'Beyni yanmış', outfit: 'Gaming kulaklığı', bg: 'RGB Oyun Odası',
        obj: 'Oyun kolu', txt: 'EPİK', light: 'Neon cyberpunk pembe-mavi',
        angle: 'Dutch (eğik)', fx: 'Digital glitch bozulma',
        font: 'titan-one', charPos: 'center', txtPos: 'bottom', txtColor: 'Neon Mavi'
    },
    tutorial: {
        expr: 'Düşünceli', outfit: 'Klasik takım', bg: 'Ofis',
        obj: 'Laptop', txt: 'NASIL?', light: 'Parlak stüdyo',
        angle: 'Göz hizası portre', fx: 'Temiz',
        font: 'roboto', charPos: 'left', txtPos: 'right', txtColor: 'Beyaz'
    },
    vlog: {
        expr: 'Mutlu', outfit: 'Günlük', bg: 'Salon',
        obj: '', txt: '', light: 'Sıcak golden hour',
        angle: 'Selfie açısı', fx: 'Bokeh arka plan blur',
        font: 'poppins', charPos: 'right', txtPos: 'left', txtColor: 'Beyaz'
    },
    mystery: {
        expr: 'Şüpheci', outfit: 'Koyu hoodie', bg: 'Karanlık sokak',
        obj: 'Gizemli kutu', txt: 'GERÇEK', light: 'Karanlık rembrandt',
        angle: 'Dutch (eğik)', fx: 'Toz/duman',
        font: 'anton', charPos: 'left', txtPos: 'right', txtColor: 'Beyaz'
    },
    money: {
        expr: 'Para gözlü', outfit: 'Lüks takım elbise', bg: 'Banka kasası',
        obj: 'Para destesi', txt: '100.000$', light: 'Sinematik teal & turuncu',
        angle: 'Alttan kahraman', fx: 'Uçan para',
        font: 'alfa-slab', charPos: 'center', txtPos: 'top', txtColor: 'Altın (Gold)'
    },
    horror: {
        expr: 'Korkmuş', outfit: 'Yırtık kıyafetler', bg: 'Terk edilmiş ev',
        obj: '', txt: 'KAÇ!', light: 'Yeşil zehirli korku',
        angle: 'Dutch (eğik)', fx: 'Sis/duman atmosferi',
        font: 'creepster', charPos: 'left', txtPos: 'right', txtColor: 'Kırmızı'
    },
    storytime: {
        expr: 'Mutlu', outfit: 'Kazak', bg: 'Koşu yatak odası',
        obj: 'Kahve fincanı', txt: 'HİKAYEM', light: 'Sıcak golden hour',
        angle: 'Göz hizası portre', fx: 'Bokeh blur',
        font: 'comfortaa', charPos: 'right', txtPos: 'left', txtColor: 'Beyaz'
    },
    reaction: {
        expr: 'Şok', outfit: 'T-shirt', bg: 'RGB Oyun Odası',
        obj: '', txt: 'BUNU İZLEYİN!', light: 'Neon cyberpunk pembe-mavi',
        angle: 'Geniş açı', fx: 'Toz',
        font: 'bebas-neue', charPos: 'center', txtPos: 'bottom', txtColor: 'Turuncu'
    },
    review: {
        expr: 'Düşünceli', outfit: 'Smart casual', bg: 'Temiz stüdyo',
        obj: 'Ürün kutusu', txt: 'DÜRÜST İNCELEME', light: 'Parlak stüdyo',
        angle: 'Göz hizası portre', fx: 'Temiz',
        font: 'raleway', charPos: 'left', txtPos: 'right', txtColor: 'Beyaz'
    },
    unboxing: {
        expr: 'Mutlu', outfit: 'Günlük', bg: 'Temiz stüdyo',
        obj: 'Hediye kutusu', txt: 'KUTU AÇILIYORUZ!', light: 'Parlak stüdyo',
        angle: 'Üstten bakış (top-down)', fx: 'Bokeh',
        font: 'bangers', charPos: 'center', txtPos: 'top', txtColor: 'Pembe'
    },
    cooking: {
        expr: 'Mutlu', outfit: 'Chef önlüğü', bg: 'Modern mutfak',
        obj: 'Tava', txt: 'TARİF', light: 'Sıcak golden hour',
        angle: 'Üstten bakış', fx: 'Buğu/duman',
        font: 'luckiest-guy', charPos: 'right', txtPos: 'left', txtColor: 'Turuncu'
    },
    travel: {
        expr: 'Mutlu', outfit: 'Yazlık', bg: 'Tropik plaj',
        obj: 'Pasaport', txt: 'SEYAHAT VLOG', light: 'Golden hour',
        angle: 'Geniş açı (GoPro)', fx: 'Lens parlaması',
        font: 'righteous', charPos: 'left', txtPos: 'right', txtColor: 'Beyaz'
    },
    fitness: {
        expr: 'Kararlı', outfit: 'Spor kıyafeti', bg: 'Spor salonu',
        obj: 'Dumbbell', txt: 'ANTRENMAN', light: 'Sinematik teal & turuncu',
        angle: 'Alttan kahraman', fx: 'Toz',
        font: 'black-ops', charPos: 'center', txtPos: 'top', txtColor: 'Kırmızı'
    },
    tech: {
        expr: 'Meraklı', outfit: 'Modern casual', bg: 'Temiz stüdyo',
        obj: 'Telefon', txt: 'TEKNOLOJİ İNCELEME', light: 'Neon cyberpunk',
        angle: 'Göz hizası portre', fx: 'Digital glitch',
        font: 'orbitron', charPos: 'right', txtPos: 'left', txtColor: 'Mavi'
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
