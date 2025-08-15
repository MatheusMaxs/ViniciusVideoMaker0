#!/bin/bash

# Script para preparar o projeto para deploy no Vercel
# Execute: chmod +x prepare-for-vercel.sh && ./prepare-for-vercel.sh

echo "🚀 Preparando projeto para deploy no Vercel..."

# Backup do arquivo original
echo "📋 Fazendo backup dos arquivos originais..."
cp package.json package.original.json
cp vite.config.ts vite.config.original.ts

# Substituir pelos arquivos de produção
echo "🔄 Aplicando configurações de produção..."
cp package.prod.json package.json
cp vite.config.prod.ts vite.config.ts

# Limpar cache e reinstalar dependências
echo "🧹 Limpando cache e reinstalando dependências..."
rm -rf node_modules package-lock.json
npm install

# Testar build
echo "🔨 Testando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build bem-sucedido! Projeto pronto para deploy no Vercel."
    echo ""
    echo "Próximos passos:"
    echo "1. Commit e push para seu repositório GitHub"
    echo "2. Conecte o repositório no Vercel"
    echo "3. Deploy automático será feito"
    echo ""
    echo "Para reverter mudanças:"
    echo "cp package.original.json package.json"
    echo "cp vite.config.original.ts vite.config.ts"
else
    echo "❌ Erro no build. Verifique os logs acima."
    echo "Revertendo mudanças..."
    cp package.original.json package.json
    cp vite.config.original.ts vite.config.ts
fi