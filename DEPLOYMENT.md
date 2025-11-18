# 🚀 Guía de Deployment - SANNA Protocolos

## Opciones de Deployment Disponibles

Este proyecto está configurado para desplegarse en **dos plataformas**:

### 1️⃣ **Cloudflare Pages** (Primaria)
- ✅ Edge network global de Cloudflare
- ✅ CDN integrado
- ✅ SSL gratuito
- ⚠️ Límite de 1MB en Workers

**URL Actual**: https://sanna-protocolos.pages.dev

**Comandos:**
```bash
# Deploy a Cloudflare Pages
npm run deploy:cloudflare

# O manualmente:
npm run build
npx wrangler pages deploy dist --project-name sanna-protocolos
```

### 2️⃣ **Vercel** (Respaldo/Alternativa)
- ✅ Sin límites estrictos de tamaño
- ✅ Deployment automático desde Git
- ✅ Serverless Functions
- ✅ Mayor estabilidad para aplicaciones grandes

**Comandos:**
```bash
# Deploy a Vercel
npm run deploy:vercel

# O manualmente:
vercel --prod
```

## 📋 Pre-requisitos

### Para Cloudflare:
1. Tener `CLOUDFLARE_API_TOKEN` configurado
2. Proyecto creado en Cloudflare Pages: `sanna-protocolos`

### Para Vercel:
1. Instalar Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Vincular proyecto: `vercel link`

## 🔧 Solución de Problemas

### Error 500 en Cloudflare:
- **Causa**: Worker demasiado grande o complejo
- **Solución**: Usar Vercel como alternativa

### Error 503 en deployment:
- **Causa**: Problemas temporales de API de Cloudflare
- **Solución**: Esperar 5-10 minutos e intentar de nuevo

### Error 404 en navegador:
- **Causa**: Caché del navegador o propagación DNS
- **Solución**: 
  1. Limpiar caché del navegador
  2. Modo incógnito
  3. Esperar propagación (2-5 minutos)

## 📦 Backup del Proyecto

**Backup completo**: https://www.genspark.ai/api/files/s/amGxfpoX

Para restaurar:
```bash
wget https://www.genspark.ai/api/files/s/amGxfpoX
tar -xzf amGxfpoX
```

## 🎯 Estrategia Recomendada

1. **Usar Cloudflare Pages** como plataforma principal (más rápido, edge network)
2. **Mantener Vercel** como respaldo en caso de problemas
3. **Configurar GitHub Actions** para deployment automático

## 📞 Soporte

En caso de problemas persistentes:
- Verificar status de Cloudflare: https://www.cloudflarestatus.com/
- Verificar status de Vercel: https://www.vercel-status.com/
- Contactar soporte técnico de la plataforma correspondiente
