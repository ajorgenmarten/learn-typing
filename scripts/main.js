import { Game } from "./game.js"

const frases = [
    "Ahora empezaremos con tu práctica de mecanografía, si eres una persona que trabaja mucho en el ordenador, tengas un mejor rendimiento a la hora de hacerlo, espero y avances rápido",
    "Coloca los dedos índices de cada mano en la f y la j, el índice de la mano izquierda en la f, y el de la mano derecha en la j, sentirás un pequeño relieve, cierra los ojos y trata de ubicarlos.",
    "Ya estás empezando a aprender lo que es la fila guía, a partir de colocar los dedos índices en la f y la j coloca los demás en esa misma fila.",
    "f f j j ff jj fj jf jf fj fff jjj ffjj jjff fjfj jfjf fffj jjjf jfjjf jjffj",
    "Pasamos ahora a la d y la k, coloca los dedos medios en la d y la k, trata de mantener los índices en su respectiva posición.",
    "k k d d kk dd kkk ddd kdkd dkdk kkdd ddkk dkkddk kddkkd kddk dkkd kdkd dkdk",
    "Ahora vamos a mezclar un poco las cosas para ir practicando y ganando habilidad.",
    "f j f j ff jj dk kf kdj dfj kjf kkd fjd jkd djkk ddjfdd fkdfj kjfdkj kjfdkj djkfjd ffkdj jjkdfk",
    "Ahora vamos a pasar a la letra s y l, para estas usa los dedos anulares, el de la mano izquierda para la s y el de la mano derecha para la l, vamos a ver como te desenvuelves.",
    "s l l s sl sl ssl lls sll lss sss lll lsls slsl lsl sls lssl lssl lssl slls slls slls",
    "Hora de mezcla jejeje.",
    "j f jj ff k d kkdd ddkk lssl ssl lls jdks ldjs ssd dds llk kkl jks ksj jjl llj ssf ffs dkjfl skdjf lsdkf jlkdj",
    "Seguimos con las letras a y ñ, para estas usas los dedos meñiques, como te debes estar imaginando, meñique de la mano izquierda para la a y el de la mano derecha para la ñ, vamos a ver como te va eso.",
    "a ñ aa ññ ññ aa aaññ ññaa añañ ñaña ñaññ añaa ññaa ñañaña añañañ ññaaaña aañññañ aa ññ añ a ñ a ñ",
    "Hora de mezcla jejeje.",
    "añ añ añ aaa ñññ aaññ ññaa ssl lss las ñañas las añas la ssl ssl saña ñasa adaña daña dala lada fada falda faldas falaña kalaña alaña kañada dañada salaña",
    "Ya casi terminas con la fila guía, solo te falta las letras g y h, para las cuales se usan los índices, al igual que para la f y la j, trata de regresar rápidamente los dedos a su posición después de tocar otra tecla.",
    "g g h h g h h g gg hh ggh hhg ghgh hghg gggg hhhh hhgg gghh h g g h h g hhh ggg hghg ghgh hhhghgh ggghghg g h",
    "Ya haz terminado con la fila guía, ahora es turno de pasar a la fila superior, pero debes esperar a que actualice la página para seguirte añadiendo información sobre como colocar los dedos en el teclado, y sobre todo más ejercicios para que practiques",
    "Mientras ahí tienes 5 textos más para que practiques en lo que agrego más info para seguirte guiando de como no preocuparte por cuál tecla tocar a la hora de escribir.",

    "Hola, me llamo Alejandro y he creado este juego para matar dos pájaros de un tiro, practicar mecanografía y programación con JavaScript, espero que les guste.",
    "ahora que sabes escribir con los cinco dedos, trabajaremos en tu velocidad, lo primero que tienes que hacer es escribir sin mirar el teclado, para que desarrolles lo que se llama memoria muscular, lo cual te permitirá escribir fluidamente como si el teclado fuera una parte más de tu cuerpo.",
    "Sabías que en el español la letra más usada es la e, estas estadísticas de letras son muy utilizadas en la criptografía para analizar la vulnerabilidad de los cifrados.",
    "Christopher Latham Sholes fue un inventor y político estadounidense, conocido por diseñar la primera máquina de escribir comercial y el teclado QWERTY que se usan en la actualidad.",
    "La programación es una habilidad esencial en la era digital actual.",
]

function* generateText () {
    for (const frase of frases) {
        yield frase
    }
}

function init () {
    const dialogButton = document.querySelector('dialog button')
    const dialog = document.querySelector('dialog')
    const generator = generateText()
    let text = generator.next()

    new Game(text.value)
    dialogButton.onclick = function() {
        text = generator.next()
        if (!text.done) {
            new Game(text.value)
        }
        dialog.close()
    }
}


init()