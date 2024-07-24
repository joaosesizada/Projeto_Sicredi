function maisDetalhes(cardId, idbtn) {
    const card = document.getElementById(cardId);
    const meuBotao = document.getElementById(idbtn);
    const isExpandido = card.getAttribute('data-expandido') === 'true';

    if (isExpandido) {
        card.style.height = '60px'; 
        card.setAttribute('data-expandido', 'false');
        meuBotao.textContent = 'Ler mais';
    } else {
        card.style.height = 'auto';
        card.setAttribute('data-expandido', 'true');
        meuBotao.textContent = 'Ocultar'; 
    }
}
let Expandido_fundo = false
function maisFundos(fundoId) {
    const fundos = document.getElementById(fundoId)
    const btn = document.getElementById("mais_fundo")
    Expandido_fundo = !Expandido_fundo
    if (Expandido_fundo) {
        fundos.style.height = 'auto'
        btn.textContent = 'Ocultar Fundos'
    } else {
        fundos.style.height = '1600px'
        btn.textContent = 'Mostrar mais Fundos'
    }
}

let Expandido_Acao = false
function maisAcoes(acoesId) {
    const acoes = document.getElementById(acoesId)
    const btn = document.getElementById("mais_acao")
    Expandido_Acao = !Expandido_Acao
    if (Expandido_Acao) {
        acoes.style.height = 'auto'
        btn.textContent = 'Ocultar Ações'
    } else {
        acoes.style.height = '2650px'
        btn.textContent = 'Mostrar mais Ações'
    }
}

function vendas(srcpassado, title, rent_mes_atual, rent_mes_anterior, rent_12_meses, acao) {
    const risco_icon_venda = document.getElementById("risco_icon_venda");
    const base = document.querySelector(".base");
    const DOM_venda = document.querySelector(".venda");
    const DOM_title = document.querySelector(".title");
    const DOM_rent_mes_atual = document.querySelector("#rent_mes_atual");
    const DOM_rent_mes_anterior = document.querySelector("#rent_mes_anterior");
    const DOM_rent_12_meses = document.querySelector("#rent_12_meses");
    const DOM_valor = document.querySelector(".valor");
    const qtn_vendas = document.getElementById("qtn_vendas");
    const btn_comprar = document.querySelector(".btn-comprar");
    const vendas_close = document.getElementById("vendas_close");
    const btn_qtn_menos = document.getElementById("btn_qtn_menos");
    const btn_qtn_mais = document.getElementById("btn_qtn_mais");
<<<<<<< HEAD
    const box_transaction = document.querySelector(".box_transaction")
    const button_transaction = document.querySelector(".button_transaction")

    let valor_acao = acao
=======
>>>>>>> 84e30734b51953638627533f50009f5c0ac6f663
    let quantidade = parseInt(qtn_vendas.value) || 0;

    document.body.style.overflow = 'hidden';
    risco_icon_venda.src = srcpassado;
    base.style.opacity = '0.2';
    DOM_venda.style.display = 'block';
    DOM_title.innerHTML = `${title}`;
    DOM_rent_mes_atual.innerHTML = `Mês Atual: ${rent_mes_atual}`;
    DOM_rent_mes_anterior.innerHTML = `Mês Anterior: ${rent_mes_anterior}`;
    DOM_rent_12_meses.innerHTML = `12 Meses: ${rent_12_meses}`;
    DOM_valor.innerHTML = `R$${acao}`;

    function atualizarValorTotal() {
<<<<<<< HEAD
        const valor_total = (parseFloat(valor_acao) * quantidade).toFixed(2);
=======
        const valor_total = (parseFloat(acao) * quantidade).toFixed(2);
>>>>>>> 84e30734b51953638627533f50009f5c0ac6f663
        DOM_valor.innerHTML = `R$${valor_total}`;
    }

    qtn_vendas.addEventListener('input', function() {
        quantidade = parseInt(qtn_vendas.value) || 0;
        atualizarValorTotal();
    });

    btn_comprar.addEventListener("click", function() {
        if (quantidade <= 0) {
            window.alert('Insira um valor válido');
        } else {
            DOM_venda.style.display = 'none';
<<<<<<< HEAD
            quantidade = 1;
            qtn_vendas.value = 1
            box_transaction.style.display = 'block';
        }
    });
    button_transaction.addEventListener("click", function() {
        box_transaction.style.display = 'none';
        base.style.opacity = '1';
        document.body.style.overflow = 'auto';
    })
=======
            base.style.opacity = '1';
            quantidade = 1;
            qtn_vendas.value = 1
            document.body.style.overflow = 'auto';
        }
    });
