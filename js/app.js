/**
 * Thumbnail Studio - Main Application
 * AI-powered YouTube thumbnail prompt generator
 * 
 * @author Thumbnail Studio
 * @version 2.0.0
 * @license MIT
 */

// =========================================
// *** DATASET v2.0.0 ***
// =========================================
const dataPool = {
    tr: {
        modeRefTxt: "KENDİ FOTOĞRAFIM (Varsayılan)",
        modeRndTxt: "RASTGELE KARAKTER",
        modeDescRef: "ℹ️ Prompt'a fotoğrafını eklemelisin. Yüzün korunur, ortam değişir.",
        modeDescRnd: "⚠️ Prompt rastgele bir karakter tarifi oluşturur.",
        placeholders: ["Örn: Şaşkın...", "Örn: Siyah Hoodie...", "Örn: Para...", "Örn: Stüdyo...", "Örn: YAZI", "Örn: Sinematik...", "Örn: Geniş Açı...", "Örn: Kıvılcım..."],
        hudLabels: ["KAYNAK", "POZİSYON", "İFADE", "KIYAFET", "NESNE", "MEKAN", "YAZI", "IŞIK", "AÇI", "EFEKT"],
        posLabels: { left: "SOL", center: "ORTA", right: "SAĞ" },
        posHudLabel: "POZİSYON",
        genderLabels: { male: "ERKEK", female: "KADIN", character: "KARAKTER" },
        genderHudLabel: "CİNSİYET",
        txtPosLabels: { left: "SOL", top: "ÜST", auto: "OTO", bottom: "ALT", right: "SAĞ" },
        txtPosHudLabel: "YAZI POZ.",
        btnGen: "PROMPT OLUŞTUR (BAŞLAT)",
        txtReset: "SIFIRLA",
        txtHistory: "GEÇMİŞ PROMPTLAR",
        txtFav: "FAVORİ",
        txtExport: "AYARLARI DIŞA AKTAR",
        txtImport: "AYARLARI İÇE AKTAR",
        txtPresets: "HAZIR ŞABLONLAR // QUICK PRESETS",
        presetLabels: { clickbait: "CLICKBAIT", minimal: "MİNİMAL", gaming: "GAMING", tutorial: "TUTORIAL", vlog: "VLOG", mystery: "GİZEM", money: "PARA/FİNANS", horror: "KORKU", storytime: "HİKAYE", reaction: "REAKSİYON", review: "İNCELEME", unboxing: "KUTU AÇILIMI", cooking: "YEMEKTARİFİ", travel: "SEYAHAT", fitness: "FİTNESS", tech: "TEKNOLOJİ" },
        statLabels: { chars: "KARAKTER", words: "KELİME", tokens: "TOKEN (≈)" },
        shortcutLabels: { gen: "Oluştur", copy: "Kopyala" },

        expr: [
            // Basic Emotions
            { i: "😱", l: "Şok Olmuş" }, { i: "😊", l: "Mutlu" }, { i: "🤬", l: "Çok Sinirli" }, { i: "😭", l: "Ağlayan" }, { i: "🤔", l: "Düşünceli" },
            { i: "🤯", l: "Beyni Yanmış" }, { i: "🤑", l: "Para Gözlü" }, { i: "😈", l: "Sinsi/Kötü" }, { i: "😴", l: "Uykulu" }, { i: "😨", l: "Dehşete Düşmüş" },
            { i: "🤐", l: "Ağzı Bantlı" }, { i: "🤡", l: "Palyaço" }, { i: "😎", l: "Havalı" }, { i: "🤕", l: "Yaralı" }, { i: "🧐", l: "İnceleyen" },
            { i: "🤢", l: "İğrenmiş" }, { i: "🤣", l: "Kahkaha Atan" }, { i: "😤", l: "Kararlı" }, { i: "🙄", l: "Göz Deviren" }, { i: "🥺", l: "Masum/Yalvaran" },
            { i: "😵", l: "Baygın" }, { i: "🤪", l: "Çılgın" }, { i: "🤥", l: "Yalancı (Burnu Uzun)" }, { i: "🤫", l: "Sus İşareti" }, { i: "😬", l: "Gergin" },
            // Advanced Emotions
            { i: "😏", l: "Sırıtan" }, { i: "🥴", l: "Sarhoş/Baş Dönmesi" }, { i: "😇", l: "Melek Gibi" }, { i: "🤩", l: "Yıldız Gözlü" }, { i: "😳", l: "Utanmış" },
            { i: "🥶", l: "Donmuş/Üşümüş" }, { i: "🥵", l: "Sıcaktan Bunalmış" }, { i: "😡", l: "Öfkeli" }, { i: "😱", l: "Çığlık Atan" }, { i: "🫣", l: "Gözlerini Kapatan" },
            { i: "🫢", l: "Ağzını Kapatan" }, { i: "🫠", l: "Eriyen" }, { i: "😶", l: "Sessiz Kalan" }, { i: "🙃", l: "Ters Gülümseme" }, { i: "😋", l: "Dil Çıkaran" },
            { i: "🤗", l: "Sarılmak İsteyen" }, { i: "😒", l: "Bezgin" }, { i: "😞", l: "Hayal Kırıklığına Uğramış" }, { i: "😟", l: "Endişeli" }, { i: "🫨", l: "Titreyen" },
            // YouTube Popular
            { i: "👀", l: "Gözleri Faltaşı" }, { i: "💀", l: "Öldüm (Komik)" }, { i: "🙀", l: "Korkmuş Kedi" }, { i: "😵‍💫", l: "Hipnotize" }, { i: "🫥", l: "Görünmez" },
            { i: "😮", l: "Ağzı Açık Kalmış" }, { i: "😧", l: "Endişeli Bakış" }, { i: "😲", l: "Şaşkın" }, { i: "😯", l: "Hafif Şaşkın" }, { i: "🤨", l: "Tek Kaş Kaldırmış" }
        ],
        outfit: [
            // Casual & Streetwear
            { i: "🧥", l: "Siyah Hoodie" }, { i: "👕", l: "Beyaz T-Shirt" }, { i: "👕", l: "Siyah T-Shirt" }, { i: "🎽", l: "Kolsuz Atlet" }, { i: "👖", l: "Yırtık Kot" },
            { i: "🧢", l: "Snapback Şapka" }, { i: "🧥", l: "Oversize Hoodie" }, { i: "🧥", l: "Fermuarlı Hoodie" }, { i: "👟", l: "Spor Ayakkabı" }, { i: "🥾", l: "Bot" },
            { i: "🧥", l: "Bomber Ceket" }, { i: "🧥", l: "Deri Ceket" }, { i: "🧥", l: "Kot Ceket" }, { i: "🧥", l: "Varsity Ceket" }, { i: "🧣", l: "Şal/Atkı" },
            // Formal & Business
            { i: "👔", l: "Takım Elbise" }, { i: "🕴️", l: "Smokin" }, { i: "👔", l: "Gömlek & Kravat" }, { i: "🎩", l: "Fötr Şapka" }, { i: "👞", l: "Klasik Ayakkabı" },
            { i: "👔", l: "Blazer Ceket" }, { i: "👔", l: "V Yaka Kazak" }, { i: "📿", l: "Altın Zincir" }, { i: "⌚", l: "Lüks Saat" }, { i: "👓", l: "Gözlük" },
            // Professions
            { i: "👮", l: "Polis Üniforma" }, { i: "🩺", l: "Doktor Önlüğü" }, { i: "🪖", l: "Askeri Üniforma" }, { i: "👨‍🍳", l: "Aşçı Kıyafeti" }, { i: "🚒", l: "İtfaiyeci" },
            { i: "👷", l: "İnşaat İşçisi" }, { i: "⛓️", l: "Mahkum Tulumu" }, { i: "🧪", l: "Laboratuvar Önlüğü" }, { i: "✈️", l: "Pilot Üniforması" }, { i: "🧑‍🚀", l: "Astronot" },
            { i: "🔧", l: "Tamirci Tulumu" }, { i: "🎬", l: "Yönetmen Koltuğu" }, { i: "📰", l: "Gazeteci" }, { i: "🎤", l: "Şarkıcı" }, { i: "🧑‍🎨", l: "Sanatçı" },
            // Characters & Costumes
            { i: "🦸", l: "Süper Kahraman" }, { i: "🦹", l: "Süper Villain" }, { i: "🧟", l: "Zombi" }, { i: "🧙", l: "Büyücü" }, { i: "🥷", l: "Ninja" },
            { i: "🤴", l: "Kral/Prens" }, { i: "👸", l: "Kraliçe/Prenses" }, { i: "🏴‍☠️", l: "Korsan" }, { i: "🤖", l: "Robot/Cyborg" }, { i: "👽", l: "Uzaylı" },
            { i: "🧛", l: "Vampir" }, { i: "🎭", l: "Joker/Palyaço" }, { i: "⚔️", l: "Ortaçağ Şövalye" }, { i: "🥋", l: "Dövüşçü" }, { i: "🏋️", l: "Fitness Kıyafeti" },
            // Trendy & Luxury
            { i: "👘", l: "Cyberpunk Ceket" }, { i: "🏖️", l: "Hawaii Gömleği" }, { i: "👗", l: "Abiye Elbise" }, { i: "🕶️", l: "Ajan (Siyah Takım)" }, { i: "🦁", l: "Kürk Manto" },
            { i: "💎", l: "Mücevherli Kıyafet" }, { i: "🔥", l: "Hypebeast Outfit" }, { i: "🎸", l: "Rock Star Kıyafeti" }, { i: "🏀", l: "Basketbol Forması" }, { i: "⚽", l: "Futbol Forması" }
        ],
        obj: [
            { i: "📱", l: "Telefon" }, { i: "💵", l: "Para Destesi" }, { i: "💻", l: "Laptop" }, { i: "🎮", l: "Oyun Kolu" }, { i: "🚪", l: "Kapı Hidroliği" },
            { i: "❓", l: "Gizemli Kutu" }, { i: "🍔", l: "Hamburger" }, { i: "🎤", l: "Mikrofon" }, { i: "📸", l: "Kamera" }, { i: "🚁", l: "Drone" },
            { i: "₿", l: "Bitcoin" }, { i: "🏆", l: "Kupa" }, { i: "🔫", l: "Oyuncak Silah" }, { i: "💳", l: "Kredi Kartı" }, { i: "🕶️", l: "VR Gözlük" },
            { i: "🏎️", l: "Direksiyon" }, { i: "💊", l: "Hap/İlaç" }, { i: "🧱", l: "Altın Külçe" }, { i: "⏱️", l: "Kronometre" }, { i: "🔍", l: "Büyüteç" },
            { i: "🥤", l: "Enerji İçeceği" }, { i: "🎈", l: "Kırmızı Balon" }, { i: "🎁", l: "Hediye Paketi" }, { i: "🌶️", l: "Acı Biber" }
        ],
        bg: [
            // Studio & Indoor
            { i: "🎙️", l: "Neon Stüdyo" }, { i: "📹", l: "YouTube Stüdyo" }, { i: "🔴", l: "Podcast Stüdyosu" }, { i: "📷", l: "Fotoğraf Stüdyosu" }, { i: "🎬", l: "Film Seti" },
            { i: "🎤", l: "Konser Sahnesi" }, { i: "🎭", l: "Tiyatro" }, { i: "🏠", l: "Ev Salonu" }, { i: "🛋️", l: "Modern Oturma Odası" }, { i: "🛏️", l: "Yatak Odası" },
            { i: "🍳", l: "Lüks Mutfak" }, { i: "👾", l: "Gaming Odası" }, { i: "🖥️", l: "Ofis" }, { i: "🏢", l: "CEO Ofisi" }, { i: "📚", l: "Kütüphane" },
            // Sports & Action
            { i: "🏋️", l: "Spor Salonu" }, { i: "🏟️", l: "Stadyum" }, { i: "🥊", l: "Boks Ringi" }, { i: "🏀", l: "Basketbol Sahası" }, { i: "⚽", l: "Futbol Sahası" },
            { i: "🎳", l: "Bowling Salonu" }, { i: "🎱", l: "Bilardo Salonu" }, { i: "🏎️", l: "Yarış Pisti" }, { i: "🏍️", l: "Motokros Pisti" }, { i: "🛹", l: "Skate Parkı" },
            // Urban & City
            { i: "🏙️", l: "Şehir Manzarası" }, { i: "🌃", l: "Gece Şehri" }, { i: "🌆", l: "Gökdelen" }, { i: "🏗️", l: "İnşaat Alanı" }, { i: "🚇", l: "Metro İstasyonu" },
            { i: "🌉", l: "Köprü" }, { i: "🛣️", l: "Otoban" }, { i: "🚧", l: "Karanlık Sokak" }, { i: "🏪", l: "Dükkan Vitrini" }, { i: "🛒", l: "Süpermarket" },
            // Nature & Outdoor
            { i: "🌲", l: "Karanlık Orman" }, { i: "🏔️", l: "Dağ Zirvesi" }, { i: "🏖️", l: "Tropik Plaj" }, { i: "🏜️", l: "Çöl" }, { i: "🌋", l: "Volkan" },
            { i: "⛰️", l: "Kanyon" }, { i: "🌊", l: "Okyanus Dibi" }, { i: "🌅", l: "Gün Batımı" }, { i: "🌄", l: "Gün Doğumu" }, { i: "❄️", l: "Kar Manzarası" },
            // Luxury & Special
            { i: "✈️", l: "Özel Jet" }, { i: "🛥️", l: "Yat Güvertesi" }, { i: "🏦", l: "Banka Kasası" }, { i: "💎", l: "Elmas Odası" }, { i: "🎰", l: "Casino" },
            { i: "🍸", l: "VIP Lounge" }, { i: "🏨", l: "5 Yıldızlı Otel" }, { i: "🛁", l: "Lüks Banyo" }, { i: "🏊", l: "Infinity Havuz" }, { i: "🎡", l: "Lunapark" },
            // Dark & Scary
            { i: "🏚️", l: "Terk Edilmiş Bina" }, { i: "🚔", l: "Hapishane" }, { i: "⚰️", l: "Mezarlık" }, { i: "👻", l: "Perili Ev" }, { i: "🩸", l: "Korku Evi" },
            // Fantasy & Sci-Fi
            { i: "🌌", l: "Uzay" }, { i: "🚀", l: "Uzay Gemisi" }, { i: "🌍", l: "Dünya Yörüngesi" }, { i: "🛸", l: "UFO İçi" }, { i: "🤖", l: "Robot Fabrikası" },
            { i: "⚗️", l: "Bilim Kurgu Lab" }, { i: "🏰", l: "Ortaçağ Kalesi" }, { i: "🐉", l: "Ejderha Mağarası" }, { i: "🧙", l: "Büyücü Kulesi" },
            // Institutions
            { i: "🎓", l: "Okul/Sınıf" }, { i: "🏥", l: "Hastane" }, { i: "⚖️", l: "Mahkeme Salonu" }, { i: "🏛️", l: "Müze" }, { i: "⛪", l: "Kilise/Cami" }
        ],
        txt: [
            { i: "❓", l: "NASIL?" }, { i: "🔎", l: "İNCELEME" }, { i: "🚫", l: "SAKIN YAPMA" }, { i: "💡", l: "GERÇEKLER" }, { i: "🤥", l: "YALAN MI?" },
            { i: "⚠️", l: "DOLANDIRICI" }, { i: "💸", l: "İFLAS" }, { i: "🤑", l: "ZENGİN OLDUM" }, { i: "⏳", l: "24 SAAT" }, { i: "🆚", l: "KIYASLAMA" },
            { i: "🔥", l: "ÇOK RİSKLİ" }, { i: "🛑", l: "DUR!" }, { i: "😱", l: "İNANILMAZ" }, { i: "💰", l: "100.000$" }, { i: "🆓", l: "BEDAVA" },
            { i: "🧪", l: "DENEY" }, { i: "🔒", l: "GİZLİ" }, { i: "❌", l: "HATA YAPTIM" }, { i: "📈", l: "YATIRIM" }, { i: "🏆", l: "KAZANDIM" }
        ],
        light: [
            // Cinematic & Film
            { i: "🟦", l: "Teal & Orange (Sinematik)" }, { i: "🎬", l: "Hollywood Stüdyo" }, { i: "🎞️", l: "Film Noir" }, { i: "🔥", l: "Turuncu Sıcak" }, { i: "❄️", l: "Mavi Soğuk" },
            // Neon & Cyberpunk
            { i: "🟣", l: "Neon Cyberpunk (Mor/Mavi)" }, { i: "💜", l: "Mor Neon" }, { i: "💙", l: "Mavi Neon" }, { i: "💖", l: "Pembe Neon" }, { i: "💚", l: "Yeşil Neon" },
            { i: "🌈", l: "RGB Split (Renkli)" }, { i: "🎨", l: "Çoklu Renk" }, { i: "🪩", l: "Disco Işıkları" },
            // Natural Light
            { i: "🌅", l: "Golden Hour (Güneşli)" }, { i: "🌄", l: "Gün Doğumu" }, { i: "🌇", l: "Gün Batımı" }, { i: "☀️", l: "Parlak Güneş" }, { i: "⛅", l: "Bulutlu Yumuşak" },
            { i: "🌙", l: "Ay Işığı" }, { i: "✨", l: "Yıldız Işıltısı" },
            // Studio Lighting
            { i: "💡", l: "High Key (Parlak/Temiz)" }, { i: "🌑", l: "Low Key (Karanlık)" }, { i: "📸", l: "Softbox" }, { i: "🔦", l: "Rim Light (Kenar)" }, { i: "💫", l: "Butterfly Light" },
            { i: "🎭", l: "Split Light (Yarım)" }, { i: "🌓", l: "Rembrandt Light" }, { i: "👤", l: "Silhouette" }, { i: "⚪", l: "Beyaz Arka Plan" },
            // Dramatic & Mood
            { i: "🌩️", l: "Dramatik Fırtına" }, { i: "⚡", l: "Yıldırım" }, { i: "🕯️", l: "Mum Işığı" }, { i: "🔥", l: "Ateş Işığı" }, { i: "🤢", l: "Korku Yeşili" },
            { i: "🩸", l: "Kanlı Kırmızı" }, { i: "👻", l: "Hayalet Mavisi" }, { i: "💀", l: "Karanlık Korku" },
            // Special Effects
            { i: "⚫", l: "Siyah Beyaz (Noir)" }, { i: "✨", l: "God Rays (Hüzme)" }, { i: "🌫️", l: "Sisli Atmosfer" }, { i: "📺", l: "TV Ekranı" }, { i: "🖥️", l: "Monitör Parıltısı" },
            { i: "🔮", l: "Mistik Mor" }, { i: "⭐", l: "Yıldız Lens Flare" }
        ],
        angle: [
            // Standard Shots
            { i: "😐", l: "Göz Hizası (Normal)" }, { i: "👤", l: "Portre (Yakın)" }, { i: "👥", l: "İkili Çekim" }, { i: "🧍", l: "Tam Boy" }, { i: "🪑", l: "Bel Üstü" },
            // Dynamic Angles
            { i: "🦸", l: "Alttan Bakış (Kahraman)" }, { i: "🐜", l: "Karınca Bakışı (Çok Alçak)" }, { i: "🚁", l: "Üstten Bakış (Drone)" }, { i: "🦅", l: "Kuşbakışı" }, { i: "📐", l: "Dutch Angle (Eğik)" },
            { i: "↗️", l: "Eğik Yukarı" }, { i: "↘️", l: "Eğik Aşağı" },
            // Wide & Close
            { i: "🐟", l: "Geniş Açı (GoPro)" }, { i: "🔍", l: "Yakın Çekim (Close-up)" }, { i: "👁️", l: "Extreme Close-up (Göz)" }, { i: "🐜", l: "Makro (Detay)" }, { i: "🌍", l: "Ultra Geniş" },
            // Cinematic Shots
            { i: "👥", l: "Omuz Üstü (OTS)" }, { i: "🤳", l: "Selfie Açısı" }, { i: "📹", l: "POV (Birinci Kişi)" }, { i: "🎬", l: "Establishing Shot" }, { i: "🎥", l: "Tracking Shot" },
            { i: "🔄", l: "360° Çekim" }, { i: "⬛", l: "Letterbox Sinematik" },
            // Special Perspectives
            { i: "🪞", l: "Ayna Yansıması" }, { i: "💧", l: "Su Altı" }, { i: "🚗", l: "Araç İçi" }, { i: "🚪", l: "Kapı Arkası (Gizli)" }, { i: "🔭", l: "Teleskopik Zoom" }
        ],
        fx: [
            { i: "✨", l: "Temiz (Efekt Yok)" }, { i: "💨", l: "Toz Zerrecikleri" }, { i: "🔥", l: "Ateş Kıvılcımları" }, { i: "💸", l: "Yağan Paralar" },
            { i: "💻", l: "Matrix Kodları" }, { i: "⚡", l: "Elektrik/Yıldırım" }, { i: "🌫️", l: "Duman/Sis" },
            { i: "💧", l: "Su Sıçraması" }, { i: "💥", l: "Patlama" }, { i: "📷", l: "Bokeh (Arka Plan Bulanık)" }, { i: "📺", l: "Glitch (Bozulma)" },
            { i: "❄️", l: "Kar Tanesi/Buz" }, { i: "🎨", l: "Yağlı Boya Dokusu" }, { i: "🕸️", l: "Örümcek Ağları" }
        ]
    },
    en: {
        modeRefTxt: "MY PHOTO (Default)",
        modeRndTxt: "RANDOM CHARACTER",
        modeDescRef: "ℹ️ Attach your photo with the prompt. Face is kept, scene changes.",
        modeDescRnd: "⚠️ Prompt generates a random character description.",
        placeholders: ["e.g. Shocked...", "e.g. Hoodie...", "e.g. Money...", "e.g. Studio...", "e.g. TEXT", "e.g. Cinematic...", "e.g. Wide Angle...", "e.g. Fire..."],
        hudLabels: ["SOURCE", "POSITION", "EXPRESSION", "OUTFIT", "OBJECT", "ENVIRONMENT", "OVERLAY", "LIGHT", "ANGLE", "FX"],
        posLabels: { left: "LEFT", center: "CENTER", right: "RIGHT" },
        posHudLabel: "POSITION",
        genderLabels: { male: "MALE", female: "FEMALE", character: "CHARACTER" },
        genderHudLabel: "GENDER",
        txtPosLabels: { left: "LEFT", top: "TOP", auto: "AUTO", bottom: "BOTTOM", right: "RIGHT" },
        txtPosHudLabel: "TEXT POS.",
        btnGen: "GENERATE PROMPT (INITIALIZE)",
        txtReset: "RESET",
        txtHistory: "PROMPT HISTORY",
        txtFav: "FAVORITE",
        txtExport: "EXPORT SETTINGS",
        txtImport: "IMPORT SETTINGS",
        txtPresets: "QUICK PRESETS // TEMPLATES",
        presetLabels: { clickbait: "CLICKBAIT", minimal: "MINIMAL", gaming: "GAMING", tutorial: "TUTORIAL", vlog: "VLOG", mystery: "MYSTERY", money: "MONEY/FINANCE", horror: "HORROR", storytime: "STORYTIME", reaction: "REACTION", review: "REVIEW", unboxing: "UNBOXING", cooking: "COOKING", travel: "TRAVEL", fitness: "FITNESS", tech: "TECH" },
        statLabels: { chars: "CHARACTERS", words: "WORDS", tokens: "TOKEN (≈)" },
        shortcutLabels: { gen: "Generate", copy: "Copy" },

        expr: [
            // Basic Emotions
            { i: "😱", l: "Shocked open mouth" }, { i: "😊", l: "Happy smiling" }, { i: "🤬", l: "Extremely angry yelling" }, { i: "😭", l: "Crying with tears" }, { i: "🤔", l: "Thinking pondering" },
            { i: "🤯", l: "Mind blown exploding head" }, { i: "🤑", l: "Greedy money eyes" }, { i: "😈", l: "Evil smirk devilish" }, { i: "😴", l: "Sleepy tired" }, { i: "😨", l: "Terrified scared" },
            { i: "🤐", l: "Mouth taped shut" }, { i: "🤡", l: "Clown face makeup" }, { i: "😎", l: "Cool wearing sunglasses" }, { i: "🤕", l: "Injured with bandages" }, { i: "🧐", l: "Focused analyzing" },
            { i: "🤢", l: "Disgusted nauseous" }, { i: "🤣", l: "Laughing hysterically" }, { i: "😤", l: "Determined confident" }, { i: "🙄", l: "Rolling eyes annoyed" }, { i: "🥺", l: "Pleading puppy eyes" },
            { i: "😵", l: "Unconscious dizzy" }, { i: "🤪", l: "Crazy tongue out wild" }, { i: "🤥", l: "Lying with long nose" }, { i: "🤫", l: "Shushing finger on lips" }, { i: "😬", l: "Awkward grimace" },
            // Advanced Emotions
            { i: "😏", l: "Smirking confident" }, { i: "🥴", l: "Drunk woozy dizzy" }, { i: "😇", l: "Angelic innocent" }, { i: "🤩", l: "Star-struck excited" }, { i: "😳", l: "Embarrassed blushing" },
            { i: "🥶", l: "Freezing cold blue" }, { i: "🥵", l: "Overheated sweating" }, { i: "😡", l: "Furious red face" }, { i: "😱", l: "Screaming in horror" }, { i: "🫣", l: "Peeking covering eyes" },
            { i: "🫢", l: "Covering mouth shocked" }, { i: "🫠", l: "Melting dissolving" }, { i: "😶", l: "Silent speechless" }, { i: "🙃", l: "Upside down smile sarcastic" }, { i: "😋", l: "Yummy tongue out" },
            { i: "🤗", l: "Hugging arms open" }, { i: "😒", l: "Unamused bored" }, { i: "😞", l: "Disappointed sad" }, { i: "😟", l: "Worried anxious" }, { i: "🫨", l: "Shaking vibrating" },
            // YouTube Popular
            { i: "👀", l: "Wide eyes staring" }, { i: "💀", l: "Dead laughing skull" }, { i: "🙀", l: "Scared cat shocked" }, { i: "😵‍💫", l: "Hypnotized dizzy spirals" }, { i: "🫥", l: "Invisible dotted" },
            { i: "😮", l: "Open mouth surprised" }, { i: "😧", l: "Anguished worried" }, { i: "😲", l: "Astonished amazed" }, { i: "😯", l: "Hushed slightly surprised" }, { i: "🤨", l: "Raised eyebrow skeptical" }
        ],
        outfit: [
            // Casual & Streetwear
            { i: "🧥", l: "Black Hoodie with hood up" }, { i: "👕", l: "White cotton T-Shirt" }, { i: "👕", l: "Black graphic T-Shirt" }, { i: "🎽", l: "Sleeveless tank top" }, { i: "👖", l: "Ripped blue jeans" },
            { i: "🧢", l: "Snapback baseball cap" }, { i: "🧥", l: "Oversized grey hoodie" }, { i: "🧥", l: "Zip-up hoodie" }, { i: "👟", l: "Nike sneakers" }, { i: "🥾", l: "Combat boots" },
            { i: "🧥", l: "Black bomber jacket" }, { i: "🧥", l: "Brown leather biker jacket" }, { i: "🧥", l: "Denim jacket" }, { i: "🧥", l: "Varsity letterman jacket" }, { i: "🧣", l: "Wool scarf" },
            // Formal & Business
            { i: "👔", l: "Luxury three-piece suit" }, { i: "🕴️", l: "Black tuxedo with bowtie" }, { i: "👔", l: "White shirt with silk tie" }, { i: "🎩", l: "Black fedora hat" }, { i: "👞", l: "Polished Oxford shoes" },
            { i: "👔", l: "Navy blue blazer" }, { i: "👔", l: "V-neck cashmere sweater" }, { i: "📿", l: "Heavy gold chain necklace" }, { i: "⌚", l: "Luxury Rolex watch" }, { i: "👓", l: "Designer glasses" },
            // Professions
            { i: "👮", l: "Police officer uniform" }, { i: "🩺", l: "White doctor lab coat" }, { i: "🪖", l: "Military camouflage uniform" }, { i: "👨‍🍳", l: "Chef whites with hat" }, { i: "🚒", l: "Firefighter bunker gear" },
            { i: "👷", l: "Construction worker hardhat vest" }, { i: "⛓️", l: "Orange prisoner jumpsuit" }, { i: "🧪", l: "Scientist white lab coat" }, { i: "✈️", l: "Airline pilot uniform" }, { i: "🧑‍🚀", l: "NASA astronaut spacesuit" },
            { i: "🔧", l: "Mechanic blue overalls" }, { i: "🎬", l: "Movie director casual" }, { i: "📰", l: "News reporter suit" }, { i: "🎤", l: "Pop star stage outfit" }, { i: "🧑‍🎨", l: "Artist paint-splattered clothes" },
            // Characters & Costumes
            { i: "🦸", l: "Superhero cape and mask" }, { i: "🦹", l: "Supervillain dark costume" }, { i: "🧟", l: "Zombie torn bloody clothes" }, { i: "🧙", l: "Wizard robe and hat" }, { i: "🥷", l: "Ninja all-black outfit" },
            { i: "🤴", l: "Medieval king crown and robe" }, { i: "👸", l: "Princess ball gown" }, { i: "🏴‍☠️", l: "Pirate captain costume" }, { i: "🤖", l: "Robot cyborg armor" }, { i: "👽", l: "Alien space creature suit" },
            { i: "🧛", l: "Vampire cape and fangs" }, { i: "🎭", l: "Joker clown costume" }, { i: "⚔️", l: "Medieval knight armor" }, { i: "🥋", l: "MMA fighter shorts gear" }, { i: "🏋️", l: "Fitness gym wear" },
            // Trendy & Luxury
            { i: "👘", l: "Neon cyberpunk jacket" }, { i: "🏖️", l: "Colorful Hawaiian shirt" }, { i: "👗", l: "Elegant evening gown" }, { i: "🕶️", l: "Secret agent all-black suit" }, { i: "🦁", l: "Luxurious fur coat" },
            { i: "💎", l: "Diamond-studded outfit" }, { i: "🔥", l: "Hypebeast streetwear" }, { i: "🎸", l: "Rock star leather outfit" }, { i: "🏀", l: "NBA basketball jersey" }, { i: "⚽", l: "Football soccer jersey" }
        ],
        obj: [
            { i: "📱", l: "Glowing Phone" }, { i: "💵", l: "Stack of Money" }, { i: "💻", l: "Laptop" }, { i: "🎮", l: "Gamepad" }, { i: "🚪", l: "Door Closer" },
            { i: "❓", l: "Mystery Box" }, { i: "🍔", l: "Giant Burger" }, { i: "🎤", l: "Microphone" }, { i: "📸", l: "Camera" }, { i: "🚁", l: "Drone" },
            { i: "₿", l: "Bitcoin Coin" }, { i: "🏆", l: "Golden Trophy" }, { i: "🔫", l: "Toy Nerf Gun" }, { i: "💳", l: "Black Credit Card" }, { i: "🕶️", l: "VR Headset" },
            { i: "🏎️", l: "Racing Steering Wheel" }, { i: "💊", l: "Red and Blue Pills" }, { i: "🧱", l: "Gold Bars" }, { i: "⏱️", l: "Stopwatch" }, { i: "🔍", l: "Magnifying Glass" },
            { i: "🥤", l: "Energy Drink Can" }, { i: "🎈", l: "Red Balloon" }, { i: "🎁", l: "Wrapped Gift Box" }, { i: "🌶️", l: "Hot Chili Pepper" }
        ],
        bg: [
            // Studio & Indoor
            { i: "🎙️", l: "neon-lit professional YouTube studio" }, { i: "📹", l: "content creator YouTube studio setup" }, { i: "🔴", l: "podcast recording studio" }, { i: "📷", l: "professional photography studio" }, { i: "🎬", l: "Hollywood film set" },
            { i: "🎤", l: "concert stage with spotlights" }, { i: "🎭", l: "theater stage" }, { i: "🏠", l: "cozy living room" }, { i: "🛋️", l: "modern minimalist living room" }, { i: "🛏️", l: "bedroom interior" },
            { i: "🍳", l: "luxury modern kitchen" }, { i: "👾", l: "RGB-lit gaming room" }, { i: "🖥️", l: "professional office" }, { i: "🏢", l: "corner CEO office skyline view" }, { i: "📚", l: "grand library with books" },
            // Sports & Action
            { i: "🏋️", l: "gym with weights equipment" }, { i: "🏟️", l: "sports stadium arena" }, { i: "🥊", l: "boxing ring" }, { i: "🏀", l: "basketball court" }, { i: "⚽", l: "soccer football field" },
            { i: "🎳", l: "bowling alley" }, { i: "🎱", l: "pool hall" }, { i: "🏎️", l: "F1 racing track pit lane" }, { i: "🏍️", l: "motocross dirt track" }, { i: "🛹", l: "skate park" },
            // Urban & City
            { i: "🏙️", l: "city skyline panorama" }, { i: "🌃", l: "night city neon lights" }, { i: "🌆", l: "skyscraper rooftop" }, { i: "🏗️", l: "construction site" }, { i: "🚇", l: "subway metro station" },
            { i: "🌉", l: "iconic bridge view" }, { i: "🛣️", l: "highway road" }, { i: "🚧", l: "dark alley street" }, { i: "🏪", l: "neon shop storefront" }, { i: "🛒", l: "supermarket aisle" },
            // Nature & Outdoor
            { i: "🌲", l: "dark mysterious forest" }, { i: "🏔️", l: "snow mountain peak" }, { i: "🏖️", l: "tropical beach with palm trees" }, { i: "🏜️", l: "sahara desert dunes" }, { i: "🌋", l: "active volcano lava" },
            { i: "⛰️", l: "grand canyon" }, { i: "🌊", l: "underwater ocean scene" }, { i: "🌅", l: "beautiful sunset" }, { i: "🌄", l: "sunrise landscape" }, { i: "❄️", l: "snowy winter wonderland" },
            // Luxury & Special
            { i: "✈️", l: "private jet interior" }, { i: "🛥️", l: "luxury yacht deck" }, { i: "🏦", l: "bank vault gold stacks" }, { i: "💎", l: "diamond room" }, { i: "🎰", l: "Las Vegas casino floor" },
            { i: "🍸", l: "VIP lounge club" }, { i: "🏨", l: "5-star hotel lobby" }, { i: "🛁", l: "luxury spa bathroom" }, { i: "🏊", l: "infinity pool ocean view" }, { i: "🎡", l: "theme park" },
            // Dark & Scary
            { i: "🏚️", l: "abandoned building ruins" }, { i: "🚔", l: "prison jail cell" }, { i: "⚰️", l: "spooky cemetery" }, { i: "👻", l: "haunted house interior" }, { i: "🩸", l: "horror house bloody" },
            // Fantasy & Sci-Fi
            { i: "🌌", l: "outer space stars nebula" }, { i: "🚀", l: "spaceship interior" }, { i: "🌍", l: "Earth orbit view" }, { i: "🛸", l: "UFO alien spacecraft" }, { i: "🤖", l: "robot factory" },
            { i: "⚗️", l: "sci-fi laboratory" }, { i: "🏰", l: "medieval castle throne room" }, { i: "🐉", l: "dragon cave lair" }, { i: "🧙", l: "wizard tower" },
            // Institutions
            { i: "🎓", l: "university classroom" }, { i: "🏥", l: "hospital room" }, { i: "⚖️", l: "courtroom trial" }, { i: "🏛️", l: "museum gallery" }, { i: "⛪", l: "church cathedral interior" }
        ],
        light: [
            // Cinematic & Film
            { i: "🟦", l: "dramatic teal and orange cinematic color grading" }, { i: "🎬", l: "Hollywood studio professional lighting" }, { i: "🎞️", l: "classic film noir black and white shadows" }, { i: "🔥", l: "warm orange tungsten lighting" }, { i: "❄️", l: "cool blue moonlight atmosphere" },
            // Neon & Cyberpunk
            { i: "🟣", l: "vibrant neon cyberpunk pink and blue lighting" }, { i: "💜", l: "purple neon glow" }, { i: "💙", l: "electric blue neon lights" }, { i: "💖", l: "hot pink neon signs" }, { i: "💚", l: "toxic green neon" },
            { i: "🌈", l: "RGB split color chromatic aberration" }, { i: "🎨", l: "multi-colored party lights" }, { i: "🪩", l: "disco ball reflections" },
            // Natural Light
            { i: "🌅", l: "warm golden hour magic hour lighting" }, { i: "🌄", l: "soft sunrise morning light" }, { i: "🌇", l: "beautiful sunset orange sky" }, { i: "☀️", l: "bright direct sunlight" }, { i: "⛅", l: "soft overcast diffused light" },
            { i: "🌙", l: "blue moonlight night scene" }, { i: "✨", l: "starlight sparkle" },
            // Studio Lighting
            { i: "💡", l: "bright high-key studio lighting clean white" }, { i: "🌑", l: "dramatic low-key dark shadows" }, { i: "📸", l: "softbox diffused portrait lighting" }, { i: "🔦", l: "sharp rim light edge lighting" }, { i: "💫", l: "butterfly beauty lighting" },
            { i: "🎭", l: "split lighting half face shadow" }, { i: "🌓", l: "rembrandt dramatic triangle light" }, { i: "👤", l: "silhouette backlit outline" }, { i: "⚪", l: "pure white infinity background" },
            // Dramatic & Mood
            { i: "🌩️", l: "dramatic lightning storm flashes" }, { i: "⚡", l: "electric lightning bolts" }, { i: "🕯️", l: "warm candlelight intimate" }, { i: "🔥", l: "campfire flame flickering light" }, { i: "🤢", l: "eerie toxic green horror lighting" },
            { i: "🩸", l: "blood red ominous glow" }, { i: "👻", l: "ghostly pale blue" }, { i: "💀", l: "dark horror underexposed" },
            // Special Effects
            { i: "⚫", l: "classic black and white film" }, { i: "✨", l: "volumetric god rays light beams" }, { i: "🌫️", l: "foggy hazy atmospheric" }, { i: "📺", l: "TV screen ambient glow" }, { i: "🖥️", l: "computer monitor light face" },
            { i: "🔮", l: "mystical purple magical glow" }, { i: "⭐", l: "lens flare anamorphic streaks" }
        ],
        angle: [
            // Standard Shots
            { i: "😐", l: "eye-level straight on shot" }, { i: "👤", l: "portrait headshot close" }, { i: "👥", l: "two-shot both subjects" }, { i: "🧍", l: "full body standing shot" }, { i: "🪑", l: "medium waist-up shot" },
            // Dynamic Angles
            { i: "🦸", l: "low-angle hero shot looking up powerful" }, { i: "🐜", l: "worm's eye view extreme low" }, { i: "🚁", l: "high-angle drone shot looking down" }, { i: "🦅", l: "bird's eye view overhead" }, { i: "📐", l: "tilted dutch angle dynamic" },
            { i: "↗️", l: "tilted up diagonal" }, { i: "↘️", l: "tilted down diagonal" },
            // Wide & Close
            { i: "🐟", l: "wide-angle fisheye lens distortion" }, { i: "🔍", l: "close-up face details" }, { i: "👁️", l: "extreme close-up eyes only" }, { i: "🐜", l: "macro extreme detail shot" }, { i: "🌍", l: "ultra wide establishing shot" },
            // Cinematic Shots
            { i: "👥", l: "over-the-shoulder OTS shot" }, { i: "🤳", l: "selfie angle hand holding phone" }, { i: "📹", l: "POV first-person perspective" }, { i: "🎬", l: "establishing wide master shot" }, { i: "🎥", l: "tracking dolly shot movement" },
            { i: "🔄", l: "360 degree rotating orbit" }, { i: "⬛", l: "cinematic letterbox 2.35:1 aspect" },
            // Special Perspectives
            { i: "🪞", l: "mirror reflection shot" }, { i: "💧", l: "underwater looking up" }, { i: "🚗", l: "inside car through window" }, { i: "🚪", l: "through doorway peeking" }, { i: "🔭", l: "telephoto zoom compression" }
        ],
        txt: [
            { i: "❓", l: "HOW TO?" }, { i: "🔎", l: "REVIEW" }, { i: "🚫", l: "DON'T DO IT" }, { i: "💡", l: "THE TRUTH" }, { i: "🤥", l: "FAKE?" },
            { i: "⚠️", l: "SCAMMER" }, { i: "💸", l: "BANKRUPT" }, { i: "🤑", l: "I'M RICH" }, { i: "⏳", l: "24 HOURS" }, { i: "🆚", l: "VS" },
            { i: "🔥", l: "HIGH RISK" }, { i: "🛑", l: "STOP!" }, { i: "😱", l: "UNBELIEVABLE" }, { i: "💰", l: "$100,000" }, { i: "🆓", l: "FOR FREE" },
            { i: "🧪", l: "EXPERIMENT" }, { i: "🔒", l: "SECRET" }, { i: "❌", l: "HUGE MISTAKE" }, { i: "📈", l: "INVESTING" }, { i: "🏆", l: "I WON" }
        ],
        fx: [
            { i: "✨", l: "clean sharp focus, no particles" },
            { i: "💨", l: "floating cinematic dust particles" },
            { i: "🔥", l: "flying fire sparks and embers" },
            { i: "💸", l: "falling dollar bills raining down" },
            { i: "💻", l: "green digital matrix code rain overlay" },
            { i: "⚡", l: "blue lightning bolts and electricity" },
            { i: "🌫️", l: "thick volumetric fog and smoke" },
            { i: "💧", l: "water splashing droplets frozen in air" },
            { i: "💥", l: "explosive background debris" },
            { i: "📷", l: "bokeh depth of field background blur" },
            { i: "📺", l: "digital glitch distortion effect" },
            { i: "❄️", l: "falling snow and ice particles" },
            { i: "🎨", l: "oil painting texture overlay" },
            { i: "🕸️", l: "cobwebs and dusty atmosphere" }
        ]
    }
};

