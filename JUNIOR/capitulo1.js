let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert("Cofla, comprate el helado de Agua");
  alert("Y te sobran " + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("Cofla, Comprate el helado de Crema");
  alert("Y te sobran " + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert("Cofla, Comprate el helado de Chocolate");
  alert("Y te sobran " + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert("Cofla, Comprate el helado de Mani");
  alert("Y te sobran " + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert("Cofla, Comprate el helado de Mantecado");
  alert("Y te sobran " + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
  alert("Cofla, helado con Chocolate o el pote de 1/4kg");
  alert("Y te sobran " + (dineroCofla - 2.9));
} else {
  alert("lo sineto Cofla,  Bro no te alcanza el dinero ");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert("Roberto, comprate el helado de Agua");
  alert("Y te sobran " + (dineroRoberto - 0.6));
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert("Roberto, Comprate el helado de Crema");
  alert("Y te sobran " + (dineroRoberto - 1));
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert("Roberto, Comprate el helado de Chocolate");
  alert("Y te sobran " + (dineroRoberto - 1.6));
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert("Roberto, Comprate el helado de Mani");
  alert("Y te sobran " + (dineroRoberto - 1.7));
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert("Roberto, Comprate el helado de Mantecado");
  alert("Y te sobran " + (dineroRoberto - 1.8));
} else if (dineroRoberto >= 2.9) {
  alert("Roberto, helado con Chocolate o el pote de 1/4kg");
  alert("Y te sobran " + (dineroRoberto - 2.9));
} else {
  alert("lo sineto Roberto , Bro no te alcanza el dinero ");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert("Pedro, comprate el helado de Agua");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert("Pedro, Comprate el helado de Crema");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert("Pedro, Comprate el helado de Chocolate");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert("Pedro, Comprate el helado de Mani");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro, Comprate el helado de Mantecado");
} else if (dineroPedro >= 2.9) {
  alert("Pedro, helado con Chocolate o el pote de 1/4kg");
} else {
  alert("lo sineto Pedro, Bro no te alcanza el dinero ");
}
