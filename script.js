alert("Olá, seja bem vindo! \n Por aqui você vai gerenciar o funcionamento do seu hotel!");
var nome_Hotel = prompt("Para começar me fale o nome do seu hotel");
var nome_Fun = prompt("Agora me fale o seu nome");

senha();

function inicio() {
    alert("Bem vindo " + nome_Fun + " aproveite os serviços desse programa para o seu hotel: " + nome_Hotel);

    var opcoes = parseInt(prompt("Escolha um serviço do " + nome_Hotel + "\n 1 - Reserva de quartos \n 2 - Cadastro de hospedes \n 3 - Serviço de hospedagem \n 4 - Reserva para eventos \n 5 - Serviço para Buffet \n 6 - Serviço para o auditório \n 7 - Reserva no restaurante \n 8 - Serviço de abastecimento \n 9 - Serviço para manutenção \n 10 - Sair"));

    switch (opcoes) {
        case 1:
            reserva_Quartos();
        case 2:
            hospedes_Cadastro();
        case 3:
            hospedagem_();
        case 4:
            hotel_Eventos();
        case 5:
            hotel_Buffet();
        case 6:
            hotel_Auditorio();
        case 7:
            restaurante_Hotel();
        case 8:
            abastecimento_Hotel();
        case 9:
            manutencao_Hotel();
        case 10:
            sair();
            break;
        default:
            erro();
    }
}

function senha() {
    var senha_A = parseInt(prompt(nome_Fun + ", por favor informe a sua senha de acesso"));

    if (senha_A === 2678) {
        alert("Acesso liberado");
    } else {
        alert("Acesso negado");
        senha();
    }

    inicio();
}

function reserva_Quartos() {
    var diaria = parseFloat(prompt("Digite o valor da diária: "));
    var dias = parseInt(prompt("Quantos dias ele vai ficar: "));
    var total = diaria * dias;

    if (diaria <= 0) {
        alert("Valor inválido " + nome_Fun);
        reserva_quartos();
    } else if (dias > 30) {
        alert("Essa quantidade não é permitida " + nome_Fun);
        reserva_quartos();
    } else if (dias === 0) {
        alert("Erro no valor");
        reserva_quartos();
    } else {
        var nome = prompt("Informe o nome da(o) hospede: ");
    }

    var resposta = prompt(nome_Fun + ", você confirma a hodedagem de " + nome + " por " + dias + " dias (S/N)");

    if (resposta === "S") {
        alert(nome_Fun + ", reserva foi efetuda para " + nome + ", no valor de: R$" + total);
    } else {
        alert(nome_Fun + ", reserva não foi efetuada");
    }

    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        reserva_Quartos();
    }
}

function hospedes_Cadastro() {
    var gratuidade = 0;
    var meia = 0;
    var total = 0;

    do {
        var valor_padrao = parseFloat(prompt("Qual o valor padrão da diária: "));
        var valor_Meia = valor_padrao / 2;
        var nome_hospedes = prompt("Cadastre os hospedes:  ");
        var idade = parseInt(prompt("Informe a idade do hospede: "));

        if (idade <= 6) {
            alert(nome_hospedes + ", possui gratuidade");
            gratuidade++;
        } else if (idade >= 60) {
            alert(nome_hospedes + ", paga meia");
            meia++;
            total += valor_Meia
        } else if (valor_padrao) {
            total += valor_padrao;
        }

        var resposta_2 = prompt("\n Digite (S): Para cadastrar mais hospedes ou \n Digite, (PARE): Para encerrar o programa.");

    } while (resposta_2 === "S");

    alert(nome_Fun + ". Tivemos no total " + gratuidade + "hospedagem gratuita \n" + "e tivemos no total  " + meia + " meia hospedagem .\n" + "Com isso lucramos no total: R$ " + total + " em hospedagens");
   
    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        hospedes_Cadastro();
    }
}


function hospedagem_() {
    var escolha = parseInt(prompt("Selecione uma opção\n 1 - Cadastrar \n 2 - Pesquisar \n 3 - Listar \n 4 - Erro \n 5 - Voltar para o inicio "));

    switch (escolha) {
        case 1:
            cadastrar_Hospedes();
        case 2:
            hospedes_Pesquisa();
        case 3:
            hospedagem_Lista();
        case 4:
            inicio();
            break;
        default:
            erro();
    }
}

var listaHospedes = [];

function cadastrar_Hospedes() {
    if (listaHospedes.length >= 15) {
        alert("Limite de cadastros atingidos");
    } else {
        var hotel_hospedes = prompt("Informe o nome da(o) hóspede: ");

        listaHospedes.push(hotel_hospedes);
        alert(nome_Fun + ", o hospede " + hotel_hospedes + " foi cadastrada(o) com sucesso");
    }

    hospedagem_();
}

