
document.getElementById("playerpage").style.display = "block";
document.getElementById("card").style.display = "none";
document.getElementById("holder").style.display = "none";

document.getElementById("0").style.display = "none";
document.getElementById("1").style.display = "none";
document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";
document.getElementById("4").style.display = "none";
document.getElementById("5").style.display = "none";
document.getElementById("6").style.display = "none";

document.getElementById("result0").style.display = "none";
document.getElementById("result1").style.display = "none";
document.getElementById("result2").style.display = "none";
document.getElementById("result3").style.display = "none";
document.getElementById("result4").style.display = "none";
document.getElementById("result5").style.display = "none";
document.getElementById("result6").style.display = "none";

document.getElementById("20").style.display = "none";
document.getElementById("21").style.display = "none";
document.getElementById("22").style.display = "none";
document.getElementById("23").style.display = "none";
document.getElementById("24").style.display = "none";
document.getElementById("25").style.display = "none";
document.getElementById("26").style.display = "none";

document.getElementById("help").style.display = "none";
document.getElementById("play").style.display = "none";
document.getElementById("checks").style.display = "none";
document.getElementById("nextbutton").style.display = "none";
document.getElementById("startgame").style.display = "none";
document.getElementById("loverdiv").style.display = "none";
document.getElementById("detectiveoverview").style.display = "none";
document.getElementById("prosecutordiv").style.display = "none";
document.getElementById("voting").style.display = "none";
document.getElementById("error").style.display = "none";
document.getElementById("reveal").style.display = "none";
document.getElementById("results").style.display = "none";


let player0
let player1
let player2
let player3
let player4
let player5
let players
let playerlist
let result
let rolelist

let imposter

let loverrandom
let loverpartner
let loverchance
let lover
let loverstate

let detectiverandom
let detectivechance
let detective
let detectivestate


let jesterrandom
let jesterchance
let jesterstate
let jester

let prosecutorrandom
let prosecutorchance
let prosecutor
let prosecutorstate
let target
let targetlist;

