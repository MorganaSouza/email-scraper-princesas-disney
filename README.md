
---

# 👑 Scraper Princesas Disney

Este é um projeto em **Node.js** que faz scraping da página [Legião dos Heróis - Princesas Disney](https://www.legiaodosherois.com.br/2021/princesas-disney-todas-ordem.html), extraindo o **nome completo, idade, imagem e uma descrição detalhada** de cada princesa. Os dados coletados são enviados automaticamente por e-mail em formato HTML.

Ideal para quem deseja aprender sobre **web scraping, manipulação de HTML com Cheerio, envio de e-mails com Nodemailer e uso seguro de variáveis de ambiente**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Made%20with-Node.js-339933.svg?style=flat\&logo=node.js\&logoColor=white)](https://nodejs.org/)

## ✨ Funcionalidades

* 🔍 Extração de dados das princesas Disney diretamente do site
* 🖼️ Coleta e exibição das imagens oficiais
* 📧 Envio automático do conteúdo formatado por e-mail
* 🔒 Configuração via variáveis de ambiente para segurança das credenciais

## ⚙️ Tecnologias

* [Node.js](https://nodejs.org/)
* [node-fetch](https://www.npmjs.com/package/node-fetch) para requisições HTTP
* [Cheerio](https://cheerio.js.org/) para parsing e manipulação do HTML
* [Nodemailer](https://nodemailer.com/about/) para envio de e-mails
* [dotenv](https://www.npmjs.com/package/dotenv) para variáveis de ambiente

## 🚀 Como rodar o projeto

### Pré-requisitos

* Node.js instalado
* Conta de e-mail SMTP para envio (Gmail, Outlook, etc)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/scraper-princesas-disney.git
cd scraper-princesas-disney
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
EMAIL_HOST=smtp.seuprovedor.com
EMAIL_PORT=587
EMAIL_USER=seu-email@provedor.com
EMAIL_PASS=sua-senha
EMAIL_TO=destinatario@exemplo.com
```

> ⚠️ Não esqueça de incluir `.env` no seu `.gitignore`.

### 4. Execute o scraper

```bash
node app.js
```

O script fará o scraping, coletará os dados e enviará um e-mail com as informações formatadas.

## 👩‍💻 Desenvolvedora

**Morgana Souza**

---

## 👁️ English Version

# 👑 Disney Princess Scraper

A **Node.js** project that scrapes the [Legião dos Heróis Disney Princesses page](https://www.legiaodosherois.com.br/2021/princesas-disney-todas-ordem.html), extracting full name, age, image, and detailed description of each princess. The data is automatically sent via formatted email.

Perfect for learning **web scraping, HTML parsing with Cheerio, sending emails with Nodemailer, and environment variables management**.

## ✨ Features

* 🔍 Extracts Disney princess data from the website
* 🖼️ Retrieves official images
* 📧 Sends an automated email with formatted content
* 🔒 Uses environment variables for email credentials

## 🚀 How to run

Follow the steps above in the Portuguese section.

## 👩‍💻 Developer

**Morgana Souza**

---

Licensed under the [MIT License](https://opensource.org/licenses/MIT).

---


