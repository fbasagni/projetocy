# Automação Front-End com Cypress – Projeto de Testes UI

Este repositório reúne um conjunto de testes automatizados desenvolvidos com Cypress para validar fluxos essenciais de uma aplicação web.  
Ele foi criado com foco em **boas práticas**, **organização**, **clareza** e **simulação real do comportamento do usuário**.

A proposta é demonstrar como estruturo testes de interface (UI) para garantir confiabilidade, repetibilidade e documentação clara para equipes técnicas e não técnicas.

---

## 1. Objetivo do Projeto

O propósito deste projeto é apresentar, de forma simples e didática:

- Como estruturar um projeto de automação front-end com Cypress.
- Como validar campos, fluxos e regras de negócio.
- Como utilizar dados fictícios com Faker.js.
- Como organizar a estrutura dos testes com boas práticas.
- Como integrar os testes a pipelines de CI (GitHub Actions).

O conteúdo reflete exatamente a forma como trabalho no dia a dia: organização, foco, clareza e validação real do comportamento do usuário.

---

## 2. Importância do Projeto

Este projeto demonstra princípios fundamentais para qualquer automação eficiente:

### Comunicação simples e objetiva
Os cenários são escritos de forma clara para facilitar o entendimento do que está sendo validado.

### Organização com boas práticas
A estrutura do Cypress segue o padrão recomendado pela ferramenta.

### Dados fictícios com Faker.js
Isso evita duplicação, melhora a confiabilidade e torna os testes mais dinâmicos.

### Execução contínua com GitHub Actions
O pipeline executa os testes automaticamente ensuring feedback rápido após cada push ou PR.

### Simulação real de uso
As validações seguem o fluxo do usuário final, garantindo precisão nos testes.

---

## 3. Tecnologias Utilizadas

- **Cypress** (E2E Testing)
- **JavaScript**
- **Node.js**
- **Faker.js** (geração de dados fictícios)
- **GitHub Actions** (CI/CD)

---

## 4. Estrutura do Projeto

```plaintext
projetocy/
 ├── cypress/
 │   ├── e2e/
 │   │   ├── cadastro.cy.js      # Testes de cadastro de usuário
 │   │   └── login.cy.js         # Testes de login e validação
 │   ├── fixtures/               # Massa de dados estática
 │   ├── support/
 │   │   ├── commands.js         # Comandos customizados
 │   │   └── e2e.js              # Configurações globais
 ├── .github/workflows/
 │   └── cypress-pipeline.yml    # Pipeline de execução automática
 ├── package.json
 ├── cypress.config.js
 └── README.md
```

## 5. Funcionalidades Automatizadas

Os testes validam pontos críticos da jornada de cadastro e login:

Validação de campos obrigatórios

Comportamentos de erro (e-mail inválido, senha fraca, campos vazios)

Cadastro bem-sucedido

Fluxo de login

Confirmação visual e estrutural dos elementos

Uso de Faker.js para dados dinâmicos

Execução automática com GitHub Actions
---

## 6. Instalação
Requisitos

- Node.js (v12+)
- Cypress (v13.4.1 ou superior)
- Google Chrome ou Firefox


Passos para Instalar e Executar

1. Clone o repositório:
```plaintext
git clone https://github.com/fbasagni/projetocy.git
cd projetocy

```

2. Instale as dependências:
```plaintext
npm install

```
   
3. Execute os testes:

Modo interativo (com navegador):
```plaintext
npx cypress open

```

Modo headless (CI/CD):
```plaintext
npx cypress run

```


---

## 7. Modificação dos Testes

Os cenários ficam na pasta:
```plaintext
cypress/e2e/

```

Você pode:

 - Criar novos arquivos .cy.js
 - Alterar steps existentes
 - Inserir dados via fixtures
 - Criar comandos no commands.js

---

## 8. Execução Automática com GitHub Actions

Este projeto já possui pipeline configurado:
```plaintext
.github/workflows/cypress-pipeline.yml

```

O pipeline executa os testes automaticamente a cada push ou pull request na branch principal.


---

## 9. Relatórios

Os relatórios do Cypress são exibidos diretamente no terminal durante a execução.

Caso integre com Cypress Dashboard:
 - Os resultados ficam disponíveis online
 - Gráficos e histórico de execuções podem ser consultados
 - Acompanhamento detalhado do comportamento dos testes


---


## 10. Considerações Finais

Este projeto representa uma visão prática de como organizo e desenvolvo automações front-end utilizando Cypress no dia a dia. Ele reúne pontos que considero fundamentais em qualquer trabalho de qualidade: cenários claros, estrutura bem definida, uso eficiente de dados dinâmicos e integração contínua funcionando de forma confiável.

A intenção aqui é demonstrar uma base sólida para automações UI, capaz de evoluir conforme novas necessidades surgirem.
