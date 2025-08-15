# Guia de Deploy no Vercel - Projeto Vinicius Videomaker

Este projeto foi criado no Replit e precisa de ajustes específicos para funcionar no Vercel. Siga estes passos:

## 1. Estrutura do Projeto

Este é um projeto full-stack com:
- **Frontend**: React + Vite (pasta `client/`)
- **Backend**: Express.js (pasta `server/`)
- **Database**: PostgreSQL via Neon Database

⚠️ **IMPORTANTE**: Como o Vercel é focado em sites estáticos e serverless functions, você precisará fazer ajustes para o backend.

## 2. Opções de Deploy

### Opção A: Deploy apenas do Frontend (Recomendado)

Se você só precisa hospedar o site de portfólio sem funcionalidades do backend:

1. **Modifique o package.json** - Adicione este script:
```json
"scripts": {
  "vercel-build": "vite build"
}
```

2. **Configure o vercel.json** (já criado):
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    }
  ],
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "buildCommand": "npm run build"
}
```

### Opção B: Deploy Full-Stack (Mais Complexo)

Para manter o backend funcionando, você precisará:

1. **Separar o projeto**: Criar dois repositórios separados
   - Frontend: apenas a pasta `client/`
   - Backend: Deploy em serviços como Railway, Render, ou Heroku

2. **Atualizar URLs da API**: Modificar as chamadas da API no frontend

## 3. Configurações Necessárias

### Arquivos Criados para Deploy:

1. **vercel.json** - Configuração do Vercel (✅ Já criado)
2. **vite.config.prod.ts** - Vite config limpo para produção (✅ Já criado)
3. **package.prod.json** - Package.json simplificado (✅ Já criado)

### Opção 1: Deploy Rápido (Recomendado)
Use os arquivos criados para um deploy mais simples:

1. **Substitua o package.json atual** pelo conteúdo de `package.prod.json`
2. **Renomeie `vite.config.prod.ts`** para `vite.config.ts`
3. **Use o `vercel.json`** já configurado

### Opção 2: Editar package.json manualmente
Se preferir manter o arquivo original, adicione apenas:
```json
{
  "scripts": {
    "vercel-build": "vite build"
  }
}
```

### Variáveis de Ambiente no Vercel:
Se usar backend, configure no painel do Vercel:
- `DATABASE_URL`: URL do seu banco PostgreSQL
- `NODE_ENV`: production

## 4. Problemas Comuns e Soluções

### 1. Erro de Build
**Problema**: "Cannot resolve module"
**Solução**: Instale as dependências corretamente
```bash
npm install
```

### 2. Rotas não funcionam
**Problema**: Página em branco ou 404
**Solução**: O arquivo `vercel.json` já está configurado para SPA routing

### 3. APIs não funcionam
**Problema**: Chamadas para `/api/*` falham
**Solução**: Se não usar backend, remova as chamadas de API ou use dados estáticos

## 5. Passos para Deploy

1. **Prepare o projeto**:
   - Faça as modificações no package.json
   - Certifique-se que o arquivo vercel.json está na raiz
   - Teste o build local: `npm run build`

2. **No Vercel**:
   - Conecte seu repositório GitHub
   - Configure as variáveis de ambiente (se necessário)
   - Deploy automaticamente

3. **Teste o site**:
   - Verifique se todas as páginas carregam
   - Teste a navegação entre seções
   - Confirme se os links externos funcionam

## 6. Alternativas ao Vercel

Se tiver problemas com o Vercel, considere:
- **Netlify**: Similar ao Vercel, boa para sites estáticos
- **GitHub Pages**: Gratuito para repositórios públicos
- **Railway**: Melhor para projetos full-stack
- **Render**: Boa opção para projetos full-stack

## 7. Contato e Suporte

Se encontrar problemas:
1. Verifique os logs no dashboard do Vercel
2. Teste o build localmente primeiro
3. Considere deploy apenas do frontend se o backend não for crítico

---

**Status Atual**: Projeto configurado para deploy de frontend no Vercel
**Próximo Passo**: Editar package.json e fazer deploy