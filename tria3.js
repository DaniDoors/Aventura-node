let readlineSync = require("readline-sync");

let Pag001 = {
  texto:
    "ADVERTENCIA\n\n¡No leas todo el libro seguido, del principio al fin! En sus páginas hallarás muchas y variadas aventuras. A medida que lo vayas leyendo, te verás obligado a elegir. De tu decisión depende que la aventura constituya un éxito o un fracaso. \nTú serás el responsable del resultado final. Te corresponde a ti tomar las decisiones. Una vez que hayas elegido, sigue las instrucciones para averiguar qué sucede a continuación. \nRecuerda que no puedes volverte atrás. Recapacita antes de decidirte por una opción. Tu elección puede conducirte al desastre o... ¡a un magnífico final!\n",
};
let Pag002 = {
  texto:
    "Ya habías pasado en anteriores ocasiones por el Cañón de la Serpiente, cuando ibas en bicicleta a visitar a tu tío Howard en el rancho Red Creek, pero nunca te habías fijado en la entrada de la cueva. Parece como si un desprendimiento de rocas la hubiese dejado al descubierto recientemente. \nEl sol de la tarde ilumina la entrada de la cueva, pero su interior permanece en la más absoluta oscuridad. Das unos pasos hacia dentro para hacerte una idea de su tamaño. Á medida que te vas acostumbrando a la oscuridad, empiezas a vislumbrar una especie de túnel iluminado débilmente por algún tipo de material fosforescente incrustado en las rocas. \nLas paredes del túnel tienen una forma suave, como si hubiesen sido modeladas por el curso del agua. Cinco o seis metros más adelante, el túnel describe una curva. Te preguntas a dónde conduce. Das unos pasos más. Te pone nervioso estar solo en un lugar tan extraño. \nDas la vuelta y sales corriendo al exterior. \nA juzgar por la oscuridad que reina en el exterior, está a punto de desencadenarse una tormenta. De pronto, te das cuenta que el sol ya se ha puesto y que la única iluminación procede de la pálida luna llena. Quizás has debido quedarte dormido un par de horas. Entonces recuerdas algo que todavía te resulta mucho más extraño: la noche anterior, la luna apenas estaba empezando su cuarto creciente. \nEmpiezas a dudar del tiempo que has pasado dentro de la cueva. No tienes hambre, ni te parece que hayas podido quedarte dormido. \nNo sabes si intentar volver a casa guiado por la luz de la luna o si esperar a que amanezca para no correr el riesgo de resbalar en el escarpado sendero.",
  opcion1: "decides volver a casa",
  Pag1: 4,
  opcion2: "decides esperar",
  Pag2: 5,
};
let Pag004 = {
  texto:
    "A medida que avanzas hacia el rancho, tienes la sensación de que el sendero no es el que tú recuerdas, aunque desde luego la luz de la luna puede darle un aspecto diferente.\nDe pronto, te das cuenta que no estás caminando por un sendero, sino por algo que se asemeja al cauce seco de un río. Vuelves corriendo a la entrada de la cueva. Miras a tu alrededor y descubres que todo el paisaje ha cambiado. Parece como si una lluvia torrencial hubiese borrado todo el rastro del camino durante el rato que has estado dentro de la cueva, a pesar de que no logras ver un solo charco. Tiemblas; hace frío, mucho más del que corresponde a esta época del año. Te pones la chaqueta que llevabas en la mochila, pero sigues sintiendo un frío terrible};Por fin, el paisaje empieza a aclararse. Por el este asoma un poco de luz. Pronto saldrá el sol. Echas un vistazo a tu reloj y descubres que se ha parado, a pesar de que sólo hace unas horas que le has dado cuerda. Parece que nada funcione correctamente.\nSabes que debes volver al rancho lo antes posible, pero de algún modo, sientes que la única forma de hacer que las cosas vuelvan a ser como antes es retornar al interior de la cueva.\n",
  opcion1: "sigues hacia el rancho",
  Pag1: 8,
  opcion2: "vuelves a entrar en la cueva",
  Pag2: 9,
};
let Pag005 = {
  texto:
    "Esperas hasta la mañana siguiente, pero a medida que los rosados jirones del amanecer iluminan el cielo por el este, empieza a soplar un viento helado y amenazador.\n",
  opcion1: "buscas refugio",
  Pag1: 6,
  opcion2: "decides soportar el viento para ver lo que hay a tu alrededor",
  Pag2: 9,
};
let Pag006 = {
  texto:
    "Buscas refugio en un hueco entre las rocas para protegerte de las terribles ráfagas de viento y te recuestas en su fondo. De repente, la roca se desmorona y resbalas por una pendiente fangosa hasta un estanque.\nCuando logras levantarte, calado hasta los huesos, y llegar hasta la hierba que cubre la orilla, el sol brilla con todo su esplendor. Miras hacia las rocas que se elevan por detrás del estanque, pero no logras descubrir por dónde has podido caer.\nTratas de hacerte una idea de tu situación, cuando de pronto aparece un caballo montado por un caballero con armadura, como los de los libros de historia. La visión te resulta tan inusitada que te dan ganas de echarte a reír.\nEl caballero levanta su casco e irrumpe en sonoras carcajadas.\n—¡Menudo sitio para tomar un baño! —grita—. De todos modos, opino que ha valido la pena, ¡Has quedado tan limpio como un cerdo! Está a punto de caerse del caballo a causa de las fuertes carcajadas.\n— Anda, sube y te llevaré de vuelta al castillo —dice—. Veremos qué se puede hacer para que recuperes un aspecto humano.\n",
  opcion1: "aceptas volver a caballo al castillo",
  Pag1: 9,
  opcion2: "rechazas la invitación e intentas volver a la Cueva del Tiempo",
  Pag2: 9,
};
let Pag008 = {
  texto:
    "A medida que aclara el día te das cuenta que no estás en el buen camino. El cañón parece menos profundo y el cauce del río está sembrado de cantos rodados que nunca habías visto. El viento es helado a pesar de estar en pleno verano. Al subir a un terreno más elevado descubres manchas de nieve. Desde un risco, divisas una llanura árida con lagos helados y, a lo lejos, una cadena montañosa con picos cubiertos por la nieve. Empiezas a pensar que no se trata simplemente de que te hayas perdido; te has perdido en el tiempo y, por alguna extraña razón, has sido transportado varios millones de años atrás a la Edad del Hielo.\nTe diriges a una de las colinas que bordean el cañón, buscando un lugar para resguardarte del viento y descubres la entrada de otra cueva. Sientes la tentación de penetrar en ella aunque piensas que deberías seguir andando para ver si de algún modo logras llegar a un sitio conocido.\n",
  opcion1: "entras en la cueva",
  Pag1: 9,
  opcion2: "sigues andando",
  Pag2: 9,
};
let Pag009 = {
  texto: "Compra uno de nuestros packs para continuar leyendo.",
};

