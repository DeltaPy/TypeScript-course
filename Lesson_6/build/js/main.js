"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // this.name = name;
        // this.music = music;
        // this.age = age;
        // this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Denis = new Coder("Denis", "Rock", 22);
console.log(Denis.getAge());
// console.log(Denis.lang)
// console.log(Denis.age)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I code in ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "LoFi", 25);
class Guitarist {
    constructor(name, insturment) {
        this.name = name;
        this.instrument = insturment;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("Jhon");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
/////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((element) => typeof element === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zepplin'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'AC/DC'];
MyBands.data = [...MyBands.data, 'Van Halen'];
console.log(MyBands.data);
