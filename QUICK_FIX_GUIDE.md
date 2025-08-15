# ⚡ Solução Rápida para Deploy no Vercel

## 🎯 Seu Problema Específico
```
"O Vercel está reclamando que não encontra a pasta dist/public"
```

## 🔧 Solução em 3 Passos

### Passo 1: Atualizar package.json
Adicione/modifique estes scripts no seu `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "vercel-build": "npm run build"
  }
}
```

### Passo 2: Configurar Vite
Crie/substitua o `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/public",  // ← Este é o ponto crucial!
    emptyOutDir: true,
  },
});
```

### Passo 3: Configurar Vercel
Crie `vercel.json` na raiz:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## ✅ Teste Local
Antes do deploy, teste:
```bash
npm install
npm run build
ls -la dist/public/
```

Você deve ver arquivos como `index.html`, `assets/`, etc.

## 🚀 Deploy no Vercel

### Método 1: Automático
Com o `vercel.json`, o deploy deve funcionar automaticamente.

### Método 2: Configuração Manual
No dashboard do Vercel:
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

## 🆘 Se Ainda Falhar

Verifique se você tem essa estrutura:
```
seu-projeto/
├── package.json          ← Com scripts corretos
├── vite.config.ts        ← Configurando outDir
├── vercel.json           ← Configuração do Vercel
├── src/                  ← Código fonte React
│   ├── App.tsx
│   └── main.tsx
└── index.html            ← Na raiz ou em public/
```

---
**Resultado**: Vercel encontrará `dist/public/` e fará o deploy corretamente!