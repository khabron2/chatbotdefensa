const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

//consulta sobre gas
const flowGas = addKeyword(['gas', 'g', 'gs']).addAnswer(
    [
        'Si tuviste problemas con la factura de gas, puedes realizar el reclamo en nuestras oficinas. Recuerda traer toda la documentación necesaria para procesar el reclamo pertinente.',
        '\nRecuerda el horario de atención al público',
        '⏰*07:30* A.M. a *12:30* P.M',
        '\n 🔙 Escribir *menu* para volver al menú principal.',
    ],
    null,
    null,
)

//consulta sobre luz
const flowluz = addKeyword(['luz', 'l', 'lz']).addAnswer(
    [
        'Si tuviste problemas con la factura de luz, puedes realizar el reclamo en nuestras oficinas. Recuerda traer toda la documentación necesaria para procesar el reclamo pertinente.',
        '\nRecuerda el horario de atención al público',
        '⏰*07:30* A.M. a *12:30* P.M',
        '\n 🔙 Escribir *menu* para volver al menú principal.',
    ],
    null,
    null,
)

//consulta ventanilla unica de reclamos
    const flowVentanilla = addKeyword(['Ventanilla','1']).addAnswer(
        [
            '➡️ *1) Presentar un reclamo en Ventanilla Única*',
            '\n ¿Tuviste un problema con un producto o servicio? Si la empresa no te proporciona una solución, presenta tu reclamo aquí:',
            '🔗 https://www.argentina.gob.ar/produccion/defensadelconsumidor/hacer-un-reclamo',
            '\n 🔙 Escribir *menu* para volver al menú principal.',
        ],
        null,
        null,
        
    )

//consulta formulario de inpeccion
    const flowInspeccion = addKeyword(['inspeccion', '2']).addAnswer( 
        [
            '🙌 *2) Solicitar una visita de inspectores*',
            'Completa este formulario para solicitar una visita de inspectores al lugar donde tuviste algún inconveniente: \n 🔗 https://sites.google.com/catamarca.gov.ar/defensa-del-consumidor',
            '\n 🔙 Escribir *menu* para volver al menú principal.',
        ],
        null,
        null,
        
    )

//formulario de reclamo
const flowformularios = addKeyword(['formulario', 'f']).addAnswer(
     ['Si deseas iniciar un reclamo, puedes descargar los formulario necesario:',
     'Formulario para reclamo contra *una* empresa', 
     '🔗 https://drive.google.com/file/d/1RGzPMY9TM0CI2YbBoBk7FMx0IzuS2bRs/view?usp=sharing',
     '\nFormulario para reclamo contra *dos* empresa', 
     '🔗 https://drive.google.com/file/d/1AlH_DeYgARGsOCfauc2Jub6IV-WCb28e/view?usp=sharing',
     '\nFormulario para reclamo contra *tres* empresa',
     '🔗 https://drive.google.com/file/d/1WaULhYVBM4sWAF_7e_YFoAkxS5wp20Sa/view?usp=sharing',
     '\nFormulario para reclamo contra *cuatro* empresa',
     '🔗 https://drive.google.com/file/d/1IfDOy0VykPdw4Bn7fwtqSyb4ezce7xZE/view?usp=sharing',
     '\n 🔙 Escribir *menu* para volver al menú principal.',
     ])

//agradecimeintos
const flowGracias = addKeyword(['gracias', 'doc', 'pdf']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n Escribe *menu* para volver al menu principal.',
    ],
    null,
    null,
)

//consulta sobre boletas
const flowboletas = addKeyword(['gas', 'luz', 'agua']).addAnswer(
    [
        '🚀 si tubiste un problema con algun servico selecciona alguno',
        'Presiona *g* Con las boletas de *Gas*',
        'Presiona *l* las boletas de *luz*',
        'Presiona *a* las boletas de *Agua*',
        '\n 🔙 Escribir *menu* para volver al menú principal.',
    ],
    null,
    null,
)

//consulta sobre reclamo
const flowReclamo = addKeyword(['3']).addAnswer(
    ['*📝 1) Requisitos para realizar un Reclamo*',
    '\n*🏢 Presentación en nuestras oficinas:*', 
    '⏰*07:30* A.M. a *12:30* P.M',
    '\nDirigida a: *DIRECTORA PROVINCIAL DE DEFENSA DEL CONSUMIDOR - DRA. MONICA AVELLANEDA - DPTO. DE ORIENTACIÓN Y DEFENSA DEL CONSUMIDOR*',
    '\n*A*) Datos personales (*nombre completo*,*DNI* (fotocopia),*direccion particular* y/o *domicilio laboral*, *telefono*,*correo electronico*)',
    'Se aceptan formularios duplicados, triplicados, o cuadruplicados, así como formularios manuscritos (legibles).',
    '*B*)Nombre y dirección de la firma denunciada',
    '*C*) Relato de los hechos (*con nombres y fechas precisas posibles*)',
    '*D*) Petición en términos claros (*reembolsos, rescisión, restitución, cambio, etc*)',
    '\n*📎 Documentos necesarios:*',
    'Recuerda adjuntar pruebas documentales (*facturas, tickets, presupuestos, etc.*) en duplicado, triplicado, o cuadruplicado si fuera necesario.',
    'También puedes llenar el formulario en nuestras oficinas con la ayuda de cualquier empleado.',
    '\ndescargar el formulario necesario: escribe *f* o *formulario*',
    '\n 🔙 Escribir *menu* para volver al menú principal.',
     ],
    null,
    null,
    [flowformularios]
)

//consulta de horarios
const flowHorario = addKeyword(['hora', '4', 'hour'])
     .addAnswer(    
    [
        'Lunes a Viernes',
        'de ⏰*07:30* A.M. a *12:30* P.M',
        'Puedes Cominicarte personalmente al numero',
        '3834 ',
        '\n 🔙 Escribir *menu* para volver al menú principal.',
    ],
    null,
    null,
)

//menu principal
const flowPrincipal = addKeyword(['hola', 'ole', 'menu'])
    .addAnswer('🙌¡Bienvenido al Chatbot de *Defensa del Consumidor*! ¿En qué puedo ayudarte hoy?')
    .addAnswer(
        [    
            '👉 *1) Presentar un reclamo*',
            'Si has tenido problemas con un producto o servicio y la empresa no ha proporcionado una solución, puedes presentar un reclamo aquí.',
            '👉 *2) Solicitar una visita de inspectores*',
            'Si necesitas que nuestros inspectores evalúen tu situación, selecciona esta opción para solicitar una visita.',
            '👉 *3) Ver requisitos para realizar un reclamo*',
            'Si deseas iniciar un reclamo, puedes descargar el formulario necesario seleccionando esta opción.',
            '👉 *4) Conocer Horarios de Atencion*',
        ],
        null,
        null,
        [flowVentanilla, flowInspeccion, flowReclamo,flowformularios,flowboletas,flowGas,flowluz,flowHorario,flowGracias]
    )


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