function hospedes_Pesquisa() {
    var hotel_hospedes = prompt("Pesquie o nome da(o) hospede: ");

    if (listaHospedes.includes(hotel_hospedes)) {
        alert(nome_Fun + ", o hopede" + hotel_hospedes + ", foi encontrada(o) no sistema");
    } else {
        alert(nome_Fun + ", o hospede" + hotel_hospedes + ", não foi encontrada(o) no sistema");
    }

    hospedagem_();
}

function hospedagem_Lista() {
    for (var i = 0; i < listaHospedes.length; i++) {
        alert(nome_Fun + "o hospede " + listaHospedes[i] + " ocupa a posição: " + i);
    }
}

function hospedagem_Erro() {
    alert(nome_Fun + ", por gentileza informe numeros de 1 a 4");
    hospedagem_();
}


function hotel_Eventos() {
    var duracao = parseFloat(prompt("Qual é a duração deste evento: "));
    var preco_Garcons = 10.50;
    var garcons = parseInt(prompt("Você precisa de quantos garçons ?"));
    var custo = duracao * preco_Garcons;
    var custo_Total = custo * garcons;

    alert(nome_Fun + ", o custo total do evento é R$" + custo_Total);
    var resposta_2 = prompt(nome_Fun + ", você confirma está reserva (S/N)");

    if (resposta_2 === "S") {
        alert(nome_Fun + ", à reserva  foi efetuada para o " + nome_Hotel + ", com sucesso !!");
    } else {
        alert(nome_Fun + ", à reserva não foi  efetuada para o " + nome_Hotel);
        hotel_Eventos();
    }

    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        hotel_Eventos();
    }
}

function hotel_Buffet() {
    var num_convidados = parseInt(prompt("Quantos convidados vão receber convites: "));
    var cafe_Quant = 0.2 * num_convidados;
    var agua_Quant = 0.5 * num_convidados;
    var salgado_Quant = 7 * num_convidados;
    var cafe_Custo = cafe_Quant * 0.80;
    var agua_Custo = agua_Quant * 0.40;
    var salgado_Custo = (salgado_Quant / 100) * 34;
    var custo_Comida = cafe_Custo + agua_Custo + salgado_Custo;
    var numero = custo_Comida;
    var opcoes = { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 };
    var custoComida = custo_Comida.toLocaleString("pt-BR", opcoes);

    if (num_convidados > 350) {
        alert("Numero de convidados acima do limite");
        hotel_Buffet();
    }

    alert("Será necessário para o buffet, " + cafe_Quant + " litros de café, " + agua_Quant + " litros de agua, e " + salgado_Quant + " salgados, para servir os " + num_convidados + " convidados do buffet");
    alert("O custo do buffet é R$" + custoComida);

    var confirma = prompt( nome_Fun + ", deseja efetuar à reserva? (S/N)");

    if (confirma === "S") {
        alert(nome_Fun + ", o buffet foi contratado !!");
    } else {
        alert(nome_Fun + ", o bufett foi recusado");
        hotel_Buffet();
    }

    var contratar = prompt(nome_Fun + ", você quer contratar garçons para esse buffet? (S/N)");

    if (contratar === "S") {
        hotel_Eventos();
    } else

    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        hotel_Buffet();
    }
}

function hotel_Auditorio() {
    var convidados_Num = parseInt(prompt("Quantos convidados vem para o auditório: "));
    var laranja_Aud = 150;
    var colorado_Aud = 350;
    var cadeira_Adi = convidados_Num - laranja_Aud;

    if (convidados_Num > 350) {
        alert("Numero de convidade excede o limite do auditório");
        hotel_Auditorio();
    } else if (convidados_Num <= 150) {
        alert("Utilize o auditório laranja");
    } else if (convidados_Num <= 220) {
        alert("Utilize o auditório laranja e inclua mais " + cadeira_Adi + " cadeiras adicionais");
    } else if (convidados_Num <= 350) {
        alert("Utilize o auditório colorado");
    }

    var confirma_2 = prompt(nome_Fun + ", você gostaria de efetuar a reserva? (S/N)");

    if (confirma_2 === "S") {
        alert(nome_Fun + ", à reserva foi efetuada");
    } else {
        alert(nome_Fun + ", à reserva não foi efetuada");
        hotel_Auditorio();
    }

    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        hotel_Auditorio();
    }
}