let role
let x  //variable used for roles in the arrays
let hint
let wordlist = [
    "book", "chair", "knife", "window", "bed", "clock", "backpack", "pencil", "helmet", "fork",
    "spoon", "plate", "lamp", "desk", "key", "lock", "door", "mirror", "sofa", "blanket",
    "dog", "cat", "bird", "turtle", "fish", "lizard", "frog", "elephant", "monkey", "mouse",
    "lion", "tiger", "bear", "wolf", "fox", "deer", "horse", "cow", "sheep", "goat",
    "pizza", "burger", "sandwich", "apple", "cookies", "milk", "spaghetti", "cheese", "carrot", "bread",
    "rice", "egg", "steak", "salad", "soup", "banana", "grapes", "orange", "melon", "peach",
    "phone", "laptop", "computer", "tv", "camera", "tablet", "router", "server", "battery", "screen",
    "keyboard", "mousepad", "drone", "webcam", "speaker", "monitor", "printer", "scanner", "microphone", "charger",
    "tree", "forest", "rain", "ocean", "snow", "fire", "stone", "planet", "moon", "desert",
    "cave", "river", "island", "mountain", "valley", "lake", "waterfall", "hill", "sky", "cloud",
    "beach", "park", "zoo", "library", "school", "hospital", "hotel", "airport", "city", "village",
    "market", "restaurant", "cinema", "theater", "stadium", "arena", "office", "factory", "warehouse", "garage",
    "matrix", "avatar", "joker", "alien", "inception", "gladiator", "frozen", "shrek", "titanic", "rocky",
    "minions", "up", "cars", "ratatouille", "nemo", "dory", "hercules", "mulan", "tarzan", "aladdin",

    "crown", "ring", "necklace", "bracelet", "watch", "belt", "wallet", "glasses", "scarf", "hat",
    "boots", "sandals", "socks", "jacket", "coat", "shirt", "pants", "shorts", "sweater", "hoodie",
    "ant", "bee", "butterfly", "spider", "mosquito", "fly", "beetle", "dragonfly", "wasp", "grasshopper",
    "shark", "whale", "dolphin", "octopus", "crab", "lobster", "seal", "penguin", "seagull", "eagle",
    "pasta", "noodles", "dumplings", "sushi", "ramen", "curry", "taco", "burrito", "nachos", "fries",
    "donut", "cake", "cupcake", "brownie", "icecream", "yogurt", "honey", "jam", "butter", "cream",
    "usb", "harddrive", "software", "app", "browser", "wifi", "bluetooth", "signal", "network", "cloud",
    "display", "sensor", "lens", "pixel", "code", "data", "file", "folder", "download", "upload",
    "volcano", "earthquake", "tsunami", "hurricane", "tornado", "blizzard", "storm", "thunder", "lightning", "rainbow",
    "sunrise", "sunset", "star", "galaxy", "universe", "comet", "asteroid", "orbit", "gravity", "space",
    "bridge", "tower", "castle", "palace", "temple", "church", "museum", "mall", "shop", "bakery",
    "cafe", "bar", "club", "schoolyard", "playground", "subway", "station", "port", "harbor", "highway",
    "batman", "superman", "spiderman", "ironman", "thor", "hulk", "deadpool", "venom", "wolverine", "flash",

    "compass", "map", "binoculars", "telescope", "flashlight", "lantern", "rope", "ladder", "hammer", "screwdriver",
    "wrench", "drill", "saw", "nail", "bolt", "gear", "engine", "motor", "wheel", "brake",
    "snake", "crocodile", "alligator", "iguana", "chameleon", "gecko", "cobra", "viper", "python", "anaconda",
    "turkey", "chicken", "duck", "goose", "peacock", "ostrich", "sparrow", "crow", "raven", "owl",
    "salmon", "tuna", "shrimp", "anchovy", "sardine", "cod", "trout", "eel", "clam", "oyster",
    "lettuce", "tomato", "cucumber", "onion", "pepper", "spinach", "broccoli", "corn", "peas", "beans",
    "avocado", "mango", "pineapple", "coconut", "kiwi", "plum", "pear", "fig", "date", "berry",
    "router", "modem", "firewall", "encryption", "algorithm", "database", "serverrack", "motherboard", "processor", "gpu",
    "keyboard", "touchpad", "stylus", "headphones", "earbuds", "speaker", "microchip", "circuit", "voltage", "current",
    "glacier", "reef", "canyon", "dune", "oasis", "cliff", "plateau", "delta", "lagoon", "marsh",
    "fog", "mist", "breeze", "wind", "hail", "frost", "dew", "iceberg", "avalanche", "eruption",
    "schoolbus", "taxi", "train", "tram", "bicycle", "motorcycle", "car", "truck", "van", "scooter",
    "elevator", "escalator", "stairs", "hallway", "corridor", "room", "kitchen", "bathroom", "bedroom", "garage",
    "harry potter", "lord of the romgs", "star wars", "jurassic park", "terminator", "godfather", "forrest gump", "matrix 2", "avatar 2", "rocky 2", "notebook", "whiteboard", "marker", "eraser", "calculator", "ruler", "compass", "protractor", "clipboard", "folder",
    "envelope", "stamp", "package", "box", "crate", "shelf", "cabinet", "drawerunit", "hanger", "basket",
    "broom", "mop", "bucket", "vacuum", "detergent", "soap", "shampoo", "towel", "napkin", "tissue",
    "toothbrush", "toothpaste", "razor", "comb", "brush", "perfume", "deodorant", "mirrorball", "candle", "lighter",

    "hamster", "rabbit", "squirrel", "chipmunk", "hedgehog", "badger", "otter", "beaver", "moose", "buffalo",
    "panther", "leopard", "cheetah", "hyena", "jackal", "meerkat", "lemur", "orangutan", "chimpanzee", "gorilla",
    "falcon", "hawk", "vulture", "parrot", "flamingo", "pelican", "heron", "stork", "woodpecker", "kingfisher",
    "jellyfish", "starfish", "seahorse", "stingray", "squid", "krill", "plankton", "urchin", "coral", "kelp",

    "waffle", "pancake", "omelette", "sausage", "bacon", "meatball", "hotdog", "ketchup", "mustard", "mayonnaise",
    "pickle", "olive", "salsa", "guacamole", "chips", "pretzel", "popcorn", "cereal", "granola", "oatmeal",
    "espresso", "latte", "cappuccino", "tea", "juice", "smoothie", "soda", "lemonade", "milkshake", "water",
    "chocolatebar", "marshmallow", "caramel", "toffee", "fudge", "gelato", "sorbet", "pudding", "custard", "jelly",

    "smart tv", "projector", "joystick", "gamepad", "console", "vr controller", "smartglass", "fitnessband", "tracker", "gps",
    "satellite", "antenna", "transmitter", "receiver", "routerbox", "switch", "adapter", "cable", "plug", "socket",
    "touchscreen", "displaypanel", "backlight", "pixelgrid", "render", "animation", "softwareupdate", "firmware", "debugger", "terminal",
    "databasequery", "servernode", "cloudsync", "firewallrule", "encryptionkey", "hash", "token", "session", "cookie", "cache",

    "meadow", "prairie", "savanna", "rainforest", "wetland", "tundra", "steppe", "grove", "orchard", "vineyard",
    "glade", "thicket", "undergrowth", "canopy", "basin", "ridge", "summit", "peak", "crater", "geyser",
    "spring", "brook", "creek", "tributary", "estuary", "bay", "gulf", "strait", "peninsula", "archipelago",
    "icecap", "snowfield", "permafrost", "fissure", "fault", "aftershock", "quicksand", "sinkhole", "landslide", "erosion",

    "classroom", "lecturehall", "auditorium", "gymnasium", "lockerroom", "cafeteria", "dormitory", "campus", "playfield", "courtyard",
    "balcony", "terrace", "rooftop", "basement", "attic", "lobby", "reception", "elevatorhall", "parkinglot", "driveway",
    "sidewalk", "crosswalk", "intersection", "roundabout", "freeway", "tunnel", "overpass", "underpass", "bridgeway", "railway",
    "runway", "terminal", "gate", "checkin", "security", "lounge", "boarding", "hangar", "controltower", "airspace",

    "villain", "heroine", "sidekick", "mentor", "wizard", "witch", "dragon", "giant", "ghost", "zombie",
    "vampire", "werewolf", "robot", "android", "cyborg", "alien queen", "spaceship", "timewarp", "dimension", "portal",
    "treasure", "artifact", "relic", "amulet", "scroll", "mapquest", "odyssey", "voyage", "expedition", "adventure",
    "battle", "duel", "quest", "mission", "escape", "survival", "strategy", "tactics", "victory", "defeat"
];
let hintlist = [
    "read", "sit", "cut", "glass", "sleep", "time", "carry", "write", "safety", "eat",
    "eat", "eat", "light", "work", "open", "secure", "entry", "reflect", "sit", "warm",
    "pet", "pet", "fly", "slow", "water", "reptile", "jump", "big", "banana", "small",
    "king", "stripe", "wild", "pack", "sly", "forest", "ride", "farm", "wool", "horn",
    "slice", "fastfood", "lunch", "fruit", "sweet", "drink", "pasta", "dairy", "vegetable", "grain",
    "grain", "breakfast", "meat", "green", "hot", "yellow", "fruit", "citrus", "sweet", "soft",
    "call", "work", "work", "watch", "photo", "screen", "internet", "host", "power", "display",
    "type", "move", "fly", "video", "sound", "view", "print", "scan", "voice", "charge",
    "wood", "trees", "water", "water", "cold", "hot", "rock", "space", "night", "dry",
    "dark", "flow", "land", "high", "low", "water", "fall", "small", "above", "soft",
    "sand", "play", "animals", "books", "learn", "care", "stay", "travel", "busy", "quiet",
    "buy", "food", "movie", "stage", "sports", "events", "work", "build", "store", "car",
    "simulation", "blue", "villain", "space", "dream", "arena", "cold", "ogre", "ship", "fight",
    "yellow", "float", "race", "cook", "fish", "forget", "strong", "china", "jungle", "magic",

    "royal", "finger", "neck", "wrist", "time", "waist", "money", "vision", "warm", "head",
    "feet", "feet", "warm", "cold", "upper", "legs", "short", "warm", "warm", "warm",
    "tiny", "buzz", "color", "web", "bite", "annoy", "hard", "color", "sting", "jump",
    "ocean", "giant", "smart", "arms", "shell", "claws", "sea", "cold", "coast", "sky",
    "noodle", "noodle", "dumpling", "rice", "noodle", "spice", "mexican", "wrap", "corn", "fried",
    "sweet", "sweet", "sweet", "sweet", "cold", "smooth", "sweet", "spread", "dairy", "fat",
    "plug", "storage", "program", "mobile", "web", "signal", "wireless", "wave", "connect", "sky",
    "screen", "detect", "glass", "dot", "logic", "info", "doc", "store", "save", "send",
    "lava", "shake", "wave", "storm", "spin", "cold", "storm", "boom", "flash", "color",
    "rise", "set", "night", "space", "all", "tail", "rock", "path", "pull", "void",
    "cross", "tall", "royal", "royal", "worship", "faith", "history", "shop", "buy", "bread",
    "coffee", "drink", "dance", "kids", "fun", "train", "stop", "ship", "dock", "road",
    "hero", "hero", "hero", "hero", "god", "strong", "anti", "dark", "claws", "speed",

    "direction", "guide", "see", "far", "light", "light", "climb", "step", "hit", "turn",
    "turn", "power", "cut", "hold", "fix", "join", "rotate", "drive", "roll", "stop",
    "slither", "teeth", "teeth", "lizard", "color", "stick", "venom", "venom", "coil", "giant",
    "feast", "farm", "water", "water", "color", "big", "small", "city", "dark", "night",
    "pink", "sea", "small", "tiny", "silver", "fish", "fresh", "snake", "shell", "shell",
    "green", "red", "green", "layer", "spice", "leaf", "green", "yellow", "green", "green",
    "spread", "sweet", "tropical", "hard", "brown", "small", "purple", "green", "sweet", "tiny",
    "internet", "connect", "protect", "secret", "math", "data", "rack", "board", "brain", "graphics",
    "type", "touch", "draw", "sound", "listen", "listen", "chip", "path", "power", "flow",
    "ice", "coral", "deep", "sand", "water", "edge", "flat", "river", "calm", "wet",
    "cloud", "light", "wind", "air", "ice", "cold", "morning", "ice", "slide", "blast",
    "yellow", "ride", "track", "city", "ride", "fast", "drive", "haul", "carry", "small",
    "lift", "move", "steps", "hall", "path", "space", "cook", "wash", "sleep", "park",
    "magic", "ring", "space", "dino", "robot", "crime", "run", "simulation", "blue", "fight", "write", "draw", "ink", "erase", "math", "measure", "circle", "angle", "hold", "store",
    "mail", "send", "ship", "container", "wood", "hold", "store", "slide", "clothes", "carry",
    "clean", "clean", "water", "suction", "clean", "wash", "hair", "dry", "wipe", "soft",
    "teeth", "paste", "shave", "hair", "hair", "smell", "fresh", "dance", "light", "fire",

    "small", "hop", "tree", "tiny", "spiky", "dig", "water", "dam", "giant", "herd",
    "black", "spots", "fast", "laugh", "wild", "alert", "tree", "orange", "smart", "strong",
    "fast", "hunt", "dead", "talk", "pink", "fish", "tall", "long", "peck", "dive",
    "sting", "shape", "tiny", "flat", "ink", "tiny", "tiny", "spike", "reef", "plant",

    "breakfast", "flat", "egg", "meat", "crispy", "round", "bun", "red", "yellow", "spread",
    "sour", "fruit", "dip", "green", "crunch", "twist", "movie", "breakfast", "grain", "warm",
    "coffee", "coffee", "coffee", "hot", "drink", "blend", "fizz", "fresh", "thick", "clear",
    "sweet", "soft", "sweet", "sweet", "sweet", "cold", "cold", "soft", "cream", "jiggle",

    "screen", "light", "play", "control", "play", "virtual", "glass", "health", "track", "map",
    "orbit", "signal", "send", "receive", "internet", "switch", "connect", "wire", "power", "hole",
    "touch", "screen", "light", "dots", "draw", "motion", "update", "system", "fix", "command",
    "data", "node", "cloud", "block", "secure", "code", "access", "login", "track", "store",

    "grass", "flat", "wild", "wet", "cold", "dry", "trees", "farm", "fruit", "wine",
    "clear", "dense", "low", "top", "low", "high", "top", "top", "hole", "hot",
    "water", "small", "small", "river", "mix", "coast", "water", "narrow", "land", "islands",
    "ice", "snow", "frozen", "crack", "shift", "shake", "sand", "hole", "slide", "wear",

    "learn", "talk", "speak", "sports", "change", "eat", "sleep", "study", "play", "open",
    "view", "sit", "top", "dark", "storage", "enter", "welcome", "wait", "park", "drive",
    "walk", "cross", "meet", "circle", "fast", "dark", "over", "under", "cross", "train",
    "plane", "wait", "door", "check", "scan", "relax", "enter", "plane", "control", "sky",

    "evil", "hero", "help", "guide", "magic", "magic", "fire", "big", "spirit", "undead",
    "blood", "howl", "metal", "human", "hybrid", "leader", "ship", "time", "space", "door",
    "gold", "old", "old", "power", "paper", "journey", "epic", "sea", "travel", "explore",
    "fight", "duel", "goal", "task", "run", "alive", "plan", "plan", "win", "lose"];