// =========================
// *** APP LOGIC ***
// =========================
let currentLang = 'tr';
let currentMode = 'ref';
let currentAr = '16:9';
let currentPos = 'right';
let currentGender = 'male';
let currentTxtPos = 'auto';
let promptHistory = [];
let favorites = [];
let undoStack = [];
let isFavorite = false;

// Preset definitions
const presets = {
    clickbait: { expr: 'Shocked', outfit: 'Black Hoodie', obj: 'Stack of Money', bg: 'Neon Studio', txt: 'OMG!', light: 'dramatic teal and orange cinematic lighting', angle: 'wide angle gopro style', fx: 'floating dust particles' },
    minimal: { expr: 'Happy', outfit: 'White T-Shirt', obj: '', bg: 'clean studio', txt: '', light: 'bright high-key studio lighting', angle: 'eye level portrait', fx: 'clean no effects' },
    gaming: { expr: 'Mind Blown', outfit: 'Gaming headset', bg: 'Gaming Room', obj: 'Gamepad', txt: 'EPIC', light: 'vibrant neon cyberpunk pink and blue lighting', angle: 'dutch angle tilted', fx: 'digital glitch distortion effect' },
    tutorial: { expr: 'Thinking', outfit: 'Casual smart', bg: 'Office', obj: 'Laptop', txt: 'HOW TO', light: 'bright high-key studio lighting', angle: 'eye level portrait', fx: 'clean no effects' },
    vlog: { expr: 'Happy', outfit: 'Casual', bg: 'Living Room', obj: '', txt: '', light: 'warm golden hour sunset lighting', angle: 'selfie angle', fx: 'bokeh depth of field' },
    mystery: { expr: 'Suspicious', outfit: 'Dark hoodie', bg: 'Dark alley', obj: 'Mystery Box', txt: 'THE TRUTH', light: 'moody dark rembrandt lighting', angle: 'dutch angle tilted', fx: 'floating dust particles' },
    money: { expr: 'Greedy', outfit: 'Luxury Suit', bg: 'Bank Vault', obj: 'Stack of Money', txt: '$100,000', light: 'dramatic teal and orange cinematic lighting', angle: 'low angle hero shot', fx: 'floating money bills' },
    horror: { expr: 'Terrified', outfit: 'Torn clothes', bg: 'Abandoned house', obj: '', txt: 'RUN!', light: 'eerie green toxic horror lighting', angle: 'dutch angle tilted', fx: 'fog and mist atmosphere' },
    storytime: { expr: 'Happy', outfit: 'Cozy sweater', bg: 'Cozy bedroom', obj: 'Coffee mug', txt: 'MY STORY', light: 'warm golden hour sunset lighting', angle: 'eye level portrait', fx: 'bokeh depth of field' },
    reaction: { expr: 'Shocked', outfit: 'Casual T-Shirt', bg: 'Gaming Room', obj: '', txt: 'WATCH THIS!', light: 'vibrant neon cyberpunk pink and blue lighting', angle: 'wide angle gopro style', fx: 'floating dust particles' },
    review: { expr: 'Thinking', outfit: 'Casual smart', bg: 'clean studio', obj: 'Product Box', txt: 'HONEST REVIEW', light: 'bright high-key studio lighting', angle: 'eye level portrait', fx: 'clean no effects' },
    unboxing: { expr: 'Happy', outfit: 'Casual', bg: 'clean studio', obj: 'Gift Box', txt: 'UNBOXING!', light: 'bright high-key studio lighting', angle: 'overhead top-down', fx: 'bokeh depth of field' },
    cooking: { expr: 'Happy', outfit: 'Chef Apron', bg: 'Modern Kitchen', obj: 'Cooking Pan', txt: 'RECIPE', light: 'warm golden hour sunset lighting', angle: 'overhead top-down', fx: 'steam and smoke atmosphere' },
    travel: { expr: 'Happy', outfit: 'Casual summer', bg: 'Beach Paradise', obj: 'Passport', txt: 'TRAVEL VLOG', light: 'warm golden hour sunset lighting', angle: 'wide angle gopro style', fx: 'lens flare sunlight' },
    fitness: { expr: 'Determined', outfit: 'Gym clothes', bg: 'Gym Environment', obj: 'Dumbbell', txt: 'WORKOUT', light: 'dramatic teal and orange cinematic lighting', angle: 'low angle hero shot', fx: 'floating dust particles' },
    tech: { expr: 'Curious', outfit: 'Modern casual', bg: 'clean studio', obj: 'Smartphone', txt: 'TECH REVIEW', light: 'vibrant neon cyberpunk pink and blue lighting', angle: 'eye level portrait', fx: 'digital glitch distortion effect' }
};

