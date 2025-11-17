import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Servir archivos estáticos
app.use('/static/*', serveStatic({ root: './public' }))

// Página principal con selector de rol
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SANNA Protocolos - Guía de Atención</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
                --sanna-gray: #6b7280;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .card-role {
                transition: all 0.3s ease;
                background: white;
                border-radius: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .card-role:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 24px rgba(0, 133, 66, 0.2);
            }
            
            .sanna-btn {
                background: var(--sanna-green);
                color: white;
                padding: 16px 32px;
                border-radius: 12px;
                font-weight: 600;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                display: inline-block;
                text-decoration: none;
            }
            
            .sanna-btn:hover {
                background: var(--sanna-dark-green);
                transform: scale(1.05);
            }
            

        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-6xl">
            <!-- Título Principal -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold mb-4" style="color: var(--sanna-green);">
                    <i class="fas fa-heart-pulse mr-2"></i>
                    Guía de Protocolos de Atención
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Tu misión: transformar la incertidumbre en calma, desde el primer segundo
                </p>
            </div>

            <!-- Introducción -->
            <div class="bg-white rounded-2xl p-8 mb-12 shadow-lg border-l-8" style="border-color: var(--sanna-green);">
                <h2 class="text-2xl font-bold mb-4" style="color: var(--sanna-green);">
                    <i class="fas fa-info-circle mr-2"></i>
                    Tu Impacto en la Experiencia del Paciente
                </h2>
                <p class="text-gray-700 leading-relaxed mb-4">
                    Un paciente no llega a la clínica buscando un trámite; llega buscando <strong>alivio, seguridad y confianza</strong>. 
                    A menudo, llega con ansiedad, dudas o preocupación.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    En los próximos minutos de contacto, es cuando se define gran parte de su experiencia. 
                    En ese momento crucial, <strong class="text-xl" style="color: var(--sanna-green);">tú eres el protagonista</strong>. 
                    Tus gestos, tu sonrisa y tus palabras tienen el poder de transformar la incertidumbre en calma.
                </p>
            </div>

            <!-- Selector de Protocolos -->
            <div class="mb-12">
                <h2 class="text-3xl font-bold text-center mb-3" style="color: var(--sanna-dark-green);">
                    Selecciona tu Protocolo
                </h2>
                <p class="text-center text-gray-600 mb-10 text-lg">Elige el protocolo que necesitas consultar</p>
                
                <!-- Protocolo #1 -->
                <div class="card-role p-8 mb-6">
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div class="flex-1">
                            <div class="flex items-center mb-4">
                                <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-bold mr-4">#1</span>
                                <div>
                                    <h3 class="text-2xl font-bold mb-1" style="color: var(--sanna-green);">
                                        Sello en Acción
                                    </h3>
                                    <p class="text-gray-600">Primera impresión y atención al paciente</p>
                                </div>
                            </div>
                            <div class="ml-16 mb-4">
                                <p class="text-gray-700 mb-2">
                                    <i class="fas fa-users mr-2" style="color: var(--sanna-green);"></i>
                                    <strong>Roles:</strong> Anfitriona, Admisionista, Modular
                                </p>
                                <p class="text-gray-600 text-sm">
                                    Protocolos para transformar la incertidumbre en calma desde el primer contacto
                                </p>
                            </div>
                        </div>
                        <div class="w-full md:w-auto">
                            <a href="/protocolo1" class="sanna-btn block text-center whitespace-nowrap">
                                Ver Protocolo <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Protocolo #2 -->
                <div class="card-role p-8 mb-6">
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div class="flex-1">
                            <div class="flex items-center mb-4">
                                <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-bold mr-4">#2</span>
                                <div>
                                    <h3 class="text-2xl font-bold mb-1" style="color: var(--sanna-green);">
                                        Verificación Documental
                                    </h3>
                                    <p class="text-gray-600">Validación de seguros del paciente ambulatorio</p>
                                </div>
                            </div>
                            <div class="ml-16 mb-4">
                                <p class="text-gray-700 mb-2">
                                    <i class="fas fa-users mr-2" style="color: var(--sanna-green);"></i>
                                    <strong>Roles:</strong> Admisionista, Modular
                                </p>
                                <p class="text-gray-600 text-sm">
                                    Protocolos para gestionar documentación, seguros y situaciones difíciles con empatía
                                </p>
                            </div>
                        </div>
                        <div class="w-full md:w-auto">
                            <a href="/protocolo2" class="sanna-btn block text-center whitespace-nowrap">
                                Ver Protocolo <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12 text-gray-500">
                <p class="text-sm">
                    <i class="fas fa-shield-heart mr-2"></i>
                    SANNA Clínica Belén - Excelencia en Atención al Paciente
                </p>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Protocolo Anfitriona