>>>>>>> 84e30734b51953638627533f50009f5c0ac6f663

    vendas_close.addEventListener("click", function() {
        DOM_venda.style.display = 'none';
        base.style.opacity = '1';
        quantidade = 1
        qtn_vendas.value = 1
        document.body.style.overflow = 'auto';
    });

    btn_qtn_menos.addEventListener('click', function() {
        if (quantidade > 0) {
            quantidade--;
            qtn_vendas.value = quantidade;
            atualizarValorTotal();
            btn_qtn_menos.disabled = quantidade === 0;
        }
    });

    btn_qtn_mais.addEventListener('click', function() {
        quantidade++;
        qtn_vendas.value = quantidade;
        atualizarValorTotal();
        btn_qtn_menos.disabled = false;
    });

    btn_qtn_menos.disabled = quantidade === 0;
}

function vendas_cripto(srcpassado, title, abreve, value, rent) {
    const DOM_venda = document.querySelector(".venda_cripto");
<<<<<<< HEAD
    const DOM_valor = document.getElementById("valor_cripto");
    const base = document.querySelector(".base");
    const btn_comprar = document.querySelector(".btn-comprar-cripto");
    const qtn_vendas = document.getElementById("qtn_vendas_cripto");
    const venda_cripto_title = document.getElementById("venda_cripto_title");
    const venda_cripto_abreve = document.getElementById("venda_cripto_abreve");
    const venda_cripto_value = document.getElementById("venda_cripto_value");
    const venda_cripto_rent = document.getElementById("venda_cripto_rent");
    const venda_cripto_icon = document.getElementById("venda_cripto_icon");
    const vendas_close = document.getElementById("vendas_close_cripto");
    const btn_qtn_menos_cripto = document.getElementById("btn_qtn_menos_cripto");
    const btn_qtn_mais_cripto = document.getElementById("btn_qtn_mais_cripto");
    const box_transaction = document.querySelector(".box_transaction");
    const button_transaction = document.querySelector(".button_transaction");

    // Remover caracteres não numéricos e converter para número
    let filteredData = value.replace(/[^0-9,]/g, '').replace(',', '.');
    let valor_acao = parseFloat(filteredData);
    let quantidade = parseInt(qtn_vendas.value) || 1;
=======
    const base = document.querySelector(".base");
    const qtn_vendas = document.getElementById("qtn_vendas");
    const venda_cripto_title = document.getElementById("venda_cripto_title")
    const venda_cripto_abreve = document.getElementById("venda_cripto_abreve")
    const venda_cripto_value = document.getElementById("venda_cripto_value")
    const venda_cripto_rent = document.getElementById("venda_cripto_rent")
    const venda_cripto_icon = document.getElementById("venda_cripto_icon")
    const vendas_close = document.getElementById("vendas_close_cripto");
    let quantidade = parseInt(qtn_vendas.value) || 0;
>>>>>>> 84e30734b51953638627533f50009f5c0ac6f663

    document.body.style.overflow = 'hidden';
    base.style.opacity = '0.2';
    DOM_venda.style.display = 'block';
    venda_cripto_icon.src = srcpassado;
<<<<<<< HEAD
    venda_cripto_title.innerHTML = title;
    venda_cripto_abreve.innerHTML = abreve;
    venda_cripto_value.innerHTML = `R$ ${value}`;
    venda_cripto_rent.innerHTML = rent;

    function atualizarValorTotal() {
      const valor_total = (valor_acao * quantidade).toFixed(2);
      const valor_total_formatado = parseFloat(valor_total).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
      DOM_valor.innerHTML = `${valor_total_formatado}`;
    }

    atualizarValorTotal();

    qtn_vendas.addEventListener('input', function() {
      quantidade = parseInt(qtn_vendas.value) || 0;
      atualizarValorTotal();
    });

    btn_qtn_menos_cripto.addEventListener("click", function() {
      if (quantidade > 1) {
        qtn_vendas.value = --quantidade;
        atualizarValorTotal();
      }
    });

    btn_qtn_mais_cripto.addEventListener("click", function() {
      qtn_vendas.value = ++quantidade;
      atualizarValorTotal();
    });

    vendas_close.addEventListener("click", function() {
      DOM_venda.style.display = 'none';
      base.style.opacity = '1';
      quantidade = 1;
      qtn_vendas.value = 1;
      document.body.style.overflow = 'auto';
    });

    btn_comprar.addEventListener("click", function() {
      if (quantidade <= 0) {
        window.alert('Insira um valor válido');
      } else {
        DOM_venda.style.display = 'none';
        quantidade = 1;
        qtn_vendas.value = 1;
        box_transaction.style.display = 'block';
      }
    });
    button_transaction.addEventListener("click", function() {
        box_transaction.style.display = 'none';
        base.style.opacity = '1';
        document.body.style.overflow = 'auto';
    })

  }
=======
    venda_cripto_title.innerHTML = title
    venda_cripto_abreve.innerHTML = abreve
    venda_cripto_value.innerHTML = `R$${value}`
    venda_cripto_rent.innerHTML = rent
    console.log("clicadododo")

    vendas_close.addEventListener("click", function() {
        DOM_venda.style.display = 'none';
        base.style.opacity = '1';
        quantidade = 1
        qtn_vendas.value = 1
        document.body.style.overflow = 'auto';
    });
}
>>>>>>> 84e30734b51953638627533f50009f5c0ac6f663
