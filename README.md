# SANNA Clínica Belén - App de Protocolos de Atención

## 📱 Descripción del Proyecto

Aplicación web responsive diseñada para capacitar al personal de SANNA Clínica Belén en sus protocolos de atención al paciente. La app proporciona guías claras, visuales y fáciles de consultar desde cualquier dispositivo móvil.

## 🎯 Objetivo

Transformar la incertidumbre del paciente en calma y seguridad desde el primer contacto, empoderando a los colaboradores con protocolos claros de lo que deben decir y hacer en cada momento clave.

## 👥 Roles Incluidos

### 1. **Anfitriona** (Torre SANNA y Torre Belén)
- Primera impresión de SANNA
- Bienvenida cálida y orientación clara
- Detección de pacientes vulnerables
- Guiones específicos para consultas frecuentes

### 2. **Admisionista**
- Punto de seguridad administrativa
- Registro ágil y empático
- Explicación clara del proceso
- Transparencia en trámites

### 3. **Modular** (Torre Belén)
- Enlace de confianza con el médico
- Comunicación proactiva de demoras
- Gestión de turnos adicionales
- Orientación post-consulta

## ✨ Características Principales

- ✅ **Diseño Responsive**: Optimizado para dispositivos móviles
- ✅ **Navegación Intuitiva**: Cada rol accede fácilmente a sus protocolos
- ✅ **Paleta de Colores Corporativa**: Verde SANNA (#008542)
- ✅ **Guiones Prácticos**: Qué decir en cada situación
- ✅ **Acciones Claras**: Qué hacer paso a paso
- ✅ **Visual Atractivo**: Iconos, colores y tipografía moderna

## 🚀 URLs de Acceso

### **Desarrollo (Sandbox)**
- **URL Principal**: https://3000-iogqy0sv3fencwh0q1egt-0e616f0a.sandbox.novita.ai
- **Anfitriona**: https://3000-iogqy0sv3fencwh0q1egt-0e616f0a.sandbox.novita.ai/anfitriona
- **Admisionista**: https://3000-iogqy0sv3fencwh0q1egt-0e616f0a.sandbox.novita.ai/admisionista
- **Modular**: https://3000-iogqy0sv3fencwh0q1egt-0e616f0a.sandbox.novita.ai/modular

### **Producción**
- Pendiente de deployment a Cloudflare Pages

## 🛠️ Stack Tecnológico

- **Backend**: Hono Framework (TypeScript)
- **Frontend**: HTML5 + TailwindCSS + Font Awesome
- **Deployment**: Cloudflare Pages
- **Build Tool**: Vite
- **Process Manager**: PM2 (desarrollo)

## 📋 Estructura de Contenido

### Cada Protocolo Incluye:

1. **Tu Misión**: Definición clara del rol y objetivo
2. **Momentos Clave**: Flujo paso a paso con:
   - ✅ **ACCIÓN**: Qué hacer físicamente
   - 💬 **GUIÓN**: Qué decir exactamente
3. **Guiones Rápidos**: Respuestas para consultas frecuentes
4. **Recordatorio Clave**: Refuerzo del mensaje principal

## 🎨 Diseño Visual

- **Colores Principales**:
  - Verde SANNA: #008542
  - Verde Oscuro: #006633
  - Verde Claro: #00a854
  
- **Tipografía**: Poppins (Google Fonts)
- **Iconografía**: Font Awesome 6.4.0
- **Framework CSS**: Tailwind CSS

## 📱 Características Mobile-First

- Navegación por tarjetas grandes y táctiles
- Texto legible en pantallas pequeñas
- Iconos grandes para fácil identificación
- Scroll suave y diseño adaptativo
- Sin necesidad de zoom o gestos complejos

## 🎓 Uso para Capacitación

Esta app sirve para:
1. **Onboarding** de nuevos colaboradores
2. **Refrescamiento** de protocolos existentes
3. **Consulta rápida** durante el trabajo
4. **Estandarización** del servicio entre equipos
5. **Evaluación** de conocimientos

## 📊 Funcionalidades Completadas

- ✅ Página principal con selector de roles
- ✅ Protocolo completo de Anfitriona
- ✅ Protocolo completo de Admisionista
- ✅ Protocolo completo de Modular (Torre Belén)
- ✅ Diseño responsive mobile-first
- ✅ Navegación intuitiva
- ✅ Identidad visual corporativa SANNA

## 🔜 Próximos Pasos Recomendados

1. **Deployment a Cloudflare Pages** para acceso público permanente
2. **Testing con usuarios reales** del personal SANNA
3. **Agregar módulo de evaluación** (quiz de conocimientos)
4. **Sistema de búsqueda** de guiones específicos
5. **Versión offline** (PWA) para consulta sin internet
6. **Analytics** para ver qué protocolos se consultan más
7. **Videos demostrativos** de situaciones reales
8. **Certificación digital** al completar capacitación

## 💡 Mejoras Futuras Sugeridas

- **Modo Oscuro** para usar en diferentes horarios
- **Notificaciones Push** para actualizaciones de protocolos
- **Chat de Soporte** para dudas en tiempo real
- **Gamificación** con puntos por uso y certificaciones
- **Feedback del Personal** para mejorar protocolos
- **Multiidioma** (español, quechua, inglés)

## 🔧 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy a Cloudflare Pages
npm run deploy

# Iniciar con PM2 (sandbox)
pm2 start ecosystem.config.cjs

# Ver logs
pm2 logs sanna-protocolos-app --nostream

# Detener servicio
pm2 delete sanna-protocolos-app
```

## 📞 Soporte

Para soporte técnico o sugerencias, contactar al equipo de Mentoring & Training.

---

**Desarrollado con ❤️ para SANNA Clínica Belén**

*Transformando la experiencia del paciente, un protocolo a la vez.*
