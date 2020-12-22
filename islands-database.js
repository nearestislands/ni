class Island {
    constructor(latitude, longitude, name, distance) {
        this.lat = latitude;
        this.lon = longitude;
        this.name = name;
        this.dist = distance;
    }
}

let ibiza = new Island(39.0200, 1.4821, "Ibiza", 0);
let palmaMallorca = new Island(39.6953, 3.0176, "Palma Mallorca", 0);
let palmaMinorca = new Island(39.9496, 4.1104, "Palma Minorca", 0);
let sardinia = new Island(40.1209, 9.0129, "Sardinia", 0);
let corsica = new Island(42.0396, 9.0129, "Corsica", 0);
let malta = new Island(35.9375, 14.3754, "Malta", 0);
let crete = new Island(35.2401, 24.8093, "Crete", 0);
let rhodes = new Island(36.4350, 28.2175, "Rhodes", 0);
let mykonos = new Island(37.4467, 25.3289, "Mykonos", 0);
let cyprus = new Island(35.1264, 33.4299, "Cyprus", 0);
let santorini = new Island(36.3932, 25.4615, "Santorini", 0);
let corfu = new Island(39.6243, 19.9217, "Corfu", 0);
let samos = new Island(37.7548, 26.9778, "Samos", 0);
let capri = new Island(40.5532, 14.2222, "Capri", 0);
let zakynthos = new Island(37.7870, 20.8999, "Zakynthos", 0);
let kos = new Island(36.8915, 27.2877, "Kos", 0);
let elba = new Island(42.7782, 10.1927, "Elba", 0);
let formentera = new Island(38.6964, 1.4531, "Formentera", 0);

let islands = [ibiza, palmaMallorca, palmaMinorca, sardinia, corsica, malta, crete, rhodes, mykonos, cyprus, santorini, corfu, samos, capri, zakynthos, kos, elba, formentera];
let distances = [];
let newIslands = islands;