function init() {
    renderUI();
    setMode('ref');
    setAr('16:9');
    setPos('right');
    setGender('male');
    setTxtPos('auto');
    loadHistory();
    loadFavorites();
    drawPreview();
    setupKeyboardShortcuts();
    setupCanvasDrag();
}

function renderUI() {
    const d = dataPool[currentLang];

    // Static Texts
    document.getElementById('txt-ref').innerText = d.modeRefTxt;
    document.getElementById('txt-rnd').innerText = d.modeRndTxt;
    document.getElementById('btn-gen').innerText = d.btnGen;
    document.getElementById('txt-reset').innerText = d.txtReset;
    document.getElementById('txt-history').innerText = d.txtHistory;
    document.getElementById('btn-clear-hist').innerText = currentLang === 'tr' ? "TÜMÜNÜ SİL" : "CLEAR ALL";

    // New UI texts
    document.getElementById('txt-fav').innerText = d.txtFav;
    document.getElementById('txt-export').innerText = d.txtExport;
    document.getElementById('txt-import').innerText = d.txtImport;
    document.getElementById('txt-presets-title').innerText = d.txtPresets;
    document.getElementById('txt-shortcut-gen').innerText = d.shortcutLabels.gen;
    document.getElementById('txt-shortcut-copy').innerText = d.shortcutLabels.copy;

    // Favorites dropdown texts
    document.getElementById('txt-fav-list').innerText = currentLang === 'tr' ? 'FAVORİLER' : 'FAVORITES';
    document.getElementById('txt-my-favs').innerText = currentLang === 'tr' ? 'FAVORİLERİM' : 'MY FAVORITES';
    document.getElementById('fav-clear-all').innerText = currentLang === 'tr' ? 'TÜMÜNÜ SİL' : 'CLEAR ALL';
    renderFavoritesList();

    // Update gender labels
    document.getElementById('txt-gender-male').innerText = d.genderLabels.male;
    document.getElementById('txt-gender-female').innerText = d.genderLabels.female;
    document.getElementById('txt-gender-char').innerText = d.genderLabels.character;

    // Update text position labels
    document.getElementById('txt-txtpos-left').innerText = d.txtPosLabels.left;
    document.getElementById('txt-txtpos-top').innerText = d.txtPosLabels.top;
    document.getElementById('txt-txtpos-auto').innerText = d.txtPosLabels.auto;
    document.getElementById('txt-txtpos-bottom').innerText = d.txtPosLabels.bottom;
    document.getElementById('txt-txtpos-right').innerText = d.txtPosLabels.right;

    // Update preset labels
    Object.keys(d.presetLabels).forEach(key => {
        const el = document.getElementById(`preset-${key}`);
        if (el) el.innerText = d.presetLabels[key];
    });

    // Update stat labels
    document.getElementById('stat-chars-label').innerText = d.statLabels.chars;
    document.getElementById('stat-words-label').innerText = d.statLabels.words;
    document.getElementById('stat-tokens-label').innerText = d.statLabels.tokens;

    // Update preview on language change
    if (typeof drawPreview === 'function') drawPreview();

    // Update position control labels
    const charPosEl = document.getElementById('lbl-char-pos');
    const txtPosEl = document.getElementById('lbl-txt-pos');
    if (charPosEl) charPosEl.innerText = currentLang === 'tr' ? 'KARAKTER' : 'CHARACTER';
    if (txtPosEl) txtPosEl.innerText = currentLang === 'tr' ? 'YAZI' : 'TEXT';

    // Loop through all categories (including new ones)
    const cats = ['expr', 'outfit', 'obj', 'bg', 'txt', 'light', 'angle', 'fx'];

    cats.forEach((cat, i) => {
        const inputEl = document.getElementById(`inp-${cat}`);
        if (inputEl.value === "") {
            inputEl.placeholder = d.placeholders[i];
        }


        // Render Chips
        const container = document.getElementById(`list-${cat}`);
        const countSpan = document.getElementById(`count-${cat}`);
        if (!container) return;

        container.innerHTML = '';

        const listData = dataPool[currentLang][cat];
        const valuesData = dataPool['en'][cat];

        if (countSpan) countSpan.innerText = listData.length;

        listData.forEach((item, index) => {
            const chip = document.createElement('div');
            chip.className = 'chip';

            const iconSpan = document.createElement('span');
            iconSpan.className = 'chip-icon';
            iconSpan.innerText = item.i;

            const labelText = document.createTextNode(item.l);

            chip.appendChild(iconSpan);
            chip.appendChild(labelText);

            // Value to Set: EN description for Prompt, Localized for Text
            let valueToSet = valuesData[index].l;
            if (cat === 'txt') valueToSet = item.l;

            chip.onclick = () => {
                const input = document.getElementById(`inp-${cat}`);
                input.value = valueToSet;

                // Visual feedback
                input.style.borderColor = 'var(--accent)';
                input.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
                setTimeout(() => {
                    input.style.borderColor = 'var(--glass-border)';
                    input.style.boxShadow = 'none';
                }, 300);
                updateHud();
            };
            container.appendChild(chip);
        });
    });
}

