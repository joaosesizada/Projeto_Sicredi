const dados_carrosel_serviço = [
    { src: 'Serviços/dentista_img.jpg', empresa: 'OdontoPlus', ramo: 'Dentista' },
    { src: 'Serviços/mecanico_img.jpg', empresa: 'AutoMaster', ramo: 'Mecânica' },
    { src: 'Serviços/contabilidade_img.jpg', empresa: 'Elite Contabilidade', ramo: 'Contabilidade' },
    { src: 'Serviços/motorista_img.jpg', empresa: 'Conforto Drive', ramo: 'Motorista Particular' },
    { src: 'Serviços/advogado_img.jpg', empresa: 'Justiça Áurea', ramo: 'Advogado' },
    { src: 'Serviços/barbeiro_img.jpg', empresa: 'Clube do Corte', ramo: 'Barbeiro' },
    { src: 'Serviços/oftalmologista_img.jpg', empresa: 'Clínica Olhar Fino', ramo: 'Oftalmologista' },
    { src: 'Serviços/serviçõs_gerais_img.jpg', empresa: 'MasterServiços', ramo: 'Serviços Gerais' },
    { src: 'Serviços/trasportadora_img.jpg', empresa: 'TransOptima', ramo: 'Transportadora' }
];

const carrosel_item = [
    {
        imagem: document.getElementById('img_carossel_img1_servico'),
        idtitle: document.getElementById('box_networking_info_title1_servico'),
        idramo: document.getElementById('box_networking_servico1')
    },
    {
        imagem: document.getElementById('img_carossel_img2_servico'),
        idtitle: document.getElementById('box_networking_info_title2_servico'),
        idramo: document.getElementById('box_networking_servico2')
    },
    {
        imagem: document.getElementById('img_carossel_img3_servico'),
        idtitle: document.getElementById('box_networking_info_title3_servico'),
        idramo: document.getElementById('box_networking_servico3')
    },
    {
        imagem: document.getElementById('img_carossel_img4_servico'),
        idtitle: document.getElementById('box_networking_info_title4_servico'),
        idramo: document.getElementById('box_networking_servico4')
    }
];

let indice = 0;

function atualizarCarrossel(indice) {
    const dados = dados_carrosel_serviço;
    
    carrosel_item.forEach((item, i) => {
        const data = dados[(indice + i) % dados.length]; // Use módulo para circular
        requestAnimationFrame(() => {
            item.imagem.src = data.src;
            item.idtitle.textContent = data.empresa;
            item.idramo.textContent = data.ramo;
        });
    });
}

function btn_carrosel_mais(valor) {
    indice += valor;
    indice = (indice + dados_carrosel_serviço.length) % dados_carrosel_serviço.length;

    atualizarCarrossel(indice);

    const ant = document.getElementById('btn_carrosel_mais_ant');
    const pro = document.getElementById('btn_carrosel_mais_pro');

    ant.classList.toggle('hidden', indice === 0);
    pro.classList.toggle('hidden', indice >= dados_carrosel_serviço.length - carrosel_item.length);
}



const dados_carrosel_comercio = [
    { src: 'Comercio/concessionaria_comercio.jpg', empresa: 'Auto Center', ramo: 'Concessionária' },
    { src: 'Comercio/farmacia_comercio.jpg', empresa: 'Viva-Bem', ramo: 'Farmácia' },
    { src: 'Comercio/lojademoveis_comercio.jpg', empresa: 'Moveis São Pedro', ramo: 'Loja de Moveis' },
    { src: 'Comercio/supermercado_comercio.jpg', empresa: 'Super Atacado', ramo: 'Supermercado' },
    { src: 'Comercio/lojadecalçados_comercio.jpg', empresa: 'Andar Elegante', ramo: 'Loja de Calçados' },
    { src: 'Comercio/cafeteria_comercio.jpg', empresa: 'Café Aroma', ramo: 'Cafeteria' },
    { src: 'Comercio/lojaderoupas_comercio.jpg', empresa: 'Estilo Único', ramo: 'Loja de Roupas' },
    { src: 'Comercio/marmoraria_comercio.jpg', empresa: 'Pedras Nobres', ramo: 'Marmoraria' },
];
const carrosel_item_comercio = [
    {
        imagem: document.getElementById('img_carossel_img1_comercio'),
        idtitle: document.getElementById('box_networking_info_title1_comercio'),
        idramo: document.getElementById('box_networking_comercio1')
    },
    {
        imagem: document.getElementById('img_carossel_img2_comercio'),
        idtitle: document.getElementById('box_networking_info_title2_comercio'),
        idramo: document.getElementById('box_networking_comercio2')
    },
    {
        imagem: document.getElementById('img_carossel_img3_comercio'),
        idtitle: document.getElementById('box_networking_info_title3_comercio'),
        idramo: document.getElementById('box_networking_comercio3')
    },
    {
        imagem: document.getElementById('img_carossel_img4_comercio'),
        idtitle: document.getElementById('box_networking_info_title4_comercio'),
        idramo: document.getElementById('box_networking_comercio4')
    }
];

let indice_comercio = 0;

function atualizarCarrossel_comercio(indice_comercio) {
    const dados = dados_carrosel_comercio;
    
    carrosel_item_comercio.forEach((item, i) => {
        const data = dados[(indice_comercio + i) % dados.length]; 
        requestAnimationFrame(() => {
            item.imagem.src = data.src;
            item.idtitle.textContent = data.empresa;
            item.idramo.textContent = data.ramo;
        });
    });
}

function btn_carrosel_mais_comercio(valor) {
    indice_comercio += valor;
    indice_comercio = (indice_comercio + dados_carrosel_comercio.length) % dados_carrosel_comercio.length;

    atualizarCarrossel_comercio(indice_comercio);

    const ant = document.getElementById('btn_carrosel_mais_ant_comercio');
    const pro = document.getElementById('btn_carrosel_mais_pro_comercio');

    ant.classList.toggle('hidden', indice_comercio === 0);
    pro.classList.toggle('hidden', indice_comercio >= dados_carrosel_comercio.length - carrosel_item_comercio.length);
}

