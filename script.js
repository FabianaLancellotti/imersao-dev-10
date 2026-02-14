const cardContainer = document.querySelector(".card-container");
const categoriasGrid = document.getElementById("categorias-grid");

// Mapeamento de quais bibliotecas pertencem a quais categorias
const categoriasMap = {
    "Manipulação de Dados e Estatística": { libs: ["Numpy", "Pandas", "SciPy", "Statsmodels"], cor: "#2b5b84" },
    "Visualização de Dados e Dashboards": { libs: ["Matplotlib", "Seaborn", "Plotly", "Bokeh", "Pydot"], cor: "#8a9b1c" },
    "Machine Learning": { libs: ["Scikit-learn", "XGBoost", "CatBoost", "PyCaret", "Eli5", "PyBrain"], cor: "#ba3458" },
    "Deep Learning": { libs: ["TensorFlow", "Keras", "Elephas", "PyTorch", "Theano"], cor: "#092e20" },
    "Processamento de Linguagem Natural": { libs: ["SpaCy", "NLTK", "Gensim"], cor: "#009933" },
    "Data e Web Scraping": { libs: ["Beautiful Soup"], cor: "#4b8bbe"},
    "Data App e Banco de Dados": { libs: ["Streamlit", "SQLAlchemy"], cor: "#ff6600" },
    "Frameworks": { libs: ["Django", "Flask", "Caffe2", "Chainer", "Dash", "LightGBM", "Scrapy"], cor: "#ff4b4b" } 
};

// Função para inicializar os botões na tela
function carregarCategorias() {
    Object.keys(categoriasMap).forEach(cat => { 
        let btn = document.createElement("button");
        btn.classList.add("btn-categoria");
        btn.innerText = cat;
        // Aplicando a cor específica do mapeamento
        btn.style.backgroundColor = categoriasMap[cat].cor;
        btn.onclick = () => filtrarPorCategoria(cat);
        categoriasGrid.appendChild(btn);
    });
}

async function filtrarPorCategoria(categoria) {
    let resposta = await fetch("data.json");
    let dados = await resposta.json();
    
    // Filtra comparando com a lista 'libs' do novo objeto
    let filtrados = dados.filter(dado => categoriasMap[categoria].libs.includes(dado.nome));
    
    renderizarCards(filtrados, categoriasMap[categoria].cor);
    cardContainer.scrollIntoView({ behavior: 'smooth' });
}

function renderizarCards(lista, corBorda = "#ddd") {
    cardContainer.innerHTML = "";
    lista.forEach(dado => {
        let article = document.createElement("article");
        article.classList.add("card");
        // Adiciona uma borda superior colorida baseada na categoria
        article.style.borderTop = `5px solid ${corBorda}`;
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p><strong>Lançamento:</strong> ${dado.ano}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank" style="background-color: ${corBorda}">Saiba Mais</a>
        `;
        cardContainer.appendChild(article);
    });
}

async function iniciarBusca() {
    let termo = document.getElementById("campo-busca").value.toLowerCase();
    cardContainer.innerHTML = "";

    let resposta = await fetch("data.json");
    let dados = await resposta.json();

    let resultados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termo) ||
        dado.descricao.toLowerCase().includes(termo)
    );

    if (resultados.length === 0) {
        cardContainer.innerHTML = "<p>Nenhum resultado encontrado</p>";
        return;
    }

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa a tela para novos resultados
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p><strong>Ano:</strong> ${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba Mais</a>
        `;
        cardContainer.appendChild(article); // Adiciona ao grid configurado no CSS
    }
}

function renderizarCards(lista) {
    cardContainer.innerHTML = ""; // Limpa antes de renderizar
    lista.forEach(dado => {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p><strong>Criado em:</strong> ${dado.ano}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba Mais</a>
        `;
        cardContainer.appendChild(article);
    });
}

// Inicializa os botões ao carregar a página
carregarCategorias();