#!/bin/bash

# Script para preparar o projeto para deploy no Vercel
# Execute: chmod +x prepare-for-vercel.sh && ./prepare-for-vercel.sh

echo "🚀 Preparando projeto para deploy no Vercel..."

# Backup dos arquivos originais
echo "📋 Fazendo backup dos arquivos originais..."
cp package.json package.original.json 2>/dev/null || echo "package.json não encontrado"
cp vite.config.ts vite.config.original.ts 2>/dev/null || echo "vite.config.ts não encontrado"
cp tsconfig.json tsconfig.original.json 2>/dev/null || echo "tsconfig.json não encontrado"

# Aplicar configurações de produção
echo "🔄 Aplicando configurações de produção..."
cp package.prod.json package.json
cp vite.config.prod.ts vite.config.ts
cp tsconfig.prod.json tsconfig.json
cp tsconfig.node.prod.json tsconfig.node.json

# Criar .env exemplo se não existir
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env..."
    echo "NODE_ENV=production" > .env
fi

# Limpar cache e reinstalar dependências
echo "🧹 Limpando cache e reinstalando dependências..."
rm -rf node_modules package-lock.json .vite
npm install

# Verificar estrutura de diretórios
echo "🔍 Verificando estrutura do projeto..."
if [ ! -d "client" ]; then
    echo "⚠️  Pasta 'client' não encontrada. Ajustando configuração..."
    sed -i 's|client/src|src|g' vite.config.ts
    sed -i 's|"./client/src/\*"|"./src/*"|g' tsconfig.json
fi

# Testar build
echo "🔨 Testando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build bem-sucedido! Projeto pronto para deploy no Vercel."
    echo ""
    echo "📁 Arquivos criados na pasta 'dist/public/'"
    ls -la dist/public/ 2>/dev/null || ls -la dist/ 2>/dev/null
    echo ""
    echo "Próximos passos:"
    echo "1. Commit e push para seu repositório GitHub"
    echo "2. No Vercel, configure:"
    echo "   - Build Command: npm run build"
    echo "   - Output Directory: dist/public"
    echo "   - Install Command: npm install"
    echo "3. Deploy será automático"
    echo ""
    echo "Para reverter mudanças:"
    echo "cp package.original.json package.json"
    echo "cp vite.config.original.ts vite.config.ts"
    echo "cp tsconfig.original.json tsconfig.json"
else
    echo "❌ Erro no build. Verifique os logs acima."
    echo "Revertendo mudanças..."
    cp package.original.json package.json 2>/dev/null
    cp vite.config.original.ts vite.config.ts 2>/dev/null  
    cp tsconfig.original.json tsconfig.json 2>/dev/null
fi