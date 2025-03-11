
# Projeto: Teste Técnico - Soluções Dinâmicas com React

Este projeto implementa uma interface web interativa para solucionar problemas de lógica e cálculo apresentados em um teste técnico. A aplicação é desenvolvida em React, com foco em uma experiência de usuário (UX/UI) moderna e amigável.

---


## Prints das telas
![Home](https://github.com/user-attachments/assets/4d6ba7c7-081a-49a9-ac5b-2b2472401415)



![Sobre Mim](https://github.com/user-attachments/assets/2ebcf10a-b9a9-4a4f-87e5-954cfcabf415)



![Questão 1](https://github.com/user-attachments/assets/db730c99-be1c-4967-be98-b138b1dad965)



![Questão 5](https://github.com/user-attachments/assets/fbc6cade-7f0e-43f3-9208-86639fde025d)






## Funcionalidades

1. **Questão 1: Cálculo Incremental**
   - Usuário insere um valor de índice.
   - O programa calcula e exibe a soma incremental de `K` até o índice.
   - Validação de entrada: exibe mensagens de erro para valores inválidos.

2. **Questão 2: Sequência de Fibonacci**
   - Usuário insere um número.
   - O programa verifica se o número pertence à sequência de Fibonacci e exibe o resultado.

3. **Questão 3: Análise de Faturamento Diário**
   - Carrega dados de faturamento diário a partir de um JSON.
   - Exibe:
     - O menor valor de faturamento.
     - O maior valor de faturamento.
     - Número de dias com faturamento acima da média mensal.

4. **Questão 4: Representação Percentual por Estado**
   - Calcula e exibe a porcentagem de representação do faturamento mensal por estado.

5. **Questão 5: Inversão de String**
   - Permite que o usuário insira uma string.
   - Exibe a string invertida sem utilizar métodos prontos como `reverse()`.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces de usuário.
- **Styled Components**: Para estilização modular e customizada.
- **React Router**: Para navegação entre páginas.
- **Axios**: Para manipulação de dados JSON.
- **React Icons**: Para uma interface mais visual.

---

## Requisitos do Sistema

- **Node.js**: Versão 14 ou superior.
- **NPM ou Yarn**: Para gerenciamento de dependências.

---

## Instruções para Configuração

### 1. Clonar o Repositório
```bash
git clone https://github.com/seuusuario/teste-tecnico-react.git
cd teste-tecnico-react
```

### 2. Instalar Dependências
```bash
npm install
# ou
yarn install
```

### 3. Executar o Projeto
```bash
npm start
# ou
yarn start
```

A aplicação estará disponível no navegador em [http://localhost:3000](http://localhost:3000).

---

## Estrutura do Projeto

```
src/
|-- components/
|   |-- Header.js
|   |-- Footer.js
|   |-- Card.js
|-- pages/
|   |-- Home.js
|   |-- Question1.js
|   |-- Question2.js
|   |-- Question3.js
|   |-- Question4.js
|   |-- Question5.js
|-- styles/
|   |-- GlobalStyles.js
|-- data/
|   |-- faturamento.json
|-- App.js
```

---

## Funcionalidades Detalhadas

### Questão 1: Cálculo Incremental
- Permite inserir o valor de índice (ex.: 13).
- Exibe o resultado da soma incremental (ex.: 91).
- Trata entradas inválidas com mensagens de erro amigáveis.

### Questão 2: Fibonacci
- Verifica se o número informado pertence à sequência de Fibonacci.
- Exemplo: Entrada `21` -> "Pertence à sequência".

### Questão 3: Faturamento Diário
- Calcula e exibe:
  - O menor e o maior faturamento.
  - Dias com faturamento acima da média mensal.
- Ignora dias com faturamento zerado.

### Questão 4: Percentual por Estado
- Exibe o percentual de contribuição de cada estado no faturamento mensal total.

### Questão 5: Inversão de String
- Permite inserir uma string e exibe a versão invertida.
- Implementado sem métodos prontos de inversão.

---

## Link de visualização do projeto
https://rogeriojr.github.io/teste-frontend-target

---

## Melhoria na Experiência de Usuário (UX/UI)

- **Design Responsivo**: Funciona bem em dispositivos móveis e desktops.
- **Feedback Visual**: Mensagens claras de erro ou sucesso.
- **Estilização Moderna**: Utilizando cores agradáveis e tipografia legível.

---

## Contato
Para dúvidas ou sugestões:
- **E-mail**: rogeriojr1100@gmail.com
- **GitHub**: [rogeriojr](https://github.com/rogeriojr)

**Desenvolvido com ❤️ para o teste técnico!**
