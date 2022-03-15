let readlineSync = require("readline-sync");

let Pag001 = {
  texto:
    "ADVERTENCIA\n\n¡No leas todo el libro seguido, del principio al fin! En sus páginas hallarás muchas y variadas aventuras. A medida que lo vayas leyendo, te verás obligado a elegir. De tu decisión depende que la aventura constituya un éxito o un fracaso. \nTú serás el responsable del resultado final. Te corresponde a ti tomar las decisiones. Una vez que hayas elegido, sigue las instrucciones para averiguar qué sucede a continuación. \nRecuerda que no puedes volverte atrás. Recapacita antes de decidirte por una opción. Tu elección puede conducirte al desastre o... ¡a un magnífico final!\n",
};
let Pag002 = {
  texto:
    "Ya habías pasado en anteriores ocasiones por el Cañón de la Serpiente, cuando ibas en bicicleta a visitar a tu tío Howard en el rancho Red Creek, pero nunca te habías fijado en la entrada de la cueva. Parece como si un desprendimiento de rocas la hubiese dejado al descubierto recientemente. \nEl sol de la tarde ilumina la entrada de la cueva, pero su interior permanece en la más absoluta oscuridad. Das unos pasos hacia dentro para hacerte una idea de su tamaño. Á medida que te vas acostumbrando a la oscuridad, empiezas a vislumbrar una especie de túnel iluminado débilmente por algún tipo de material fosforescente incrustado en las rocas. \nLas paredes del túnel tienen una forma suave, como si hubiesen sido modeladas por el curso del agua. Cinco o seis metros más adelante, el túnel describe una curva. Te preguntas a dónde conduce. Das unos pasos más. Te pone nervioso estar solo en un lugar tan extraño. \nDas la vuelta y sales corriendo al exterior. \nA juzgar por la oscuridad que reina en el exterior, está a punto de desencadenarse una tormenta. De pronto, te das cuenta que el sol ya se ha puesto y que la única iluminación procede de la pálida luna llena. Quizás has debido quedarte dormido un par de horas. Entonces recuerdas algo que todavía te resulta mucho más extraño: la noche anterior, la luna apenas estaba empezando su cuarto creciente. \nEmpiezas a dudar del tiempo que has pasado dentro de la cueva. No tienes hambre, ni te parece que hayas podido quedarte dormido. \nNo sabes si intentar volver a casa guiado por la luz de la luna o si esperar a que amanezca para no correr el riesgo de resbalar en el escarpado sendero.",
  opcion1: "acabar la historia",
  opcion2: "marxar",
};
let Pag003 = {
  texto:
    "Te apresuras a salir y, con gran alegría, descubres que estás en el Cañón de la Serpiente donde nada ha cambiado. \nHas vuelto a tu época.\nPasa mucho tiempo antes de que tengas deseos de volver a visitar esos parajes. Cuando lo haces, descubres que la entrada de la Cueva del Tiempo ha sido cubierta por un desprendimiento de rocas. Quizá haya sido mejor así.",
};

console.log(MostraPart1());
let opcio = TriarOpcio();
console.log(Continuar(opcio));
console.log(Acabar());

function MostraPart1() {
  let mostratext =
    Pag001.texto + "\n \n \n \n EMPIEZA TU HISTORIA \n \n \n \n" + Pag002.texto;
  return mostratext;
}

function TriarOpcio() {
  let seguir = readlineSync.question(
    "\n1.-continuar historia\n2.-salir\n\nQue quieres hacer? "
  );
  return seguir;
}

function Continuar(opciotriada) {
  if (opciotriada === "1") {
    return "\n" + Pag003.texto;
  } else return " ";
}

function Acabar() {
  let fi = "\n\n\n                   FIN";
  return fi;
}