let ActPage = Pag002;
let Fin = 0;

console.log(MostraInici());
while (!Fin) {
  console.log(MostraPagina(ActPage));
  let opcio = TriarOpcio();
  ActPage = FindNextPage(ActPage, opcio);
  if (ActPage === Pag009) {
    console.log(Pag009.texto);
    Fin = 1;
  }
}

function MostraInici() {
  let mostratext = "\n" + Pag001.texto + "\n \n EMPIEZA TU HISTORIA \n \n";
  return mostratext;
}

function MostraPagina(ActPageMP) {
  let mostratext = ActPageMP.texto + "\n\n";
  if (ActPageMP.opcion1) {
    mostratext = mostratext + "1.-" + ActPageMP.opcion1 + "\n";
  }
  if (ActPageMP.opcion2) {
    mostratext = mostratext + "2.-" + ActPageMP.opcion2 + "\n";
  }

  return mostratext;
}

function TriarOpcio() {
  let OpcioTriada = readlineSync.question("Que quieres hacer? ");
  return OpcioTriada;
}

function FindNextPage(ActPageFNP, opt) {
  let nextPage = 0;
  if (opt === 1 || opt === "1") {
    nextPage = ActPageFNP.Pag1;
  }
  if (opt === 2 || opt === "2") {
    nextPage = ActPageFNP.Pag2;
  }
  if (nextPage === 4) {
    return Pag004;
  }
  if (nextPage === 5) {
    return Pag005;
  }
  if (nextPage === 6) {
    return Pag006;
  }
  if (nextPage === 8) {
    return Pag008;
  }
  if (nextPage === 9) {
    return Pag009;
  }
}
