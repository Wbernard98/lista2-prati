# Exercícios de Estruturas de Controle, Funções e Arrays em JavaScript

Este repositório contém a resolução de exercícios práticos focados em estruturas de controle avançadas, funções (incluindo recursão, debounce e memoization) e manipulação de arrays e objetos complexos em JavaScript.

## Como Rodar os Exercícios no VS Code

Para executar estes exercícios no Visual Studio Code (VS Code), siga os passos abaixo:

**Pré-requisitos:**

* **Node.js instalado:** Você precisará ter o Node.js instalado em sua máquina, pois alguns exercícios utilizam o módulo `prompt-sync` que é executado no ambiente Node.js. Você pode baixar e instalar o Node.js em [https://nodejs.org/](https://nodejs.org/).
* **Visual Studio Code (VS Code) instalado:** Caso ainda não tenha, baixe e instale o VS Code em [https://code.visualstudio.com/](https://code.visualstudio.com/).

**Passos:**

1.  **Clone o Repositório:**
    Se você ainda não clonou este repositório para sua máquina local, abra o terminal ou Git Bash e execute o seguinte comando, substituindo `https://github.com/Wbernard98/lista2-prati.git` pela URL do seu repositório:
    ```bash
    git clone [https://github.com/Wbernard98/lista2-prati.git](https://github.com/Wbernard98/lista2-prati.git)
    cd lista2-prati
    ```

2.  **Instalar o Módulo `prompt-sync`:**
    Alguns exercícios utilizam o módulo `prompt-sync` para interação com o usuário através do terminal. Para instalar este módulo, abra o terminal dentro do diretório do seu projeto (onde o arquivo `package.json` está, ou onde você clonou o repositório) e execute o seguinte comando:
    ```bash
    npm install prompt-sync
    ```
    ou
    ```bash
    yarn add prompt-sync
    ```
    Este comando irá baixar e instalar o módulo `prompt-sync` dentro da pasta `node_modules` do seu projeto.

3.  **Abrir os Arquivos no VS Code:**
    Abra o VS Code e vá em "Arquivo" (File) > "Abrir Pasta" (Open Folder) e selecione a pasta onde você clonou o repositório (`lista2-prati`).

4.  **Executar os Arquivos JavaScript:**
    Para executar um arquivo JavaScript específico (por exemplo, o arquivo com a solução do Jogo de Adivinhação), siga um destes métodos:

    * **Usando o Terminal Integrado do VS Code:**
        1.  Abra o arquivo `.js` que você deseja executar no VS Code.
        2.  Abra o terminal integrado do VS Code indo em "Terminal" > "Novo Terminal".
        3.  No terminal, navegue até o diretório onde o arquivo `.js` está localizado (se você não estiver lá por padrão).
        4.  Execute o arquivo usando o Node.js com o comando:
            ```bash
            node nome_do_arquivo.js
            ```
            Substitua `nome_do_arquivo.js` pelo nome real do arquivo que você quer executar (por exemplo, `adivinhacao.js`). Se o arquivo utilizar `prompt-sync`, você poderá interagir com o script diretamente no terminal.

    * **Usando a Extensão Code Runner (Opcional):**
        O VS Code possui uma extensão popular chamada "Code Runner" que facilita a execução de código.
        1.  Instale a extensão "Code Runner" no VS Code (vá em "Extensões" e procure por "Code Runner").
        2.  Após a instalação, abra o arquivo `.js` que você deseja executar.
        3.  Clique com o botão direito no editor de código e selecione "Run Code" ou clique no ícone de "play" (seta para a direita) que aparece no canto superior direito da janela do editor.
        4.  A saída do seu script será exibida na janela de "Output". **Note:** A extensão Code Runner pode ter limitações na interação com o `prompt-sync`. Se você precisar interagir com o script via terminal (inserir palpites, por exemplo), é recomendado usar o método do terminal integrado (`node nome_do_arquivo.js`).

## Estrutura dos Exercícios

O repositório está organizado da seguinte forma:

**Seção 1: Estruturas de Controle Avançadas**

* `validacao_data.js`: Contém a função `ehDataValida(dia, mes, ano)`.
* `jogo_adivinhacao.js`: Script do jogo de adivinhação.
* `palavras_unicas.js`: Script para extrair palavras únicas de uma string.

**Seção 2: Funções e Recursão**

* `fatorial_recursivo.js`: Implementação da função `fatorial(n)` recursiva.
* `debounce.js`: Implementação da função `debounce(fn, delay)`.
* `memoization.js`: Implementação da função `memoize(fn)`.

**Seção 3: Arrays e Objetos Complexos**

* `mapeamento_ordenacao.js`: Função para mapear e ordenar produtos por preço.
* `agrupamento_por_propriedade.js`: Função para agrupar vendas por cliente.
* `conversao_formatos.js`: Funções `paresParaObjeto(pares)` e `objetoParaPares(obj)`.

Sinta-se à vontade para explorar os arquivos e executar cada um deles para verificar a implementação das soluções.