function restaurante_Hotel() {
    var dia = prompt("Qual o dia do seu evento?");
    var hora = parseInt(prompt("Qual a hora do seu evento?"));
    var empresa = prompt("Qual o nome da sua empresa");

    if (dia == "segunda" && hora >= 7 && hora <= 23) {
        alert(nome_Fun + ", o restaurante foi reservado para " + empresa + " na " + dia + " para às " + hora + "hs");
    }
    else if (dia == "terça" && hora >= 7 && hora <= 23) {
        alert(nome_Fun + ", o restaurante foi reservado para " + empresa + " na " + dia + " para às " + hora + "hs");
    }
    else if (dia == "quarta" && hora >= 7 && hora <= 23) {
        alert(nome_Fun + ", o restaurante foi reservado para " + empresa + " na " + dia + " para às " + hora + "hs");
    }
    else if (dia == "quinta" && hora >= 7 && hora <= 23) {
        alert(nome_Fun + ", o restaurante foi reservado para " + empresa + " na " + dia + " para às " + hora + "hs");
    }
    else if (dia == "sexta" && hora >= 7 && hora <= 23) {
        alert(nome_Fun + ", o restaurante foi reservado para " + empresa + " na " + dia + " para às " + hora + "hs");
    }
    else if (dia == "sabado" && hora >= 7 && hora <= 15) {
        alert(nome_Fun + ", o restaurante foi reservado para " + empresa + " na " + dia + " para às " + hora + "hs");
    }
    else if (dia == "domingo" && hora >= 7 && hora <= 15) {
        alert(nome_Fun + ", o restaurante foi reservado para " + empresa + " na " + dia + " para às " + hora + "hs");
    }
    else {
        alert(nome_Fun + ", o restaurante está indisponível");
    }

    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        restaurante_Hotel();
    }
}

function abastecimento_Hotel() {
    var alcool_WO = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil"));
    var gasolina_WO = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil"));
    var alcool_SP = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol"));
    var gasolina_SP = parseFloat(prompt("Qual o valor do gasolina no posto Stark Petrol"));
    var tanque_Car = 48;
    var preco_C1 = (tanque_Car * alcool_WO).toFixed(3);
    var preco_C2 = (tanque_Car * gasolina_WO).toFixed(3);
    var preco_C3 = (tanque_Car * alcool_SP).toFixed(3);
    var preco_C4 = (tanque_Car * gasolina_SP).toFixed(3);

    if (preco_C1 < preco_C2 && preco_C1 < preco_C3 && preco_C1 < preco_C4) {
        alert("O álcool no posto Wayne Oil está mais barato");
    } else if (preco_C2 < preco_C1 && preco_C2 < preco_C3 && preco_C2 < preco_C4) {
        alert("A gasolina no posto Wayne Oil está mais barato");
    } else if (preco_C3 < preco_C1 && preco_C3 < preco_C2 && preco_C3 < preco_C4) {
        alert("O álcool no posto Stark Petrol está mais barato");
    } else if (preco_C4 < preco_C1 && preco_C4 < preco_C2 && preco_C4 < preco_C3) {
        alert("A gasolina no posto Stark Petrol está mais barato");
    }

    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        abastecimento_Hotel();
    }
}

function manutencao_Hotel() {
    var empresas = [];
    var menor_V = Infinity;
    var empresa_O = "";

    do {
        var empresa_N = prompt("Informe o nome da empresa");
        var valor_P = parseFloat(prompt("Informe o valor por aparelho"));
        var aparelhos = parseInt(prompt("Informe a quantidade de aparelhos para a manutenção"));
        var percentual_D = parseFloat(prompt("Informe o percentual do desconto"));
        var aparelho_D = parseFloat(prompt("Informe o numero de aparelhos minímo para se obter o desconto"));
        var valor_S = valor_P * aparelhos;
        var desconto_S = (percentual_D / 100) * valor_S;

        if (aparelhos >= aparelho_D) {
            valor_S -= desconto_S;
        }

        alert(nome_Fun + ", o serviço da " + empresa_N + " vai custar R$" + valor_S);

        var resposta_3 = prompt(nome_Fun + ", você deseja conhecer outros serviços? (S/N)");

        if (valor_S < menor_V) {
            menor_V = valor_S;
            empresa_O = empresa_N;
        }
    
        empresas.push({ nome: empresa_N, valor: valor_S });
    } while (resposta_3 === "S");

    alert(nome_Fun + ", o orçamento com valor mais baixo é da " + empresa_O + " no valor de R$" + menor_V);

    var retorno = prompt(nome_Fun + ", você deseja voltar para o inicio? (S/N)");

    if (retorno === "S") {
        inicio();
    } else {
        manutencao_Hotel();
    }
}

function erro() {
    alert(nome_Fun + ", por favor informe um número entre 1 e 10.");
    inicio();
}

function sair() {
    var confirma_3 = confirm(nome_Fun + "você deseja encerrar o programa?");
    alert("Agradecemos por usar este programa " + nome_Fun + ", foi um prazer ter você por aqui!!");

    if (confirma_3 === true) {
        window.close();
    } else {
        inicio();
    }
}