let votes = []
let voter = 1
let frequentvote



function start() {
    document.getElementById("startgame").style.display = "none";
    document.getElementById("players").style.display = "block";
    document.getElementById("results").style.display = "none";
    document.getElementById("holder").style.display = "block";
    document.getElementById("playerpage").style.display = "none";
    
    let i = 0;
    players = document.getElementById("playeramount").value;
    if (players <= 2) {
        players = 3;
    }
    else if (players > 7) {
        players = 7;
    }
    while (i < players) {
        document.getElementById(i).style.display = "block";
        document.getElementById("play").style.display = "block"
        i++;
    }
}

function refresh() {
    location = location
}
function play() {
    frequentvote = []
    votes = []
    voter = 1
    player0 = document.getElementById("input0").value;
    player1 = document.getElementById("input1").value;
    player2 = document.getElementById("input2").value;
    player3 = document.getElementById("input3").value;
    player4 = document.getElementById("input4").value;
    player5 = document.getElementById("input5").value;
    player6 = document.getElementById("input6").value;

    playerlist = [player0, player1, player2, player3, player4, player5, player6];
    result = playerlist.filter(word => word.trim().length > 0);
    if (result.length < 1) {
        start()
        document.getElementById("error").style.display = "block";
        document.getElementById("error").textContent = "Error: all names not filled";
    }
    else {
        document.getElementById("error").style.display = "none";
        rolelist = result

        let y;
        y = [Math.floor(Math.random() * wordlist.length)];
        word = wordlist[y]
        hint = hintlist[y]
        console.log(word)

        imposter = rolelist[Math.floor(Math.random() * rolelist.length)];
        rolelist = rolelist.filter(item => item !== imposter)
        //remove the role from the list

        //jester
        jester = null
        jesterstate = false;
        jesterrandom = Math.floor(Math.random() * 100);
        jesterchance = document.getElementById("jesterchance").value
        if (jesterrandom <= jesterchance) {

            //randomize the lover role based on the filtered playerlist
            jester = rolelist[Math.floor(Math.random() * rolelist.length)];
            //remove the role from the list
            rolelist = rolelist = rolelist.filter(item => item !== jester)
            jesterstate = true;
        }

        //lover
        lover = null
        loverstate = false;
        loverrandom = Math.floor(Math.random() * 100);
        loverchance = document.getElementById("loverchance").value
        if (loverrandom <= loverchance) {

            //randomize the lover role based on the filtered playerlist
            lover = rolelist[Math.floor(Math.random() * rolelist.length)];
            //remove the role from the list
            rolelist = rolelist = rolelist.filter(item => item !== lover)

            loverlist = result.filter(item => item !== lover)
            loverpartner = loverlist[Math.floor(Math.random() * loverlist.length)];
            loverstate = true;

        }

        //detective
        detective = null
        detectivestate = false;
        detectiverandom = Math.floor(Math.random() * 100);
        detectivechance = document.getElementById("detectivechance").value
        if (detectiverandom <= detectivechance) {

            //randomize the lover role based on the filtered playerlist
            detective = rolelist[Math.floor(Math.random() * rolelist.length)];
            //remove the role from the list
            rolelist = rolelist.filter(item => item !== detective)
            detectivestate = true;

        }

        //prosecutor
        prosecutor = null
        prosecutorstate = false;
        prosecutorrandom = Math.floor(Math.random() * 100);
        console.log(prosecutorrandom)
        prosecutorchance = document.getElementById("prosecutorchance").value
        console.log(prosecutorchance)
        if (prosecutorrandom <= prosecutorchance) {

            //randomize the role based on the filtered playerlist
            prosecutor = rolelist[Math.floor(Math.random() * rolelist.length)];
            //remove the role from the list
            rolelist = rolelist.filter(item => item !== prosecutor)

            targetlist = result.filter(item => item !== prosecutor)
            target = targetlist[Math.floor(Math.random() * targetlist.length)];
            prosecutorstate = true;

        }


        document.getElementById("card").style.display = "block";
        document.getElementById("nextbutton").style.display = "block";
        document.getElementById("startgame").style.display = "none";
        document.getElementById("rolelist").style.display = "none";
        document.getElementById("0").style.display = "none";
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("play").style.display = "none";
        document.getElementById("playerpage").style.display = "none";
        document.getElementById("roleis").style.display = "none"
        document.getElementById("wordis").style.display = "none"
        document.getElementById("person").style.color = "#FFF191"
        document.getElementById("players").style.padding = "0"
        document.getElementById("voting").style.display = "none";
        document.getElementById("error").style.display = "none";
        document.getElementById("reveal").style.display = "none";
        document.getElementById("results").style.display = "none";
        document.getElementById("checks").style.display = "none";


        x = -1;
        next()
    }
}