app.get('/anfitriona', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo Anfitriona - SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .protocol-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-left: 6px solid var(--sanna-green);
            }
            
            .guion-box {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-left: 4px solid var(--sanna-green);
                padding: 16px;
                border-radius: 12px;
                margin: 12px 0;
            }
            
            .table-responsive {
                overflow-x: auto;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
            
            .step-number {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background: var(--sanna-green);
                color: white;
                border-radius: 50%;
                font-weight: bold;
                font-size: 18px;
            }
            
            .page-header {
                background: white;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                padding: 20px 0;
                margin-bottom: 32px;
            }
            
            .header-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .header-logo {
                display: flex;
                align-items: center;
            }
            
            .header-logo img {
                height: 60px;
                width: auto;
                display: block;
                object-fit: contain;
            }
            
            @media (max-width: 768px) {
                .page-header {
                    padding: 15px 0;
                    margin-bottom: 24px;
                }
                .header-content {
                    padding: 0 16px;
                }
                .header-logo img {
                    height: 50px;
                }
            }
            
            @media (max-width: 480px) {
                .page-header {
                    padding: 12px 0;
                }
                .header-content {
                    padding: 0 12px;
                }
                .header-logo img {
                    height: 40px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver al Inicio
                </a>
            </div>

            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                    <i class="fas fa-hands-helping text-4xl text-white"></i>
                </div>
                <h1 class="text-4xl font-bold mb-2" style="color: var(--sanna-green);">Protocolo Anfitriona</h1>
                <p class="text-xl text-gray-600">Torre SANNA y Torre Belén</p>
            </div>

            <!-- Tu Misión -->
            <div class="protocol-card bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 class="text-2xl font-bold mb-4 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-bullseye mr-3"></i> Tu Misión
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Eres la <strong>primera impresión de SANNA</strong>. Tu objetivo es transformar la incertidumbre del paciente 
                    en una sensación de seguridad y bienvenida <strong class="text-2xl" style="color: var(--sanna-green);">desde el primer segundo</strong>.
                </p>
            </div>

            <!-- Flujo de Bienvenida -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-star mr-3"></i> El Flujo de una Bienvenida Memorable
                </h2>

                <!-- Paso 1 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">1</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                La Bienvenida de Acogida
                            </h3>
                            <p class="text-gray-500 text-lg">Tus primeros 5 segundos</p>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Ponte de pie, haz contacto visual y ofrece una sonrisa cálida.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            
                            <div class="mb-3">
                                <p class="font-semibold text-gray-700 mb-2">Para todos:</p>
                                <p class="text-gray-900 italic text-lg">
                                    "¡Buenos días/tardes! Bienvenido/a a SANNA CLÍNICA BELÉN. ¿En qué puedo ayudarle?"
                                </p>
                            </div>

                            <div class="mb-3">
                                <p class="font-semibold text-gray-700 mb-2">Si es nuevo:</p>
                                <p class="text-gray-900 italic text-lg">
                                    "¿Es su primera vez con nosotros? Permítame ayudarle a que su ingreso sea muy sencillo."
                                </p>
                            </div>

                            <div>
                                <p class="font-semibold text-gray-700 mb-2">Si es recurrente:</p>
                                <p class="text-gray-900 italic text-lg">
                                    "Gracias por volvernos a elegir. Le ayudo con su ruta en la clínica."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Paso 2 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">2</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Acompañamiento Proactivo
                            </h3>
                            <p class="text-gray-500 text-lg">Si detectas vulnerabilidad</p>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Identifica y acércate a pacientes que necesitan más apoyo (bebés, bastón, ansiedad visible).
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN (Tono suave):
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Veo que viene con su bebé / noto que el bastón le incomoda un poco. Por favor, no se preocupe. 
                                Permítame acompañarle personalmente para que su recorrido sea más fácil. Vamos a tomar un ticket 
                                preferencial y le guiaré paso a paso."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Paso 3 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">3</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Orientación Clara
                            </h3>
                            <p class="text-gray-500 text-lg">Enfocada en el primer paso</p>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Señala claramente la dirección. Entrega el ticket o la ruta de forma visible.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Perfecto, Sr./Sra. [Apellido]. Su recorrido hoy es muy simple. El primer paso es en Admisión, 
                                que está justo allí [señalar con la mano abierta]. Allí validarán sus datos. ¿Le parece claro 
                                este primer paso para empezar?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Guiones Rápidos -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-comments mr-3"></i> Guiones Rápidos para Consultas Frecuentes
                </h2>

                <div class="table-responsive">
                    <table class="w-full">
                        <thead style="background: var(--sanna-green);">
                            <tr>
                                <th class="text-left p-4 text-white font-semibold">Consulta del Paciente</th>
                                <th class="text-left p-4 text-white font-semibold">Respuesta en TORRE BELÉN</th>
                                <th class="text-left p-4 text-white font-semibold">Respuesta en TORRE SANNA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-green-50 transition">
                                <td class="p-4 font-semibold text-gray-800">"Vengo a pagar mi consulta."</td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Claro! Diríjase a Admisión. A su derecha encontrará la máquina para sacar su ticket de atención. ¡Es muy rápido!"
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Perfecto! Para empezar, acérquese al Tótem para obtener su ticket. Luego pasará a Triaje y después a la sala de espera de su médico."
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-green-50 transition" style="background: #f9fafb;">
                                <td class="p-4 font-semibold text-gray-800">"¿Cómo va mi carta de garantía?"</td>
                                <td class="p-4 text-gray-700 italic">
                                    "Entiendo. Para darle el estado exacto, nuestro especialista en el módulo 8 tiene toda la información. Si gusta, le acompaño."
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "Con mucho gusto. Por favor, acérquese al módulo de Sanna Express, donde le darán el detalle del estado de su carta."
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-green-50 transition">
                                <td class="p-4 font-semibold text-gray-800">"Pagué por la App, ¿pueden verificarlo?"</td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Excelente! Con gusto lo verificamos en el sistema en el módulo 8. Venga conmigo, es un paso muy rápido."
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Muy bien! Usar la App agiliza todo. Por favor, diríjase al módulo de Sanna Express donde le ayudarán de inmediato."
                                </td>
                            </tr>
                            <tr class="hover:bg-green-50 transition" style="background: #f9fafb;">
                                <td class="p-4 font-semibold text-gray-800">"Necesito imprimir mi comprobante."</td>
                                <td class="p-4 text-gray-700 italic">
                                    "Por supuesto. La impresión la gestionamos en el módulo 8. Si me permite, le indico el camino para que no tenga que esperar."
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Claro que sí! Por favor, acérquese al módulo de Sanna Express donde le ayudarán con su solicitud."
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Recordatorio Final -->
            <div class="protocol-card bg-gradient-to-r from-yellow-50 to-amber-50 border-l-8 border-yellow-500">
                <h2 class="text-2xl font-bold mb-4 flex items-center text-yellow-800">
                    <i class="fas fa-lightbulb mr-3"></i> Recordatorio Clave
                </h2>
                <p class="text-lg text-yellow-900 leading-relaxed">
                    Tu rol es <strong>acoger y orientar</strong>. La calidez en el primer contacto marca el tono de toda la experiencia del paciente en SANNA.
                </p>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver al Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Protocolo Admisionista
app.get('/admisionista', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo Admisionista - SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .protocol-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-left: 6px solid var(--sanna-green);
            }
            
            .guion-box {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-left: 4px solid var(--sanna-green);
                padding: 16px;
                border-radius: 12px;
                margin: 12px 0;
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
            
            .step-number {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background: var(--sanna-green);
                color: white;
                border-radius: 50%;
                font-weight: bold;
                font-size: 18px;
            }
            
            .page-header {
                background: white;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                padding: 20px 0;
                margin-bottom: 32px;
            }
            
            .header-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .header-logo {
                display: flex;
                align-items: center;
            }
            
            .header-logo img {
                height: 60px;
                width: auto;
                display: block;
                object-fit: contain;
            }
            
            @media (max-width: 768px) {
                .page-header {
                    padding: 15px 0;
                    margin-bottom: 24px;
                }
                .header-content {
                    padding: 0 16px;
                }
                .header-logo img {
                    height: 50px;
                }
            }
            
            @media (max-width: 480px) {
                .page-header {
                    padding: 12px 0;
                }
                .header-content {
                    padding: 0 12px;
                }
                .header-logo img {
                    height: 40px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver al Inicio
                </a>
            </div>

            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                    <i class="fas fa-clipboard-check text-4xl text-white"></i>
                </div>
                <h1 class="text-4xl font-bold mb-2" style="color: var(--sanna-green);">Protocolo Admisionista</h1>
                <p class="text-xl text-gray-600">Punto de Seguridad Administrativa</p>
            </div>

            <!-- Tu Misión -->
            <div class="protocol-card bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 class="text-2xl font-bold mb-4 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-bullseye mr-3"></i> Tu Misión
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Eres el <strong>punto de seguridad administrativa</strong>. Tu objetivo es que el registro sea 
                    <strong class="text-xl" style="color: var(--sanna-green);">claro, ágil y empático</strong>, 
                    transmitiendo tranquilidad.
                </p>
            </div>

            <!-- Momentos Clave -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-star mr-3"></i> Momentos Clave en Admisión
                </h2>

                <!-- Momento 1 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">1</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Recepción y Validación
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Levanta la mirada al recibir al paciente, sonríe y usa su nombre.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Buenos días. Soy [Tu Nombre]. ¿En qué le puedo ayudar? ¿Me permite su DNI, por favor?"
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Momento 2 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">2</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Explicación del Proceso
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Mientras realizas el trámite, verbaliza lo que estás haciendo.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Sr(a) [Apellido], estoy validando su cita. Ahora procederemos con la confirmación de su cobertura / el pago. ¿Está claro?"
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Momento 3 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">3</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Cierre y Siguiente Paso
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Entrega los documentos de forma ordenada y explica claramente el siguiente paso.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Listo, Sr./Sra. [Apellido]. Aquí tiene su comprobante. Su siguiente paso es [Sala de espera / Triaje], 
                                que se encuentra [indicar con claridad]. El personal de esa área lo estará esperando."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recordatorio Final -->
            <div class="protocol-card bg-gradient-to-r from-yellow-50 to-amber-50 border-l-8 border-yellow-500">
                <h2 class="text-2xl font-bold mb-4 flex items-center text-yellow-800">
                    <i class="fas fa-lightbulb mr-3"></i> Recordatorio Clave
                </h2>
                <p class="text-lg text-yellow-900 leading-relaxed">
                    Tu rol es <strong>clarificar y asegurar</strong>. La transparencia en el proceso administrativo 
                    construye la confianza del paciente.
                </p>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver al Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Protocolo Modular
app.get('/modular', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo Modular - SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .protocol-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-left: 6px solid var(--sanna-green);
            }
            
            .guion-box {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-left: 4px solid var(--sanna-green);
                padding: 16px;
                border-radius: 12px;
                margin: 12px 0;
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
            
            .step-number {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background: var(--sanna-green);
                color: white;
                border-radius: 50%;
                font-weight: bold;
                font-size: 18px;
            }
            
            .important-badge {
                display: inline-block;
                background: #ef4444;
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                margin-left: 8px;
            }
            
            .header-logo {
                position: fixed;
                top: 15px;
                right: 15px;
                z-index: 1000;
                background: white;
                border-radius: 12px;
                padding: 10px 16px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
            }
            
            .header-logo:hover {
                box-shadow: 0 4px 12px rgba(0, 133, 66, 0.2);
                transform: translateY(-2px);
            }
            
            .header-logo img {
                height: 50px;
                width: auto;
                display: block;
                object-fit: contain;
            }
            
            @media (max-width: 768px) {
                .header-logo {
                    top: 10px;
                    right: 10px;
                    padding: 8px 12px;
                }
                .header-logo img {
                    height: 40px;
                }
            }
            
            @media (max-width: 480px) {
                .header-logo {
                    top: 8px;
                    right: 8px;
                    padding: 6px 10px;
                }
                .header-logo img {
                    height: 35px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver al Inicio
                </a>
            </div>

            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                    <i class="fas fa-user-clock text-4xl text-white"></i>
                </div>
                <h1 class="text-4xl font-bold mb-2" style="color: var(--sanna-green);">Protocolo Modular</h1>
                <p class="text-xl text-gray-600">Torre Belén</p>
            </div>

            <!-- Tu Misión -->
            <div class="protocol-card bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 class="text-2xl font-bold mb-4 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-bullseye mr-3"></i> Tu Misión
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Eres el <strong>enlace de confianza entre el paciente y el médico</strong>. Tu objetivo es gestionar la espera, 
                    <strong class="text-xl" style="color: var(--sanna-green);">comunicar proactivamente</strong> 
                    y asegurar que el paciente se sienta siempre informado.
                </p>
            </div>

            <!-- Momentos Clave -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-star mr-3"></i> Momentos Clave en Módulo
                </h2>

                <!-- Momento 1 - EL MÁS IMPORTANTE -->
                <div class="mb-8 border-4 border-red-400 p-6 rounded-xl bg-red-50">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4 bg-red-600">1</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2 text-red-800">
                                Comunicación Proactiva de Demoras
                                <span class="important-badge">
                                    <i class="fas fa-exclamation-triangle mr-1"></i> EL MÁS IMPORTANTE
                                </span>
                            </h3>
                            <p class="text-red-700 text-lg font-semibold">¡No esperes a que el paciente pregunte!</p>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-red-100 border-l-4 border-red-600 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-red-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-red-800 text-lg">
                                <strong>Acércate TÚ a informar con empatía.</strong> No esperes a que el paciente pregunte.
                            </p>
                        </div>

                        <div class="guion-box border-red-400">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg leading-relaxed">
                                "Sr./Sra. [Apellido], me acerco para darle una información. Le ofrezco una disculpa de antemano, 
                                el Dr. [Nombre] viene con una demora de [X minutos]. Queremos ser transparentes con usted. 
                                Tiene dos opciones: si gusta, puede esperar cómodamente y le mantendré informado, o si prefiere, 
                                le ayudo ahora mismo a reprogramar su cita. ¿Qué prefiere usted?"
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Momento 2 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">2</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Gestión de Turnos Adicionales
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Sé el punto central para resolver estas solicitudes con una actitud resolutiva.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Entiendo su necesidad. Para ver si podemos conseguirle un turno adicional, por favor, 
                                acérquese al Módulo [Nombre del Módulo específico] donde mis compañeros especialistas 
                                le ayudarán con la reserva."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Momento 3 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">3</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Orientación Final (Post-consulta)
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Asegúrate de que el paciente se vaya sin ninguna duda sobre sus próximos pasos.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Sr./Sra. [Apellido], ¿el doctor le dio alguna indicación para exámenes o una próxima cita? 
                                Estoy aquí para ayudarle a agendarlo o indicarle a dónde ir ahora."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recordatorio Final -->
            <div class="protocol-card bg-gradient-to-r from-yellow-50 to-amber-50 border-l-8 border-yellow-500">
                <h2 class="text-2xl font-bold mb-4 flex items-center text-yellow-800">
                    <i class="fas fa-lightbulb mr-3"></i> Recordatorio Clave
                </h2>
                <p class="text-lg text-yellow-900 leading-relaxed">
                    Tu rol es <strong>gestionar la espera y comunicar</strong>. La información oportuna transforma 
                    una espera frustrante en una experiencia de cuidado y respeto.
                </p>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver al Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Página de selección de cargo - Protocolo #1
app.get('/protocolo1', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo #1 - Selecciona tu Cargo | SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .card-role {
                transition: all 0.3s ease;
                background: white;
                border-radius: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .card-role:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 24px rgba(0, 133, 66, 0.2);
            }
            
            .sanna-btn {
                background: var(--sanna-green);
                color: white;
                padding: 16px 32px;
                border-radius: 12px;
                font-weight: 600;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                display: inline-block;
                text-decoration: none;
            }
            
            .sanna-btn:hover {
                background: var(--sanna-dark-green);
                transform: scale(1.05);
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver a Protocolos
                </a>
            </div>

            <!-- Título -->
            <div class="text-center mb-12">
                <div class="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-bold mb-4">
                    PROTOCOLO #1
                </div>
                <h1 class="text-4xl font-bold mb-3" style="color: var(--sanna-green);">
                    Sello en Acción
                </h1>
                <p class="text-xl text-gray-600 mb-6">Primera impresión y atención al paciente</p>
                <p class="text-gray-500 max-w-2xl mx-auto">
                    Selecciona tu cargo para ver los protocolos específicos de tu rol
                </p>
            </div>

            <!-- Selector de Cargo -->
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <!-- Anfitriona -->
                <div class="card-role p-8 text-center">
                    <div class="mb-6">
                        <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                            <i class="fas fa-hands-helping text-5xl text-white"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--sanna-green);">Anfitriona</h3>
                    <p class="text-gray-600 mb-6 text-sm">Primera impresión y bienvenida en Torre SANNA y Torre Belén</p>
                    <a href="/protocolo1-anfitriona" class="sanna-btn w-full block text-center">
                        Ver Mi Protocolo <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <!-- Admisionista -->
                <div class="card-role p-8 text-center">
                    <div class="mb-6">
                        <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                            <i class="fas fa-clipboard-check text-5xl text-white"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--sanna-green);">Admisionista</h3>
                    <p class="text-gray-600 mb-6 text-sm">Registro ágil y empático con el paciente</p>
                    <a href="/protocolo1-admisionista" class="sanna-btn w-full block text-center">
                        Ver Mi Protocolo <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <!-- Modular -->
                <div class="card-role p-8 text-center">
                    <div class="mb-6">
                        <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                            <i class="fas fa-user-clock text-5xl text-white"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--sanna-green);">Modular</h3>
                    <p class="text-gray-600 mb-6 text-sm">Gestión de espera proactiva en Torre Belén</p>
                    <a href="/protocolo1-modular" class="sanna-btn w-full block text-center">
                        Ver Mi Protocolo <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver a Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Página de selección de cargo - Protocolo #2
app.get('/protocolo2', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo #2 - Selecciona tu Cargo | SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .card-role {
                transition: all 0.3s ease;
                background: white;
                border-radius: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .card-role:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 24px rgba(0, 133, 66, 0.2);
            }
            
            .sanna-btn {
                background: var(--sanna-green);
                color: white;
                padding: 16px 32px;
                border-radius: 12px;
                font-weight: 600;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                display: inline-block;
                text-decoration: none;
            }
            
            .sanna-btn:hover {
                background: var(--sanna-dark-green);
                transform: scale(1.05);
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver a Protocolos
                </a>
            </div>

            <!-- Título -->
            <div class="text-center mb-12">
                <div class="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-bold mb-4">
                    PROTOCOLO #2
                </div>
                <h1 class="text-4xl font-bold mb-3" style="color: var(--sanna-green);">
                    Verificación Documental
                </h1>
                <p class="text-xl text-gray-600 mb-6">Validación de seguros del paciente ambulatorio</p>
                <p class="text-gray-500 max-w-2xl mx-auto">
                    Selecciona tu cargo para ver los protocolos específicos de tu rol
                </p>
            </div>

            <!-- Selector de Cargo -->
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <!-- Admisionista -->
                <div class="card-role p-8 text-center">
                    <div class="mb-6">
                        <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                            <i class="fas fa-file-invoice text-5xl text-white"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--sanna-green);">Admisionista</h3>
                    <p class="text-gray-600 mb-6 text-sm">Punto de seguridad administrativa para validación de seguros y documentos</p>
                    <a href="/protocolo2-admisionista" class="sanna-btn w-full block text-center">
                        Ver Mi Protocolo <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <!-- Modular -->
                <div class="card-role p-8 text-center">
                    <div class="mb-6">
                        <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                            <i class="fas fa-user-check text-5xl text-white"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--sanna-green);">Modular</h3>
                    <p class="text-gray-600 mb-6 text-sm">Punto de resolución y enlace en el piso de consultorios</p>
                    <a href="/protocolo2-modular" class="sanna-btn w-full block text-center">
                        Ver Mi Protocolo <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver a Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Alias para mantener compatibilidad con URLs antiguas
app.get('/anfitriona', (c) => c.redirect('/protocolo1-anfitriona'))
app.get('/admisionista', (c) => c.redirect('/protocolo1-admisionista'))
app.get('/modular', (c) => c.redirect('/protocolo1-modular'))

// Protocolo #1: Rutas con nuevo formato
app.get('/protocolo1-anfitriona', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo #1 - Anfitriona | SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .protocol-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-left: 6px solid var(--sanna-green);
            }
            
            .guion-box {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-left: 4px solid var(--sanna-green);
                padding: 16px;
                border-radius: 12px;
                margin: 12px 0;
            }
            
            .table-responsive {
                overflow-x: auto;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
            
            .step-number {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background: var(--sanna-green);
                color: white;
                border-radius: 50%;
                font-weight: bold;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver al Inicio
                </a>
            </div>

            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                    <i class="fas fa-hands-helping text-4xl text-white"></i>
                </div>
                <div class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-3">
                    PROTOCOLO #1: SELLO EN ACCIÓN
                </div>
                <h1 class="text-4xl font-bold mb-2" style="color: var(--sanna-green);">Anfitriona</h1>
                <p class="text-xl text-gray-600">Torre SANNA y Torre Belén</p>
            </div>

            <!-- Tu Misión -->
            <div class="protocol-card bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 class="text-2xl font-bold mb-4 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-bullseye mr-3"></i> Tu Misión
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Eres la <strong>primera impresión de SANNA</strong>. Tu objetivo es transformar la incertidumbre del paciente 
                    en una sensación de seguridad y bienvenida <strong class="text-2xl" style="color: var(--sanna-green);">desde el primer segundo</strong>.
                </p>
            </div>

            <!-- Flujo de Bienvenida -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-star mr-3"></i> El Flujo de una Bienvenida Memorable
                </h2>

                <!-- Paso 1 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">1</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                La Bienvenida de Acogida
                            </h3>
                            <p class="text-gray-500 text-lg">Tus primeros 5 segundos</p>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Ponte de pie, haz contacto visual y ofrece una sonrisa cálida.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            
                            <div class="mb-3">
                                <p class="font-semibold text-gray-700 mb-2">Para todos:</p>
                                <p class="text-gray-900 italic text-lg">
                                    "¡Buenos días/tardes! Bienvenido/a a SANNA CLÍNICA BELÉN. ¿En qué puedo ayudarle?"
                                </p>
                            </div>

                            <div class="mb-3">
                                <p class="font-semibold text-gray-700 mb-2">Si es nuevo:</p>
                                <p class="text-gray-900 italic text-lg">
                                    "¿Es su primera vez con nosotros? Permítame ayudarle a que su ingreso sea muy sencillo."
                                </p>
                            </div>

                            <div>
                                <p class="font-semibold text-gray-700 mb-2">Si es recurrente:</p>
                                <p class="text-gray-900 italic text-lg">
                                    "Gracias por volvernos a elegir. Le ayudo con su ruta en la clínica."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Paso 2 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">2</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Acompañamiento Proactivo
                            </h3>
                            <p class="text-gray-500 text-lg">Si detectas vulnerabilidad</p>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Identifica y acércate a pacientes que necesitan más apoyo (bebés, bastón, ansiedad visible).
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN (Tono suave):
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Veo que viene con su bebé / noto que el bastón le incomoda un poco. Por favor, no se preocupe. 
                                Permítame acompañarle personalmente para que su recorrido sea más fácil. Vamos a tomar un ticket 
                                preferencial y le guiaré paso a paso."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Paso 3 -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">3</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                Orientación Clara
                            </h3>
                            <p class="text-gray-500 text-lg">Enfocada en el primer paso</p>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Señala claramente la dirección. Entrega el ticket o la ruta de forma visible.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Perfecto, Sr./Sra. [Apellido]. Su recorrido hoy es muy simple. El primer paso es en Admisión, 
                                que está justo allí [señalar con la mano abierta]. Allí validarán sus datos. ¿Le parece claro 
                                este primer paso para empezar?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Guiones Rápidos -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-comments mr-3"></i> Guiones Rápidos para Consultas Frecuentes
                </h2>

                <div class="table-responsive">
                    <table class="w-full">
                        <thead style="background: var(--sanna-green);">
                            <tr>
                                <th class="text-left p-4 text-white font-semibold">Consulta del Paciente</th>
                                <th class="text-left p-4 text-white font-semibold">Respuesta en TORRE BELÉN</th>
                                <th class="text-left p-4 text-white font-semibold">Respuesta en TORRE SANNA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-green-50 transition">
                                <td class="p-4 font-semibold text-gray-800">"Vengo a pagar mi consulta."</td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Claro! Diríjase a Admisión. A su derecha encontrará la máquina para sacar su ticket de atención. ¡Es muy rápido!"
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Perfecto! Para empezar, acérquese al Tótem para obtener su ticket. Luego pasará a Triaje y después a la sala de espera de su médico."
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-green-50 transition" style="background: #f9fafb;">
                                <td class="p-4 font-semibold text-gray-800">"¿Cómo va mi carta de garantía?"</td>
                                <td class="p-4 text-gray-700 italic">
                                    "Entiendo. Para darle el estado exacto, nuestro especialista en el módulo 8 tiene toda la información. Si gusta, le acompaño."
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "Con mucho gusto. Por favor, acérquese al módulo de Sanna Express, donde le darán el detalle del estado de su carta."
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-green-50 transition">
                                <td class="p-4 font-semibold text-gray-800">"Pagué por la App, ¿pueden verificarlo?"</td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Excelente! Con gusto lo verificamos en el sistema en el módulo 8. Venga conmigo, es un paso muy rápido."
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Muy bien! Usar la App agiliza todo. Por favor, diríjase al módulo de Sanna Express donde le ayudarán de inmediato."
                                </td>
                            </tr>
                            <tr class="hover:bg-green-50 transition" style="background: #f9fafb;">
                                <td class="p-4 font-semibold text-gray-800">"Necesito imprimir mi comprobante."</td>
                                <td class="p-4 text-gray-700 italic">
                                    "Por supuesto. La impresión la gestionamos en el módulo 8. Si me permite, le indico el camino para que no tenga que esperar."
                                </td>
                                <td class="p-4 text-gray-700 italic">
                                    "¡Claro que sí! Por favor, acérquese al módulo de Sanna Express donde le ayudarán con su solicitud."
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Recordatorio Final -->
            <div class="protocol-card bg-gradient-to-r from-yellow-50 to-amber-50 border-l-8 border-yellow-500">
                <h2 class="text-2xl font-bold mb-4 flex items-center text-yellow-800">
                    <i class="fas fa-lightbulb mr-3"></i> Recordatorio Clave
                </h2>
                <p class="text-lg text-yellow-900 leading-relaxed">
                    Tu rol es <strong>acoger y orientar</strong>. La calidez en el primer contacto marca el tono de toda la experiencia del paciente en SANNA.
                </p>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver al Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// PROTOCOLO #2: Verificación Documental y Validación de Seguros - Admisionista
app.get('/protocolo2-admisionista', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo #2 - Admisionista | SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .protocol-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-left: 6px solid var(--sanna-green);
            }
            
            .guion-box {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-left: 4px solid var(--sanna-green);
                padding: 16px;
                border-radius: 12px;
                margin: 12px 0;
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
            
            .step-number {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background: var(--sanna-green);
                color: white;
                border-radius: 50%;
                font-weight: bold;
                font-size: 18px;
            }
            
            .table-responsive {
                overflow-x: auto;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .situation-card {
                background: #f8f9fa;
                border-left: 4px solid var(--sanna-green);
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 16px;
            }
            
            .important-badge {
                display: inline-block;
                background: #ef4444;
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                margin-left: 8px;
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver al Inicio
                </a>
            </div>

            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                    <i class="fas fa-file-invoice text-4xl text-white"></i>
                </div>
                <div class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-3">
                    PROTOCOLO #2: VERIFICACIÓN DOCUMENTAL Y VALIDACIÓN DE SEGUROS
                </div>
                <h1 class="text-4xl font-bold mb-2" style="color: var(--sanna-green);">Admisionista</h1>
                <p class="text-xl text-gray-600">Paciente Ambulatorio</p>
            </div>

            <!-- Tu Misión -->
            <div class="protocol-card bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 class="text-2xl font-bold mb-4 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-bullseye mr-3"></i> Tu Misión
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Eres el <strong>punto de seguridad administrativa para el paciente</strong>. Tu objetivo es que el proceso de 
                    <strong class="text-xl" style="color: var(--sanna-green);">registro, validación y pago sea claro, ágil y empático</strong>, 
                    transformando un trámite potencialmente estresante en una experiencia de confianza y tranquilidad.
                </p>
            </div>

            <!-- Momentos Clave -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-star mr-3"></i> Momentos Clave en Admisión
                </h2>

                <!-- Momento 1: La Explicación -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">1</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                La Explicación: Transparencia que da Calma
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Al informar sobre la cobertura, usa un lenguaje 100% simple. Evita la jerga a toda costa. Tu objetivo es que no queden dudas.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Perfecto, ya validé su cobertura. Le explico de forma sencilla: su seguro [Nombre] cubre [explicar qué cubre]. 
                                Esto significa que el monto a pagar por usted es de [Monto]. ¿Esta información le queda clara o tiene alguna duda 
                                en la que pueda ayudarle?"
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Momento 2: La Incidencia - MÁS IMPORTANTE -->
                <div class="mb-8 border-4 border-red-400 p-6 rounded-xl bg-red-50">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4 bg-red-600">2</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2 text-red-800">
                                La Incidencia: Tu Momento para Brillar
                                <span class="important-badge">
                                    <i class="fas fa-exclamation-triangle mr-1"></i> EL MÁS IMPORTANTE
                                </span>
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-red-100 border-l-4 border-red-600 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-red-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-red-800 text-lg">
                                Si detectas un error, rechazo o inconsistencia, <strong>activa inmediatamente tu modo de contención</strong>. 
                                Tu tono de voz debe ser calmado y seguro.
                            </p>
                        </div>

                        <div class="guion-box border-red-400">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN CLAVE "YO ME ENCARGO":
                            </p>
                            <p class="text-gray-900 italic text-lg leading-relaxed">
                                "Sr./Sra. [Apellido], acabo de notar una inconsistencia. Por favor, no se preocupe, 
                                <strong style="color: var(--sanna-green);">estoy aquí precisamente para ayudarle a solucionarlo</strong>. 
                                Entiendo que esto puede ser frustrante. Yo me encargo de gestionarlo de esta forma ... 
                                y usted por favor ayúdeme con..."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Momento 3: El Cierre -->
                <div class="mb-8">
                    <div class="flex items-start mb-4">
                        <span class="step-number mr-4">3</span>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--sanna-dark-green);">
                                El Cierre: Asegurando el Siguiente Paso
                            </h3>
                        </div>
                    </div>
                    
                    <div class="ml-14">
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                            <p class="font-semibold text-blue-900 mb-2">
                                <i class="fas fa-running mr-2"></i> ACCIÓN:
                            </p>
                            <p class="text-blue-800">
                                Al finalizar el cobro, entrega el comprobante y asegúrate de que el paciente se vaya con total claridad sobre su próximo destino.
                            </p>
                        </div>

                        <div class="guion-box">
                            <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                                <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                            </p>
                            <p class="text-gray-900 italic text-lg">
                                "Listo, hemos finalizado el proceso. Su siguiente paso ahora es... [indicar lugar y persona de forma específica]. 
                                ¿Tiene alguna otra duda sobre este pago o sobre a dónde ir ahora?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Situaciones Difíciles -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-shield-alt mr-3"></i> Situaciones Difíciles
                </h2>

                <!-- Situación 1 -->
                <div class="situation-card">
                    <h4 class="font-bold text-lg mb-3" style="color: var(--sanna-green);">
                        <i class="fas fa-clock mr-2"></i> 1. El paciente está apurado y ansioso
                    </h4>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-3">
                        <p class="font-semibold text-blue-900 text-sm mb-1">ACCIÓN:</p>
                        <p class="text-blue-800 text-sm">Válida su emoción. Mantén un tono calmado. No culpes al "sistema".</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded">
                        <p class="font-semibold text-gray-700 text-sm mb-1">GUIÓN:</p>
                        <p class="text-gray-900 italic">
                            "Entiendo completamente su apuro, Sr./Sra. [Apellido]. Estoy haciendo todo lo posible para agilizarlo. 
                            Estimo que en no más de [X] minutos ya tendré la validación lista."
                        </p>
                    </div>
                </div>

                <!-- Situación 2 -->
                <div class="situation-card">
                    <h4 class="font-bold text-lg mb-3" style="color: var(--sanna-green);">
                        <i class="fas fa-money-bill-wave mr-2"></i> 2. El paciente no entiende su copago y se molesta
                    </h4>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-3">
                        <p class="font-semibold text-blue-900 text-sm mb-1">ACCIÓN:</p>
                        <p class="text-blue-800 text-sm">Escucha. Usa un tono didáctico y ofrécete a ser su aliado.</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded">
                        <p class="font-semibold text-gray-700 text-sm mb-1">GUIÓN:</p>
                        <p class="text-gray-900 italic">
                            "Comprendo su sorpresa, los términos de los seguros pueden ser confusos. Si me permite, le muestro el detalle. 
                            Si aún hay dudas, lo que yo puedo hacer es ayudarle y llamar juntos a su seguro para que nos confirmen los detalles 
                            y mientras tanto usted me puede ayudar con... Estoy de su lado para que todo quede transparente."
                        </p>
                    </div>
                </div>

                <!-- Situación 3 -->
                <div class="situation-card">
                    <h4 class="font-bold text-lg mb-3" style="color: var(--sanna-green);">
                        <i class="fas fa-file-medical-alt mr-2"></i> 3. La orden médica o el DNI tienen un error
                    </h4>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-3">
                        <p class="font-semibold text-blue-900 text-sm mb-1">ACCIÓN:</p>
                        <p class="text-blue-800 text-sm">Comunica el problema enmarcado en su solución.</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded">
                        <p class="font-semibold text-gray-700 text-sm mb-1">GUIÓN:</p>
                        <p class="text-gray-900 italic">
                            "Para que su seguro lo acepte, necesitamos hacer un pequeño ajuste en [el documento]. No se preocupe, vamos a solucionarlo. 
                            La opción más rápida es [explicar solución]. Yo le ayudo a gestionarlo."
                        </p>
                    </div>
                </div>

                <!-- Situación 4 -->
                <div class="situation-card">
                    <h4 class="font-bold text-lg mb-3" style="color: var(--sanna-green);">
                        <i class="fas fa-id-card mr-2"></i> 4. El paciente olvidó un documento necesario
                    </h4>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-3">
                        <p class="font-semibold text-blue-900 text-sm mb-1">ACCIÓN:</p>
                        <p class="text-blue-800 text-sm">Empatiza y céntrate en las soluciones.</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded">
                        <p class="font-semibold text-gray-700 text-sm mb-1">GUIÓN:</p>
                        <p class="text-gray-900 italic">
                            "Nos ha pasado a todos, no se preocupe. Veamos las opciones que tenemos: [Opción A] o [Opción B]. 
                            ¿Cuál de estas alternativas le parece mejor para usted?"
                        </p>
                    </div>
                </div>

                <!-- Situación 5 -->
                <div class="situation-card">
                    <h4 class="font-bold text-lg mb-3" style="color: var(--sanna-green);">
                        <i class="fas fa-server mr-2"></i> 5. El sistema de validación está lento o caído
                    </h4>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-3">
                        <p class="font-semibold text-blue-900 text-sm mb-1">ACCIÓN:</p>
                        <p class="text-blue-800 text-sm">Informa con transparencia antes de que el paciente se impaciente.</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded">
                        <p class="font-semibold text-gray-700 text-sm mb-1">GUIÓN:</p>
                        <p class="text-gray-900 italic">
                            "Le informo que nuestro sistema presenta una intermitencia. Pero no se preocupe, tenemos un plan de contingencia. 
                            Procederemos con un registro manual para no demorarlo. Le agradezco su comprensión."
                        </p>
                    </div>
                </div>
            </div>

            <!-- Recordatorio Final -->
            <div class="protocol-card bg-gradient-to-r from-yellow-50 to-amber-50 border-l-8 border-yellow-500">
                <h2 class="text-2xl font-bold mb-4 flex items-center text-yellow-800">
                    <i class="fas fa-lightbulb mr-3"></i> Recordatorio Clave
                </h2>
                <p class="text-lg text-yellow-900 leading-relaxed">
                    Tu rol es ser un <strong>traductor humano y un generador de confianza</strong>. Tu calma y claridad 
                    en los momentos de tensión definen la experiencia SANNA Clínica Belén.
                </p>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver al Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// PROTOCOLO #2: Verificación Documental y Validación de Seguros - Modular
app.get('/protocolo2-modular', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo #2 - Modular | SANNA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --sanna-green: #008542;
                --sanna-dark-green: #006633;
                --sanna-light-green: #00a854;
            }
            
            body {
                background: linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%);
                min-height: 100vh;
            }
            
            .protocol-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-left: 6px solid var(--sanna-green);
            }
            
            .guion-box {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-left: 4px solid var(--sanna-green);
                padding: 16px;
                border-radius: 12px;
                margin: 12px 0;
            }
            
            .back-btn {
                background: var(--sanna-green);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                background: var(--sanna-dark-green);
                transform: translateX(-5px);
            }
            
            .situation-card {
                background: #f8f9fa;
                border-left: 4px solid var(--sanna-green);
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 16px;
            }
        </style>
    </head>
    <body>
        <div class="container mx-auto px-4 py-8 max-w-5xl">
            <!-- Header -->
            <div class="mb-8">
                <a href="/" class="back-btn mb-4">
                    <i class="fas fa-arrow-left mr-2"></i> Volver al Inicio
                </a>
            </div>

            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                    <i class="fas fa-user-check text-4xl text-white"></i>
                </div>
                <div class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-3">
                    PROTOCOLO #2: VERIFICACIÓN DOCUMENTAL Y VALIDACIÓN DE SEGUROS
                </div>
                <h1 class="text-4xl font-bold mb-2" style="color: var(--sanna-green);">Modular</h1>
                <p class="text-xl text-gray-600">Piso de Consultorios</p>
            </div>

            <!-- Tu Misión -->
            <div class="protocol-card bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 class="text-2xl font-bold mb-4 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-bullseye mr-3"></i> Tu Misión
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Eres el <strong>punto de resolución y enlace en el piso de consultorios</strong>. Tu misión es asegurar que 
                    <strong class="text-xl" style="color: var(--sanna-green);">ningún paciente se quede "atascado"</strong> 
                    por un problema administrativo, actuando como un facilitador que demuestra que somos un solo equipo.
                </p>
            </div>

            <!-- Situaciones y Respuestas -->
            <div class="protocol-card">
                <h2 class="text-3xl font-bold mb-6 flex items-center" style="color: var(--sanna-green);">
                    <i class="fas fa-tasks mr-3"></i> Situaciones y Tu Guión de Acción
                </h2>

                <!-- Situación 1 -->
                <div class="situation-card mb-6">
                    <h4 class="font-bold text-xl mb-4 flex items-start" style="color: var(--sanna-green);">
                        <span class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <span>Un paciente se acerca molesto por su proceso de admisión</span>
                    </h4>
                    
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                        <p class="font-semibold text-blue-900 mb-2">
                            <i class="fas fa-running mr-2"></i> ACCIÓN:
                        </p>
                        <p class="text-blue-800">
                            Escucha sin interrumpir. Valida su sentir. Asume la responsabilidad de ayudarlo.
                        </p>
                    </div>

                    <div class="guion-box">
                        <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                            <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                        </p>
                        <p class="text-gray-900 italic text-lg">
                            "Sr./Sra. [Apellido], lamento mucho la confusión. Por favor, no se preocupe, 
                            <strong style="color: var(--sanna-green);">ahora yo me encargo de ayudarle</strong>. 
                            Permítame su boleta para revisar el caso y encontrarle una solución."
                        </p>
                    </div>
                </div>

                <!-- Situación 2 -->
                <div class="situation-card">
                    <h4 class="font-bold text-xl mb-4 flex items-start" style="color: var(--sanna-green);">
                        <span class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <span>El médico entrega una orden para un procedimiento adicional</span>
                    </h4>
                    
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                        <p class="font-semibold text-blue-900 mb-2">
                            <i class="fas fa-running mr-2"></i> ACCIÓN:
                        </p>
                        <p class="text-blue-800">
                            Sé proactivo. Ofrécete a hacer la validación por él para evitarle el viaje de regreso a admisión.
                        </p>
                    </div>

                    <div class="guion-box">
                        <p class="font-bold mb-3 text-lg" style="color: var(--sanna-green);">
                            <i class="fas fa-comment-dots mr-2"></i> GUIÓN:
                        </p>
                        <p class="text-gray-900 italic text-lg">
                            "Para su tranquilidad, <strong style="color: var(--sanna-green);">permítame validar la cobertura de este nuevo 
                            procedimiento ahora mismo</strong> para que sepa exactamente cómo proceder. ¿Me permite un momento mientras 
                            lo gestiono por usted?"
                        </p>
                    </div>
                </div>
            </div>

            <!-- Recordatorio Final -->
            <div class="protocol-card bg-gradient-to-r from-yellow-50 to-amber-50 border-l-8 border-yellow-500">
                <h2 class="text-2xl font-bold mb-4 flex items-center text-yellow-800">
                    <i class="fas fa-lightbulb mr-3"></i> Recordatorio Clave
                </h2>
                <p class="text-lg text-yellow-900 leading-relaxed">
                    Tu rol es <strong>resolver y facilitar</strong>. Eres la prueba de que en SANNA Clínica Belén 
                    <strong>trabajamos como un solo equipo</strong> para el bienestar del paciente.
                </p>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12">
                <a href="/" class="back-btn">
                    <i class="fas fa-home mr-2"></i> Volver al Inicio
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

export default app