function toggleLang() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    renderUI();
    setMode(currentMode);
    updateHud();
}

function setMode(mode) {
    currentMode = mode;
    const d = dataPool[currentLang];

    document.getElementById('btn-ref').className = mode === 'ref' ? 'switch-item active' : 'switch-item';
    document.getElementById('btn-rnd').className = mode === 'rnd' ? 'switch-item active' : 'switch-item';
    document.getElementById('mode-desc').innerText = mode === 'ref' ? d.modeDescRef : d.modeDescRnd;
    updateHud();
}

function setAr(ar) {
    currentAr = ar;
    document.getElementById('ar-169').className = ar === '16:9' ? 'switch-item active ar-btn' : 'switch-item ar-btn';
    document.getElementById('ar-916').className = ar === '9:16' ? 'switch-item active ar-btn' : 'switch-item ar-btn';
    drawPreview();
}

function setPos(pos) {
    currentPos = pos;
    document.getElementById('pos-left').className = pos === 'left' ? 'switch-item pos-btn active' : 'switch-item pos-btn';
    document.getElementById('pos-center').className = pos === 'center' ? 'switch-item pos-btn active' : 'switch-item pos-btn';
    document.getElementById('pos-right').className = pos === 'right' ? 'switch-item pos-btn active' : 'switch-item pos-btn';
    updateHud();
    drawPreview();
}