function checks() {
    let element = document.getElementById("checks")
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none"

    }
}

function next() {
    x++;
    document.getElementById("person").textContent = result[x]
    document.getElementById("word").style.display = "none";
    role = "";
    document.getElementById("word").style.display = "block"
    if (x < players) {
        if (result[x] != imposter) {
            if (result[x] != jester) {
                if (result[x] != lover) {
                    if (result[x] != detective) {
                        if (result[x] != prosecutor) {
                            role = "Innocent"
                        }
                        else {
                            role = "Prosecutor"
                        }
                    }
                    else {
                        role = "Detective"
                    }

                }
                else {
                    role = "Lover"
                }
            }
            else {
                role = "Jester"
            }
        }
        else {
            role = "Imposter"
        }
    }
    else {
        document.getElementById("startgame").style.display = "block";
        document.getElementById("nextbutton").style.display = "none";
        document.getElementById("card").style.display = "none";
        document.getElementById("starter").textContent = result[Math.floor(Math.random() * result.length)];
    }

}




function vote() {
    let i = 0;
    let f = 20;
    players = document.getElementById("playeramount").value;
    document.getElementById("startgame").style.display = "none"
    document.getElementById("voting").style.display = "block";
    document.getElementById("name").textContent = result[i]
    while (i != players) {
        document.getElementById(f).style.display = "block"
        document.getElementById(f).textContent = result[i]
        i++;
        f++;
    }


}

