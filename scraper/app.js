const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'https://www.legiaodosherois.com.br/2021/princesas-disney-todas-ordem.html';

async function fetchCharacters() {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const personagens = [];

        // Para cada <h3> com <b>, que indica o nome + número
        $('h3 > b').each(function () {
            const nomeCompleto = $(this).text().trim();  // ex: "1 – Branca de Neve"

            // Imagem: buscar o <img> dentro do <p> anterior
            const imgElement = $(this).parent().prev('p').find('img');
            let imagem = null;

            if (imgElement.length > 0) {
                const dataSrcset = imgElement.attr('data-srcset');
                const srcset = imgElement.attr('srcset');
                const src = imgElement.attr('src');

                if (dataSrcset) {
                    imagem = dataSrcset.split(',')[0].split(' ')[0].trim();
                } else if (srcset) {
                    imagem = srcset.split(',')[0].split(' ')[0].trim();
                } else if (src) {
                    imagem = src.trim();
                }
            }

            // Idade: é o próximo <p> que tem <b>Idade:</b>
            const idade = $(this).parent().next('p').text().replace('Idade:', '').trim();

            // A descrição pode ser vários parágrafos seguintes até o próximo <h3>
            let descricao = '';
            const nextElements = $(this).parent().nextAll();

            for (let i = 0; i < nextElements.length; i++) {
                const el = nextElements.eq(i);
                if (el.is('h3')) break;

                // Pega apenas <p> que não têm <b> (para evitar "Idade:" e similares)
                if (el.is('p') && el.find('b').length === 0) {
                    descricao += el.text().trim() + '\n\n';
                }
            }

            descricao = descricao.trim();

            personagens.push({
                nome: nomeCompleto,
                idade,
                imagem,
                descricao
            });
        });

        return personagens;
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
        return [];
    }
}

fetchCharacters().then(chars => console.log(chars));