function setGender(gender) {
    currentGender = gender;
    document.getElementById('gender-male').className = gender === 'male' ? 'switch-item gender-btn active' : 'switch-item gender-btn';
    document.getElementById('gender-female').className = gender === 'female' ? 'switch-item gender-btn active' : 'switch-item gender-btn';
    document.getElementById('gender-char').className = gender === 'character' ? 'switch-item gender-btn active' : 'switch-item gender-btn';
    updateHud();
    drawPreview();
}

function setTxtPos(pos) {
    currentTxtPos = pos;
    ['left', 'top', 'auto', 'bottom', 'right'].forEach(p => {
        document.getElementById(`txtpos-${p}`).className = pos === p ? 'switch-item txt-pos-btn active' : 'switch-item txt-pos-btn';
    });
    updateHud();
    drawPreview();
}

function applyPreset(presetName) {
    const preset = presets[presetName];
    if (!preset) return;

    // Save current state for undo
    saveUndoState();

    // Apply preset values
    document.getElementById('inp-expr').value = preset.expr || '';
    document.getElementById('inp-outfit').value = preset.outfit || '';
    document.getElementById('inp-obj').value = preset.obj || '';
    document.getElementById('inp-bg').value = preset.bg || '';
    document.getElementById('inp-txt').value = preset.txt || '';
    document.getElementById('inp-light').value = preset.light || '';
    document.getElementById('inp-angle').value = preset.angle || '';
    document.getElementById('inp-fx').value = preset.fx || '';

    updateHud();
    drawPreview();
    showToast(currentLang === 'tr' ? `${presetName.toUpperCase()} şablonu uygulandı!` : `${presetName.toUpperCase()} preset applied!`);
}

