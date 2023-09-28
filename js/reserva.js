const formReserva = document.querySelector('.formReserva');
const statusReserva = document.querySelector('.reserva-status');
const valorReserva = document.querySelector('.reserva-valor');

function validarInfo(nome, dias, preco) {
    if (nome.length < 5) {
        return {
            status: true,
            message: "O nome deve conter pelo menos 5 caracteres"
        };
    } if (dias > 30) {
        return {
            status: true,
            message: "Os dias de reserva devem ser menor que 30"
        };
    } if (preco < 0) {
        return {
            status: true,
            message: "O valor da diária não pode ser menor que 0"
        };
    }
}

function reserva(event) {
    event.preventDefault();

    const nomeCliente = event.target.nomeCliente.value;
    const diasReserva = parseInt(event.target.diasReserva.value);
    const precoDiaria = parseInt(event.target.precoDiaria.value);

    const resultadoValidacao = validarInfo(nomeCliente, diasReserva, precoDiaria);

    if (resultadoValidacao.status) {
        statusReserva.innerText = resultadoValidacao.message;
    } else {
        const precoFinalDaReserva = diasReserva * precoDiaria;
        valorReserva.innerText = precoFinalDaReserva;
    }
};
formReserva.addEventListener('submit', reserva);