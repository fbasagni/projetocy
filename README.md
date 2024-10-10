# Projeto de Automação Front-End com Cypress


Este projeto tem como objetivo automatizar testes de interface de usuário (UI) utilizando o Cypress, proporcionando uma abordagem prática para a criação de testes automatizados para aplicações web.

## 📝 Informações

Principais funcionalidades abordadas:

-  Validação de campos de formulário (nome, e-mail, senha).
-  Geração automática de dados fictícios para teste.
-  Fluxos de sucesso e falha de cadastro de usuários.
-  Execução contínua de testes com GitHub Actions.


##  💻 Tecnologias Utilizadas

- Cypress: Framework de teste end-to-end.
- JavaScript: Linguagem de programação utilizada nos testes.
- Faker.js: Biblioteca para gerar dados fictícios durante os testes.
- GitHub Actions: Integração contínua para execução dos testes automatizados.

##   💾 Instalação

### Requisitos;

- Node.js (v12 ou superior)
- Cypress (v13.4.1 ou superior)
- Navegador Google Chrome ou Firefox

### Passos de Instalação

Clone o repositório:

bash
Copiar código
git clone https://github.com/fbasagni/projetocy.git
cd projetocy
Instale as dependências:


1. **Clone o repositório:**

   ```bash
      git clone https://github.com/fbasagni/projetocy.git
      cd projetocy


2. **Instale as dependências:**

   ```bash
      npm install



3. **Configure as variáveis de ambiente (opcional)**

   ```bash
      CYPRESS_RECORD_KEY=your_dashboard_key


##  🚀 Uso

Executando os testes localmente:

1. **Para rodar os testes no navegador:**

   ```bash
      npx cypress open


2. **Para rodar os testes em modo headless:**

   ```bash
      npx cypress run



### Modificação dos testes:

Os testes estão localizados na pasta cypress/e2e. Você pode modificá-los ou adicionar novos casos de teste conforme necessário.

### Geração de Dados Fictícios:

A biblioteca Faker.js é utilizada para gerar dados fictícios (como nome, e-mail e senha) nos cenários de teste. Isso ajuda a evitar a duplicação de dados de teste.

### Execução Automática com GitHub Actions:

O projeto já está configurado com GitHub Actions para executar os testes automaticamente em cada push ou pull request na branch master. O arquivo de configuração do workflow está localizado em .github/workflows/cypress-pipeline.yml.



##  📊 Relatórios
Os relatórios de teste são gerados automaticamente após a execução dos testes. Para visualizar o resultado de cada execução, verifique o relatório gerado pelo Cypress Dashboard (se configurado) ou a saída no terminal.
