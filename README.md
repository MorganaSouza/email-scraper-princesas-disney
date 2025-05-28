

## 👑 Scraper de Princesas Disney
````markdown


Este projeto é um scraper desenvolvido em Node.js que coleta informações das princesas Disney a partir do site
[Legião dos Heróis](https://www.legiaodosherois.com.br/2021/princesas-disney-todas-ordem.html),
 incluindo **nome**, **idade**, **descrição** e **imagem**. Em seguida, envia essas
informações por e-mail de forma automatizada.

## 🚀 Funcionalidades

- 📄 Coleta de dados estruturados com `cheerio`
- 🌐 Requisições com `node-fetch`
- 📧 Envio de e-mails com `nodemailer`
- 🔒 Uso de variáveis de ambiente para segurança

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/scraper-princesas.git
   cd scraper-princesas
````

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com suas credenciais de e-mail:

   ```
   EMAIL_HOST=smtp.exemplo.com
   EMAIL_PORT=587
   EMAIL_USER=seuemail@exemplo.com
   EMAIL_PASS=sua_senha
   EMAIL_TO=destinatario@exemplo.com
   ```

## ▶️ Uso

Execute o scraper com:

```bash
node app.js
```

O script irá:

* Realizar o scraping da página das princesas Disney
* Compilar os dados
* Enviar por e-mail para o destinatário definido

## 🖼️ Exemplo de E-mail Gerado

* Nome da princesa
* Idade
* Imagem da personagem
* Descrição detalhada

##


> Imagem meramente ilustrativa

## 📄 Licença

MIT License © Morgana Souza




