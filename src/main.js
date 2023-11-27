import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

function mostrarCPF(){
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('#cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
}

let btnGerar = document.querySelector('#btn-gerar');
btnGerar.addEventListener('click', mostrarCPF)