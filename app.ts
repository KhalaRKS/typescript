/*
 TypeScript (TS) es un lenguaje de programación basado en JavaScript (JS). Fue creado por Microsoft en 2012,  proponiendo una manera mas limpia y amigable de programar en JavaScript. Esto quiere decir que TypeScript dota al lenguaje de varias características adicionales que hacen que podamos escribir código con menos errores, más sencillo, coherente y fácil de probar, en definitiva, más limpio y sólido.
*
**/

// let numbers: number[] = [1,2,3,4]

// numbers.forEach(e => console.log( "hola" * e))

import { Persona } from './types';

// Diferencia entre type e interface

type TypeVehiculo2 = {
  baul: boolean;
};

type TypeVehiculo = {
  ruedas: number;
  puertas: number;
  nombre: string;
};
// Menos legible y practico que el uso de interface

type SuperVehiculo = TypeVehiculo & TypeVehiculo2;

// Implementación de interfaces. Extensiones mas sencillas
interface IVehiculo extends IVehiculo2 {
  ruedas: number;
  nombre: string;
  puertas: number;
}

interface IVehiculo2 {
  motor: string;
  baul: boolean;
}

// Se puede lograr lo mismo con clases abstractas. En POO las clases abstractas cumplen un rol fundamental y deben seguir ciertos
// estandares, pero para el ejemplo que lo vamos a utilizar no es necesario profundizar en dichos temas.

// Cuando trabajemos con distintos frameworks o lenguajes, no siempre vamos a poder definir una interface y la clase abstracta
// cumple ese rol.
abstract class Person {
  abstract _name: string;
  abstract _surname: string;

  abstract getName(): string;
}

class P implements Person {
  _name: string;
  _surname: string;
  constructor({ name, surname }: Persona) {}
  getName(): string {
    return this._name + ' ' + this._surname;
  }
}

let pepe = new P({ name: 'Pepe', surname: 'Rodriguez' });

pepe.getName();


// Extensiones entre clases. No es lo mismo que realizar un implement.

// Las extensiones, como su nombre lo indica, extiende la funcionalidad de una clase mediante otra

class Usuario {
    name: string;
    surname: string;
    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }
}

// class Administrador2 {
//     credential: Usuario
//     isAdmin: boolean;
//     adminSecret: string;
//     role: string;
//     permissions: string[];
  
//     constructor(isAdmin: boolean, adminSecret: string, role: string, credential: Usuario) {
//       this.isAdmin = isAdmin;
//       this.adminSecret = adminSecret;
//       this.role = role;
//       this.credential = credential;
//     }
//   }
//   let admin = new Administrador2(true,"#123", "staff", new Usuario("pepe", "rodriguez"))

//   admin.credential.name
class Administrador extends Usuario{
  isAdmin: boolean;
  adminSecret: string;
  role: string;
  permissions: string[];

  constructor(isAdmin: boolean, adminSecret: string, role: string, name: string, surname: string) {
    super(name, surname);
    (this.isAdmin = isAdmin), (this.adminSecret = adminSecret);
    this.role = role;
  }
}

class SuperAdmin extends Administrador {
  permissions: string[];

  constructor(
    name: string,
    surname: string,
    isAdmin: boolean,
    adminSecret: string,
    role: string,
    permissions: string[]
  ) {
    super(isAdmin, adminSecret, role, name , surname);
    this.permissions = permissions;
  }
}


// Clase abstracta para poder referenciar el tipo de estructura o interfaz que queremos que mantenga nuestra clase Auto

abstract class Vehiculo {
  puertas: number;
  nombre: string;
  ruedas: number;
  baul: boolean;

  encender(): void {}
}

class Auto implements Vehiculo {
  puertas: number;
  nombre: string;
  ruedas: number;
  private _motorEncendido: boolean = false;
  baul: boolean;
  constructor(puertas: number, nombre: string, ruedas: number, baul: boolean) {
    this.puertas = puertas;
    this.nombre = nombre;
    this.ruedas = ruedas;
    this.baul = baul;
  }

  encender(): void {
    this._motorEncendido = true;
    console.log('El motor se encuentra encendido!');
  }

  public get motorEncendido() {
    return this._motorEncendido;
  }
}

const auto = new Auto(4, 'toyota', 4, false);
auto.encender();

console.log(auto.motorEncendido);
