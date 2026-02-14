🐍 Base de Conhecimento Python
Uma aplicação web interativa projetada para catalogar, filtrar e explorar o ecossistema de bibliotecas e frameworks Python. O projeto utiliza uma interface moderna com carregamento dinâmico de dados para facilitar a descoberta de ferramentas para Ciência de Dados, Web e IA.

🚀 Funcionalidades
Navegação por Categorias: Botões interativos que filtram instantaneamente as bibliotecas por área de atuação, como Machine Learning, NLP e Visualização.

Busca Global: Barra de pesquisa que realiza varredura em tempo real por nome ou descrição dentro da base de dados.

Interface Dinâmica: Os cards de conteúdo adaptam suas cores e bordas de acordo com a categoria selecionada para melhorar a identificação visual.

Dados Centralizados: Armazenamento de informações em formato JSON, permitindo fácil manutenção e expansão do catálogo.

Design Responsivo: Layout otimizado para diferentes dispositivos, de desktops a smartphones.

🛠 Tecnologias
HTML5: Estrutura semântica da aplicação.

CSS3: Estilização avançada com variáveis nativas, Flexbox e Grid Layout para garantir responsividade.

JavaScript (ES6+): Lógica para manipulação de DOM, filtragem de arrays e gestão de eventos.

Fetch API: Consumo assíncrona do arquivo de dados local.

📂 Estrutura do Projeto
index.html: Estrutura principal e pontos de montagem dos cards.

style.css: Definições visuais, cores do tema (dark mode) e regras de responsividade.

script.js: Lógica de carregamento de categorias, busca e renderização dos cards.

data.json: Base de dados contendo nomes, anos de lançamento, descrições e links oficiais das bibliotecas.

▶️ Como Executar
Clone ou baixe os arquivos do repositório.

Importante: Devido ao uso da Fetch API para carregar o arquivo JSON, o navegador pode bloquear a requisição se o arquivo for aberto diretamente (protocolo file://).

Abra o projeto utilizando um servidor local.

Sugestão: Use a extensão Live Server no VS Code ou o comando python -m http.server no terminal dentro da pasta do projeto.

Acesse localhost no seu navegador para interagir com a base.

## 📷 Preview

![Home](screenshots/Telainicial.png)
![Pesquisa](screenshots/Tela+Pesquisa.png)

👩‍💻 Autora
Fabiana Lancellotti
Transição de carreira para Data Analytics / BI