function votebutton(voted) {
    votes.push(voted)
    votefunc()
}

function findMostFrequent(words) {
    if (words.length === 0) return [];

    const counts = {};
    let maxFreq = 0;
    let freqresult = [];

    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;


        if (counts[word] > maxFreq) {
            maxFreq = counts[word];
        }
    }


    for (const word in counts) {
        if (counts[word] === maxFreq) {
            freqresult.push(word);
        }
    }
    console.log(freqresult)
    return freqresult;
}



function votefunc() {
    if (voter < result.length) {
        document.getElementById("name").textContent = result[voter]
        voter++

    }
    else {
        document.getElementById("voting").style.display = "none";
        document.getElementById("reveal").style.display = "block";
        frequentvote = findMostFrequent(votes);
        if (frequentvote.length <= 1) {
            document.getElementById("votedout").textContent = frequentvote + ' has been voted out.';
        }
        else if (frequentvote.length == 2) {
            document.getElementById("votedout").textContent = 'Tie between ' + frequentvote[0] + ' and ' + frequentvote[1];
        }
        else if (frequentvote.length == 3) {
            document.getElementById("votedout").textContent = 'Tie between ' + frequentvote[0] + ', ' + frequentvote[1] + ' and ' + frequentvote[2];
        }
        else {
            document.getElementById("votedout").textContent = 'Tie between ' + frequentvote[0] + ', ' + frequentvote[1] + ', ' + frequentvote[2] + ' and ' + frequentvote[3];
        }
    }
}

