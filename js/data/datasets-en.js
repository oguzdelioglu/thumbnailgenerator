/**
 * English Language Dataset
 */

export const englishData = {
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
    presetLabels: {
        clickbait: "CLICKBAIT", minimal: "MINIMAL", gaming: "GAMING", tutorial: "TUTORIAL",
        vlog: "VLOG", mystery: "MYSTERY", money: "MONEY/FINANCE", horror: "HORROR",
        storytime: "STORYTIME", reaction: "REACTION", review: "REVIEW", unboxing: "UNBOXING",
        cooking: "COOKING", travel: "TRAVEL", fitness: "FITNESS", tech: "TECH"
    },
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
};
