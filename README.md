# Table Manager

O Table Manager é um projeto para gerenciamento de tabelas utilizando React e TypeScript.

## Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd table-manager
   ```
3. Instale as dependências utilizando npm ou yarn:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

  ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

Executa o aplicativo em modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizá-lo no navegador.

  ```bash
   npm run test
   # ou
   yarn test
   # ou
   pnpm test
   ```

Executa os testes unitários utilizando Jest.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite (Bundler)
- Jest (Framework de Testes)
- ESLint (Ferramenta de Linting)
- Prettier (Formatador de código)

# Table Manager - Documentação

## Visão Geral

O Table Manager é uma aplicação para gerenciamento de tabelas construída com React e TypeScript. Ele oferece funcionalidades para visualizar e editar tabelas de dados de forma intuitiva.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- `src/`: Contém o código-fonte da aplicação.
  - `components/`: Componentes React reutilizáveis.
  - `tests/`: Contém os testes unitários escritos com Jest.
  - `context/`: Contextos utilizados para manipulação de dados
  - `App.tsx`: Ponto de entrada da aplicação.

## Funcionalidades Principais

### 1. Editar Tabela

- Possibilita ao usuário editar os dados da tabela, incluindo adicionar e editar células.

### 2. Visualizar Tabela

- Oferece uma visualização clara e legível da tabela de dados.

## Como Utilizar

1. **Instalação**: Siga as instruções de instalação no README para configurar o ambiente de desenvolvimento.

2. **Execução**: Utilize o comando `npm run dev` ou `yarn dev` para iniciar a aplicação em modo de desenvolvimento.

3. **Interagir**: Abra a aplicação no navegador e utilize as funcionalidades fornecidas para editar e visualizar tabelas de dados.