function reveal() {
    document.getElementById("results").style.display = "block";
    document.getElementById("reveal").style.display = "none";
    document.getElementById("result0").style.display = "block";
    document.getElementById("result1").style.display = "none";
    document.getElementById("result2").style.display = "none";
    document.getElementById("result3").style.display = "none";
    document.getElementById("result4").style.display = "none";
    document.getElementById("startgame").style.display = "none";
    document.getElementById("result0").textContent = imposter + ' was the imposter.'
    if (detectivestate == true) {
        document.getElementById("result1").style.display = "block";
        document.getElementById("result1").textContent = detective + ' was the detective.'
    }
    if (prosecutorstate == true) {
        document.getElementById("result2").style.display = "block";
        document.getElementById("result2").textContent = prosecutor + ' was the prosecutor.'
    }
    if (jesterstate == true) {
        document.getElementById("result3").style.display = "block";
        document.getElementById("result3").textContent = jester + ' was the jester.'
    }
    if (loverstate == true) {
        document.getElementById("result4").style.display = "block";
        document.getElementById("result4").textContent = lover + ' was the lover.'
    }


}




function mouseDown() {
    document.getElementById("word").style.color = "#B8FF78"
    document.getElementById("help").style.display = "block";
    document.getElementById("role").textContent = role
    document.getElementById("word").textContent = word
    document.getElementById("roleis").style.display = "block"
    if (role == "Innocent") {
        document.getElementById("role").style.color = "#2BE7FF"
        document.getElementById("wordis").style.display = "block"
        document.getElementById("help").textContent = "Find the Imposter and vote them out.";
    }
    else if (role == "Imposter") {
        document.getElementById("role").style.color = "#B50000"
        document.getElementById("word").style.color = "#750000"
        document.getElementById("word").textContent = hint
        document.getElementById("word").style.display = "block"
        document.getElementById("wordis").style.display = "block"
        document.getElementById("wordis").textContent = "Your hint is:"
        document.getElementById("help").textContent = "Deceive the others and figure out the word.";
    }
    else if (role == "Jester") {
        document.getElementById("role").style.color = "Pink"
        document.getElementById("wordis").style.display = "block"
        document.getElementById("help").textContent = "Fool the others and make them vote you out.";
    }
    else if (role == "Lover") {
        document.getElementById("role").style.color = "#FF29AB"
        document.getElementById("wordis").style.display = "block"
        document.getElementById("loverdiv").style.display = "block";
        document.getElementById("loverpartner").textContent = loverpartner;
        document.getElementById("loverpartner").style.color = "#FF29AB";
        document.getElementById("help").textContent = "Protect your lover at any cost, if they lose you lose.";
    }
    else if (role == "Detective") {
        document.getElementById("detective1").style.color = "#00459E"
        document.getElementById("detective2").style.color = "#00459E"
        document.getElementById("detective3").style.color = "#00459E"
        document.getElementById("detective4").style.color = "#00459E"
        document.getElementById("role").style.color = "#006DFF"
        document.getElementById("wordis").style.display = "block";
        document.getElementById("detectiveoverview").style.display = "block";
        document.getElementById("help").textContent = "Use your detective skills to find the imposter.";
        if (jester != null) {
            document.getElementById("detective1").textContent = "One Jester"

        }
        else {
            document.getElementById("detective1").textContent = ""
        }
        if (prosecutor != null) {
            document.getElementById("detective2").textContent = "One Prosecutor"
        }
        else {
            document.getElementById("detective2").textContent = ""
        }
        if (lover != null) {
            document.getElementById("detective3").textContent = "One Lover"
        }
        else {
            document.getElementById("detective3").textContent = ""
        }
        if (prosecutor == null & lover == null & jester == null) {
            document.getElementById("detective4").textContent = "No special roles"
        }
        else {
            document.getElementById("detective4").textContent = ""
        }
    }
    else if (role == "Prosecutor") {
        document.getElementById("role").style.color = "#FFEA00"
        document.getElementById("target").style.color = "#CFBA00";
        document.getElementById("prosecutordiv").style.display = "block";
        document.getElementById("wordis").style.display = "block";
        document.getElementById("help").textContent = "Get your target voted out.";
        document.getElementById("target").textContent = target;
    }

}
function mouseUp() {
    document.getElementById("prosecutordiv").style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("roleis").style.display = "none"
    document.getElementById("wordis").style.display = "none"
    document.getElementById("loverdiv").style.display = "none";
    document.getElementById("detectiveoverview").style.display = "none";
    document.getElementById("role").textContent = "Hold to reveal"
    document.getElementById("word").textContent = ""
    document.getElementById("wordis").textContent = "Your word is:"
    document.getElementById("role").style.color = "White"
    document.getElementById("word").style.color = "White"
}