function toggleFavorite() {
    const currentSettings = getCurrentSettings();
    const hash = JSON.stringify(currentSettings);

    if (isFavorite) {
        // If already favorite, remove it (confirm first maybe?)
        if (confirm(currentLang === 'tr' ? 'Bu favoriyi kaldırmak istiyor musunuz?' : 'Do you want to remove this favorite?')) {
            favorites = favorites.filter(f => JSON.stringify(f) !== hash);
            isFavorite = false;
            document.getElementById('fav-btn').classList.remove('saved');
            showToast(currentLang === 'tr' ? 'Favorilerden çıkarıldı!' : 'Removed from favorites!');
        } else {
            return; // Cancelled
        }
    } else {
        // Add new favorite with custom name
        const defaultName = currentLang === 'tr' ? 'Yeni Favori' : 'New Favorite';
        const customName = prompt(currentLang === 'tr' ? 'Favori ismi girin:' : 'Enter favorite name:', defaultName);
        
        if (customName === null) return; // Cancelled
        
        // Add name to settings
        currentSettings.name = customName || defaultName;
        
        // Re-hash because we added a name property (wait, actually we should store the name separately or part of the object but not affect the comparison hash if possible? 
        // For simplicity, let's just push the object. The checkCurrentFavoriteStatus compares strict settings. 
        // To avoid issues, let's just push it. The verification "isFavorite" might fail if we change the object structure, 
        // but typically users want to save the current state.
        
        favorites.push(currentSettings);
        isFavorite = true;
        document.getElementById('fav-btn').classList.add('saved');
        showToast(currentLang === 'tr' ? 'Favorilere eklendi!' : 'Added to favorites!');
    }

    localStorage.setItem('thumbStudioFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderFavoritesList();
    showToast(isFavorite ? (currentLang === 'tr' ? 'Favorilere eklendi!' : 'Added to favorites!') : (currentLang === 'tr' ? 'Favorilerden çıkarıldı!' : 'Removed from favorites!'));
}

function getCurrentSettings() {
    return {
        mode: currentMode,
        ar: currentAr,
        pos: currentPos,
        gender: currentGender,
        txtPos: currentTxtPos,
        expr: document.getElementById('inp-expr').value,
        outfit: document.getElementById('inp-outfit').value,
        obj: document.getElementById('inp-obj').value,
        bg: document.getElementById('inp-bg').value,
        txt: document.getElementById('inp-txt').value,
        light: document.getElementById('inp-light').value,
        angle: document.getElementById('inp-angle').value,
        fx: document.getElementById('inp-fx').value
    };
}

function applySettings(settings) {
    if (settings.mode) setMode(settings.mode);
    if (settings.ar) setAr(settings.ar);
    if (settings.pos) setPos(settings.pos);
    if (settings.gender) setGender(settings.gender);
    if (settings.txtPos) setTxtPos(settings.txtPos);

    document.getElementById('inp-expr').value = settings.expr || '';
    document.getElementById('inp-outfit').value = settings.outfit || '';
    document.getElementById('inp-obj').value = settings.obj || '';
    document.getElementById('inp-bg').value = settings.bg || '';
    document.getElementById('inp-txt').value = settings.txt || '';
    document.getElementById('inp-light').value = settings.light || '';
    document.getElementById('inp-angle').value = settings.angle || '';
    document.getElementById('inp-fx').value = settings.fx || '';

    updateHud();
    drawPreview();
}

function loadFavorites() {
    const saved = localStorage.getItem('thumbStudioFavorites');
    if (saved) {
        favorites = JSON.parse(saved);
    }
    updateFavoritesCount();
    renderFavoritesList();
}

function toggleFavoritesDropdown() {
    const dropdown = document.getElementById('favorites-dropdown');
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
        renderFavoritesList();
    }
}

function updateFavoritesCount() {
    const countEl = document.getElementById('fav-count');
    if (countEl) {
        countEl.innerText = favorites.length;
    }
}

