require('dotenv').config();
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

const url = 'https://www.legiaodosherois.com.br/2021/princesas-disney-todas-ordem.html';

// Função que faz o scraping das princesas Disney
async function fetchCharacters() {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const personagens = [];

        $('h3 > b').each(function () {
            const nomeCompleto = $(this).text().trim(); // ex: "1 – Branca de Neve"

            // Pegando o <p> anterior com imagem
            const pAnterior = $(this).parent().prev('p');
            const imgElement = pAnterior.find('img');

            let imagem = null;
            if (imgElement.length) {
                const dataSrcset = imgElement.attr('data-srcset');
                const srcset = imgElement.attr('srcset');
                const src = imgElement.attr('src');

                if (dataSrcset) {
                    imagem = dataSrcset.split(',').pop().trim().split(' ')[0]; // melhor qualidade
                } else if (srcset) {
                    imagem = srcset.split(',').pop().trim().split(' ')[0];
                } else {
                    imagem = src;
                }
            }

            // Idade está no <p> seguinte
            const idade = $(this).parent().next('p').text().replace('Idade:', '').trim();

            // Descrição: concatena todos os <p> seguintes até o próximo <h3>
            let descricao = '';
            const nextElements = $(this).parent().nextAll();

            for (let i = 0; i < nextElements.length; i++) {
                const el = nextElements.eq(i);
                if (el.is('h3')) break;
                if (el.is('p')) {
                    descricao += el.text().trim() + '\n\n';
                }
            }
            descricao = descricao.trim();

            if (nomeCompleto && imagem && idade && descricao) {
                personagens.push({
                    nome: nomeCompleto,
                    idade,
                    imagem,
                    descricao
                });
            }
        });

        return personagens;
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
        return [];
    }
}

// Configura o transportador do nodemailer usando variáveis de ambiente
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Função para enviar o email formatado com os personagens
async function sendEmail(personagens) {
    const htmlContent = personagens.map(p => `
        <h3>${p.nome} (Idade: ${p.idade})</h3>
        <img src="${p.imagem}" alt="${p.nome}" style="max-width:200px; display:block; margin-bottom:10px;" />
        <p>${p.descricao.replace(/\n/g, '<br>')}</p>
        <hr/>
    `).join('');

    try {
        const info = await transporter.sendMail({
            from: `"Scraper Princesas Disney" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || 'testeanaliseeprojetos@gmail.com',
            subject: 'Personagens Princesas Disney',
            html: htmlContent,
        });

        console.log('E-mail enviado: %s', info.messageId);
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
    }
}

// Executa o fluxo principal
(async () => {
    const personagens = await fetchCharacters();

    if (personagens.length > 0) {
        await sendEmail(personagens);
    } else {
        console.log('Nenhum personagem encontrado.');
    }
})();
