let free = false;

const ValidarCliente = (time) => {
  let edad = prompt("Que edad Tienes ?");
  if (edad > 18) {
    if (time >= 2 && time < 7 && free == false) {
      alert(
        "Puedes pasar Gratis porque sos la primera persona despues de las 2 AM"
      );
      free = ture;
    } else {
      alert(
        `Son las ${time}:00Hs Puedes pasar, Pero tienes que pagar la entrada...`
      );
    }
  } else {
    alert("Lo siento, Tu eres mejor de edad por lo tanto no puedes pasar...");
  }
};

ValidarCliente(2);
ValidarCliente(23);
ValidarCliente(22);
ValidarCliente(0.4);
ValidarCliente(0.2);
ValidarCliente(2);
ValidarCliente(12);
ValidarCliente(12);
ValidarCliente(10);
