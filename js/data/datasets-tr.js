/**
 * Turkish Language Dataset
 */

export const turkishData = {
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
    presetLabels: {
        clickbait: "CLICKBAIT", minimal: "MİNİMAL", gaming: "GAMING", tutorial: "TUTORIAL",
        vlog: "VLOG", mystery: "GİZEM", money: "PARA/FİNANS", horror: "KORKU",
        storytime: "HİKAYE", reaction: "REAKSİYON", review: "İNCELEME", unboxing: "KUTU AÇILIMI",
        cooking: "YEMEKTARİFİ", travel: "SEYAHAT", fitness: "FİTNESS", tech: "TEKNOLOJİ"
    },
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
};
