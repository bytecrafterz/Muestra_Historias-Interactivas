/* Datos de la muestra: flujo de la historia y subtítulos. */
const HISTORIA = {
 "titulo": "El lobo herido",
 "intro": "intro",
 "decision": {
  "pregunta": "¿Qué crees que pasará ahora?",
  "sub": "Elige desde qué punto de vista quieres seguir la historia.",
  "opciones": [
   {
    "id": "lia",
    "personaje": "Lía",
    "texto": "Acompaña al lobo hasta su cueva.",
    "video": "rama-lia",
    "avatar": "img/avatar-lia.jpg"
   },
   {
    "id": "lobo",
    "personaje": "El lobo",
    "texto": "Le da las gracias a su manera.",
    "video": "rama-lobo",
    "avatar": "img/avatar-lobo.jpg"
   },
   {
    "id": "abuela",
    "personaje": "La abuela",
    "texto": "Sale a buscar a Lía con su linterna.",
    "video": "rama-abuela",
    "avatar": "img/avatar-abuela.png"
   }
  ]
 },
 "preguntas": [
  {
   "texto": "¿Por qué Lía habla despacio y en voz baja al lobo?",
   "opciones": [
    "Para no asustarlo.",
    "Porque tiene sueño.",
    "Para que nadie la oiga."
   ],
   "correcta": 0,
   "ok": "Un animal herido está asustado: hablarle con calma le ayuda a confiar.",
   "explicacion": "explica-1"
  },
  {
   "texto": "¿Qué hizo Lía para ayudar al lobo?",
   "opciones": [
    "Le dio de comer.",
    "Le puso una venda en la pata.",
    "Llamó a un veterinario."
   ],
   "correcta": 1,
   "ok": "Le limpió la herida y le puso una venda para protegerla.",
   "explicacion": "explica-2"
  }
 ],
 "final": "final"
};
const INDICE = ["El lobo herido", "Historia 2", "Historia 3", "Historia 4"];
const SUBTITULOS = {"explica-1": [[0.5, 3.93, "Lía habla despacio y en voz baja porque el lobo está herido y"], [3.58, 4.53, "asustado."], [4.52, 8.15, "Un grito o un movimiento brusco le daría más miedo."]], "explica-2": [[0.5, 4.43, "Fíjate bien, Lía le limpió la herida y le puso una venda."], [4.46, 7.41, "Así la pata queda protegida mientras se cura."]], "final": [[0.8, 4.35, "Esa tarde, Lía aprendió que ayudar es, sobre todo,"], [4.42, 8.73, "saber escuchar, y el bosque entero se iluminó para celebrarlo."]], "intro": [[0.9, 4.59, "Al caer la tarde, Lía volvía a casa atravesando el bosque."], [5.0, 9.07, "De pronto, entre los árboles, vio a un lobo que cojeaba."], [9.04, 10.95, "Tenía una herida en la pata."], [11.3, 14.03, "Tranquilo, no tengas miedo."], [14.0, 15.93, "Solo quiero ayudarte."], [16.4, 20.99, "Con mucho cuidado, Lía le limpió la herida y le puso una venda."], [21.6, 22.47, "¡Ya está!"], [22.52, 24.29, "Así se te curará antes."], [25.0, 26.89, "El lobo la miró en silencio."], [26.76, 28.59, "¿Qué crees que pasará ahora?"]], "rama-abuela": [[0.5, 4.77, "Mientras tanto, en casa, la abuela vio que se hacía de noche."], [4.78, 8.05, "Cogió su linterna y salió a buscar a Lía."]], "rama-lia": [[0.5, 2.31, "Vamos, yo te acompaño."], [2.46, 3.43, "Despacito, ¿vale?"], [3.9, 8.11, "Y juntos, paso a paso, caminaron hasta la Cueva del Lobo."]], "rama-lobo": [[0.5, 5.31, "El lobo movió la cola, cerró los ojos un momento y acercó el hocico"], [4.96, 5.67, "a Lía."], [6.0, 7.91, "Era su forma de decir gracias."]]};
