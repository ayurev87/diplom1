//import Vue from 'vue'
import Vuex from 'vuex'




export default new Vuex.Store({
  state: {
    autoItems: [
      {
        "id": 0,
        "name": "Audi",
        "cyrillic-name": "Ауди",
        "logo": "Audi.png",
        "popular": true,
        "country": "Германия",
        "models": [
          {
            "id": 0,
            "name": "A1",
            "cyrillic-name": "А1",
            "class": "B",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "A3",
            "cyrillic-name": "А3",
            "class": "C",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "A4",
            "cyrillic-name": "А4",
            "class": "D",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "A4 allroad",
            "cyrillic-name": "А4 Олроуд",
            "class": "D",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "A5",
            "cyrillic-name": "А5",
            "class": "D",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "A6",
            "cyrillic-name": "А6",
            "class": "E",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "A6 allroad",
            "cyrillic-name": "А6 Олроуд",
            "class": "E",
            "year-from": "2000",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "A7",
            "cyrillic-name": "А7",
            "class": "E",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "A8",
            "cyrillic-name": "А8",
            "class": "F",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "e-tron",
            "cyrillic-name": "И-трон",
            "class": "E",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "e-tron GT",
            "cyrillic-name": "И-трон ГТ",
            "class": "F",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "e-tron S",
            "cyrillic-name": "И-трон Эс",
            "class": "E",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "e-tron S Sportback",
            "cyrillic-name": "И-трон Эс Спортбэк",
            "class": "E",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "e-tron Sportback",
            "cyrillic-name": "И-трон Спортбэк",
            "class": "E",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Q2",
            "cyrillic-name": "Ку2",
            "class": "B",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Q3",
            "cyrillic-name": "Ку3",
            "class": "C",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "Q3 Sportback",
            "cyrillic-name": "Ку3 Спортбек",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Q4 e-tron",
            "cyrillic-name": "Ку4",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Q4 Sportback e-tron",
            "cyrillic-name": "Ку4 Спортбек",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Q5",
            "cyrillic-name": "Ку5",
            "class": "D",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Q5 e-tron",
            "cyrillic-name": "Ку5 е-трон",
            "class": "D",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Q5 Sportback",
            "cyrillic-name": "Кью5 Спортбек",
            "class": "D",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Q6",
            "cyrillic-name": "Кью6",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Q7",
            "cyrillic-name": "Ку7",
            "class": "E",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Q8",
            "cyrillic-name": "Ку8",
            "class": "E",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Q8 e-tron",
            "cyrillic-name": "Ку8 е-трон",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "Q8 Sportback e-tron",
            "cyrillic-name": "Ку8 Спортбек е-трон",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "R8",
            "cyrillic-name": "Р8",
            "class": "S",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "RS 3",
            "cyrillic-name": "РС3",
            "class": "C",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "RS 4",
            "cyrillic-name": "РС4",
            "class": "D",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "RS 5",
            "cyrillic-name": "РС5",
            "class": "S",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 31,
            "name": "RS 6",
            "cyrillic-name": "РС6",
            "class": "E",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 32,
            "name": "RS 7",
            "cyrillic-name": "РС7",
            "class": "E",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 33,
            "name": "RS e-tron GT",
            "cyrillic-name": "РС и-трон ГТ",
            "class": "F",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 34,
            "name": "RS Q3",
            "cyrillic-name": "РС Ку3",
            "class": "C",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 35,
            "name": "RS Q3 Sportback",
            "cyrillic-name": "РС Ку3 Спортбек",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 36,
            "name": "RS Q8",
            "cyrillic-name": "РС Ку8",
            "class": "E",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 37,
            "name": "S3",
            "cyrillic-name": "с3",
            "class": "C",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 38,
            "name": "S4",
            "cyrillic-name": "с4",
            "class": "D",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 39,
            "name": "S5",
            "cyrillic-name": "с5",
            "class": "D",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 40,
            "name": "S6",
            "cyrillic-name": "с6",
            "class": "E",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 41,
            "name": "S7",
            "cyrillic-name": "с7",
            "class": "E",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 42,
            "name": "S8",
            "cyrillic-name": "с8",
            "class": "F",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 43,
            "name": "SQ2",
            "cyrillic-name": "ску2",
            "class": "B",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 44,
            "name": "SQ5",
            "cyrillic-name": "ску5",
            "class": "D",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 45,
            "name": "SQ5 Sportback",
            "cyrillic-name": "ЭсКью5 Спортбек",
            "class": "D",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 46,
            "name": "SQ7",
            "cyrillic-name": "ску7",
            "class": "E",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 47,
            "name": "SQ8",
            "cyrillic-name": "ску8",
            "class": "E",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 48,
            "name": "SQ8 e-tron",
            "cyrillic-name": "СКу8 е-трон",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 49,
            "name": "SQ8 Sportback e-tron",
            "cyrillic-name": "СКу8 Спортбек е-трон",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 50,
            "name": "TT RS",
            "cyrillic-name": "ТТ РС",
            "class": "C",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 51,
            "name": "TTS",
            "cyrillic-name": "ТТС",
            "class": "C",
            "year-from": "2007",
            "year-to": "null"
          }
        ]
      },

      {
        "id": 1,
        "name": "BMW",
        "cyrillic-name": "БМВ",
        "logo": "BMW.png",
        "popular": true,
        "country": "Германия",
        "models": [
          {
            "id": 0,
            "name": "1 series",
            "cyrillic-name": "1 серии",
            "class": "C",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "2 series",
            "cyrillic-name": "2 серии",
            "class": "C",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "2 series Active Tourer",
            "cyrillic-name": "2 серии Актив Турер",
            "class": "M",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "2 series Gran Tourer",
            "cyrillic-name": "2 серии гран турер",
            "class": "M",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "4 series",
            "cyrillic-name": "4 серии",
            "class": "D",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "i3",
            "cyrillic-name": "и3",
            "class": "B",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "i4",
            "cyrillic-name": "и4",
            "class": "D",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "i5",
            "cyrillic-name": "и5",
            "class": "E",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "i7",
            "cyrillic-name": "и7",
            "class": "F",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "iX",
            "cyrillic-name": "ИХ",
            "class": "E",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "iX1",
            "cyrillic-name": "ИХ1",
            "class": "C",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "iX2",
            "cyrillic-name": "иХ2",
            "class": "C",
            "year-from": "2024",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "iX3",
            "cyrillic-name": "ИХ3",
            "class": "D",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "M2",
            "cyrillic-name": "М2",
            "class": "C",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "M4",
            "cyrillic-name": "М4",
            "class": "D",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "M8",
            "cyrillic-name": "М8",
            "class": "S",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "X1",
            "cyrillic-name": "Х1",
            "class": "C",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "X2",
            "cyrillic-name": "Х2",
            "class": "C",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "X3",
            "cyrillic-name": "Х3",
            "class": "D",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "X3 M",
            "cyrillic-name": "Х3 М",
            "class": "D",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "X4",
            "cyrillic-name": "Х4",
            "class": "D",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "X4 M",
            "cyrillic-name": "Х4 М",
            "class": "D",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "X5",
            "cyrillic-name": "Х5",
            "class": "E",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "X5 M",
            "cyrillic-name": "Х5 М",
            "class": "E",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "X6",
            "cyrillic-name": "Х6",
            "class": "E",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "X6 M",
            "cyrillic-name": "Х6 М",
            "class": "E",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "X7",
            "cyrillic-name": "Х7",
            "class": "F",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "XM",
            "cyrillic-name": "ХМ",
            "class": "F",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Z4",
            "cyrillic-name": "З4",
            "class": "S",
            "year-from": "2002",
            "year-to": "null"
          }
        ]
      },

      {
        "id": 2,
        "name": "Chevrolet",
        "cyrillic-name": "Шевроле",
        "logo": "Chevrolet.png",
        "popular": true,
        "country": "США",
        "models": [
          {
            "id": 0,
            "name": "Aveo",
            "cyrillic-name": "Авео",
            "class": "B",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Blazer",
            "cyrillic-name": "Блейзер",
            "class": "J",
            "year-from": "1982",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Bolt",
            "cyrillic-name": "болт",
            "class": "B",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Bolt EUV",
            "cyrillic-name": "Болт ЭУВ",
            "class": "B",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Camaro",
            "cyrillic-name": "Камаро",
            "class": "S",
            "year-from": "1967",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Captiva",
            "cyrillic-name": "Каптива",
            "class": "D",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "Cobalt",
            "cyrillic-name": "Кобальт",
            "class": "C",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "Colorado",
            "cyrillic-name": "Колорадо",
            "class": "J",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Corvette",
            "cyrillic-name": "Корвет",
            "class": "S",
            "year-from": "1953",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Cruze",
            "cyrillic-name": "Круз",
            "class": "C",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "Damas",
            "cyrillic-name": "Дамас",
            "class": "M",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Equinox",
            "cyrillic-name": "Эквинокс",
            "class": "D",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "Express",
            "cyrillic-name": "Экспресс",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "Groove",
            "cyrillic-name": "Грув",
            "class": "B",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Lacetti",
            "cyrillic-name": "Лачетти",
            "class": "C",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Malibu",
            "cyrillic-name": "Малибу",
            "class": "D",
            "year-from": "1978",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "Menlo",
            "cyrillic-name": "Менло",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Monza",
            "cyrillic-name": "Монца",
            "class": "C",
            "year-from": "1982",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Nexia",
            "cyrillic-name": "Нексия",
            "class": "B",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Onix",
            "cyrillic-name": "Оникс",
            "class": "B",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Orlando",
            "cyrillic-name": "Орландо",
            "class": "M",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Seeker",
            "cyrillic-name": "Сикер",
            "class": "C",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Silverado",
            "cyrillic-name": "сильверадо",
            "class": "J",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Spark",
            "cyrillic-name": "Спарк",
            "class": "A",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Suburban",
            "cyrillic-name": "Субурбан",
            "class": "J",
            "year-from": "1973",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Tahoe",
            "cyrillic-name": "Тахо",
            "class": "J",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "Tracker",
            "cyrillic-name": "Трекер",
            "class": "J",
            "year-from": "1989",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "TrailBlazer",
            "cyrillic-name": "Трейл блейзер",
            "class": "J",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Traverse",
            "cyrillic-name": "Траверс",
            "class": "F",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "Trax",
            "cyrillic-name": "Тракс",
            "class": "B",
            "year-from": "2013",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 3,
        "name": "Ford",
        "cyrillic-name": "Форд",
        "logo": "ford.png",
        "popular": true,
        "country": "США",
        "models": [
          {
            "id": 0,
            "name": "Bronco",
            "cyrillic-name": "Бронко",
            "class": "J",
            "year-from": "1966",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Bronco Sport",
            "cyrillic-name": "Бронко Спорт",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "EcoSport",
            "cyrillic-name": "ЭкоСпорт",
            "class": "B",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Edge",
            "cyrillic-name": "Эйдж",
            "class": "D",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Equator",
            "cyrillic-name": "Экватор",
            "class": "D",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Escape",
            "cyrillic-name": "Эскейп",
            "class": "C",
            "year-from": "2000",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "Everest",
            "cyrillic-name": "Эверест",
            "class": "J",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "Evos",
            "cyrillic-name": "Эвос",
            "class": "D",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Expedition",
            "cyrillic-name": "Экспедишн",
            "class": "J",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Explorer",
            "cyrillic-name": "Эксплорер",
            "class": "J",
            "year-from": "1990",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "F-150",
            "cyrillic-name": "ф-150",
            "class": "J",
            "year-from": "1979",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Fiesta",
            "cyrillic-name": "Фиеста",
            "class": "B",
            "year-from": "1976",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "Fiesta ST",
            "cyrillic-name": "Фиеста СТ",
            "class": "B",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "Focus",
            "cyrillic-name": "Фокус",
            "class": "C",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Focus ST",
            "cyrillic-name": "Фокус СТ",
            "class": "C",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Galaxy",
            "cyrillic-name": "Гэлакси",
            "class": "M",
            "year-from": "1995",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "GT",
            "cyrillic-name": "гт",
            "class": "S",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "KA",
            "cyrillic-name": "Ка",
            "class": "A",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Kuga",
            "cyrillic-name": "Куга",
            "class": "C",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Maverick",
            "cyrillic-name": "Маверик",
            "class": "J",
            "year-from": "1993",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Mondeo",
            "cyrillic-name": "Мондео",
            "class": "D",
            "year-from": "1993",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Mustang Mach-E",
            "cyrillic-name": "Мустанг Мач-Е",
            "class": "D",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Puma",
            "cyrillic-name": "Пума",
            "class": "B",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Puma ST",
            "cyrillic-name": "Пума СТ",
            "class": "B",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Ranger",
            "cyrillic-name": "Рейнджер",
            "class": "J",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "S-MAX",
            "cyrillic-name": "с-макс",
            "class": "M",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "Territory",
            "cyrillic-name": "территори",
            "class": "E",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "Tourneo Connect",
            "cyrillic-name": "Турнео Коннект",
            "class": "M",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Tourneo Courier",
            "cyrillic-name": "турнео курьер",
            "class": "M",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "Tourneo Custom",
            "cyrillic-name": "Турнео Кастом",
            "class": "M",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "Transit Connect",
            "cyrillic-name": "Транзит Коннект",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 31,
            "name": "Transit Custom",
            "cyrillic-name": "Транзит Кастом",
            "year-from": "2012",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 4,
        "name": "Honda",
        "cyrillic-name": "Хонда",
        "logo": "Honda.png",
        "popular": true,
        "country": "Япония",
        "models": [
          {
            "id": 0,
            "name": "Avancier",
            "cyrillic-name": "Авансьер",
            "class": "D",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Breeze",
            "cyrillic-name": "Бриз",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Civic Type R",
            "cyrillic-name": "Сивик Тайп Р",
            "class": "C",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "CR-V",
            "cyrillic-name": "цр-в",
            "class": "C",
            "year-from": "1995",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Crider",
            "cyrillic-name": "Кридер",
            "class": "C",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "e",
            "cyrillic-name": "е",
            "class": "B",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "e:NP1",
            "cyrillic-name": "И:НП1",
            "class": "B",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "e:NS1",
            "cyrillic-name": "Е:НС1",
            "class": "B",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Elysion",
            "cyrillic-name": "Элюзион",
            "class": "M",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Envix",
            "cyrillic-name": "Енвикс",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "Fit",
            "cyrillic-name": "Фит",
            "class": "B",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Freed",
            "cyrillic-name": "Фрид",
            "class": "M",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "HR-V",
            "cyrillic-name": "хр-в",
            "class": "B",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "Insight",
            "cyrillic-name": "Инсайт",
            "class": "B",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Mobilio",
            "cyrillic-name": "Мобилио",
            "class": "M",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "N-BOX",
            "cyrillic-name": "н-бокс",
            "class": "A",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "N-One",
            "cyrillic-name": "Н-Уан",
            "class": "A",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "N-VAN",
            "cyrillic-name": "Н-ВЭН",
            "class": "M",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "NSX",
            "cyrillic-name": "нскс",
            "class": "S",
            "year-from": "1990",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Odyssey",
            "cyrillic-name": "Одисей",
            "class": "M",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Odyssey (USA)",
            "cyrillic-name": "Одиссей (Северная Америка)",
            "class": "M",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Passport",
            "cyrillic-name": "Пасспорт",
            "class": "J",
            "year-from": "1993",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Pilot",
            "cyrillic-name": "Пилот",
            "class": "E",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Ridgeline",
            "cyrillic-name": "Риджлайн",
            "class": "J",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "S660",
            "cyrillic-name": "С660",
            "class": "S",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Shuttle",
            "cyrillic-name": "Шатл",
            "class": "M",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "Stepwgn",
            "cyrillic-name": "Степвагон",
            "class": "M",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "UR-V",
            "cyrillic-name": "ЮР-В",
            "class": "J",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Vezel",
            "cyrillic-name": "Везел",
            "class": "B",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "XR-V",
            "cyrillic-name": "ХР-В",
            "class": "B",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "ZR-V",
            "cyrillic-name": "ЗР-В",
            "class": "C",
            "year-from": "2022",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 5,
        "name": "Hyundai",
        "cyrillic-name": "Хендай",
        "logo": "hundai.png",
        "popular": true,
        "country": "Южная Корея",
        "models": [
          {
            "id": 0,
            "name": "Accent",
            "cyrillic-name": "Акцент",
            "class": "B",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Avante",
            "cyrillic-name": "Авант",
            "class": "C",
            "year-from": "1995",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Avante N",
            "cyrillic-name": "Аванте Н",
            "class": "B",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Azera",
            "cyrillic-name": "азера",
            "class": "E",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Bayon",
            "cyrillic-name": "Байон",
            "class": "B",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Casper",
            "cyrillic-name": "Каспер",
            "class": "A",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "Celesta",
            "cyrillic-name": "Селеста",
            "class": "C",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "Creta",
            "cyrillic-name": "Крета",
            "class": "B",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Custo",
            "cyrillic-name": "Касто",
            "class": "M",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Elantra",
            "cyrillic-name": "Элантра",
            "class": "C",
            "year-from": "1990",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "Elantra N",
            "cyrillic-name": "Элантра Н",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Grandeur",
            "cyrillic-name": "Грандер",
            "class": "E",
            "year-from": "1986",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "HB20",
            "cyrillic-name": "ЭйчБ20",
            "class": "B",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "i10",
            "cyrillic-name": "и10",
            "class": "A",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "i20",
            "cyrillic-name": "и20",
            "class": "B",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "i20 N",
            "cyrillic-name": "Ай20 Н",
            "class": "B",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "i30",
            "cyrillic-name": "и30",
            "class": "C",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "i30 N",
            "cyrillic-name": "и30 н",
            "class": "C",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "IONIQ",
            "cyrillic-name": "Ионик",
            "class": "C",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "IONIQ 5",
            "cyrillic-name": "ИОНИК 5",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "IONIQ 5 N",
            "cyrillic-name": "ИОНИК 5 Н",
            "class": "C",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "IONIQ 6",
            "cyrillic-name": "ИОНИК 6",
            "class": "D",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "ix35",
            "cyrillic-name": "икс35",
            "class": "C",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Kona",
            "cyrillic-name": "Кона",
            "class": "B",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Kona N",
            "cyrillic-name": "Кона Н",
            "class": "B",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Lafesta",
            "cyrillic-name": "Лафеста",
            "class": "C",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "Mistra",
            "cyrillic-name": "Мистра",
            "class": "D",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "Mufasa",
            "cyrillic-name": "Муфаса",
            "class": "C",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Palisade",
            "cyrillic-name": "Палисад",
            "class": "E",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "Santa Cruz",
            "cyrillic-name": "Санта Круз",
            "class": "J",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "Santa Fe",
            "cyrillic-name": "Санта Фе",
            "class": "D",
            "year-from": "2000",
            "year-to": "null"
          },
          {
            "id": 31,
            "name": "Solaris",
            "cyrillic-name": "Солярис",
            "class": "B",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 32,
            "name": "Staria",
            "cyrillic-name": "Стария",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 33,
            "name": "Tucson",
            "cyrillic-name": "Туксон",
            "class": "C",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 34,
            "name": "Venue",
            "cyrillic-name": "Венуе",
            "class": "B",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 35,
            "name": "Verna",
            "cyrillic-name": "Верна",
            "class": "B",
            "year-from": "1999",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 6,
        "name": "Jeep",
        "cyrillic-name": "Джип",
        "logo": "jeep.png",
        "popular": false,
        "country": "США",
        "models": [
          {
            "id": 0,
            "name": "Avenger",
            "cyrillic-name": "Авенджер",
            "class": "B",
            "year-from": 2023,
            "year-to": null
          },
          {
            "id": 1,
            "name": "Compass",
            "cyrillic-name": "Компас",
            "class": "C",
            "year-from": 2006,
            "year-to": null
          },
          {
            "id": 2,
            "name": "Gladiator",
            "cyrillic-name": "Гладиатор",
            "class": "J",
            "year-from": 2019,
            "year-to": null
          },
          {
            "id": 3,
            "name": "Renegade",
            "cyrillic-name": "Ренегейд",
            "class": "B",
            "year-from": 2014,
            "year-to": null
          }
        ]
      },

      {
        "id": 7,
        "name": "Kia",
        "cyrillic-name": "Киа",
        "logo": "KIA.png",
        "popular": true,
        "country": "Южная Корея",
        "models": [
          {
            "id": 0,
            "name": "Cadenza",
            "cyrillic-name": "Каденза",
            "class": "E",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Carens",
            "cyrillic-name": "Каренс",
            "class": "M",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Carnival",
            "cyrillic-name": "Карнивал",
            "class": "M",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Ceed",
            "cyrillic-name": "Сид",
            "class": "C",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Ceed GT",
            "cyrillic-name": "цеед гт",
            "class": "C",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Cerato",
            "cyrillic-name": "Церато",
            "class": "C",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "EV6",
            "cyrillic-name": "ЕВ6",
            "class": "D",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "EV9",
            "cyrillic-name": "ЕВ9",
            "class": "D",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Forte",
            "cyrillic-name": "Форте",
            "class": "C",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "K3",
            "cyrillic-name": "к3",
            "class": "C",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "K5",
            "cyrillic-name": "к5",
            "class": "D",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "K8",
            "cyrillic-name": "К8",
            "class": "E",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "K9",
            "cyrillic-name": "К9",
            "class": "E",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "KX1",
            "cyrillic-name": "КаИкс1",
            "class": "B",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "KX3",
            "cyrillic-name": "КаИкс3",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Mohave",
            "cyrillic-name": "Мохав",
            "class": "E",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "Morning",
            "cyrillic-name": "морнинг",
            "class": "A",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Niro",
            "cyrillic-name": "Ниро",
            "class": "C",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Pegas",
            "cyrillic-name": "Пегас",
            "class": "B",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Picanto",
            "cyrillic-name": "Пиканто",
            "class": "A",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Ray",
            "cyrillic-name": "Рэй",
            "class": "M",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Rio",
            "cyrillic-name": "Рио",
            "class": "B",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Seltos",
            "cyrillic-name": "Селтос",
            "class": "B",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Sonet",
            "cyrillic-name": "Сонет",
            "class": "A",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Sorento",
            "cyrillic-name": "Соренто",
            "class": "D",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Soul",
            "cyrillic-name": "Соул",
            "class": "B",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "Soul EV",
            "cyrillic-name": "Соул ИВ",
            "class": "B",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "Sportage (China)",
            "cyrillic-name": "Спортейдж Китай",
            "class": "J",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Stinger",
            "cyrillic-name": "Стингер",
            "class": "D",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "Stonic",
            "cyrillic-name": "Стоник",
            "class": "B",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "Telluride",
            "cyrillic-name": "Телюрайд",
            "class": "E",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 31,
            "name": "XCeed",
            "cyrillic-name": "Икс Сид",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 8,
        "name": "Land Rover",
        "cyrillic-name": "Ленд Ровер",
        "logo": "Land Rover.png",
        "popular": true,
        "country": "Великобритания",
        "models": [
          {
            "id": 0,
            "name": "Discovery Sport",
            "cyrillic-name": "Дискавери Спорт",
            "class": "D",
            "year-from": 2014,
            "year-to": null
          },
          {
            "id": 1,
            "name": "Range Rover Evoque",
            "cyrillic-name": "Рендж Ровер Эвок",
            "class": "C",
            "year-from": 2011,
            "year-to": null
          },
          {
            "id": 2,
            "name": "Range Rover Sport",
            "cyrillic-name": "Рендж Ровер Спорт",
            "class": "J",
            "year-from": 2005,
            "year-to": null
          },
          {
            "id": 3,
            "name": "Range Rover Velar",
            "cyrillic-name": "Рендж Ровер Велар",
            "class": "D",
            "year-from": 2017,
            "year-to": null
          }
        ]
      },
      {
        "id": 9,
        "name": "Lexus",
        "cyrillic-name": "Лексус",
        "logo": "Lexus.png",
        "popular": true,
        "country": "Япония",
        "models": [
          {
            "id": 0,
            "name": "CT",
            "cyrillic-name": "цт",
            "class": "C",
            "year-from": 2010,
            "year-to": null
          },
          {
            "id": 1,
            "name": "GX",
            "cyrillic-name": "ГХ",
            "class": "J",
            "year-from": 2002,
            "year-to": null
          },
          {
            "id": 2,
            "name": "IS",
            "cyrillic-name": "ИС",
            "class": "D",
            "year-from": 1999,
            "year-to": null
          },
          {
            "id": 3,
            "name": "LBX",
            "cyrillic-name": "Лбх",
            "class": "J",
            "year-from": 2023,
            "year-to": null
          },
          {
            "id": 4,
            "name": "LC",
            "cyrillic-name": "лц",
            "class": "S",
            "year-from": 2017,
            "year-to": null
          },
          {
            "id": 5,
            "name": "LM",
            "cyrillic-name": "ЛМ",
            "class": "M",
            "year-from": 2019,
            "year-to": null
          },
          {
            "id": 6,
            "name": "LX",
            "cyrillic-name": "ЛХ",
            "class": "J",
            "year-from": 1995,
            "year-to": null
          },
          {
            "id": 7,
            "name": "NX",
            "cyrillic-name": "Н-Икс",
            "class": "D",
            "year-from": 2014,
            "year-to": null
          },
          {
            "id": 8,
            "name": "RC",
            "cyrillic-name": "РС",
            "class": "D",
            "year-from": 2014,
            "year-to": null
          },
          {
            "id": 9,
            "name": "RC F",
            "cyrillic-name": "РС Ф",
            "class": "D",
            "year-from": 2014,
            "year-to": null
          },
          {
            "id": 10,
            "name": "RZ",
            "cyrillic-name": "РЗ",
            "class": "D",
            "year-from": 2022,
            "year-to": null
          },
          {
            "id": 11,
            "name": "TX",
            "cyrillic-name": "ТХ",
            "class": "J",
            "year-from": 2023,
            "year-to": null
          },
          {
            "id": 12,
            "name": "UX",
            "cyrillic-name": "ЮХ",
            "class": "C",
            "year-from": 2018,
            "year-to": null
          }
        ]
      },
      {
        "id": 10,
        "name": "Mazda",
        "cyrillic-name": "Мазда",
        "logo": "MAZDA.png",
        "popular": true,
        "country": "Япония",
        "models": [
          {
            "id": 0,
            "name": "2",
            "cyrillic-name": "2",
            "class": "B",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "3",
            "cyrillic-name": "3",
            "class": "C",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "6",
            "cyrillic-name": "6",
            "class": "D",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "BT-50",
            "cyrillic-name": "БТ-50",
            "class": "J",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "CX-3",
            "cyrillic-name": "сх-3",
            "class": "B",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "CX-30",
            "cyrillic-name": "сх-30",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "CX-4",
            "cyrillic-name": "СХ-4",
            "class": "C",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "CX-5",
            "cyrillic-name": "цкс-5",
            "class": "C",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "CX-50",
            "cyrillic-name": "ЦИкс-50",
            "class": "C",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "CX-60",
            "cyrillic-name": "ЦИкс-60",
            "class": "C",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "CX-8",
            "cyrillic-name": "цкс-8",
            "class": "E",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "CX-9",
            "cyrillic-name": "цкс-9",
            "class": "E",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "CX-90",
            "cyrillic-name": "ЦИкс90",
            "class": "E",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "Flair",
            "cyrillic-name": "флэир",
            "class": "M",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Flair Crossover",
            "cyrillic-name": "флэир кроссовер",
            "class": "M",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Flair Wagon",
            "cyrillic-name": "Флэир Вэгон",
            "class": "M",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "MX-30",
            "cyrillic-name": "МХ-30",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Roadster",
            "cyrillic-name": "Родстер",
            "class": "S",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Scrum",
            "cyrillic-name": "Скрум",
            "class": "M",
            "year-from": "1991",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 11,
        "name": "Mercedes-Benz",
        "cyrillic-name": "Мерседес-Бенц",
        "logo": "Mercedes.png",
        "popular": true,
        "country": "Германия",
        "models": [
          {
            "id": 0,
            "name": "A-Class",
            "cyrillic-name": "А-класс",
            "class": "A",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "A-Class AMG",
            "cyrillic-name": "А-класс АМГ",
            "class": "C",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "AMG GT",
            "cyrillic-name": "амг гт",
            "class": "S",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "AMG ONE",
            "cyrillic-name": "АМГ УАН",
            "class": "S",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "B-Class",
            "cyrillic-name": "б-класс",
            "class": "C",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "C-Class",
            "cyrillic-name": "Ц-класс",
            "class": "D",
            "year-from": "1993",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "C-Class AMG",
            "cyrillic-name": "Ц-класс АМГ",
            "class": "D",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "Citan",
            "cyrillic-name": "Цитан",
            "class": "M",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "CLA",
            "cyrillic-name": "ЦЛА-класс",
            "class": "C",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "CLA AMG",
            "cyrillic-name": "ЦЛА-класс АМГ",
            "class": "C",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "CLE",
            "cyrillic-name": "ЦЛЕ-класс",
            "class": "D",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "CLS",
            "cyrillic-name": "ЦЛС-класс",
            "class": "E",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "CLS AMG",
            "cyrillic-name": "ЦЛС-класс АМГ",
            "class": "E",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "E-Class",
            "cyrillic-name": "Е-класс",
            "class": "F",
            "year-from": "1992",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "E-Class AMG",
            "cyrillic-name": "Е-класс АМГ",
            "class": "E",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "EQA",
            "cyrillic-name": "ЕКьюА",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "EQB",
            "cyrillic-name": "ЕКьюБ",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "EQC",
            "cyrillic-name": "ЕКьюС",
            "class": "D",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "EQE",
            "cyrillic-name": "ЕКьюЕ",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "EQE AMG",
            "cyrillic-name": "ЕКьюЕ АМГ",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "EQE SUV",
            "cyrillic-name": "ЕКьюЕ СУВ",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "EQE SUV AMG",
            "cyrillic-name": "ЕКьюЕ СУВ АМГ",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "EQS",
            "cyrillic-name": "ЕКьюЭс",
            "class": "F",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "EQS AMG",
            "cyrillic-name": "ЕКьюЭс АМГ",
            "class": "F",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "EQS SUV",
            "cyrillic-name": "ЕКьюЭс СУВ",
            "class": "F",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "EQV",
            "cyrillic-name": "ЕКьюВ",
            "class": "M",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "G-Class AMG",
            "cyrillic-name": "г-класс амг",
            "class": "J",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "GLA",
            "cyrillic-name": "ГЛА-класс",
            "class": "C",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "GLA AMG",
            "cyrillic-name": "ГЛА-класс АМГ",
            "class": "C",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "GLB",
            "cyrillic-name": "ГЛБ",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "GLB AMG",
            "cyrillic-name": "ГЛБ АМГ",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 31,
            "name": "GLC",
            "cyrillic-name": "ГЛЦ",
            "class": "D",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 32,
            "name": "GLC AMG",
            "cyrillic-name": "ГЛЦ АМГ",
            "class": "D",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 33,
            "name": "GLC Coupe",
            "cyrillic-name": "ГЛЦ Купе",
            "class": "D",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 34,
            "name": "GLC Coupe AMG",
            "cyrillic-name": "глц купе амг",
            "class": "D",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 35,
            "name": "GLE",
            "cyrillic-name": "ГЛЕ",
            "class": "E",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 36,
            "name": "GLE AMG",
            "cyrillic-name": "ГЛЕ АМГ",
            "class": "E",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 37,
            "name": "GLE Coupe",
            "cyrillic-name": "ГЛЕ Купе",
            "class": "E",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 38,
            "name": "GLE Coupe AMG",
            "cyrillic-name": "ГЛЕ Купе АМГ",
            "class": "E",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 39,
            "name": "GLS",
            "cyrillic-name": "глс",
            "class": "F",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 40,
            "name": "GLS AMG",
            "cyrillic-name": "глс амг",
            "class": "F",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 41,
            "name": "Marco Polo",
            "cyrillic-name": "Марко Поло",
            "class": "M",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 42,
            "name": "Maybach EQS SUV",
            "cyrillic-name": "Майбах ЕКьюэС СУВ",
            "class": "F",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 43,
            "name": "Maybach GLS",
            "cyrillic-name": "Майбах ГЛС",
            "class": "F",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 44,
            "name": "Maybach S-Class",
            "cyrillic-name": "Майбах Эс-Класс",
            "class": "F",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 45,
            "name": "Metris",
            "cyrillic-name": "Метрис",
            "class": "M",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 46,
            "name": "S-Class",
            "cyrillic-name": "с-класс",
            "class": "E",
            "year-from": "1965",
            "year-to": "null"
          },
          {
            "id": 47,
            "name": "S-Class AMG",
            "cyrillic-name": "с-класс амг",
            "class": "F",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 48,
            "name": "SL-Class AMG",
            "cyrillic-name": "СЛ-класс АМГ",
            "class": "S",
            "year-from": "1993",
            "year-to": "null"
          },
          {
            "id": 49,
            "name": "T-Class",
            "cyrillic-name": "Т-класс",
            "class": "M",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 50,
            "name": "V-Class",
            "cyrillic-name": "в-класс",
            "class": "M",
            "year-from": "1996",
            "year-to": "null"
          },
          {
            "id": 51,
            "name": "Vito",
            "cyrillic-name": "вито",
            "class": "M",
            "year-from": "1996",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 12,
        "name": "Mitsubishi",
        "cyrillic-name": "Митсубиси",
        "logo": "Mitsubishi.png",
        "popular": true,
        "country": "Япония",
        "models": [
          {
            "id": 0,
            "name": "Airtrek",
            "cyrillic-name": "Аиртрек",
            "class": "D",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "ASX",
            "cyrillic-name": "аскс",
            "class": "C",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Attrage",
            "cyrillic-name": "Аттраж",
            "class": "C",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Delica",
            "cyrillic-name": "Делика",
            "class": "M",
            "year-from": "1979",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Delica D:2",
            "cyrillic-name": "Делика Д:2",
            "class": "M",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Delica D:5",
            "cyrillic-name": "Дулика Д:5",
            "class": "M",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "Eclipse Cross",
            "cyrillic-name": "Эклипс Кросс",
            "class": "C",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "eK Space",
            "cyrillic-name": "еК Спейс",
            "class": "A",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "eK Wagon",
            "cyrillic-name": "ек вагон",
            "class": "A",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Minicab",
            "cyrillic-name": "Миникэб",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "Outlander",
            "cyrillic-name": "Аутлендер",
            "class": "D",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Outlander Sport",
            "cyrillic-name": "Аутлендер Спорт",
            "class": "C",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "Pajero Sport",
            "cyrillic-name": "Паджеро Спорт",
            "class": "J",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "RVR",
            "cyrillic-name": "РВР",
            "class": "M",
            "year-from": "1991",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Space Star",
            "cyrillic-name": "Спайс Стар",
            "class": "M",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Triton",
            "cyrillic-name": "Тритон",
            "class": "J",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "Xpander",
            "cyrillic-name": "хпандер",
            "class": "C",
            "year-from": "2017",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 13,
        "name": "Nissan",
        "cyrillic-name": "Ниссан",
        "logo": "Nissan.png",
        "popular": true,
        "country": "Япония",
        "models": [
          {
            "id": 0,
            "name": "Armada",
            "cyrillic-name": "Армада",
            "class": "J",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Bluebird Sylphy",
            "cyrillic-name": "Блюбёрд Силфи",
            "class": "C",
            "year-from": "2000",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Dayz Roox",
            "cyrillic-name": "Дейз Рукс",
            "class": "A",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Elgrand",
            "cyrillic-name": "Элгранд",
            "class": "M",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Frontier",
            "cyrillic-name": "Фронтир",
            "class": "J",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Fuga",
            "cyrillic-name": "Фуга",
            "class": "E",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "GT-R",
            "cyrillic-name": "гт-р",
            "class": "S",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "Juke",
            "cyrillic-name": "Джук",
            "class": "B",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Kicks",
            "cyrillic-name": "Кикс",
            "class": "B",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Lannia",
            "cyrillic-name": "Лания",
            "class": "C",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "Leaf",
            "cyrillic-name": "лиф",
            "class": "B",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Livina",
            "cyrillic-name": "ливина",
            "class": "M",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "Note",
            "cyrillic-name": "Ноут",
            "class": "C",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "NV100 Clipper",
            "cyrillic-name": "клиппер",
            "class": "M",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "NV200",
            "cyrillic-name": "нв200",
            "class": "M",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "NV300",
            "cyrillic-name": "НВ300",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "NV350 Caravan",
            "cyrillic-name": "нв350 цараван",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Qashqai",
            "cyrillic-name": "Кашкай",
            "class": "C",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Rogue",
            "cyrillic-name": "Рог",
            "class": "D",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Rogue Sport",
            "cyrillic-name": "Рог Спорт",
            "class": "C",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Roox",
            "cyrillic-name": "Рукс",
            "class": "M",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Serena",
            "cyrillic-name": "Серена",
            "class": "M",
            "year-from": "1991",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Terra",
            "cyrillic-name": "Терра",
            "class": "J",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Tiida",
            "cyrillic-name": "Тиида",
            "class": "C",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Titan",
            "cyrillic-name": "Титан",
            "class": "J",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Versa",
            "cyrillic-name": "верса",
            "class": "C",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "X-Terra",
            "cyrillic-name": "Икс-Терра",
            "class": "J",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "X-Trail",
            "cyrillic-name": "кс-траил",
            "class": "D",
            "year-from": "2000",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Z",
            "cyrillic-name": "зет",
            "class": "S",
            "year-from": "2021",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 14,
        "name": "Opel",
        "cyrillic-name": "Опель",
        "logo": "Opel.png",
        "popular": true,
        "country": "Германия",
        "models": [
          {
            "id": 0,
            "name": "Ampera",
            "cyrillic-name": "Ампера",
            "class": "C",
            "year-from": 2011,
            "year-to": null
          },
          {
            "id": 1,
            "name": "Astra",
            "cyrillic-name": "Астра",
            "class": "C",
            "year-from": 1991,
            "year-to": null
          },
          {
            "id": 2,
            "name": "Combo",
            "cyrillic-name": "Комбо",
            "class": "",
            "year-from": 1993,
            "year-to": null
          },
          {
            "id": 3,
            "name": "Crossland X",
            "cyrillic-name": "Кросленд Х",
            "class": "B",
            "year-from": 2017,
            "year-to": null
          },
          {
            "id": 4,
            "name": "Grandland X",
            "cyrillic-name": "грандланд кс",
            "class": "C",
            "year-from": 2017,
            "year-to": null
          },
          {
            "id": 5,
            "name": "Insignia",
            "cyrillic-name": "Инсигния",
            "class": "D",
            "year-from": 2008,
            "year-to": null
          },
          {
            "id": 6,
            "name": "Mokka",
            "cyrillic-name": "Мокка",
            "class": "B",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 7,
            "name": "Vivaro",
            "cyrillic-name": "Виваро",
            "class": "",
            "year-from": 2001,
            "year-to": null
          },
          {
            "id": 8,
            "name": "Zafira Life",
            "cyrillic-name": "Зафира Лайф",
            "class": "M",
            "year-from": 2019,
            "year-to": null
          }
        ]
      },

      {
        "id": 15,
        "name": "Peugeot",
        "cyrillic-name": "Пежо",
        "logo": "Peugeot.png",
        "popular": true,
        "country": "Франция",
        "models": [
          {
            "id": 0,
            "name": "2008",
            "cyrillic-name": "2008",
            "class": "B",
            "year-from": 2013,
            "year-to": null
          },
          {
            "id": 1,
            "name": "207i (Iran Khodro)",
            "cyrillic-name": "207и (Иран Кходро)",
            "class": "B",
            "year-from": 2016,
            "year-to": null
          },
          {
            "id": 2,
            "name": "208",
            "cyrillic-name": "208",
            "class": "B",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 3,
            "name": "3008",
            "cyrillic-name": "3008",
            "class": "C",
            "year-from": 2009,
            "year-to": null
          },
          {
            "id": 4,
            "name": "301",
            "cyrillic-name": "301",
            "class": "B",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 5,
            "name": "308",
            "cyrillic-name": "308",
            "class": "C",
            "year-from": 2007,
            "year-to": null
          },
          {
            "id": 6,
            "name": "4008",
            "cyrillic-name": "4008",
            "class": "C",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 7,
            "name": "408",
            "cyrillic-name": "408",
            "class": "C",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 8,
            "name": "5008",
            "cyrillic-name": "5008",
            "class": "M",
            "year-from": 2009,
            "year-to": null
          },
          {
            "id": 9,
            "name": "508",
            "cyrillic-name": "508",
            "class": "D",
            "year-from": 2011,
            "year-to": null
          },
          {
            "id": 10,
            "name": "Expert",
            "cyrillic-name": "Эксперт",
            "class": "",
            "year-from": 1995,
            "year-to": null
          },
          {
            "id": 11,
            "name": "Partner",
            "cyrillic-name": "Партнер",
            "class": "",
            "year-from": 1997,
            "year-to": null
          },
          {
            "id": 12,
            "name": "Pick Up",
            "cyrillic-name": "Пик Ап",
            "class": "J",
            "year-from": 2017,
            "year-to": null
          },
          {
            "id": 13,
            "name": "Rifter",
            "cyrillic-name": "Рифтер",
            "class": "M",
            "year-from": 2018,
            "year-to": null
          },
          {
            "id": 14,
            "name": "Traveller",
            "cyrillic-name": "Травелер",
            "class": "M",
            "year-from": 2016,
            "year-to": null
          }
        ]
      },

      {
        "id": 16,
        "name": "Porsche",
        "cyrillic-name": "Порше",
        "logo": "Porsche.png",
        "popular": true,
        "country": "Германия",
        "models": [
          {
            "id": 0,
            "name": "718 Spyder",
            "cyrillic-name": "718 Спайдер",
            "class": "S",
            "year-from": 2019,
            "year-to": null
          },
          {
            "id": 1,
            "name": "911",
            "cyrillic-name": "911",
            "class": "S",
            "year-from": 1963,
            "year-to": null
          },
          {
            "id": 2,
            "name": "911 GT2",
            "cyrillic-name": "911 гт2",
            "class": "S",
            "year-from": 1995,
            "year-to": 2019
          },
          {
            "id": 3,
            "name": "911 GT3",
            "cyrillic-name": "911 гт3",
            "class": "S",
            "year-from": 1999,
            "year-to": null
          },
          {
            "id": 4,
            "name": "911 S/T",
            "cyrillic-name": "911 С/Т",
            "class": "S",
            "year-from": 2023,
            "year-to": null
          },
          {
            "id": 5,
            "name": "Boxster",
            "cyrillic-name": "Бокстер",
            "class": "S",
            "year-from": 1996,
            "year-to": null
          },
          {
            "id": 6,
            "name": "Cayenne",
            "cyrillic-name": "Кайен",
            "class": "E",
            "year-from": 2002,
            "year-to": null
          },
          {
            "id": 7,
            "name": "Cayman",
            "cyrillic-name": "Кайман",
            "class": "C",
            "year-from": 2005,
            "year-to": null
          },
          {
            "id": 8,
            "name": "Cayman GT4",
            "cyrillic-name": "Кайман Джи-Ти 4",
            "class": "S",
            "year-from": 2015,
            "year-to": null
          },
          {
            "id": 9,
            "name": "Macan",
            "cyrillic-name": "Макан",
            "class": "D",
            "year-from": 2014,
            "year-to": null
          },
          {
            "id": 10,
            "name": "Panamera",
            "cyrillic-name": "Панамера",
            "class": "F",
            "year-from": 2009,
            "year-to": null
          },
          {
            "id": 11,
            "name": "Taycan",
            "cyrillic-name": "Тайкан",
            "class": "F",
            "year-from": 2019,
            "year-to": null
          }
        ]
      },
      {
        "id": 17,
        "name": "Renault",
        "cyrillic-name": "Рено",
        "logo": "Renault.png",
        "popular": true,
        "country": "Франция",
        "models": [
          {
            "id": 0,
            "name": "Alaskan",
            "cyrillic-name": "Аласкан",
            "class": "J",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Arkana",
            "cyrillic-name": "Аркана",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Austral",
            "cyrillic-name": "Аустрал",
            "class": "C",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Captur",
            "cyrillic-name": "Каптюр",
            "class": "B",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "City K-ZE",
            "cyrillic-name": "Сити К-ЗЕ",
            "class": "A",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Clio",
            "cyrillic-name": "Клио",
            "class": "B",
            "year-from": "1990",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "Dokker",
            "cyrillic-name": "доккер",
            "class": "M",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "Duster",
            "cyrillic-name": "Дастер",
            "class": "B",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Espace",
            "cyrillic-name": "Эспэйс",
            "class": "M",
            "year-from": "1984",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Kadjar",
            "cyrillic-name": "Каджар",
            "class": "C",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "Kangoo",
            "cyrillic-name": "Кэнгу",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Koleos",
            "cyrillic-name": "Колеос",
            "class": "D",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "KWID",
            "cyrillic-name": "квид",
            "class": "A",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "Lodgy",
            "cyrillic-name": "Лоджи",
            "class": "M",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Megane",
            "cyrillic-name": "Меган",
            "class": "C",
            "year-from": "1995",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Megane E-Tech",
            "cyrillic-name": "Меган Е Тех",
            "class": "B",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "Megane RS",
            "cyrillic-name": "Меган РС",
            "class": "C",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Rafale",
            "cyrillic-name": "Рафаль",
            "class": "J",
            "year-from": "2024",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Sandero RS",
            "cyrillic-name": "Сандеро РС",
            "class": "B",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Talisman",
            "cyrillic-name": "Талисман",
            "class": "D",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Twingo",
            "cyrillic-name": "Твинго",
            "class": "A",
            "year-from": "1993",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Twizy",
            "cyrillic-name": "Твизи",
            "class": "A",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "ZOE",
            "cyrillic-name": "ЗОЕ",
            "class": "B",
            "year-from": "2012",
            "year-to": "null"
          }
        ]
      },
      {
        "id": 18,
        "name": "Skoda",
        "cyrillic-name": "Шкода",
        "logo": "Skoda.png",
        "popular": true,
        "country": "Чехия",
        "models": [
          {
            "id": 0,
            "name": "Enyaq",
            "cyrillic-name": "Эниак",
            "class": "C",
            "year-from": 2020,
            "year-to": null
          },
          {
            "id": 1,
            "name": "Enyaq Coupe",
            "cyrillic-name": "Эниак Купе",
            "class": "C",
            "year-from": 2022,
            "year-to": null
          },
          {
            "id": 2,
            "name": "Enyaq Coupe RS",
            "cyrillic-name": "Эниак Купе РС",
            "class": "C",
            "year-from": 2022,
            "year-to": null
          },
          {
            "id": 3,
            "name": "Enyaq RS",
            "cyrillic-name": "Эниак РС",
            "class": "C",
            "year-from": 2022,
            "year-to": null
          },
          {
            "id": 4,
            "name": "Fabia",
            "cyrillic-name": "Фабия",
            "class": "B",
            "year-from": 1999,
            "year-to": null
          },
          {
            "id": 5,
            "name": "Kamiq",
            "cyrillic-name": "Камик",
            "class": "B",
            "year-from": 2018,
            "year-to": null
          },
          {
            "id": 6,
            "name": "Karoq",
            "cyrillic-name": "Карок",
            "class": "C",
            "year-from": 2017,
            "year-to": null
          },
          {
            "id": 7,
            "name": "Kodiaq",
            "cyrillic-name": "Кодиак",
            "class": "D",
            "year-from": 2016,
            "year-to": null
          },
          {
            "id": 8,
            "name": "Kodiaq GT",
            "cyrillic-name": "Кодиак ГТ",
            "class": "D",
            "year-from": 2019,
            "year-to": null
          },
          {
            "id": 9,
            "name": "Kodiaq RS",
            "cyrillic-name": "Кодиак РС",
            "class": "D",
            "year-from": 2018,
            "year-to": null
          },
          {
            "id": 10,
            "name": "Octavia RS",
            "cyrillic-name": "Октавия РС",
            "class": "D",
            "year-from": 2001,
            "year-to": null
          },
          {
            "id": 11,
            "name": "Rapid",
            "cyrillic-name": "Рапид",
            "class": "B",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 12,
            "name": "Scala",
            "cyrillic-name": "Скала",
            "class": "C",
            "year-from": 2019,
            "year-to": null
          },
          {
            "id": 13,
            "name": "Superb",
            "cyrillic-name": "Суперб",
            "class": "D",
            "year-from": 2001,
            "year-to": null
          }
        ]
      },
      {
        "id": 19,
        "name": "Subaru",
        "cyrillic-name": "Субару",
        "logo": "Subaru.png",
        "popular": true,
        "country": "Япония",
        "models": [
          {
            "id": 0,
            "name": "Ascent",
            "cyrillic-name": "асцент",
            "class": "E",
            "year-from": 2017,
            "year-to": null
          },
          {
            "id": 1,
            "name": "BRZ",
            "cyrillic-name": "брз",
            "class": "S",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 2,
            "name": "Crosstrek",
            "cyrillic-name": "Кросстрек",
            "class": "C",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 3,
            "name": "Dias Wagon",
            "cyrillic-name": "диас вагон",
            "class": "M",
            "year-from": 2003,
            "year-to": null
          },
          {
            "id": 4,
            "name": "Forester",
            "cyrillic-name": "Форестер",
            "class": "D",
            "year-from": 1997,
            "year-to": null
          },
          {
            "id": 5,
            "name": "Impreza",
            "cyrillic-name": "Импреза",
            "class": "C",
            "year-from": 1992,
            "year-to": null
          },
          {
            "id": 6,
            "name": "Levorg",
            "cyrillic-name": "Леворг",
            "class": "D",
            "year-from": 2014,
            "year-to": null
          },
          {
            "id": 7,
            "name": "Outback",
            "cyrillic-name": "Аутбек",
            "class": "D",
            "year-from": 1994,
            "year-to": null
          },
          {
            "id": 8,
            "name": "Pleo Plus",
            "cyrillic-name": "Плео Плюс",
            "class": "A",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 9,
            "name": "Solterra",
            "cyrillic-name": "Солтерра",
            "class": "D",
            "year-from": 2022,
            "year-to": null
          },
          {
            "id": 10,
            "name": "Stella",
            "cyrillic-name": "Стелла",
            "class": "M",
            "year-from": 2006,
            "year-to": null
          },
          {
            "id": 11,
            "name": "WRX",
            "cyrillic-name": "вркс",
            "class": "C",
            "year-from": 2014,
            "year-to": null
          },
          {
            "id": 12,
            "name": "XV",
            "cyrillic-name": "ксв",
            "class": "C",
            "year-from": 2011,
            "year-to": null
          }
        ]
      },

      {
        "id": 20,
        "name": "Toyota",
        "cyrillic-name": "Тойота",
        "logo": "TOYOTA.png",
        "popular": true,
        "country": "Япония",
        "models": [
          {
            "id": 0,
            "name": "Aqua",
            "cyrillic-name": "Аква",
            "class": "B",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Avalon",
            "cyrillic-name": "Авалон",
            "class": "E",
            "year-from": "1994",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Avanza",
            "cyrillic-name": "аванза",
            "class": "M",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Aygo",
            "cyrillic-name": "Айго",
            "class": "A",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Aygo X",
            "cyrillic-name": "Айго Икс",
            "class": "A",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "bZ3",
            "cyrillic-name": "бЗ3",
            "class": "C",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "bZ4X",
            "cyrillic-name": "бЗ4Х",
            "class": "D",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "C-HR",
            "cyrillic-name": "ц-хр",
            "class": "C",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "COMS",
            "cyrillic-name": "КОМС",
            "class": "A",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Corolla Cross",
            "cyrillic-name": "Королла Кросс",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "Crown Kluger",
            "cyrillic-name": "Краун Клагер",
            "class": "E",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "Fortuner",
            "cyrillic-name": "Фортунер",
            "class": "J",
            "year-from": "2005",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "Frontlander",
            "cyrillic-name": "Фронтлендер",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "GR86",
            "cyrillic-name": "ГР86",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "Grand Highlander",
            "cyrillic-name": "Гранд Хайлендер",
            "class": "E",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "Granvia",
            "cyrillic-name": "Гранвиа",
            "class": "M",
            "year-from": "1995",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "GT86",
            "cyrillic-name": "гт86",
            "class": "S",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Harrier",
            "cyrillic-name": "Харриер",
            "class": "E",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Highlander",
            "cyrillic-name": "Хайлендер",
            "class": "E",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Innova",
            "cyrillic-name": "Иннова",
            "class": "M",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Izoa",
            "cyrillic-name": "Изоа",
            "class": "B",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Levin",
            "cyrillic-name": "Левин",
            "class": "C",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Mirai",
            "cyrillic-name": "Мирай",
            "class": "D",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Noah",
            "cyrillic-name": "Ноа",
            "class": "M",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Passo",
            "cyrillic-name": "Пассо",
            "class": "B",
            "year-from": "2004",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Pixis Epoch",
            "cyrillic-name": "Пиксис Эпоч",
            "class": "A",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "Pixis Joy",
            "cyrillic-name": "Пиксис Джой",
            "class": "A",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "Pixis Mega",
            "cyrillic-name": "Пиксис Мега",
            "class": "A",
            "year-from": "2015",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "Pixis Van",
            "cyrillic-name": "Пиксис Ван",
            "class": "M",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "Prius",
            "cyrillic-name": "Приус",
            "class": "C",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "Prius c",
            "cyrillic-name": "Приус си",
            "class": "C",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 31,
            "name": "ProAce",
            "cyrillic-name": "ПроЭйс",
            "class": "M",
            "year-from": "2013",
            "year-to": "null"
          },
          {
            "id": 32,
            "name": "ProAce City",
            "cyrillic-name": "ПроЭйс Сити",
            "class": "M",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 33,
            "name": "Probox",
            "cyrillic-name": "Пробокс",
            "class": "C",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 34,
            "name": "Raize",
            "cyrillic-name": "Райз",
            "class": "B",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 35,
            "name": "Roomy",
            "cyrillic-name": "Руми",
            "class": "M",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 36,
            "name": "Rush",
            "cyrillic-name": "Раш",
            "class": "B",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 37,
            "name": "Sequoia",
            "cyrillic-name": "Секвойя",
            "class": "J",
            "year-from": "2000",
            "year-to": "null"
          },
          {
            "id": 38,
            "name": "Sienna",
            "cyrillic-name": "Сиенна",
            "class": "M",
            "year-from": "1997",
            "year-to": "null"
          },
          {
            "id": 39,
            "name": "Sienta",
            "cyrillic-name": "Сиента",
            "class": "M",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 40,
            "name": "Tacoma",
            "cyrillic-name": "Такома",
            "class": "J",
            "year-from": "1995",
            "year-to": "null"
          },
          {
            "id": 41,
            "name": "Tundra",
            "cyrillic-name": "Тундра",
            "class": "J",
            "year-from": "2000",
            "year-to": "null"
          },
          {
            "id": 42,
            "name": "Vellfire",
            "cyrillic-name": "Веллфайр",
            "class": "M",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 43,
            "name": "Veloz",
            "cyrillic-name": "Велоз",
            "class": "M",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 44,
            "name": "Venza",
            "cyrillic-name": "Венза",
            "class": "D",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 45,
            "name": "Vios",
            "cyrillic-name": "Виос",
            "class": "C",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 46,
            "name": "Voxy",
            "cyrillic-name": "Вокси",
            "class": "M",
            "year-from": "2001",
            "year-to": "null"
          },
          {
            "id": 47,
            "name": "Wigo",
            "cyrillic-name": "Виго",
            "class": "A",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 48,
            "name": "Wildlander",
            "cyrillic-name": "Вайлдлендер",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 49,
            "name": "Yaris",
            "cyrillic-name": "Ярис",
            "class": "B",
            "year-from": "1999",
            "year-to": "null"
          },
          {
            "id": 50,
            "name": "Yaris Cross",
            "cyrillic-name": "Ярис Кросс",
            "class": "B",
            "year-from": "2020",
            "year-to": "null"
          }
        ]
      },

      {
        "id": 21,
        "name": "Lada (ВАЗ)",
        "cyrillic-name": "Лада",
        "logo": "vaz.png",
        "popular": true,
        "country": "Россия",
        "models": [
          {
            "id": 0,
            "name": "Granta",
            "cyrillic-name": "Гранта",
            "class": "B",
            "year-from": 2011,
            "year-to": null
          },
          {
            "id": 1,
            "name": "Largus",
            "cyrillic-name": "Ларгус",
            "class": "C",
            "year-from": 2012,
            "year-to": null
          },
          {
            "id": 2,
            "name": "Niva",
            "cyrillic-name": "Нива",
            "class": "J",
            "year-from": 2020,
            "year-to": null
          },
          {
            "id": 3,
            "name": "Niva Legend",
            "cyrillic-name": "Нива Легенд",
            "class": "J",
            "year-from": 2021,
            "year-to": null
          },
          {
            "id": 4,
            "name": "Vesta",
            "cyrillic-name": "Веста",
            "class": "B",
            "year-from": 2015,
            "year-to": null
          },
          {
            "id": 5,
            "name": "X-cross 5",
            "cyrillic-name": "Икс-кросс 5",
            "class": "C",
            "year-from": 2023,
            "year-to": null
          }
        ]
      },
      {
        "id": 22,
        "name": "Volkswagen",
        "cyrillic-name": "Фольксваген",
        "logo": "Volkswagen.png",
        "popular": true,
        "country": "Германия",
        "models": [
          {
            "id": 0,
            "name": "Amarok",
            "cyrillic-name": "Амарок",
            "class": "J",
            "year-from": "2010",
            "year-to": "null"
          },
          {
            "id": 1,
            "name": "Arteon",
            "cyrillic-name": "Артеон",
            "class": "D",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 2,
            "name": "Arteon R",
            "cyrillic-name": "Артеон Р",
            "class": "D",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 3,
            "name": "Atlas",
            "cyrillic-name": "Атлас",
            "class": "E",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 4,
            "name": "Atlas Cross Sport",
            "cyrillic-name": "Атлас Кросс Спорт",
            "class": "E",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 5,
            "name": "Bora",
            "cyrillic-name": "Бора",
            "class": "C",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 6,
            "name": "California",
            "cyrillic-name": "Калифорния",
            "class": "M",
            "year-from": "1991",
            "year-to": "null"
          },
          {
            "id": 7,
            "name": "Golf",
            "cyrillic-name": "Гольф",
            "class": "C",
            "year-from": "1974",
            "year-to": "null"
          },
          {
            "id": 8,
            "name": "Golf GTI",
            "cyrillic-name": "голф гти",
            "class": "C",
            "year-from": "1976",
            "year-to": "null"
          },
          {
            "id": 9,
            "name": "Golf R",
            "cyrillic-name": "Гольф Р",
            "class": "C",
            "year-from": "2009",
            "year-to": "null"
          },
          {
            "id": 10,
            "name": "ID.3",
            "cyrillic-name": "ид3",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 11,
            "name": "ID.4",
            "cyrillic-name": "ид4",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 12,
            "name": "ID.5",
            "cyrillic-name": "Ид5",
            "class": "C",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 13,
            "name": "ID.6",
            "cyrillic-name": "Ид6",
            "class": "D",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 14,
            "name": "ID.7",
            "cyrillic-name": "ИД7",
            "class": "D",
            "year-from": "2023",
            "year-to": "null"
          },
          {
            "id": 15,
            "name": "ID.Buzz",
            "cyrillic-name": "идбузз",
            "class": "M",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 16,
            "name": "Lamando",
            "cyrillic-name": "Ламандо",
            "class": "C",
            "year-from": "2014",
            "year-to": "null"
          },
          {
            "id": 17,
            "name": "Lavida",
            "cyrillic-name": "Лавида",
            "class": "D",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 18,
            "name": "Magotan",
            "cyrillic-name": "Маготан",
            "class": "D",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 19,
            "name": "Passat (USA and China)",
            "cyrillic-name": "пассат (северная америка и китай)",
            "class": "D",
            "year-from": "2011",
            "year-to": "null"
          },
          {
            "id": 20,
            "name": "Passat CC",
            "cyrillic-name": "Пассат СС",
            "class": "E",
            "year-from": "2008",
            "year-to": "null"
          },
          {
            "id": 21,
            "name": "Phideon",
            "cyrillic-name": "Фидеон",
            "class": "E",
            "year-from": "2016",
            "year-to": "null"
          },
          {
            "id": 22,
            "name": "Polo",
            "cyrillic-name": "Поло",
            "class": "B",
            "year-from": "1975",
            "year-to": "null"
          },
          {
            "id": 23,
            "name": "Polo GTI",
            "cyrillic-name": "поло гти",
            "class": "B",
            "year-from": "1998",
            "year-to": "null"
          },
          {
            "id": 24,
            "name": "Sagitar",
            "cyrillic-name": "Сагитар",
            "class": "C",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 25,
            "name": "Sharan",
            "cyrillic-name": "Шаран",
            "class": "M",
            "year-from": "1995",
            "year-to": "null"
          },
          {
            "id": 26,
            "name": "SpaceFox",
            "cyrillic-name": "спейсфокс",
            "class": "C",
            "year-from": "2006",
            "year-to": "null"
          },
          {
            "id": 27,
            "name": "T-Cross",
            "cyrillic-name": "Т-Кросс",
            "class": "B",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 28,
            "name": "T-Roc",
            "cyrillic-name": "т-рок",
            "class": "B",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 29,
            "name": "T-Roc R",
            "cyrillic-name": "Т-Рок Р",
            "class": "B",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 30,
            "name": "Tacqua",
            "cyrillic-name": "Таква",
            "class": "B",
            "year-from": "2019",
            "year-to": "null"
          },
          {
            "id": 31,
            "name": "Taigo",
            "cyrillic-name": "Тайго",
            "class": "B",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 32,
            "name": "Talagon",
            "cyrillic-name": "Талагон",
            "class": "E",
            "year-from": "2021",
            "year-to": "null"
          },
          {
            "id": 33,
            "name": "Taos",
            "cyrillic-name": "Таос",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 34,
            "name": "Tavendor",
            "cyrillic-name": "Тавендор",
            "class": "E",
            "year-from": "2022",
            "year-to": "null"
          },
          {
            "id": 35,
            "name": "Tayron",
            "cyrillic-name": "Тайрон",
            "class": "C",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 36,
            "name": "Teramont",
            "cyrillic-name": "Терамонт",
            "class": "E",
            "year-from": "2017",
            "year-to": "null"
          },
          {
            "id": 37,
            "name": "Tharu",
            "cyrillic-name": "Тару",
            "class": "C",
            "year-from": "2018",
            "year-to": "null"
          },
          {
            "id": 38,
            "name": "Tiguan",
            "cyrillic-name": "Тигуан",
            "class": "C",
            "year-from": "2007",
            "year-to": "null"
          },
          {
            "id": 39,
            "name": "Tiguan R",
            "cyrillic-name": "Тигуан Р",
            "class": "C",
            "year-from": "2020",
            "year-to": "null"
          },
          {
            "id": 40,
            "name": "Touareg",
            "cyrillic-name": "Туарег",
            "class": "E",
            "year-from": "2002",
            "year-to": "null"
          },
          {
            "id": 41,
            "name": "Touran",
            "cyrillic-name": "Туран",
            "class": "M",
            "year-from": "2003",
            "year-to": "null"
          },
          {
            "id": 42,
            "name": "up!",
            "cyrillic-name": "Ап",
            "class": "A",
            "year-from": "2012",
            "year-to": "null"
          },
          {
            "id": 43,
            "name": "Viloran",
            "cyrillic-name": "Вилоран",
            "class": "M",
            "year-from": "2020",
            "year-to": "null"
          }
        ]
      }
    ],
    ArticulLock: [
      {
        "idAuto": 0,
        "idModels": [
          {
            "id": 0,
            "indexLock": 1,
            "Lux": 10500,
            "Pro": 14700
          },
          {
            "id": 1,
            "indexLock": 2,
            "Lux": 13000,
            "Pro": 17200
          },
          {
            "id": 2,
            "indexLock": 3,
            "Lux": 15700,
            "Pro": 19900
          },
          {
            "id": 3,
            "indexLock": 4,
            "Lux": 23100,
            "Pro": 27300
          },
          {
            "id": 4,
            "indexLock": 5,
            "Lux": 15200,
            "Pro": 19400
          },
          {
            "id": 5,
            "indexLock": 6,
            "Lux": 12300,
            "Pro": 16500
          },
          {
            "id": 6,
            "indexLock": 7,
            "Lux": 9600,
            "Pro": 13800
          },
          {
            "id": 7,
            "indexLock": 8,
            "Lux": 23700,
            "Pro": 27900
          },
          {
            "id": 8,
            "indexLock": 9,
            "Lux": 10600,
            "Pro": 14800
          },
          {
            "id": 9,
            "indexLock": 10,
            "Lux": 19100,
            "Pro": 23300
          },
          {
            "id": 10,
            "indexLock": 11,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 11,
            "indexLock": 12,
            "Lux": 12600,
            "Pro": 16800
          },
          {
            "id": 12,
            "indexLock": 13,
            "Lux": 23600,
            "Pro": 27800
          },
          {
            "id": 13,
            "indexLock": 14,
            "Lux": 8100,
            "Pro": 12300
          },
          {
            "id": 14,
            "indexLock": 15,
            "Lux": 24500,
            "Pro": 28700
          },
          {
            "id": 15,
            "indexLock": 16,
            "Lux": 21500,
            "Pro": 25700
          },
          {
            "id": 16,
            "indexLock": 17,
            "Lux": 12800,
            "Pro": 17000
          },
          {
            "id": 17,
            "indexLock": 18,
            "Lux": 7700,
            "Pro": 11900
          },
          {
            "id": 18,
            "indexLock": 19,
            "Lux": 21000,
            "Pro": 25200
          },
          {
            "id": 19,
            "indexLock": 20,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 20,
            "indexLock": 21,
            "Lux": 13200,
            "Pro": 17400
          },
          {
            "id": 21,
            "indexLock": 22,
            "Lux": 9000,
            "Pro": 13200
          },
          {
            "id": 22,
            "indexLock": 23,
            "Lux": 23100,
            "Pro": 27300
          },
          {
            "id": 23,
            "indexLock": 24,
            "Lux": 14900,
            "Pro": 19100
          },
          {
            "id": 24,
            "indexLock": 25,
            "Lux": 21000,
            "Pro": 25200
          },
          {
            "id": 25,
            "indexLock": 26,
            "Lux": 11500,
            "Pro": 15700
          },
          {
            "id": 26,
            "indexLock": 27,
            "Lux": 11200,
            "Pro": 15400
          },
          {
            "id": 27,
            "indexLock": 28,
            "Lux": 17900,
            "Pro": 22100
          },
          {
            "id": 28,
            "indexLock": 29,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 29,
            "indexLock": 30,
            "Lux": 18400,
            "Pro": 22600
          },
          {
            "id": 30,
            "indexLock": 31,
            "Lux": 17000,
            "Pro": 21200
          },
          {
            "id": 31,
            "indexLock": 32,
            "Lux": 15300,
            "Pro": 19500
          },
          {
            "id": 32,
            "indexLock": 33,
            "Lux": 16200,
            "Pro": 20400
          },
          {
            "id": 33,
            "indexLock": 34,
            "Lux": 24400,
            "Pro": 28600
          },
          {
            "id": 34,
            "indexLock": 35,
            "Lux": 17700,
            "Pro": 21900
          },
          {
            "id": 35,
            "indexLock": 36,
            "Lux": 7900,
            "Pro": 12100
          },
          {
            "id": 36,
            "indexLock": 37,
            "Lux": 15800,
            "Pro": 20000
          },
          {
            "id": 37,
            "indexLock": 38,
            "Lux": 11100,
            "Pro": 15300
          },
          {
            "id": 38,
            "indexLock": 39,
            "Lux": 18300,
            "Pro": 22500
          },
          {
            "id": 39,
            "indexLock": 40,
            "Lux": 12000,
            "Pro": 16200
          },
          {
            "id": 40,
            "indexLock": 41,
            "Lux": 15500,
            "Pro": 19700
          },
          {
            "id": 41,
            "indexLock": 42,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 42,
            "indexLock": 43,
            "Lux": 8000,
            "Pro": 12200
          },
          {
            "id": 43,
            "indexLock": 44,
            "Lux": 10100,
            "Pro": 14300
          },
          {
            "id": 44,
            "indexLock": 45,
            "Lux": 10100,
            "Pro": 14300
          },
          {
            "id": 45,
            "indexLock": 46,
            "Lux": 19700,
            "Pro": 23900
          },
          {
            "id": 46,
            "indexLock": 47,
            "Lux": 22400,
            "Pro": 26600
          },
          {
            "id": 47,
            "indexLock": 48,
            "Lux": 24900,
            "Pro": 29100
          },
          {
            "id": 48,
            "indexLock": 49,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 49,
            "indexLock": 50,
            "Lux": 8600,
            "Pro": 12800
          },
          {
            "id": 50,
            "indexLock": 51,
            "Lux": 11500,
            "Pro": 15700
          },
          {
            "id": 51,
            "indexLock": 52,
            "Lux": 8100,
            "Pro": 12300
          }
        ]
      },
      {
        "idAuto": 1,
        "idModels": [
          {
            "id": 0,
            "indexLock": 53,
            "Lux": 21400,
            "Pro": 25600
          },
          {
            "id": 1,
            "indexLock": 54,
            "Lux": 22700,
            "Pro": 26900
          },
          {
            "id": 2,
            "indexLock": 55,
            "Lux": 22100,
            "Pro": 26300
          },
          {
            "id": 3,
            "indexLock": 56,
            "Lux": 17300,
            "Pro": 21500
          },
          {
            "id": 4,
            "indexLock": 57,
            "Lux": 18900,
            "Pro": 23100
          },
          {
            "id": 5,
            "indexLock": 58,
            "Lux": 10500,
            "Pro": 14700
          },
          {
            "id": 6,
            "indexLock": 59,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 7,
            "indexLock": 60,
            "Lux": 24000,
            "Pro": 28200
          },
          {
            "id": 8,
            "indexLock": 61,
            "Lux": 14900,
            "Pro": 19100
          },
          {
            "id": 9,
            "indexLock": 62,
            "Lux": 11900,
            "Pro": 16100
          },
          {
            "id": 10,
            "indexLock": 63,
            "Lux": 22800,
            "Pro": 27000
          },
          {
            "id": 11,
            "indexLock": 64,
            "Lux": 16300,
            "Pro": 20500
          },
          {
            "id": 12,
            "indexLock": 65,
            "Lux": 12300,
            "Pro": 16500
          },
          {
            "id": 13,
            "indexLock": 66,
            "Lux": 22300,
            "Pro": 26500
          },
          {
            "id": 14,
            "indexLock": 67,
            "Lux": 18600,
            "Pro": 22800
          },
          {
            "id": 15,
            "indexLock": 68,
            "Lux": 24600,
            "Pro": 28800
          },
          {
            "id": 16,
            "indexLock": 69,
            "Lux": 12100,
            "Pro": 16300
          },
          {
            "id": 17,
            "indexLock": 70,
            "Lux": 20800,
            "Pro": 25000
          },
          {
            "id": 18,
            "indexLock": 71,
            "Lux": 9300,
            "Pro": 13500
          },
          {
            "id": 19,
            "indexLock": 72,
            "Lux": 7200,
            "Pro": 11400
          },
          {
            "id": 20,
            "indexLock": 73,
            "Lux": 8500,
            "Pro": 12700
          },
          {
            "id": 21,
            "indexLock": 74,
            "Lux": 24500,
            "Pro": 28700
          },
          {
            "id": 22,
            "indexLock": 75,
            "Lux": 23700,
            "Pro": 27900
          },
          {
            "id": 23,
            "indexLock": 76,
            "Lux": 8800,
            "Pro": 13000
          },
          {
            "id": 24,
            "indexLock": 77,
            "Lux": 23000,
            "Pro": 27200
          },
          {
            "id": 25,
            "indexLock": 78,
            "Lux": 22700,
            "Pro": 26900
          },
          {
            "id": 26,
            "indexLock": 79,
            "Lux": 18900,
            "Pro": 23100
          },
          {
            "id": 27,
            "indexLock": 80,
            "Lux": 21900,
            "Pro": 26100
          },
          {
            "id": 28,
            "indexLock": 81,
            "Lux": 15300,
            "Pro": 19500
          }
        ]
      },
      {
        "idAuto": 2,
        "idModels": [
          {
            "id": 0,
            "indexLock": 82,
            "Lux": 21500,
            "Pro": 25700
          },
          {
            "id": 1,
            "indexLock": 83,
            "Lux": 16900,
            "Pro": 21100
          },
          {
            "id": 2,
            "indexLock": 84,
            "Lux": 21600,
            "Pro": 25800
          },
          {
            "id": 3,
            "indexLock": 85,
            "Lux": 12800,
            "Pro": 17000
          },
          {
            "id": 4,
            "indexLock": 86,
            "Lux": 18400,
            "Pro": 22600
          },
          {
            "id": 5,
            "indexLock": 87,
            "Lux": 21500,
            "Pro": 25700
          },
          {
            "id": 6,
            "indexLock": 88,
            "Lux": 10700,
            "Pro": 14900
          },
          {
            "id": 7,
            "indexLock": 89,
            "Lux": 10900,
            "Pro": 15100
          },
          {
            "id": 8,
            "indexLock": 90,
            "Lux": 10900,
            "Pro": 15100
          },
          {
            "id": 9,
            "indexLock": 91,
            "Lux": 17400,
            "Pro": 21600
          },
          {
            "id": 10,
            "indexLock": 92,
            "Lux": 8000,
            "Pro": 12200
          },
          {
            "id": 11,
            "indexLock": 93,
            "Lux": 23800,
            "Pro": 28000
          },
          {
            "id": 12,
            "indexLock": 94,
            "Lux": 16100,
            "Pro": 20300
          },
          {
            "id": 13,
            "indexLock": 95,
            "Lux": 19700,
            "Pro": 23900
          },
          {
            "id": 14,
            "indexLock": 96,
            "Lux": 11200,
            "Pro": 15400
          },
          {
            "id": 15,
            "indexLock": 97,
            "Lux": 18500,
            "Pro": 22700
          },
          {
            "id": 16,
            "indexLock": 98,
            "Lux": 24300,
            "Pro": 28500
          },
          {
            "id": 17,
            "indexLock": 99,
            "Lux": 14400,
            "Pro": 18600
          },
          {
            "id": 18,
            "indexLock": 100,
            "Lux": 8300,
            "Pro": 12500
          },
          {
            "id": 19,
            "indexLock": 101,
            "Lux": 12000,
            "Pro": 16200
          },
          {
            "id": 20,
            "indexLock": 102,
            "Lux": 22800,
            "Pro": 27000
          },
          {
            "id": 21,
            "indexLock": 103,
            "Lux": 12200,
            "Pro": 16400
          },
          {
            "id": 22,
            "indexLock": 104,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 23,
            "indexLock": 105,
            "Lux": 12100,
            "Pro": 16300
          },
          {
            "id": 24,
            "indexLock": 106,
            "Lux": 23500,
            "Pro": 27700
          },
          {
            "id": 25,
            "indexLock": 107,
            "Lux": 24100,
            "Pro": 28300
          },
          {
            "id": 26,
            "indexLock": 108,
            "Lux": 15300,
            "Pro": 19500
          },
          {
            "id": 27,
            "indexLock": 109,
            "Lux": 13600,
            "Pro": 17800
          },
          {
            "id": 28,
            "indexLock": 110,
            "Lux": 14600,
            "Pro": 18800
          },
          {
            "id": 29,
            "indexLock": 111,
            "Lux": 23200,
            "Pro": 27400
          }
        ]
      },
      {
        "idAuto": 3,
        "idModels": [
          {
            "id": 0,
            "indexLock": 112,
            "Lux": 22400,
            "Pro": 26600
          },
          {
            "id": 1,
            "indexLock": 113,
            "Lux": 16300,
            "Pro": 20500
          },
          {
            "id": 2,
            "indexLock": 114,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 3,
            "indexLock": 115,
            "Lux": 16200,
            "Pro": 20400
          },
          {
            "id": 4,
            "indexLock": 116,
            "Lux": 23200,
            "Pro": 27400
          },
          {
            "id": 5,
            "indexLock": 117,
            "Lux": 22600,
            "Pro": 26800
          },
          {
            "id": 6,
            "indexLock": 118,
            "Lux": 10300,
            "Pro": 14500
          },
          {
            "id": 7,
            "indexLock": 119,
            "Lux": 21200,
            "Pro": 25400
          },
          {
            "id": 8,
            "indexLock": 120,
            "Lux": 15600,
            "Pro": 19800
          },
          {
            "id": 9,
            "indexLock": 121,
            "Lux": 16500,
            "Pro": 20700
          },
          {
            "id": 10,
            "indexLock": 122,
            "Lux": 14200,
            "Pro": 18400
          },
          {
            "id": 11,
            "indexLock": 123,
            "Lux": 16000,
            "Pro": 20200
          },
          {
            "id": 12,
            "indexLock": 124,
            "Lux": 15200,
            "Pro": 19400
          },
          {
            "id": 13,
            "indexLock": 125,
            "Lux": 24900,
            "Pro": 29100
          },
          {
            "id": 14,
            "indexLock": 126,
            "Lux": 10200,
            "Pro": 14400
          },
          {
            "id": 15,
            "indexLock": 127,
            "Lux": 9700,
            "Pro": 13900
          },
          {
            "id": 16,
            "indexLock": 128,
            "Lux": 18000,
            "Pro": 22200
          },
          {
            "id": 17,
            "indexLock": 129,
            "Lux": 17000,
            "Pro": 21200
          },
          {
            "id": 18,
            "indexLock": 130,
            "Lux": 16500,
            "Pro": 20700
          },
          {
            "id": 19,
            "indexLock": 131,
            "Lux": 13300,
            "Pro": 17500
          },
          {
            "id": 20,
            "indexLock": 132,
            "Lux": 20200,
            "Pro": 24400
          },
          {
            "id": 21,
            "indexLock": 133,
            "Lux": 16600,
            "Pro": 20800
          },
          {
            "id": 22,
            "indexLock": 134,
            "Lux": 9000,
            "Pro": 13200
          },
          {
            "id": 23,
            "indexLock": 135,
            "Lux": 11200,
            "Pro": 15400
          },
          {
            "id": 24,
            "indexLock": 136,
            "Lux": 8200,
            "Pro": 12400
          },
          {
            "id": 25,
            "indexLock": 137,
            "Lux": 24400,
            "Pro": 28600
          },
          {
            "id": 26,
            "indexLock": 138,
            "Lux": 22800,
            "Pro": 27000
          },
          {
            "id": 27,
            "indexLock": 139,
            "Lux": 24600,
            "Pro": 28800
          },
          {
            "id": 28,
            "indexLock": 140,
            "Lux": 11500,
            "Pro": 15700
          },
          {
            "id": 29,
            "indexLock": 141,
            "Lux": 11500,
            "Pro": 15700
          },
          {
            "id": 30,
            "indexLock": 142,
            "Lux": 10400,
            "Pro": 14600
          },
          {
            "id": 31,
            "indexLock": 143,
            "Lux": 15500,
            "Pro": 19700
          }
        ]
      },
      {
        "idAuto": 4,
        "idModels": [
          {
            "id": 0,
            "indexLock": 144,
            "Lux": 16200,
            "Pro": 20400
          },
          {
            "id": 1,
            "indexLock": 145,
            "Lux": 7300,
            "Pro": 11500
          },
          {
            "id": 2,
            "indexLock": 146,
            "Lux": 21600,
            "Pro": 25800
          },
          {
            "id": 3,
            "indexLock": 147,
            "Lux": 15900,
            "Pro": 20100
          },
          {
            "id": 4,
            "indexLock": 148,
            "Lux": 8900,
            "Pro": 13100
          },
          {
            "id": 5,
            "indexLock": 149,
            "Lux": 20900,
            "Pro": 25100
          },
          {
            "id": 6,
            "indexLock": 150,
            "Lux": 22000,
            "Pro": 26200
          },
          {
            "id": 7,
            "indexLock": 151,
            "Lux": 9800,
            "Pro": 14000
          },
          {
            "id": 8,
            "indexLock": 152,
            "Lux": 7600,
            "Pro": 11800
          },
          {
            "id": 9,
            "indexLock": 153,
            "Lux": 14400,
            "Pro": 18600
          },
          {
            "id": 10,
            "indexLock": 154,
            "Lux": 11800,
            "Pro": 16000
          },
          {
            "id": 11,
            "indexLock": 155,
            "Lux": 14900,
            "Pro": 19100
          },
          {
            "id": 12,
            "indexLock": 156,
            "Lux": 10600,
            "Pro": 14800
          },
          {
            "id": 13,
            "indexLock": 157,
            "Lux": 15800,
            "Pro": 20000
          },
          {
            "id": 14,
            "indexLock": 158,
            "Lux": 13800,
            "Pro": 18000
          },
          {
            "id": 15,
            "indexLock": 159,
            "Lux": 17800,
            "Pro": 22000
          },
          {
            "id": 16,
            "indexLock": 160,
            "Lux": 8200,
            "Pro": 12400
          },
          {
            "id": 17,
            "indexLock": 161,
            "Lux": 23600,
            "Pro": 27800
          },
          {
            "id": 18,
            "indexLock": 162,
            "Lux": 19000,
            "Pro": 23200
          },
          {
            "id": 19,
            "indexLock": 163,
            "Lux": 16000,
            "Pro": 20200
          },
          {
            "id": 20,
            "indexLock": 164,
            "Lux": 9800,
            "Pro": 14000
          },
          {
            "id": 21,
            "indexLock": 165,
            "Lux": 17800,
            "Pro": 22000
          },
          {
            "id": 22,
            "indexLock": 166,
            "Lux": 24000,
            "Pro": 28200
          },
          {
            "id": 23,
            "indexLock": 167,
            "Lux": 22400,
            "Pro": 26600
          },
          {
            "id": 24,
            "indexLock": 168,
            "Lux": 20200,
            "Pro": 24400
          },
          {
            "id": 25,
            "indexLock": 169,
            "Lux": 8500,
            "Pro": 12700
          },
          {
            "id": 26,
            "indexLock": 170,
            "Lux": 7100,
            "Pro": 11300
          },
          {
            "id": 27,
            "indexLock": 171,
            "Lux": 23600,
            "Pro": 27800
          },
          {
            "id": 28,
            "indexLock": 172,
            "Lux": 11000,
            "Pro": 15200
          },
          {
            "id": 29,
            "indexLock": 173,
            "Lux": 20300,
            "Pro": 24500
          },
          {
            "id": 30,
            "indexLock": 174,
            "Lux": 13200,
            "Pro": 17400
          }
        ]
      },
      {
        "idAuto": 5,
        "idModels": [
          {
            "id": 0,
            "indexLock": 175,
            "Lux": 20600,
            "Pro": 24800
          },
          {
            "id": 1,
            "indexLock": 176,
            "Lux": 9900,
            "Pro": 14100
          },
          {
            "id": 2,
            "indexLock": 177,
            "Lux": 21800,
            "Pro": 26000
          },
          {
            "id": 3,
            "indexLock": 178,
            "Lux": 8500,
            "Pro": 12700
          },
          {
            "id": 4,
            "indexLock": 179,
            "Lux": 22800,
            "Pro": 27000
          },
          {
            "id": 5,
            "indexLock": 180,
            "Lux": 7500,
            "Pro": 11700
          },
          {
            "id": 6,
            "indexLock": 181,
            "Lux": 9600,
            "Pro": 13800
          },
          {
            "id": 7,
            "indexLock": 182,
            "Lux": 20100,
            "Pro": 24300
          },
          {
            "id": 8,
            "indexLock": 183,
            "Lux": 22600,
            "Pro": 26800
          },
          {
            "id": 9,
            "indexLock": 184,
            "Lux": 23000,
            "Pro": 27200
          },
          {
            "id": 10,
            "indexLock": 185,
            "Lux": 14100,
            "Pro": 18300
          },
          {
            "id": 11,
            "indexLock": 186,
            "Lux": 21300,
            "Pro": 25500
          },
          {
            "id": 12,
            "indexLock": 187,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 13,
            "indexLock": 188,
            "Lux": 12300,
            "Pro": 16500
          },
          {
            "id": 14,
            "indexLock": 189,
            "Lux": 13900,
            "Pro": 18100
          },
          {
            "id": 15,
            "indexLock": 190,
            "Lux": 13500,
            "Pro": 17700
          },
          {
            "id": 16,
            "indexLock": 191,
            "Lux": 13800,
            "Pro": 18000
          },
          {
            "id": 17,
            "indexLock": 192,
            "Lux": 19300,
            "Pro": 23500
          },
          {
            "id": 18,
            "indexLock": 193,
            "Lux": 21700,
            "Pro": 25900
          },
          {
            "id": 19,
            "indexLock": 194,
            "Lux": 14700,
            "Pro": 18900
          },
          {
            "id": 20,
            "indexLock": 195,
            "Lux": 17000,
            "Pro": 21200
          },
          {
            "id": 21,
            "indexLock": 196,
            "Lux": 12200,
            "Pro": 16400
          },
          {
            "id": 22,
            "indexLock": 197,
            "Lux": 16100,
            "Pro": 20300
          },
          {
            "id": 23,
            "indexLock": 198,
            "Lux": 15400,
            "Pro": 19600
          },
          {
            "id": 24,
            "indexLock": 199,
            "Lux": 18400,
            "Pro": 22600
          },
          {
            "id": 25,
            "indexLock": 200,
            "Lux": 24400,
            "Pro": 28600
          },
          {
            "id": 26,
            "indexLock": 201,
            "Lux": 11200,
            "Pro": 15400
          },
          {
            "id": 27,
            "indexLock": 202,
            "Lux": 7400,
            "Pro": 11600
          },
          {
            "id": 28,
            "indexLock": 203,
            "Lux": 18900,
            "Pro": 23100
          },
          {
            "id": 29,
            "indexLock": 204,
            "Lux": 8000,
            "Pro": 12200
          },
          {
            "id": 30,
            "indexLock": 205,
            "Lux": 7000,
            "Pro": 11200
          },
          {
            "id": 31,
            "indexLock": 206,
            "Lux": 9200,
            "Pro": 13400
          },
          {
            "id": 32,
            "indexLock": 207,
            "Lux": 24900,
            "Pro": 29100
          },
          {
            "id": 33,
            "indexLock": 208,
            "Lux": 22600,
            "Pro": 26800
          },
          {
            "id": 34,
            "indexLock": 209,
            "Lux": 8100,
            "Pro": 12300
          },
          {
            "id": 35,
            "indexLock": 210,
            "Lux": 12300,
            "Pro": 16500
          }
        ]
      },
      {
        "idAuto": 6,
        "idModels": [
          {
            "id": 0,
            "indexLock": 211,
            "Lux": 8200,
            "Pro": 12400
          },
          {
            "id": 1,
            "indexLock": 212,
            "Lux": 22900,
            "Pro": 27100
          },
          {
            "id": 2,
            "indexLock": 213,
            "Lux": 13000,
            "Pro": 17200
          },
          {
            "id": 3,
            "indexLock": 214,
            "Lux": 18500,
            "Pro": 22700
          }
        ]
      },
      {
        "idAuto": 7,
        "idModels": [
          {
            "id": 0,
            "indexLock": 215,
            "Lux": 10400,
            "Pro": 14600
          },
          {
            "id": 1,
            "indexLock": 216,
            "Lux": 15400,
            "Pro": 19600
          },
          {
            "id": 2,
            "indexLock": 217,
            "Lux": 13200,
            "Pro": 17400
          },
          {
            "id": 3,
            "indexLock": 218,
            "Lux": 22900,
            "Pro": 27100
          },
          {
            "id": 4,
            "indexLock": 219,
            "Lux": 21300,
            "Pro": 25500
          },
          {
            "id": 5,
            "indexLock": 220,
            "Lux": 15700,
            "Pro": 19900
          },
          {
            "id": 6,
            "indexLock": 221,
            "Lux": 24900,
            "Pro": 29100
          },
          {
            "id": 7,
            "indexLock": 222,
            "Lux": 19000,
            "Pro": 23200
          },
          {
            "id": 8,
            "indexLock": 223,
            "Lux": 11800,
            "Pro": 16000
          },
          {
            "id": 9,
            "indexLock": 224,
            "Lux": 15100,
            "Pro": 19300
          },
          {
            "id": 10,
            "indexLock": 225,
            "Lux": 7200,
            "Pro": 11400
          },
          {
            "id": 11,
            "indexLock": 226,
            "Lux": 9900,
            "Pro": 14100
          },
          {
            "id": 12,
            "indexLock": 227,
            "Lux": 20900,
            "Pro": 25100
          },
          {
            "id": 13,
            "indexLock": 228,
            "Lux": 12600,
            "Pro": 16800
          },
          {
            "id": 14,
            "indexLock": 229,
            "Lux": 9000,
            "Pro": 13200
          },
          {
            "id": 15,
            "indexLock": 230,
            "Lux": 24300,
            "Pro": 28500
          },
          {
            "id": 16,
            "indexLock": 231,
            "Lux": 15000,
            "Pro": 19200
          },
          {
            "id": 17,
            "indexLock": 232,
            "Lux": 21700,
            "Pro": 25900
          },
          {
            "id": 18,
            "indexLock": 233,
            "Lux": 11000,
            "Pro": 15200
          },
          {
            "id": 19,
            "indexLock": 234,
            "Lux": 19600,
            "Pro": 23800
          },
          {
            "id": 20,
            "indexLock": 235,
            "Lux": 14200,
            "Pro": 18400
          },
          {
            "id": 21,
            "indexLock": 236,
            "Lux": 7200,
            "Pro": 11400
          },
          {
            "id": 22,
            "indexLock": 237,
            "Lux": 24100,
            "Pro": 28300
          },
          {
            "id": 23,
            "indexLock": 238,
            "Lux": 13700,
            "Pro": 17900
          },
          {
            "id": 24,
            "indexLock": 239,
            "Lux": 12700,
            "Pro": 16900
          },
          {
            "id": 25,
            "indexLock": 240,
            "Lux": 8200,
            "Pro": 12400
          },
          {
            "id": 26,
            "indexLock": 241,
            "Lux": 15400,
            "Pro": 19600
          },
          {
            "id": 27,
            "indexLock": 242,
            "Lux": 7400,
            "Pro": 11600
          },
          {
            "id": 28,
            "indexLock": 243,
            "Lux": 23300,
            "Pro": 27500
          },
          {
            "id": 29,
            "indexLock": 244,
            "Lux": 15000,
            "Pro": 19200
          },
          {
            "id": 30,
            "indexLock": 245,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 31,
            "indexLock": 246,
            "Lux": 7100,
            "Pro": 11300
          }
        ]
      },
      {
        "idAuto": 8,
        "idModels": [
          {
            "id": 0,
            "indexLock": 247,
            "Lux": 11600,
            "Pro": 15800
          },
          {
            "id": 1,
            "indexLock": 248,
            "Lux": 11400,
            "Pro": 15600
          },
          {
            "id": 2,
            "indexLock": 249,
            "Lux": 23700,
            "Pro": 27900
          },
          {
            "id": 3,
            "indexLock": 250,
            "Lux": 9800,
            "Pro": 14000
          }
        ]
      },
      {
        "idAuto": 9,
        "idModels": [
          {
            "id": 0,
            "indexLock": 251,
            "Lux": 22400,
            "Pro": 26600
          },
          {
            "id": 1,
            "indexLock": 252,
            "Lux": 12600,
            "Pro": 16800
          },
          {
            "id": 2,
            "indexLock": 253,
            "Lux": 8600,
            "Pro": 12800
          },
          {
            "id": 3,
            "indexLock": 254,
            "Lux": 16300,
            "Pro": 20500
          },
          {
            "id": 4,
            "indexLock": 255,
            "Lux": 10000,
            "Pro": 14200
          },
          {
            "id": 5,
            "indexLock": 256,
            "Lux": 22000,
            "Pro": 26200
          },
          {
            "id": 6,
            "indexLock": 257,
            "Lux": 19300,
            "Pro": 23500
          },
          {
            "id": 7,
            "indexLock": 258,
            "Lux": 23200,
            "Pro": 27400
          },
          {
            "id": 8,
            "indexLock": 259,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 9,
            "indexLock": 260,
            "Lux": 22700,
            "Pro": 26900
          },
          {
            "id": 10,
            "indexLock": 261,
            "Lux": 15500,
            "Pro": 19700
          },
          {
            "id": 11,
            "indexLock": 262,
            "Lux": 12900,
            "Pro": 17100
          },
          {
            "id": 12,
            "indexLock": 263,
            "Lux": 19500,
            "Pro": 23700
          }
        ]
      },
      {
        "idAuto": 10,
        "idModels": [
          {
            "id": 0,
            "indexLock": 264,
            "Lux": 18200,
            "Pro": 22400
          },
          {
            "id": 1,
            "indexLock": 265,
            "Lux": 22200,
            "Pro": 26400
          },
          {
            "id": 2,
            "indexLock": 266,
            "Lux": 8300,
            "Pro": 12500
          },
          {
            "id": 3,
            "indexLock": 267,
            "Lux": 17400,
            "Pro": 21600
          },
          {
            "id": 4,
            "indexLock": 268,
            "Lux": 19200,
            "Pro": 23400
          },
          {
            "id": 5,
            "indexLock": 269,
            "Lux": 15100,
            "Pro": 19300
          },
          {
            "id": 6,
            "indexLock": 270,
            "Lux": 11100,
            "Pro": 15300
          },
          {
            "id": 7,
            "indexLock": 271,
            "Lux": 7100,
            "Pro": 11300
          },
          {
            "id": 8,
            "indexLock": 272,
            "Lux": 24300,
            "Pro": 28500
          },
          {
            "id": 9,
            "indexLock": 273,
            "Lux": 10400,
            "Pro": 14600
          },
          {
            "id": 10,
            "indexLock": 274,
            "Lux": 9100,
            "Pro": 13300
          },
          {
            "id": 11,
            "indexLock": 275,
            "Lux": 20200,
            "Pro": 24400
          },
          {
            "id": 12,
            "indexLock": 276,
            "Lux": 7900,
            "Pro": 12100
          },
          {
            "id": 13,
            "indexLock": 277,
            "Lux": 20700,
            "Pro": 24900
          },
          {
            "id": 14,
            "indexLock": 278,
            "Lux": 17200,
            "Pro": 21400
          },
          {
            "id": 15,
            "indexLock": 279,
            "Lux": 17500,
            "Pro": 21700
          },
          {
            "id": 16,
            "indexLock": 280,
            "Lux": 11500,
            "Pro": 15700
          },
          {
            "id": 17,
            "indexLock": 281,
            "Lux": 14600,
            "Pro": 18800
          },
          {
            "id": 18,
            "indexLock": 282,
            "Lux": 19500,
            "Pro": 23700
          }
        ]
      },
      {
        "idAuto": 11,
        "idModels": [
          {
            "id": 0,
            "indexLock": 283,
            "Lux": 10600,
            "Pro": 14800
          },
          {
            "id": 1,
            "indexLock": 284,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 2,
            "indexLock": 285,
            "Lux": 24100,
            "Pro": 28300
          },
          {
            "id": 3,
            "indexLock": 286,
            "Lux": 8900,
            "Pro": 13100
          },
          {
            "id": 4,
            "indexLock": 287,
            "Lux": 13800,
            "Pro": 18000
          },
          {
            "id": 5,
            "indexLock": 288,
            "Lux": 13500,
            "Pro": 17700
          },
          {
            "id": 6,
            "indexLock": 289,
            "Lux": 24400,
            "Pro": 28600
          },
          {
            "id": 7,
            "indexLock": 290,
            "Lux": 19300,
            "Pro": 23500
          },
          {
            "id": 8,
            "indexLock": 291,
            "Lux": 19400,
            "Pro": 23600
          },
          {
            "id": 9,
            "indexLock": 292,
            "Lux": 15400,
            "Pro": 19600
          },
          {
            "id": 10,
            "indexLock": 293,
            "Lux": 19600,
            "Pro": 23800
          },
          {
            "id": 11,
            "indexLock": 294,
            "Lux": 14100,
            "Pro": 18300
          },
          {
            "id": 12,
            "indexLock": 295,
            "Lux": 13300,
            "Pro": 17500
          },
          {
            "id": 13,
            "indexLock": 296,
            "Lux": 12400,
            "Pro": 16600
          },
          {
            "id": 14,
            "indexLock": 297,
            "Lux": 7700,
            "Pro": 11900
          },
          {
            "id": 15,
            "indexLock": 298,
            "Lux": 22300,
            "Pro": 26500
          },
          {
            "id": 16,
            "indexLock": 299,
            "Lux": 14400,
            "Pro": 18600
          },
          {
            "id": 17,
            "indexLock": 300,
            "Lux": 17500,
            "Pro": 21700
          },
          {
            "id": 18,
            "indexLock": 301,
            "Lux": 8800,
            "Pro": 13000
          },
          {
            "id": 19,
            "indexLock": 302,
            "Lux": 9600,
            "Pro": 13800
          },
          {
            "id": 20,
            "indexLock": 303,
            "Lux": 11100,
            "Pro": 15300
          },
          {
            "id": 21,
            "indexLock": 304,
            "Lux": 24500,
            "Pro": 28700
          },
          {
            "id": 22,
            "indexLock": 305,
            "Lux": 11800,
            "Pro": 16000
          },
          {
            "id": 23,
            "indexLock": 306,
            "Lux": 19200,
            "Pro": 23400
          },
          {
            "id": 24,
            "indexLock": 307,
            "Lux": 16100,
            "Pro": 20300
          },
          {
            "id": 25,
            "indexLock": 308,
            "Lux": 20000,
            "Pro": 24200
          },
          {
            "id": 26,
            "indexLock": 309,
            "Lux": 13900,
            "Pro": 18100
          },
          {
            "id": 27,
            "indexLock": 310,
            "Lux": 17000,
            "Pro": 21200
          },
          {
            "id": 28,
            "indexLock": 311,
            "Lux": 18600,
            "Pro": 22800
          },
          {
            "id": 29,
            "indexLock": 312,
            "Lux": 9200,
            "Pro": 13400
          },
          {
            "id": 30,
            "indexLock": 313,
            "Lux": 22300,
            "Pro": 26500
          },
          {
            "id": 31,
            "indexLock": 314,
            "Lux": 19400,
            "Pro": 23600
          },
          {
            "id": 32,
            "indexLock": 315,
            "Lux": 15800,
            "Pro": 20000
          },
          {
            "id": 33,
            "indexLock": 316,
            "Lux": 24300,
            "Pro": 28500
          },
          {
            "id": 34,
            "indexLock": 317,
            "Lux": 14800,
            "Pro": 19000
          },
          {
            "id": 35,
            "indexLock": 318,
            "Lux": 15400,
            "Pro": 19600
          },
          {
            "id": 36,
            "indexLock": 319,
            "Lux": 10500,
            "Pro": 14700
          },
          {
            "id": 37,
            "indexLock": 320,
            "Lux": 17100,
            "Pro": 21300
          },
          {
            "id": 38,
            "indexLock": 321,
            "Lux": 13400,
            "Pro": 17600
          },
          {
            "id": 39,
            "indexLock": 322,
            "Lux": 20100,
            "Pro": 24300
          },
          {
            "id": 40,
            "indexLock": 323,
            "Lux": 8700,
            "Pro": 12900
          },
          {
            "id": 41,
            "indexLock": 324,
            "Lux": 7700,
            "Pro": 11900
          },
          {
            "id": 42,
            "indexLock": 325,
            "Lux": 14500,
            "Pro": 18700
          },
          {
            "id": 43,
            "indexLock": 326,
            "Lux": 17200,
            "Pro": 21400
          },
          {
            "id": 44,
            "indexLock": 327,
            "Lux": 18400,
            "Pro": 22600
          },
          {
            "id": 45,
            "indexLock": 328,
            "Lux": 15700,
            "Pro": 19900
          },
          {
            "id": 46,
            "indexLock": 329,
            "Lux": 23700,
            "Pro": 27900
          },
          {
            "id": 47,
            "indexLock": 330,
            "Lux": 16200,
            "Pro": 20400
          },
          {
            "id": 48,
            "indexLock": 331,
            "Lux": 24000,
            "Pro": 28200
          },
          {
            "id": 49,
            "indexLock": 332,
            "Lux": 16600,
            "Pro": 20800
          },
          {
            "id": 50,
            "indexLock": 333,
            "Lux": 16800,
            "Pro": 21000
          },
          {
            "id": 51,
            "indexLock": 334,
            "Lux": 15900,
            "Pro": 20100
          }
        ]
      },
      {
        "idAuto": 12,
        "idModels": [
          {
            "id": 0,
            "indexLock": 335,
            "Lux": 15600,
            "Pro": 19800
          },
          {
            "id": 1,
            "indexLock": 336,
            "Lux": 7200,
            "Pro": 11400
          },
          {
            "id": 2,
            "indexLock": 337,
            "Lux": 8200,
            "Pro": 12400
          },
          {
            "id": 3,
            "indexLock": 338,
            "Lux": 15300,
            "Pro": 19500
          },
          {
            "id": 4,
            "indexLock": 339,
            "Lux": 18900,
            "Pro": 23100
          },
          {
            "id": 5,
            "indexLock": 340,
            "Lux": 11000,
            "Pro": 15200
          },
          {
            "id": 6,
            "indexLock": 341,
            "Lux": 21200,
            "Pro": 25400
          },
          {
            "id": 7,
            "indexLock": 342,
            "Lux": 13800,
            "Pro": 18000
          },
          {
            "id": 8,
            "indexLock": 343,
            "Lux": 11900,
            "Pro": 16100
          },
          {
            "id": 9,
            "indexLock": 344,
            "Lux": 12400,
            "Pro": 16600
          },
          {
            "id": 10,
            "indexLock": 345,
            "Lux": 22400,
            "Pro": 26600
          },
          {
            "id": 11,
            "indexLock": 346,
            "Lux": 14900,
            "Pro": 19100
          },
          {
            "id": 12,
            "indexLock": 347,
            "Lux": 11000,
            "Pro": 15200
          },
          {
            "id": 13,
            "indexLock": 348,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 14,
            "indexLock": 349,
            "Lux": 7800,
            "Pro": 12000
          },
          {
            "id": 15,
            "indexLock": 350,
            "Lux": 24200,
            "Pro": 28400
          },
          {
            "id": 16,
            "indexLock": 351,
            "Lux": 12300,
            "Pro": 16500
          }
        ]
      },
      {
        "idAuto": 13,
        "idModels": [
          {
            "id": 0,
            "indexLock": 352,
            "Lux": 14200,
            "Pro": 18400
          },
          {
            "id": 1,
            "indexLock": 353,
            "Lux": 15400,
            "Pro": 19600
          },
          {
            "id": 2,
            "indexLock": 354,
            "Lux": 12000,
            "Pro": 16200
          },
          {
            "id": 3,
            "indexLock": 355,
            "Lux": 15000,
            "Pro": 19200
          },
          {
            "id": 4,
            "indexLock": 356,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 5,
            "indexLock": 357,
            "Lux": 22000,
            "Pro": 26200
          },
          {
            "id": 6,
            "indexLock": 358,
            "Lux": 19300,
            "Pro": 23500
          },
          {
            "id": 7,
            "indexLock": 359,
            "Lux": 10300,
            "Pro": 14500
          },
          {
            "id": 8,
            "indexLock": 360,
            "Lux": 10100,
            "Pro": 14300
          },
          {
            "id": 9,
            "indexLock": 361,
            "Lux": 24800,
            "Pro": 29000
          },
          {
            "id": 10,
            "indexLock": 362,
            "Lux": 13200,
            "Pro": 17400
          },
          {
            "id": 11,
            "indexLock": 363,
            "Lux": 7300,
            "Pro": 11500
          },
          {
            "id": 12,
            "indexLock": 364,
            "Lux": 8000,
            "Pro": 12200
          },
          {
            "id": 13,
            "indexLock": 365,
            "Lux": 23900,
            "Pro": 28100
          },
          {
            "id": 14,
            "indexLock": 366,
            "Lux": 23700,
            "Pro": 27900
          },
          {
            "id": 15,
            "indexLock": 367,
            "Lux": 20000,
            "Pro": 24200
          },
          {
            "id": 16,
            "indexLock": 368,
            "Lux": 24300,
            "Pro": 28500
          },
          {
            "id": 17,
            "indexLock": 369,
            "Lux": 22600,
            "Pro": 26800
          },
          {
            "id": 18,
            "indexLock": 370,
            "Lux": 10300,
            "Pro": 14500
          },
          {
            "id": 19,
            "indexLock": 371,
            "Lux": 11800,
            "Pro": 16000
          },
          {
            "id": 20,
            "indexLock": 372,
            "Lux": 15600,
            "Pro": 19800
          },
          {
            "id": 21,
            "indexLock": 373,
            "Lux": 23000,
            "Pro": 27200
          },
          {
            "id": 22,
            "indexLock": 374,
            "Lux": 19100,
            "Pro": 23300
          },
          {
            "id": 23,
            "indexLock": 375,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 24,
            "indexLock": 376,
            "Lux": 22300,
            "Pro": 26500
          },
          {
            "id": 25,
            "indexLock": 377,
            "Lux": 8200,
            "Pro": 12400
          },
          {
            "id": 26,
            "indexLock": 378,
            "Lux": 17500,
            "Pro": 21700
          },
          {
            "id": 27,
            "indexLock": 379,
            "Lux": 15000,
            "Pro": 19200
          },
          {
            "id": 28,
            "indexLock": 380,
            "Lux": 7200,
            "Pro": 11400
          }
        ]
      },
      {
        "idAuto": 14,
        "idModels": [
          {
            "id": 0,
            "indexLock": 381,
            "Lux": 17100,
            "Pro": 21300
          },
          {
            "id": 1,
            "indexLock": 382,
            "Lux": 8800,
            "Pro": 13000
          },
          {
            "id": 2,
            "indexLock": 383,
            "Lux": 14500,
            "Pro": 18700
          },
          {
            "id": 3,
            "indexLock": 384,
            "Lux": 19600,
            "Pro": 23800
          },
          {
            "id": 4,
            "indexLock": 385,
            "Lux": 19700,
            "Pro": 23900
          },
          {
            "id": 5,
            "indexLock": 386,
            "Lux": 15500,
            "Pro": 19700
          },
          {
            "id": 6,
            "indexLock": 387,
            "Lux": 7500,
            "Pro": 11700
          },
          {
            "id": 7,
            "indexLock": 388,
            "Lux": 21500,
            "Pro": 25700
          },
          {
            "id": 8,
            "indexLock": 389,
            "Lux": 19500,
            "Pro": 23700
          }
        ]
      },
      {
        "idAuto": 15,
        "idModels": [
          {
            "id": 0,
            "indexLock": 390,
            "Lux": 16100,
            "Pro": 20300
          },
          {
            "id": 1,
            "indexLock": 391,
            "Lux": 17300,
            "Pro": 21500
          },
          {
            "id": 2,
            "indexLock": 392,
            "Lux": 24800,
            "Pro": 29000
          },
          {
            "id": 3,
            "indexLock": 393,
            "Lux": 24700,
            "Pro": 28900
          },
          {
            "id": 4,
            "indexLock": 394,
            "Lux": 21400,
            "Pro": 25600
          },
          {
            "id": 5,
            "indexLock": 395,
            "Lux": 24900,
            "Pro": 29100
          },
          {
            "id": 6,
            "indexLock": 396,
            "Lux": 9500,
            "Pro": 13700
          },
          {
            "id": 7,
            "indexLock": 397,
            "Lux": 13600,
            "Pro": 17800
          },
          {
            "id": 8,
            "indexLock": 398,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 9,
            "indexLock": 399,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 10,
            "indexLock": 400,
            "Lux": 11800,
            "Pro": 16000
          },
          {
            "id": 11,
            "indexLock": 401,
            "Lux": 14600,
            "Pro": 18800
          },
          {
            "id": 12,
            "indexLock": 402,
            "Lux": 7600,
            "Pro": 11800
          },
          {
            "id": 13,
            "indexLock": 403,
            "Lux": 14600,
            "Pro": 18800
          },
          {
            "id": 14,
            "indexLock": 404,
            "Lux": 9000,
            "Pro": 13200
          }
        ]
      },
      {
        "idAuto": 16,
        "idModels": [
          {
            "id": 0,
            "indexLock": 405,
            "Lux": 10600,
            "Pro": 14800
          },
          {
            "id": 1,
            "indexLock": 406,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 2,
            "indexLock": 407,
            "Lux": 13200,
            "Pro": 17400
          },
          {
            "id": 3,
            "indexLock": 408,
            "Lux": 14500,
            "Pro": 18700
          },
          {
            "id": 4,
            "indexLock": 409,
            "Lux": 22100,
            "Pro": 26300
          },
          {
            "id": 5,
            "indexLock": 410,
            "Lux": 21200,
            "Pro": 25400
          },
          {
            "id": 6,
            "indexLock": 411,
            "Lux": 14200,
            "Pro": 18400
          },
          {
            "id": 7,
            "indexLock": 412,
            "Lux": 18700,
            "Pro": 22900
          },
          {
            "id": 8,
            "indexLock": 413,
            "Lux": 23800,
            "Pro": 28000
          },
          {
            "id": 9,
            "indexLock": 414,
            "Lux": 7200,
            "Pro": 11400
          },
          {
            "id": 10,
            "indexLock": 415,
            "Lux": 19500,
            "Pro": 23700
          },
          {
            "id": 11,
            "indexLock": 416,
            "Lux": 20600,
            "Pro": 24800
          }
        ]
      },
      {
        "idAuto": 17,
        "idModels": [
          {
            "id": 0,
            "indexLock": 417,
            "Lux": 7200,
            "Pro": 11400
          },
          {
            "id": 1,
            "indexLock": 418,
            "Lux": 20200,
            "Pro": 24400
          },
          {
            "id": 2,
            "indexLock": 419,
            "Lux": 16500,
            "Pro": 20700
          },
          {
            "id": 3,
            "indexLock": 420,
            "Lux": 18200,
            "Pro": 22400
          },
          {
            "id": 4,
            "indexLock": 421,
            "Lux": 14000,
            "Pro": 18200
          },
          {
            "id": 5,
            "indexLock": 422,
            "Lux": 19000,
            "Pro": 23200
          },
          {
            "id": 6,
            "indexLock": 423,
            "Lux": 11500,
            "Pro": 15700
          },
          {
            "id": 7,
            "indexLock": 424,
            "Lux": 15000,
            "Pro": 19200
          },
          {
            "id": 8,
            "indexLock": 425,
            "Lux": 11500,
            "Pro": 15700
          },
          {
            "id": 9,
            "indexLock": 426,
            "Lux": 10500,
            "Pro": 14700
          },
          {
            "id": 10,
            "indexLock": 427,
            "Lux": 7500,
            "Pro": 11700
          },
          {
            "id": 11,
            "indexLock": 428,
            "Lux": 10400,
            "Pro": 14600
          },
          {
            "id": 12,
            "indexLock": 429,
            "Lux": 12000,
            "Pro": 16200
          },
          {
            "id": 13,
            "indexLock": 430,
            "Lux": 15100,
            "Pro": 19300
          },
          {
            "id": 14,
            "indexLock": 431,
            "Lux": 11200,
            "Pro": 15400
          },
          {
            "id": 15,
            "indexLock": 432,
            "Lux": 16200,
            "Pro": 20400
          },
          {
            "id": 16,
            "indexLock": 433,
            "Lux": 22300,
            "Pro": 26500
          },
          {
            "id": 17,
            "indexLock": 434,
            "Lux": 18800,
            "Pro": 23000
          },
          {
            "id": 18,
            "indexLock": 435,
            "Lux": 13700,
            "Pro": 17900
          },
          {
            "id": 19,
            "indexLock": 436,
            "Lux": 24100,
            "Pro": 28300
          },
          {
            "id": 20,
            "indexLock": 437,
            "Lux": 15600,
            "Pro": 19800
          },
          {
            "id": 21,
            "indexLock": 438,
            "Lux": 22300,
            "Pro": 26500
          },
          {
            "id": 22,
            "indexLock": 439,
            "Lux": 14200,
            "Pro": 18400
          }
        ]
      },
      {
        "idAuto": 18,
        "idModels": [
          {
            "id": 0,
            "indexLock": 440,
            "Lux": 24400,
            "Pro": 28600
          },
          {
            "id": 1,
            "indexLock": 441,
            "Lux": 20300,
            "Pro": 24500
          },
          {
            "id": 2,
            "indexLock": 442,
            "Lux": 20200,
            "Pro": 24400
          },
          {
            "id": 3,
            "indexLock": 443,
            "Lux": 16900,
            "Pro": 21100
          },
          {
            "id": 4,
            "indexLock": 444,
            "Lux": 16100,
            "Pro": 20300
          },
          {
            "id": 5,
            "indexLock": 445,
            "Lux": 10000,
            "Pro": 14200
          },
          {
            "id": 6,
            "indexLock": 446,
            "Lux": 17400,
            "Pro": 21600
          },
          {
            "id": 7,
            "indexLock": 447,
            "Lux": 22800,
            "Pro": 27000
          },
          {
            "id": 8,
            "indexLock": 448,
            "Lux": 8400,
            "Pro": 12600
          },
          {
            "id": 9,
            "indexLock": 449,
            "Lux": 8500,
            "Pro": 12700
          },
          {
            "id": 10,
            "indexLock": 450,
            "Lux": 16900,
            "Pro": 21100
          },
          {
            "id": 11,
            "indexLock": 451,
            "Lux": 17900,
            "Pro": 22100
          },
          {
            "id": 12,
            "indexLock": 452,
            "Lux": 13400,
            "Pro": 17600
          },
          {
            "id": 13,
            "indexLock": 453,
            "Lux": 20500,
            "Pro": 24700
          }
        ]
      },
      {
        "idAuto": 19,
        "idModels": [
          {
            "id": 0,
            "indexLock": 454,
            "Lux": 18400,
            "Pro": 22600
          },
          {
            "id": 1,
            "indexLock": 455,
            "Lux": 18900,
            "Pro": 23100
          },
          {
            "id": 2,
            "indexLock": 456,
            "Lux": 15900,
            "Pro": 20100
          },
          {
            "id": 3,
            "indexLock": 457,
            "Lux": 11300,
            "Pro": 15500
          },
          {
            "id": 4,
            "indexLock": 458,
            "Lux": 20600,
            "Pro": 24800
          },
          {
            "id": 5,
            "indexLock": 459,
            "Lux": 10900,
            "Pro": 15100
          },
          {
            "id": 6,
            "indexLock": 460,
            "Lux": 14500,
            "Pro": 18700
          },
          {
            "id": 7,
            "indexLock": 461,
            "Lux": 18900,
            "Pro": 23100
          },
          {
            "id": 8,
            "indexLock": 462,
            "Lux": 9800,
            "Pro": 14000
          },
          {
            "id": 9,
            "indexLock": 463,
            "Lux": 19000,
            "Pro": 23200
          },
          {
            "id": 10,
            "indexLock": 464,
            "Lux": 24800,
            "Pro": 29000
          },
          {
            "id": 11,
            "indexLock": 465,
            "Lux": 9800,
            "Pro": 14000
          },
          {
            "id": 12,
            "indexLock": 466,
            "Lux": 12500,
            "Pro": 16700
          }
        ]
      },
      {
        "idAuto": 20,
        "idModels": [
          {
            "id": 0,
            "indexLock": 467,
            "Lux": 22200,
            "Pro": 26400
          },
          {
            "id": 1,
            "indexLock": 468,
            "Lux": 13600,
            "Pro": 17800
          },
          {
            "id": 2,
            "indexLock": 469,
            "Lux": 24300,
            "Pro": 28500
          },
          {
            "id": 3,
            "indexLock": 470,
            "Lux": 7300,
            "Pro": 11500
          },
          {
            "id": 4,
            "indexLock": 471,
            "Lux": 13600,
            "Pro": 17800
          },
          {
            "id": 5,
            "indexLock": 472,
            "Lux": 15200,
            "Pro": 19400
          },
          {
            "id": 6,
            "indexLock": 473,
            "Lux": 22400,
            "Pro": 26600
          },
          {
            "id": 7,
            "indexLock": 474,
            "Lux": 14400,
            "Pro": 18600
          },
          {
            "id": 8,
            "indexLock": 475,
            "Lux": 16300,
            "Pro": 20500
          },
          {
            "id": 9,
            "indexLock": 476,
            "Lux": 11100,
            "Pro": 15300
          },
          {
            "id": 10,
            "indexLock": 477,
            "Lux": 19200,
            "Pro": 23400
          },
          {
            "id": 11,
            "indexLock": 478,
            "Lux": 7500,
            "Pro": 11700
          },
          {
            "id": 12,
            "indexLock": 479,
            "Lux": 10300,
            "Pro": 14500
          },
          {
            "id": 13,
            "indexLock": 480,
            "Lux": 19200,
            "Pro": 23400
          },
          {
            "id": 14,
            "indexLock": 481,
            "Lux": 16400,
            "Pro": 20600
          },
          {
            "id": 15,
            "indexLock": 482,
            "Lux": 22700,
            "Pro": 26900
          },
          {
            "id": 16,
            "indexLock": 483,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 17,
            "indexLock": 484,
            "Lux": 11700,
            "Pro": 15900
          },
          {
            "id": 18,
            "indexLock": 485,
            "Lux": 14600,
            "Pro": 18800
          },
          {
            "id": 19,
            "indexLock": 486,
            "Lux": 22300,
            "Pro": 26500
          },
          {
            "id": 20,
            "indexLock": 487,
            "Lux": 8200,
            "Pro": 12400
          },
          {
            "id": 21,
            "indexLock": 488,
            "Lux": 18700,
            "Pro": 22900
          },
          {
            "id": 22,
            "indexLock": 489,
            "Lux": 24300,
            "Pro": 28500
          },
          {
            "id": 23,
            "indexLock": 490,
            "Lux": 18200,
            "Pro": 22400
          },
          {
            "id": 24,
            "indexLock": 491,
            "Lux": 11000,
            "Pro": 15200
          },
          {
            "id": 25,
            "indexLock": 492,
            "Lux": 20600,
            "Pro": 24800
          },
          {
            "id": 26,
            "indexLock": 493,
            "Lux": 16300,
            "Pro": 20500
          },
          {
            "id": 27,
            "indexLock": 494,
            "Lux": 7900,
            "Pro": 12100
          },
          {
            "id": 28,
            "indexLock": 495,
            "Lux": 24600,
            "Pro": 28800
          },
          {
            "id": 29,
            "indexLock": 496,
            "Lux": 9000,
            "Pro": 13200
          },
          {
            "id": 30,
            "indexLock": 497,
            "Lux": 7200,
            "Pro": 11400
          },
          {
            "id": 31,
            "indexLock": 498,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 32,
            "indexLock": 499,
            "Lux": 10400,
            "Pro": 14600
          },
          {
            "id": 33,
            "indexLock": 500,
            "Lux": 8000,
            "Pro": 12200
          },
          {
            "id": 34,
            "indexLock": 501,
            "Lux": 14300,
            "Pro": 18500
          },
          {
            "id": 35,
            "indexLock": 502,
            "Lux": 18600,
            "Pro": 22800
          },
          {
            "id": 36,
            "indexLock": 503,
            "Lux": 17500,
            "Pro": 21700
          },
          {
            "id": 37,
            "indexLock": 504,
            "Lux": 16900,
            "Pro": 21100
          },
          {
            "id": 38,
            "indexLock": 505,
            "Lux": 16100,
            "Pro": 20300
          },
          {
            "id": 39,
            "indexLock": 506,
            "Lux": 17300,
            "Pro": 21500
          },
          {
            "id": 40,
            "indexLock": 507,
            "Lux": 20100,
            "Pro": 24300
          },
          {
            "id": 41,
            "indexLock": 508,
            "Lux": 11300,
            "Pro": 15500
          },
          {
            "id": 42,
            "indexLock": 509,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 43,
            "indexLock": 510,
            "Lux": 24700,
            "Pro": 28900
          },
          {
            "id": 44,
            "indexLock": 511,
            "Lux": 24400,
            "Pro": 28600
          },
          {
            "id": 45,
            "indexLock": 512,
            "Lux": 23900,
            "Pro": 28100
          },
          {
            "id": 46,
            "indexLock": 513,
            "Lux": 13900,
            "Pro": 18100
          },
          {
            "id": 47,
            "indexLock": 514,
            "Lux": 9000,
            "Pro": 13200
          },
          {
            "id": 48,
            "indexLock": 515,
            "Lux": 9200,
            "Pro": 13400
          },
          {
            "id": 49,
            "indexLock": 516,
            "Lux": 14200,
            "Pro": 18400
          },
          {
            "id": 50,
            "indexLock": 517,
            "Lux": 22600,
            "Pro": 26800
          }
        ]
      },
      {
        "idAuto": 21,
        "idModels": [
          {
            "id": 0,
            "indexLock": 518,
            "Lux": 7900,
            "Pro": 12100
          },
          {
            "id": 1,
            "indexLock": 519,
            "Lux": 11000,
            "Pro": 15200
          },
          {
            "id": 2,
            "indexLock": 520,
            "Lux": 12000,
            "Pro": 16200
          },
          {
            "id": 3,
            "indexLock": 521,
            "Lux": 22800,
            "Pro": 27000
          },
          {
            "id": 4,
            "indexLock": 522,
            "Lux": 10500,
            "Pro": 14700
          },
          {
            "id": 5,
            "indexLock": 523,
            "Lux": 17100,
            "Pro": 21300
          }
        ]
      },
      {
        "idAuto": 22,
        "idModels": [
          {
            "id": 0,
            "indexLock": 524,
            "Lux": 9400,
            "Pro": 13600
          },
          {
            "id": 1,
            "indexLock": 525,
            "Lux": 14900,
            "Pro": 19100
          },
          {
            "id": 2,
            "indexLock": 526,
            "Lux": 20200,
            "Pro": 24400
          },
          {
            "id": 3,
            "indexLock": 527,
            "Lux": 10000,
            "Pro": 14200
          },
          {
            "id": 4,
            "indexLock": 528,
            "Lux": 21700,
            "Pro": 25900
          },
          {
            "id": 5,
            "indexLock": 529,
            "Lux": 9800,
            "Pro": 14000
          },
          {
            "id": 6,
            "indexLock": 530,
            "Lux": 17300,
            "Pro": 21500
          },
          {
            "id": 7,
            "indexLock": 531,
            "Lux": 13800,
            "Pro": 18000
          },
          {
            "id": 8,
            "indexLock": 532,
            "Lux": 15000,
            "Pro": 19200
          },
          {
            "id": 9,
            "indexLock": 533,
            "Lux": 16300,
            "Pro": 20500
          },
          {
            "id": 10,
            "indexLock": 534,
            "Lux": 19400,
            "Pro": 23600
          },
          {
            "id": 11,
            "indexLock": 535,
            "Lux": 13700,
            "Pro": 17900
          },
          {
            "id": 12,
            "indexLock": 536,
            "Lux": 23400,
            "Pro": 27600
          },
          {
            "id": 13,
            "indexLock": 537,
            "Lux": 14000,
            "Pro": 18200
          },
          {
            "id": 14,
            "indexLock": 538,
            "Lux": 11900,
            "Pro": 16100
          },
          {
            "id": 15,
            "indexLock": 539,
            "Lux": 21300,
            "Pro": 25500
          },
          {
            "id": 16,
            "indexLock": 540,
            "Lux": 13000,
            "Pro": 17200
          },
          {
            "id": 17,
            "indexLock": 541,
            "Lux": 20500,
            "Pro": 24700
          },
          {
            "id": 18,
            "indexLock": 542,
            "Lux": 13200,
            "Pro": 17400
          },
          {
            "id": 19,
            "indexLock": 543,
            "Lux": 24200,
            "Pro": 28400
          },
          {
            "id": 20,
            "indexLock": 544,
            "Lux": 9600,
            "Pro": 13800
          },
          {
            "id": 21,
            "indexLock": 545,
            "Lux": 17500,
            "Pro": 21700
          },
          {
            "id": 22,
            "indexLock": 546,
            "Lux": 9700,
            "Pro": 13900
          },
          {
            "id": 23,
            "indexLock": 547,
            "Lux": 14100,
            "Pro": 18300
          },
          {
            "id": 24,
            "indexLock": 548,
            "Lux": 17600,
            "Pro": 21800
          },
          {
            "id": 25,
            "indexLock": 549,
            "Lux": 13100,
            "Pro": 17300
          },
          {
            "id": 26,
            "indexLock": 550,
            "Lux": 14700,
            "Pro": 18900
          },
          {
            "id": 27,
            "indexLock": 551,
            "Lux": 20500,
            "Pro": 24700
          },
          {
            "id": 28,
            "indexLock": 552,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 29,
            "indexLock": 553,
            "Lux": 15500,
            "Pro": 19700
          },
          {
            "id": 30,
            "indexLock": 554,
            "Lux": 23300,
            "Pro": 27500
          },
          {
            "id": 31,
            "indexLock": 555,
            "Lux": 17700,
            "Pro": 21900
          },
          {
            "id": 32,
            "indexLock": 556,
            "Lux": 13700,
            "Pro": 17900
          },
          {
            "id": 33,
            "indexLock": 557,
            "Lux": 19000,
            "Pro": 23200
          },
          {
            "id": 34,
            "indexLock": 558,
            "Lux": 21100,
            "Pro": 25300
          },
          {
            "id": 35,
            "indexLock": 559,
            "Lux": 10500,
            "Pro": 14700
          },
          {
            "id": 36,
            "indexLock": 560,
            "Lux": 11400,
            "Pro": 15600
          },
          {
            "id": 37,
            "indexLock": 561,
            "Lux": 22500,
            "Pro": 26700
          },
          {
            "id": 38,
            "indexLock": 562,
            "Lux": 22600,
            "Pro": 26800
          },
          {
            "id": 39,
            "indexLock": 563,
            "Lux": 18100,
            "Pro": 22300
          },
          {
            "id": 40,
            "indexLock": 564,
            "Lux": 8000,
            "Pro": 12200
          },
          {
            "id": 41,
            "indexLock": 565,
            "Lux": 19500,
            "Pro": 23700
          },
          {
            "id": 42,
            "indexLock": 566,
            "Lux": 7400,
            "Pro": 11600
          },
          {
            "id": 43,
            "indexLock": 567,
            "Lux": 19200,
            "Pro": 23400
          }
        ]
      }
    ]
  },
  getters: {
    getAutoItems(state) {
      return state.autoItems
    },
    getArticulLock(state) {
      return state.ArticulLock
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
