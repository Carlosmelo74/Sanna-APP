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
            
            .logo-container {
                background: white;
                border-radius: 16px;
                padding: 12px 20px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                display: inline-flex;
                align-items: center;
                gap: 12px;
            }
            
            .header-logo {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: white;
                border-radius: 16px;
                padding: 12px 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
            }
            
            .header-logo:hover {
                box-shadow: 0 6px 16px rgba(0, 133, 66, 0.25);
                transform: translateY(-2px);
            }
            
            .header-logo img {
                height: 60px;
                width: auto;
                display: block;
            }
            
            @media (max-width: 768px) {
                .header-logo {
                    top: 15px;
                    right: 15px;
                    padding: 8px 12px;
                }
                .header-logo img {
                    height: 45px;
                }
            }
        </style>
    </head>
    <body>
        <!-- Logo Fijo Superior Izquierda -->
        <a href="/" class="header-logo">
            <img src="https://www.genspark.ai/api/files/s/wF2CM9Ol" alt="SANNA Clínica Belén">
        </a>
        
        <div class="container mx-auto px-4 py-8 max-w-6xl" style="margin-top: 60px;">
            <!-- Header -->
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

            <!-- Selector de Rol -->
            <div class="mb-8">
                <h2 class="text-3xl font-bold text-center mb-8" style="color: var(--sanna-dark-green);">
                    Selecciona tu Rol
                </h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Anfitriona -->
                    <div class="card-role p-8 text-center">
                        <div class="mb-6">
                            <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--sanna-green), var(--sanna-light-green));">
                                <i class="fas fa-hands-helping text-5xl text-white"></i>
                            </div>
                        </div>
                        <h3 class="text-2xl font-bold mb-3" style="color: var(--sanna-green);">Anfitriona</h3>
                        <p class="text-gray-600 mb-6">Primera impresión y bienvenida</p>
                        <a href="/anfitriona" class="sanna-btn w-full block text-center">
                            Ver Protocolos <i class="fas fa-arrow-right ml-2"></i>
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
                        <p class="text-gray-600 mb-6">Registro ágil y empático</p>
                        <a href="/admisionista" class="sanna-btn w-full block text-center">
                            Ver Protocolos <i class="fas fa-arrow-right ml-2"></i>
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
                        <p class="text-gray-600 mb-6">Gestión de espera proactiva</p>
                        <a href="/modular" class="sanna-btn w-full block text-center">
                            Ver Protocolos <i class="fas fa-arrow-right ml-2"></i>
                        </a>
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
            
            .header-logo {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: white;
                border-radius: 16px;
                padding: 12px 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
            }
            
            .header-logo:hover {
                box-shadow: 0 6px 16px rgba(0, 133, 66, 0.25);
                transform: translateY(-2px);
            }
            
            .header-logo img {
                height: 60px;
                width: auto;
                display: block;
            }
            
            @media (max-width: 768px) {
                .header-logo {
                    top: 15px;
                    right: 15px;
                    padding: 8px 12px;
                }
                .header-logo img {
                    height: 45px;
                }
            }
        </style>
    </head>
    <body>
        <!-- Logo Fijo Superior Izquierda -->
        <a href="/" class="header-logo">
            <img src="https://www.genspark.ai/api/files/s/wF2CM9Ol" alt="SANNA Clínica Belén">
        </a>
        
        <div class="container mx-auto px-4 py-8 max-w-5xl" style="margin-top: 60px;">
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
            
            .header-logo {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: white;
                border-radius: 16px;
                padding: 12px 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
            }
            
            .header-logo:hover {
                box-shadow: 0 6px 16px rgba(0, 133, 66, 0.25);
                transform: translateY(-2px);
            }
            
            .header-logo img {
                height: 60px;
                width: auto;
                display: block;
            }
            
            @media (max-width: 768px) {
                .header-logo {
                    top: 15px;
                    right: 15px;
                    padding: 8px 12px;
                }
                .header-logo img {
                    height: 45px;
                }
            }
        </style>
    </head>
    <body>
        <!-- Logo Fijo Superior Izquierda -->
        <a href="/" class="header-logo">
            <img src="https://www.genspark.ai/api/files/s/wF2CM9Ol" alt="SANNA Clínica Belén">
        </a>
        
        <div class="container mx-auto px-4 py-8 max-w-5xl" style="margin-top: 60px;">
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
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: white;
                border-radius: 16px;
                padding: 12px 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
            }
            
            .header-logo:hover {
                box-shadow: 0 6px 16px rgba(0, 133, 66, 0.25);
                transform: translateY(-2px);
            }
            
            .header-logo img {
                height: 60px;
                width: auto;
                display: block;
            }
            
            @media (max-width: 768px) {
                .header-logo {
                    top: 15px;
                    right: 15px;
                    padding: 8px 12px;
                }
                .header-logo img {
                    height: 45px;
                }
            }
        </style>
    </head>
    <body>
        <!-- Logo Fijo Superior Izquierda -->
        <a href="/" class="header-logo">
            <img src="https://www.genspark.ai/api/files/s/wF2CM9Ol" alt="SANNA Clínica Belén">
        </a>
        
        <div class="container mx-auto px-4 py-8 max-w-5xl" style="margin-top: 60px;">
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

export default app
