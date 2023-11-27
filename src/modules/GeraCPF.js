import ValidaCPF from "./ValidaCPF";

export default class GeraCPF{
    gerarRand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formataCPF(cpf){
        console.log(cpf)
        let part1 = cpf.slice(0, 3);
        let part2 = cpf.slice(3, 6);
        let part3 = cpf.slice(6, 9);
        let part4 = cpf.slice(9, 11);
        const cpfFormatado = part1 + '.' + part2 + '.' +  part3 + '-' +  part4;
        return cpfFormatado;
    }

    geraNovoCPF(){
        const cpfSemDigito = this.gerarRand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return this.formataCPF(novoCPF);
    }

}
