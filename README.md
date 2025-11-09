
# banco-api-performance 🚀


Repositório de testes de performance para APIs utilizando JavaScript e K6.

## 📖 Introdução
Este projeto tem como objetivo realizar testes de performance em APIs REST, utilizando o K6 para simulação de carga e análise de desempenho. O repositório foi estruturado para facilitar a criação, organização e execução dos testes, além de permitir o acompanhamento dos resultados em tempo real e a exportação de relatórios customizados.

## 🛠️ Tecnologias Utilizadas
- ⚡ [K6](https://k6.io/) - Ferramenta de teste de carga open source
- 💻 JavaScript (ES6)

## 📁 Estrutura do Repositório
```
├── config/
│   └── config.local.json
├── fixtures/
│   └── postLogin.json
├── helpers/
│   └── authenticaton.js
├── tests/
│   ├── login.test.js
│   └── transferencias.test.js
├── utils/
│   └── variaveis.js
├── .gitignore
├── html-report.html
└── README.md
```

## 🎯 Objetivo de Cada Grupo de Arquivos
- **🧪 tests/**: Contém os scripts de teste de performance, cada arquivo representa um cenário ou endpoint a ser testado.
- **📦 fixtures/**: Armazena arquivos JSON com payloads de requisições, facilitando a reutilização e manutenção dos dados de teste.
- **🛠️ utils/**: Funções utilitárias, como leitura de variáveis de ambiente e configuração de URLs base.

## ⚙️ Modo de Instalação e Execução do Projeto

1. 📦 Instale o [K6](https://k6.io/docs/getting-started/installation/) em sua máquina.
2. ⬇️ Clone este repositório:
    ```bash
    git clone https://github.com/cassiopatrizzi/banco-api-performance.git
    cd banco-api-performance
    ```
3. 📝 Execute os testes de performance, alterando o arquivo `config.local.json` com a URL da API a ser testada:
    ```json
    {
      "baseUrl": "http://localhost:3000"
    }
    ```

### ▶️ Execute um teste

```bash
    k6 run tests/login.test.js
```

💡 Certifique-se de passar a variável de ambiente BASE_URL, caso não esteja usando um `config.local.json` ou uma abordagem de carregamento automático:

```bash
    k6 run tests/authentication/login.test.js -e BASE_URL=http://localhost:3000
```

### 📊 Execução com Relatório em Tempo Real e Exportação
Para acompanhar o relatório em tempo real via dashboard web e exportar o resultado em HTML, utilize as variáveis de ambiente do próprio K6:

- 📈 O dashboard estará disponível em tempo real durante a execução.
- 📝 O relatório será exportado para o arquivo `html-report.html` ao final do teste.

```bash
    K6_WEB_DASHBOARD=true \
    K6_WEB_DASHBOARD_EXPORT=html-report.html \
    k6 run tests/autenticacao/login.test.js -e BASE_URL=http://localhost:3000
```
---
