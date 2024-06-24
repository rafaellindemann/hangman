Para fazer o deploy do seu site Vite no GitHub Pages, você precisa seguir alguns passos para configurar e construir o projeto corretamente. Aqui estão os passos detalhados:

### Passo 1: Configurar o Projeto

1. **Adicionar o Repositório do GitHub como Origin**:
   Se você ainda não criou um repositório no GitHub, crie um repositório novo. No terminal, adicione o repositório remoto:

   ```bash
   git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
   ```

2. **Instalar o Plugin do Vite para GitHub Pages**:
   Instale o plugin `vite-plugin-gh-pages` para simplificar o processo de deploy.

   ```bash
   npm install vite-plugin-gh-pages --save-dev
   ```

3. **Configurar o `vite.config.js`**:
   Configure o `vite.config.js` para usar o plugin e definir o diretório base corretamente.

   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import { ghPages } from 'vite-plugin-gh-pages';

   export default defineConfig({
     plugins: [react(), ghPages()],
     base: '/REPOSITORY_NAME/', // Substitua por '/nome-do-repositorio/'
   });
   ```

### Passo 2: Configurar o Script de Deploy

1. **Adicionar Script de Deploy**:
   Adicione um script de deploy no seu `package.json`.

   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "vite build && gh-pages -d dist"
   }
   ```

### Passo 3: Realizar a Build e Deploy

1. **Fazer a Build do Projeto**:
   Execute o comando de build para preparar os arquivos para o deploy.

   ```bash
   npm run build
   ```

2. **Deploy para o GitHub Pages**:
   Execute o comando de deploy para enviar os arquivos para o GitHub Pages.

   ```bash
   npm run deploy
   ```

### Passo 4: Configurar o GitHub Pages

1. **Ir para as Configurações do Repositório no GitHub**:
   No GitHub, vá para a página do repositório, clique em "Settings" (Configurações), depois em "Pages" no menu lateral.

2. **Selecionar a Fonte do GitHub Pages**:
   Em "Source" (Fonte), selecione a branch `gh-pages` e a pasta `root`. Isso dirá ao GitHub para usar o conteúdo da branch `gh-pages` para servir o site.

3. **Salvar**:
   Clique em "Save" (Salvar).

Após alguns minutos, seu site deve estar disponível no GitHub Pages no endereço `https://USERNAME.github.io/REPOSITORY_NAME/`.

### Exemplos

Aqui está um exemplo completo de `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/REPOSITORY_NAME/', // Substitua por '/nome-do-repositorio/'
});
```

E um exemplo do `package.json`:

```json
{
  "name": "forca-react",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "vite build && gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^1.0.0",
    "vite": "^2.0.0",
    "vite-plugin-gh-pages": "^0.1.0"
  }
}
```

### Notas Finais

- Certifique-se de substituir `USERNAME` e `REPOSITORY_NAME` com seu nome de usuário do GitHub e o nome do repositório, respectivamente.
- Certifique-se de que seu repositório esteja inicializado e que você tenha adicionado e commitado todas as mudanças antes de rodar o comando `npm run deploy`.

