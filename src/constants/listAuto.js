var AutoType;
(function (AutoType) {
    AutoType["Truk"] = "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A";
    AutoType["Bus"] = "\u0410\u0432\u0442\u043E\u0431\u0443\u0441";
    AutoType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    AutoType["Universal"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
    AutoType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    AutoType["Crossover"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440";
    AutoType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
})(AutoType || (AutoType = {}));
var AutoClassType;
(function (AutoClassType) {
    AutoClassType["Truk"] = "truk";
    AutoClassType["Bus"] = "bus";
    AutoClassType["Hatchback"] = "hatchback";
    AutoClassType["Universal"] = "universal";
    AutoClassType["Sedan"] = "sedan";
    AutoClassType["Crossover"] = "\u0441rossover";
    AutoClassType["SUV"] = "suv";
})(AutoClassType || (AutoClassType = {}));
var AutoManufacturer;
(function (AutoManufacturer) {
    AutoManufacturer["Opel"] = "Opel";
    AutoManufacturer["MercedesBenz"] = "Mercedes-Benz";
    AutoManufacturer["Scania"] = "Scania";
    AutoManufacturer["Nissan"] = "Nissan";
    AutoManufacturer["Renault"] = "Renault";
    AutoManufacturer["Volkswagen"] = "Volkswagen";
    AutoManufacturer["Audi"] = "Audi";
    AutoManufacturer["Ford"] = "Ford";
    AutoManufacturer["Fiat"] = "Fiat";
    AutoManufacturer["Volvo"] = "Volvo";
    AutoManufacturer["Man"] = "Man";
    AutoManufacturer["Iveco"] = "Iveco";
    AutoManufacturer["VanHool"] = "Van Hool";
})(AutoManufacturer || (AutoManufacturer = {}));
var AutoCurrentCountry;
(function (AutoCurrentCountry) {
    AutoCurrentCountry["Netherlands"] = "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B";
    AutoCurrentCountry["China"] = "\u041A\u0438\u0442\u0430\u0439";
    AutoCurrentCountry["Japan"] = "\u042F\u043F\u043E\u043D\u0438\u044F";
    AutoCurrentCountry["Germany"] = "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F";
    AutoCurrentCountry["USA"] = "\u0421\u0428\u0410";
    AutoCurrentCountry["SouthKorea"] = "\u041A\u043E\u0440\u0435\u044F";
    AutoCurrentCountry["Italy"] = "\u0418\u0442\u0430\u043B\u0438\u044F";
    AutoCurrentCountry["Russia"] = "\u0420\u043E\u0441\u0441\u0438\u044F";
    AutoCurrentCountry["Poland"] = "\u041F\u043E\u043B\u044C\u0448\u0430";
})(AutoCurrentCountry || (AutoCurrentCountry = {}));
var AutoAdType;
(function (AutoAdType) {
    AutoAdType["Sale"] = "sale";
    AutoAdType["Auction"] = "auction";
    AutoAdType["Request"] = "request";
    AutoAdType["Leasing"] = "leasing";
    AutoAdType["Rent"] = "rent";
})(AutoAdType || (AutoAdType = {}));
export const LIST_AUTO = [
    {
        id: 'el1',
        img: 'img/listAuto/el1.png',
        type: AutoType.Truk,
        classType: AutoClassType.Truk,
        name: 'Opel COMBO Airco Elct Ramen Stuurbediening',
        manufacturer: AutoManufacturer.Opel,
        yearProd: 2015,
        weight: 2000,
        mileage: 490574,
        transmissionType: 'automatic',
        location: 'Garage van Nierop Netherlands',
        country: AutoCurrentCountry.Netherlands,
        price: 1500,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el2',
        img: 'img/listAuto/el2.png',
        type: AutoType.Truk,
        classType: AutoClassType.Truk,
        name: 'Mercedes-Benz V 250 d lang Avantgarde Edition 360°',
        manufacturer: AutoManufacturer.MercedesBenz,
        yearProd: 2015,
        weight: 2000,
        mileage: 490574,
        transmissionType: 'automatic',
        location: 'Jingmen Street, Shanghai, China',
        country: AutoCurrentCountry.China,
        price: 54300,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el3',
        img: 'img/listAuto/el3.png',
        type: AutoType.Bus,
        classType: AutoClassType.Bus,
        name: 'Cobus Mercedes Benz 2700 S',
        manufacturer: AutoManufacturer.MercedesBenz,
        yearProd: 2015,
        weight: 2000,
        mileage: 490574,
        transmissionType: 'manual',
        location: 'Beijing Road, Guangzhou, China',
        country: AutoCurrentCountry.China,
        price: 43580,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el4',
        img: 'img/listAuto/el4.png',
        type: AutoType.Bus,
        classType: AutoClassType.Bus,
        name: 'Setra 317 UL-GT/Klima/6 Gang/65 Sitz',
        manufacturer: AutoManufacturer.Scania,
        yearProd: 2011,
        weight: 4500,
        mileage: 320000,
        transmissionType: 'manual',
        location: 'Shibuya-ku, Tokyo, Japan',
        country: AutoCurrentCountry.Japan,
        price: 13900,
        adType: AutoAdType.Auction,
    },
    {
        id: 'el5',
        img: 'img/listAuto/el5.png',
        type: AutoType.Truk,
        classType: AutoClassType.Truk,
        name: 'Nissan Eco T 100 Paardenvervoer',
        manufacturer: AutoManufacturer.Nissan,
        yearProd: 2015,
        weight: 2000,
        mileage: 490574,
        transmissionType: 'manual',
        location: 'Minato-ku, Osaka, Japan',
        country: AutoCurrentCountry.Japan,
        price: 3100,
        adType: AutoAdType.Auction,
    },
    {
        id: 'el6',
        img: 'img/listAuto/el6.png',
        type: AutoType.Truk,
        classType: AutoClassType.Truk,
        name: 'Renault Mascott 130.35 DC 363',
        manufacturer: AutoManufacturer.Renault,
        yearProd: 2015,
        weight: 2000,
        mileage: 490574,
        transmissionType: 'manual',
        location: 'Goethestraße, Berlin, Germany',
        country: AutoCurrentCountry.Germany,
        price: 4850,
        adType: AutoAdType.Request,
    },
    {
        id: 'el7',
        img: 'img/listAuto/el7.png',
        type: AutoType.Hatchback,
        classType: AutoClassType.Hatchback,
        name: 'Volkswagen Golf Plus VI Team',
        manufacturer: AutoManufacturer.Volkswagen,
        yearProd: 2010,
        weight: 900,
        mileage: 49000,
        transmissionType: 'manual',
        location: 'Elm Street, Brooklyn, NY, USA',
        country: AutoCurrentCountry.USA,
        price: 7990,
        adType: AutoAdType.Leasing,
    },
    {
        id: 'el8',
        img: 'img/listAuto/el8.png',
        type: AutoType.Universal,
        classType: AutoClassType.Universal,
        name: 'Audi A4 Avant 2.0 TDI S tronic S-Line',
        manufacturer: AutoManufacturer.Audi,
        yearProd: 2017,
        weight: 1000,
        mileage: 138000,
        transmissionType: 'automatic',
        location: 'Goethestraße, Berlin, Germany',
        country: AutoCurrentCountry.Germany,
        price: 18990,
        adType: AutoAdType.Leasing,
    },
    {
        id: 'el9',
        img: 'img/listAuto/el9.png',
        type: AutoType.Universal,
        classType: AutoClassType.Universal,
        name: 'Ford Focus Wagon 1.6 tdci',
        manufacturer: AutoManufacturer.Ford,
        yearProd: 2006,
        weight: 850,
        mileage: 130000,
        transmissionType: 'automatic',
        location: 'Jongno-gu, Seoul, South Korea',
        country: AutoCurrentCountry.SouthKorea,
        price: 2500,
        adType: AutoAdType.Rent,
    },
    {
        id: 'el10',
        img: 'img/listAuto/el10.png',
        type: AutoType.Sedan,
        classType: AutoClassType.Sedan,
        name: 'Fiat Fiat Tipo 1.6 Mjet',
        manufacturer: AutoManufacturer.Fiat,
        yearProd: 2017,
        weight: 700,
        mileage: 110000,
        transmissionType: 'automatic',
        location: 'Corso Buenos Aires, Milan, Italy',
        country: AutoCurrentCountry.Italy,
        price: 10400,
        adType: AutoAdType.Rent,
    },
    {
        id: 'el11',
        img: 'img/listAuto/el11.png',
        type: AutoType.Crossover,
        classType: AutoClassType.Crossover,
        name: 'Nissan Qashqai II 2.0 CVT',
        manufacturer: AutoManufacturer.Nissan,
        yearProd: 2022,
        weight: 1100,
        mileage: 88000,
        transmissionType: 'automatic',
        location: 'Voskresenskaya Street, Kazan, Russia',
        country: AutoCurrentCountry.Russia,
        price: 10400,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el12',
        img: 'img/listAuto/el12.png',
        type: AutoType.Crossover,
        classType: AutoClassType.Crossover,
        name: 'Volvo XC60 2.4 AT',
        manufacturer: AutoManufacturer.Volvo,
        yearProd: 2014,
        weight: 1300,
        mileage: 317500,
        transmissionType: 'automatic',
        location: 'Lenina Street, Voronezh, Russia',
        country: AutoCurrentCountry.Russia,
        price: 6900,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el13',
        img: 'img/listAuto/el13.png',
        type: AutoType.Truk,
        classType: AutoClassType.Truk,
        name: 'MAN TGS 26.350',
        manufacturer: AutoManufacturer.Man,
        yearProd: 2010,
        weight: 3300,
        mileage: 525400,
        transmissionType: 'manual',
        location: 'Petrovskaya, Rostov-on-Don, Russia',
        country: AutoCurrentCountry.Russia,
        price: 45900,
        adType: AutoAdType.Rent,
    },
    {
        id: 'el14',
        img: 'img/listAuto/el14.png',
        type: AutoType.SUV,
        classType: AutoClassType.SUV,
        name: 'Ford Explorer',
        manufacturer: AutoManufacturer.Ford,
        yearProd: 2016,
        weight: 1700,
        mileage: 234400,
        transmissionType: 'manual',
        location: 'Main Street, Toledo, Ohio, USA',
        country: AutoCurrentCountry.USA,
        price: 12399,
        adType: AutoAdType.Request,
    },
    {
        id: 'el15',
        img: 'img/listAuto/el15.png',
        type: AutoType.Truk,
        classType: AutoClassType.Truk,
        name: 'Iveco Daily',
        manufacturer: AutoManufacturer.Iveco,
        yearProd: 2023,
        weight: 2400,
        mileage: 61000,
        transmissionType: 'manual',
        location: 'Pobedy Street, Belgorod, Russia',
        country: AutoCurrentCountry.Russia,
        price: 9999,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el16',
        img: 'img/listAuto/el16.png',
        type: AutoType.Bus,
        classType: AutoClassType.Bus,
        name: 'Van Hool T916 Astron',
        manufacturer: AutoManufacturer.VanHool,
        yearProd: 2012,
        weight: 4400,
        mileage: 657089,
        transmissionType: 'manual',
        location: 'Sienkiewicza Street, Łódź, Poland',
        country: AutoCurrentCountry.Poland,
        price: 23450,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el17',
        img: 'img/listAuto/el17.png',
        type: AutoType.Sedan,
        classType: AutoClassType.Sedan,
        name: 'Volkswagen Polo V',
        manufacturer: AutoManufacturer.Volkswagen,
        yearProd: 2018,
        weight: 700,
        mileage: 120000,
        transmissionType: 'automatic',
        location: 'Karl-Marx-Allee, Berlin, Germany',
        country: AutoCurrentCountry.Germany,
        price: 6770,
        adType: AutoAdType.Sale,
    },
    {
        id: 'el18',
        img: 'img/listAuto/el18.png',
        type: AutoType.Sedan,
        classType: AutoClassType.Sedan,
        name: 'Volvo S40',
        manufacturer: AutoManufacturer.Volvo,
        yearProd: 2008,
        weight: 800,
        mileage: 510000,
        transmissionType: 'automatic',
        location: 'Pushkinskaya Street, Novosibirsk, Russia',
        country: AutoCurrentCountry.Russia,
        price: 4770,
        adType: AutoAdType.Leasing,
    },
    {
        id: 'el19',
        img: 'img/listAuto/el19.png',
        type: AutoType.SUV,
        classType: AutoClassType.SUV,
        name: 'Renault Koleos',
        manufacturer: AutoManufacturer.Renault,
        yearProd: 2018,
        weight: 1300,
        mileage: 125400,
        transmissionType: 'automatic',
        location: 'Tverskaya Street, Moscow, Russia',
        country: AutoCurrentCountry.Russia,
        price: 6510,
        adType: AutoAdType.Rent,
    },
    {
        id: 'el20',
        img: 'img/listAuto/el20.png',
        type: AutoType.Universal,
        classType: AutoClassType.Universal,
        name: 'Opel Astra',
        manufacturer: AutoManufacturer.Opel,
        yearProd: 2014,
        weight: 850,
        mileage: 333000,
        transmissionType: 'manual',
        location: 'Beijing Road, Beijing, China',
        country: AutoCurrentCountry.China,
        price: 3510,
        adType: AutoAdType.Sale,
    },
];
