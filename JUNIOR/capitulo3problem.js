// class Celular {
//     constructor(color, peso, tamaño, rdc, ram) {
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendiendo = false;

//     }

//     presionarBotonEncendido() {
//         if (this.encendiendo == false) {
//             alert("celular prendiendo");
//             this.encendiendo = true;
//         } else {
//             alert("celular apagado");
//             this.encendiendo = false;
//         }
//     }

//     reiniciar() {
//         if (this.encendiendo == true) {
//             alert("celular reiniciand;o")
//         } else {
//             alert("celular apagado");
//         }
//     }

//     tomarFoto() {
//         alert(`Foto tomada en una resolucion: ${this.resolucionDeCamara}`);
//     }

//     grabarVideo() {
//         alert(`Video grabado en una resolucion: ${this.resolucionDeCamara}`);
//     }

//     mobileInfo() {
//         return `
//             Color: <b>${this.color}</b> </br>
//             Peso: <b>${this.peso}</b> </br>
//             Tamaño: <b>${this.tamaño}</b> </br>
//             memoria Ram: <b>${this.memoriaRam}</b> </br>
//             resolucion de video: <b>${this.resolucionDeCamara}</b> </br>
//         `;
//     }


// }


// class CelularAltaGama extends Celular {
//     constructor(color, peso, tamaño, rdc, ram, rdce) {
//         super(color, peso, tamaño, rdc, ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }

//     camaralenta() {
//         alert("Estas Grabando en camara lenta");
//     }

//     reconocimientoFacial() {
//         alert("Vamos a iniciar con el reconociento facial");
//     }

//     infoAltaGama() {
//         return this.mobileInfo() + `Resolucion de camara Extra: ${this.resolucionDeCamaraExtra}`;
//     }
// }

// celular1 = new Celular('blanco', '100g', '5.2 pulgadas', ' Hd', '2 GB');
// celular2 = new Celular('amarillo', '150g', '5.9 pulgadas', 'Full Hd', '4 GB');
// celular3 = new Celular('morado', '190g', '5.8 pulgadas', 'Full Hd', '8 GB');



// celular2 = new CelularAltaGama('blanco', '200g', '7.6 pulgadas', '4k', '8 GB', 'Full HD');
// celular3 = new CelularAltaGama('negro', '230g', '8 pulgadas', '8k', '8 GB', 'Full HD');


// document.write(`
// ${celular2.infoAltaGama()} <br><br>
// ${celular3.infoAltaGama()} <br>

// `);

// celular1.presionarBotonEncendido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido()




class App {
    constructor(descargar, puntacion, peso, nameApp) {
        this.descargar = descargar;
        this.puntacion = puntacion;
        this.peso = peso;
        this.nameApp = nameApp;
        this.iniciadad = false;
        this.instalada = false;

    }

    abrir() {
        if (this.iniciadad == false && this.instalada == true) {
            this.iniciadad = true;
            alert("App iniciada");
        }
    }
    cerrar() {
        if (this.iniciadad == true && this.instalada == true) {
            this.iniciadad = false;
            alert("App cerrada");
        }
    }

    instalada() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada correctamente")
        }
    }
    desinstalada() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desinstalada correctamente")
        }
    }

    infoApp() {
        return `
        Descargar:<b>${this.descargar}</b><br>
        Puntacion:<b>${this.puntacion}</b><br>
        Peso:<b>${this.peso}</b><br>
        Nombre de la App:<b>${this.nameApp}</b><br>
        
        `
    }
}




app = new App("1.000", "1 Estrellas", "1GB", "Facebook")
app2 = new App("9.000", "4 Estrellas", "3GB", "Instagram")
app3 = new App("1.00000", "5 Estrellas", "4GB", "Google")
app4 = new App("2.00000", "5 Estrellas", "200MB", "Twitter")
app5 = new App("14.000", "5 Estrellas", "200MB", "Pinterest")
app6 = new App("20,000", "5 Estrellas", "2.54GB", "Call Of Duty")
app7 = new App("1.000", "1 Estrellas", "3.3GB", "Warzone Call Of Duty")

document.write(`
    ${app.infoApp()} <br>
    ${app2.infoApp()}<br>
    ${app3.infoApp()}<br>
    ${app4.infoApp()}<br>
    ${app5.infoApp()}<br>
    ${app6.infoApp()}<br>
    ${app7.infoApp()}<br>

`)