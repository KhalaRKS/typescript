"use strict";
/*
 TypeScript (TS) es un lenguaje de programación basado en JavaScript (JS). Fue creado por Microsoft en 2012,  proponiendo una manera mas limpia y amigable de programar en JavaScript. Esto quiere decir que TypeScript dota al lenguaje de varias características adicionales que hacen que podamos escribir código con menos errores, más sencillo, coherente y fácil de probar, en definitiva, más limpio y sólido.
*
**/
class Person {
}
class P {
    constructor({ name, surname }) { }
    getName() {
        return this._name + " " + this._surname;
    }
}
let pepe = new P({ name: "Pepe", surname: "Rodriguez" });
pepe.getName();
class Vehiculo {
    encender() { }
}
class Auto {
    constructor(puertas, nombre, ruedas, baul) {
        this.motorEncendido = false;
        this.puertas = puertas;
        this.nombre = nombre;
        this.ruedas = ruedas;
        this.baul = baul;
    }
    encender() {
        this.motorEncendido = true;
        console.log("El motor se encuentra encendido!");
    }
}
const auto = new Auto(4, "toyota", 4, false);
auto.encender();


console.log("hola" * 2);