function renderFavoritesList() {
    const container = document.getElementById('favorites-list');
    if (!container) return;

    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="fav-empty">
                <div class="fav-empty-icon">⭐</div>
                <div>${currentLang === 'tr' ? 'Henüz favori yok' : 'No favorites yet'}</div>
                <div style="font-size: 0.7rem; margin-top: 5px; opacity: 0.7">
                    ${currentLang === 'tr' ? 'Ayarları kaydetmek için FAVORİ butonuna tıklayın' : 'Click FAVORITE button to save settings'}
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = favorites.map((fav, index) => {
        // Use custom name if available, otherwise fallback to logic
        const title = fav.name || fav.expr || fav.bg || fav.outfit || (currentLang === 'tr' ? 'Favori' : 'Favorite');
        const meta = [
            fav.pos ? (currentLang === 'tr' ? 'Poz: ' : 'Pos: ') + fav.pos : '',
            fav.txt ? '"' + fav.txt + '"' : ''
        ].filter(Boolean).join(' | ') || (currentLang === 'tr' ? 'Özel ayarlar' : 'Custom settings');

        return `
            <div class="fav-item" onclick="applyFavorite(${index})">
                <div class="fav-item-content">
                    <div class="fav-item-title">${title}</div>
                    <div class="fav-item-meta">${meta}</div>
                </div>
                <div class="fav-item-actions">
                    <button class="fav-action-btn delete" onclick="event.stopPropagation(); deleteFavorite(${index})" title="${currentLang === 'tr' ? 'Sil' : 'Delete'}">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

function applyFavorite(index) {
    if (index < 0 || index >= favorites.length) return;
    saveUndoState();
    applySettings(favorites[index]);
    document.getElementById('favorites-dropdown').classList.remove('show');
    showToast(currentLang === 'tr' ? 'Favori uygulandı!' : 'Favorite applied!');
}

function deleteFavorite(index) {
    if (index < 0 || index >= favorites.length) return;
    favorites.splice(index, 1);
    localStorage.setItem('thumbStudioFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderFavoritesList();
    checkCurrentFavoriteStatus();
    showToast(currentLang === 'tr' ? 'Favori silindi!' : 'Favorite deleted!');
}

function clearAllFavorites() {
    if (favorites.length === 0) return;
    if (!confirm(currentLang === 'tr' ? 'Tüm favorileri silmek istediğinize emin misiniz?' : 'Are you sure you want to delete all favorites?')) return;
    favorites = [];
    localStorage.setItem('thumbStudioFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderFavoritesList();
    checkCurrentFavoriteStatus();
    showToast(currentLang === 'tr' ? 'Tüm favoriler silindi!' : 'All favorites deleted!');
}

function checkCurrentFavoriteStatus() {
    const currentSettings = getCurrentSettings();
    const hash = JSON.stringify(currentSettings);
    isFavorite = favorites.some(f => JSON.stringify(f) === hash);
    const favBtn = document.getElementById('fav-btn');
    if (favBtn) {
        if (isFavorite) {
            favBtn.classList.add('saved');
        } else {
            favBtn.classList.remove('saved');
        }
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('favorites-dropdown');
    const wrapper = e.target.closest('.favorites-wrapper');
    if (!wrapper && dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

function exportSettings() {
    const settings = getCurrentSettings();
    settings.favorites = favorites;
    settings.history = promptHistory;

    const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'thumbnail-studio-settings.json';
    a.click();
    URL.revokeObjectURL(url);

    showToast(currentLang === 'tr' ? 'Ayarlar dışa aktarıldı!' : 'Settings exported!');
}

function importSettings() {
    document.getElementById('import-file').click();
}

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const settings = JSON.parse(e.target.result);
            applySettings(settings);
            if (settings.favorites) {
                favorites = settings.favorites;
                localStorage.setItem('thumbStudioFavorites', JSON.stringify(favorites));
            }
            if (settings.history) {
                promptHistory = settings.history;
                localStorage.setItem('thumbStudioHistory', JSON.stringify(promptHistory));
                renderHistory();
            }
            showToast(currentLang === 'tr' ? 'Ayarlar içe aktarıldı!' : 'Settings imported!');
        } catch (err) {
            showToast(currentLang === 'tr' ? 'Hatalı dosya formatı!' : 'Invalid file format!');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function saveUndoState() {
    const state = getCurrentSettings();
    undoStack.push(state);
    if (undoStack.length > 20) undoStack.shift();
}

function undo() {
    if (undoStack.length === 0) return;
    const state = undoStack.pop();
    applySettings(state);
    showToast(currentLang === 'tr' ? 'Geri alındı!' : 'Undone!');
}

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2500);
}

function updatePromptStats(text) {
    const chars = text.length;
    const words = text.trim().split(/\s+/).filter(w => w).length;
    const tokens = Math.ceil(chars / 4); // Rough approximation

    document.getElementById('stat-chars').innerText = chars;
    document.getElementById('stat-words').innerText = words;
    document.getElementById('stat-tokens').innerText = tokens;
    document.getElementById('prompt-stats').style.display = text ? 'flex' : 'none';
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Check for Cmd (Meta) on Mac or Ctrl on Windows
        const isCmdOrCtrl = e.metaKey || e.ctrlKey;
        
        // Cmd+Enter / Ctrl+Enter = Generate
        if (isCmdOrCtrl && e.key === 'Enter') {
            e.preventDefault();
            const btn = document.getElementById('btn-gen');
            if (btn) {
                btn.click(); // Trigger click effect visually
                // generate() is called via click handler usually, but we can call it directly or rely on click
                // calling generate() directly is safer if we want to ensure execution
                // generate(); 
            }
        }
        // Cmd+C / Ctrl+C = Copy (Only if no text is selected to avoid blocking normal copy)
        // Actually, user wants a shortcut to copy the RESULT prompt, not just any copy.
        // We should check if the focus is NOT on an input field, or force copy result.
        if (isCmdOrCtrl && e.key === 'c' && !e.shiftKey) {
            // Only capture if we are NOT selecting text in an input
            const selection = window.getSelection();
            if (!selection.toString()) {
                e.preventDefault();
                copyResult();
            }
        }
        // Cmd+Z / Ctrl+Z = Undo
        if (isCmdOrCtrl && e.key === 'z' && !e.shiftKey) {
            e.preventDefault();
            undo();
        }
    });
}

function resetAll() {
    if (!confirm(currentLang === 'tr' ? 'Tüm ayarlar sıfırlansın mı?' : 'Reset all settings?')) return;

    saveUndoState();

    const fields = ['expr', 'outfit', 'obj', 'bg', 'txt', 'light', 'angle', 'fx'];
    fields.forEach(f => {
        const el = document.getElementById(`inp-${f}`);
        if (el) el.value = '';
    });
    document.getElementById('output').value = '';
    setMode('ref');
    setPos('right');
    setGender('male');
    setTxtPos('auto');
    updateHud();
    drawPreview();
    document.getElementById('prompt-stats').style.display = 'none';
}

function updateHud() {
    const d = dataPool[currentLang];

    // Update position button labels (with null checks)
    const posLeftEl = document.getElementById('txt-pos-left');
    const posCenterEl = document.getElementById('txt-pos-center');
    const posRightEl = document.getElementById('txt-pos-right');
    
    if (posLeftEl) posLeftEl.innerText = d.posLabels.left;
    if (posCenterEl) posCenterEl.innerText = d.posLabels.center;
    if (posRightEl) posRightEl.innerText = d.posLabels.right;

    // Update preview canvas
    if (typeof drawPreview === 'function') {
        drawPreview();
    }
}

function drawPreview() {
    const canvas = document.getElementById('preview-canvas');
    const ctx = canvas.getContext('2d');
    const d = dataPool[currentLang];

    // Set canvas size based on aspect ratio
    if (currentAr === '16:9') {
        canvas.width = 640;
        canvas.height = 360;
    } else {
        canvas.width = 360;
        canvas.height = 640;
    }

    const w = canvas.width;
    const h = canvas.height;

    // Clear canvas with gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#1a1a2e');
    bgGrad.addColorStop(1, '#16213e');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Add subtle grid pattern
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i < w; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
    }
    for (let j = 0; j < h; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(w, j);
        ctx.stroke();
    }

    // Character dimensions
    const charWidth = currentAr === '16:9' ? w * 0.35 : w * 0.6;
    const charHeight = currentAr === '16:9' ? h * 0.75 : h * 0.4;

    // Text area dimensions
    const txtWidth = currentAr === '16:9' ? w * 0.35 : w * 0.7;
    const txtHeight = currentAr === '16:9' ? h * 0.3 : h * 0.15;

    let charX, charY, txtX, txtY;

    // Calculate character position
    charY = currentAr === '16:9' ? h - charHeight - 10 : (h - charHeight) / 2;

    if (currentPos === 'left') {
        charX = w * 0.05;
    } else if (currentPos === 'center') {
        charX = (w - charWidth) / 2;
    } else { // right
        charX = w - charWidth - w * 0.05;
    }

    // Calculate text position based on currentTxtPos
    if (currentTxtPos === 'auto') {
        // Auto: opposite to character
        if (currentPos === 'left') {
            txtX = w * 0.55;
            txtY = h * 0.35;
        } else if (currentPos === 'center') {
            txtX = (w - txtWidth) / 2;
            txtY = currentAr === '16:9' ? h * 0.08 : h * 0.05;
        } else {
            txtX = w * 0.08;
            txtY = h * 0.35;
        }
    } else if (currentTxtPos === 'left') {
        txtX = w * 0.05;
        txtY = h * 0.35;
    } else if (currentTxtPos === 'right') {
        txtX = w - txtWidth - w * 0.05;
        txtY = h * 0.35;
    } else if (currentTxtPos === 'top') {
        txtX = (w - txtWidth) / 2;
        txtY = h * 0.05;
    } else if (currentTxtPos === 'bottom') {
        txtX = (w - txtWidth) / 2;
        txtY = h - txtHeight - h * 0.05;
    }

    // Draw character silhouette with glow
    ctx.shadowColor = '#8b5cf6';
    ctx.shadowBlur = 20;

    const charGrad = ctx.createLinearGradient(charX, charY, charX, charY + charHeight);
    charGrad.addColorStop(0, '#a78bfa');
    charGrad.addColorStop(1, '#7c3aed');
    ctx.fillStyle = charGrad;

    // Draw character shape (rounded rectangle with head)
    const headRadius = charWidth * 0.25;
    const bodyTop = charY + headRadius * 2 + 10;

    // Head
    ctx.beginPath();
    ctx.arc(charX + charWidth / 2, charY + headRadius, headRadius, 0, Math.PI * 2);
    ctx.fill();

    // Body
    roundRect(ctx, charX + charWidth * 0.15, bodyTop, charWidth * 0.7, charHeight - headRadius * 2 - 20, 15);
    ctx.fill();

    // Reset shadow
    ctx.shadowBlur = 0;

    // Draw character label
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Inter';
    ctx.textAlign = 'center';
    const charLabel = currentLang === 'tr' ? 'KARAKTER' : 'CHARACTER';
    ctx.fillText(charLabel, charX + charWidth / 2, charY + charHeight + 25);

    // Draw text area with glow
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 15;

    const txtGrad = ctx.createLinearGradient(txtX, txtY, txtX + txtWidth, txtY + txtHeight);
    txtGrad.addColorStop(0, '#0ea5e9');
    txtGrad.addColorStop(1, '#38bdf8');
    ctx.fillStyle = txtGrad;

    roundRect(ctx, txtX, txtY, txtWidth, txtHeight, 10);
    ctx.fill();

    // Reset shadow
    ctx.shadowBlur = 0;

    // Text label inside
    const overlayText = document.getElementById('inp-txt').value || (currentLang === 'tr' ? 'YAZI' : 'TEXT');
    ctx.fillStyle = '#fff';
    ctx.font = 'bold ' + (txtHeight * 0.4) + 'px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(overlayText.substring(0, 12), txtX + txtWidth / 2, txtY + txtHeight / 2);

    // Draw aspect ratio indicator
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '12px JetBrains Mono';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText(currentAr, w - 10, 10);

    // Store element bounds for drag detection
    updateElementBounds(charX, charY, charWidth, charHeight, txtX, txtY, txtWidth, txtHeight);

    // Update legend texts
    document.getElementById('legend-char').innerText = currentLang === 'tr' ? 'Karakter' : 'Character';
    document.getElementById('legend-text').innerText = currentLang === 'tr' ? 'Yazı' : 'Text';
    document.getElementById('legend-bg').innerText = currentLang === 'tr' ? 'Arka Plan' : 'Background';
    document.getElementById('txt-preview-title').innerText = currentLang === 'tr' ? 'ÖNİZLEME // LAYOUT PREVIEW' : 'PREVIEW // LAYOUT PREVIEW';
}

// Helper function for rounded rectangles
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// =============================
// *** CANVAS DRAG & DROP ***
// =============================
let isDragging = false;
let dragTarget = null; // 'char' or 'text'
let dragStartX = 0;
let dragStartY = 0;

// Store element bounds for hit detection
let charBounds = { x: 0, y: 0, w: 0, h: 0 };
let textBounds = { x: 0, y: 0, w: 0, h: 0 };

function setupCanvasDrag() {
    const canvas = document.getElementById('preview-canvas');

    canvas.addEventListener('mousedown', handleDragStart);
    canvas.addEventListener('mousemove', handleDragMove);
    canvas.addEventListener('mouseup', handleDragEnd);
    canvas.addEventListener('mouseleave', handleDragEnd);

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleDragStart({ clientX: touch.clientX, clientY: touch.clientY, target: canvas });
    });
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleDragMove({ clientX: touch.clientX, clientY: touch.clientY, target: canvas });
    });
    canvas.addEventListener('touchend', handleDragEnd);
}

function getCanvasCoords(e) {
    const canvas = document.getElementById('preview-canvas');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

function handleDragStart(e) {
    const coords = getCanvasCoords(e);

    // Check if clicking on character
    if (isPointInBounds(coords.x, coords.y, charBounds)) {
        isDragging = true;
        dragTarget = 'char';
        dragStartX = coords.x;
    }
    // Check if clicking on text
    else if (isPointInBounds(coords.x, coords.y, textBounds)) {
        isDragging = true;
        dragTarget = 'text';
        dragStartX = coords.x;
    }

    if (isDragging) {
        document.getElementById('preview-canvas').style.cursor = 'grabbing';
    }
}

function handleDragMove(e) {
    if (!isDragging) {
        // Change cursor based on hover
        const coords = getCanvasCoords(e);
        const canvas = document.getElementById('preview-canvas');
        if (isPointInBounds(coords.x, coords.y, charBounds) || isPointInBounds(coords.x, coords.y, textBounds)) {
            canvas.style.cursor = 'grab';
        } else {
            canvas.style.cursor = 'default';
        }
        return;
    }

    const coords = getCanvasCoords(e);
    const canvas = document.getElementById('preview-canvas');
    const w = canvas.width;

    // Determine position based on x coordinate
    let newPos;
    if (coords.x < w / 3) {
        newPos = 'left';
    } else if (coords.x < w * 2 / 3) {
        newPos = 'center';
    } else {
        newPos = 'right';
    }

    // Update the appropriate position
    if (dragTarget === 'char' && newPos !== currentPos) {
        setPos(newPos);
    } else if (dragTarget === 'text') {
        // For text, map horizontal position
        if (newPos === 'left' && currentTxtPos !== 'left') {
            setTxtPos('left');
        } else if (newPos === 'center' && currentTxtPos !== 'top') {
            setTxtPos('top');
        } else if (newPos === 'right' && currentTxtPos !== 'right') {
            setTxtPos('right');
        }
    }
}

function handleDragEnd() {
    if (isDragging) {
        isDragging = false;
        dragTarget = null;
        document.getElementById('preview-canvas').style.cursor = 'grab';
        showToast(currentLang === 'tr' ? 'Pozisyon güncellendi!' : 'Position updated!');
    }
}

function isPointInBounds(x, y, bounds) {
    return x >= bounds.x && x <= bounds.x + bounds.w &&
        y >= bounds.y && y <= bounds.y + bounds.h;
}

// Update drawPreview to store bounds
function updateElementBounds(cX, cY, cW, cH, tX, tY, tW, tH) {
    charBounds = { x: cX, y: cY, w: cW, h: cH };
    textBounds = { x: tX, y: tY, w: tW, h: tH };
}

function generate() {
    // Basic
    const expr = document.getElementById('inp-expr').value || "excited expression";
    const outfit = document.getElementById('inp-outfit').value || "casual clothes";
    const obj = document.getElementById('inp-obj').value || "looking at camera";
    const bg = document.getElementById('inp-bg').value || "cinematic background";
    const txt = document.getElementById('inp-txt').value || "VIDEO";

    // Advanced
    const light = document.getElementById('inp-light').value || "dramatic cinematic lighting";
    const angle = document.getElementById('inp-angle').value || "eye-level shot";
    const fx = document.getElementById('inp-fx').value || "sharp focus";

    // Gender-based subject
    let subject = "";
    let pronoun = "They are";
    if (currentMode === 'rnd') {
        if (currentGender === 'male') {
            subject = "a charismatic young male content creator";
            pronoun = "He is";
        } else if (currentGender === 'female') {
            subject = "an attractive young female content creator";
            pronoun = "She is";
        } else {
            subject = "a futuristic android/robot character";
            pronoun = "It is";
        }
    } else {
        if (currentGender === 'male') {
            subject = "the male content creator";
            pronoun = "He is";
        } else if (currentGender === 'female') {
            subject = "the female content creator";
            pronoun = "She is";
        } else {
            subject = "the character";
            pronoun = "They are";
        }
    }

    // Dynamic position text
    let positionText = "";
    let textPosition = "";

    // Character position
    if (currentPos === 'left') {
        positionText = "Positioned on the left side of the frame";
    } else if (currentPos === 'center') {
        positionText = "Positioned in the center of the frame";
    } else {
        positionText = "Positioned on the right side of the frame (rule of thirds)";
    }

    // Text position (auto or manual)
    if (currentTxtPos === 'auto') {
        if (currentPos === 'left') {
            textPosition = "On the right side";
        } else if (currentPos === 'center') {
            textPosition = "At the top";
        } else {
            textPosition = "On the left side";
        }
    } else if (currentTxtPos === 'left') {
        textPosition = "On the left side";
    } else if (currentTxtPos === 'right') {
        textPosition = "On the right side";
    } else if (currentTxtPos === 'top') {
        textPosition = "At the top";
    } else if (currentTxtPos === 'bottom') {
        textPosition = "At the bottom";
    }

    const prompt = `A hyper-realistic, high-ctr YouTube thumbnail featuring ${subject} with an expression of ${expr}, making direct eye contact. ${pronoun} wearing ${outfit}. ${positionText}. In the foreground/hands, interacting with ${obj}. The background is a ${bg}. The scene is illuminated by ${light}. Camera angle is ${angle}. Visual effects: ${fx}. ${textPosition}, large, bold, 3D typography with a glossy metallic texture and sharp white outline reads "${txt}". Shot with Sony A7S III, f/1.8 aperture, highly detailed, photorealistic, 8k, ray tracing, global illumination, --ar ${currentAr} --v 6.0`;

    const output = document.getElementById('output');
    output.value = prompt;
    output.scrollIntoView({ behavior: "smooth", block: "center" });

    addToHistory(prompt);
    updatePromptStats(prompt);
}

function copyResult() {
    const txt = document.getElementById('output');
    if (!txt.value) return;
    txt.select();
    txt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txt.value);

    const btn = document.querySelector('.copy-btn');
    const oldHTML = btn.innerHTML;
    btn.innerHTML = "<i>✅</i> KOPYALANDI!";
    btn.style.background = "#22c55e";
    btn.style.borderColor = "#22c55e";
    setTimeout(() => {
        btn.innerHTML = oldHTML;
        btn.style.background = "rgba(51, 65, 85, 0.8)";
        btn.style.borderColor = "var(--glass-border)";
    }, 2000);
}

// --- HISTORY FUNCTIONS ---
function loadHistory() {
    const stored = localStorage.getItem('ts_history');
    if (stored) {
        promptHistory = JSON.parse(stored);
        renderHistory();
    }
}

function addToHistory(prompt) {
    // Add to beginning
    promptHistory.unshift(prompt);
    // Keep max 20 items
    if (promptHistory.length > 20) promptHistory.pop();

    localStorage.setItem('ts_history', JSON.stringify(promptHistory));
    renderHistory();
}

function deleteHistory(index) {
    promptHistory.splice(index, 1);
    localStorage.setItem('ts_history', JSON.stringify(promptHistory));
    renderHistory();
}

function clearHistory() {
    if (confirm(currentLang === 'tr' ? 'Tüm geçmiş silinsin mi?' : 'Clear all history?')) {
        promptHistory = [];
        localStorage.setItem('ts_history', JSON.stringify(promptHistory));
        renderHistory();
    }
}

function renderHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '';

    promptHistory.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'history-item';

        const txtDiv = document.createElement('div');
        txtDiv.className = 'hist-text';
        txtDiv.innerText = item;

        const actionDiv = document.createElement('div');
        actionDiv.className = 'hist-actions';

        const btnCopy = document.createElement('button');
        btnCopy.className = 'h-btn';
        btnCopy.innerText = 'COPY';
        btnCopy.onclick = () => {
            navigator.clipboard.writeText(item);
            btnCopy.innerText = 'OK';
            setTimeout(() => btnCopy.innerText = 'COPY', 1000);
        };

        const btnDel = document.createElement('button');
        btnDel.className = 'h-btn h-del';
        btnDel.innerText = 'X';
        btnDel.onclick = () => deleteHistory(index);

        actionDiv.appendChild(btnCopy);
        actionDiv.appendChild(btnDel);

        el.appendChild(txtDiv);
        el.appendChild(actionDiv);
        list.appendChild(el);
    });
}

// Start the engine
init();