class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`
  }
  verInfo() {
    document.write(this.info + "<br>")
  }

}


class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = null;
  }
  set setRaza(newRaza) {
    this.raza = newRaza;
  }

  get getRaza() {
    return this.raza;
  }
}


const perro = new Perro("perro", 2, "blanco", "Lulu" + "<br>")
const toro = new Animal("Toro", 2, "marron claro" + "<br>")



perro.setRaza = 'Pitbull';

document.write(perro.getRaza)