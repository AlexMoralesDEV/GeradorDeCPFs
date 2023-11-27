import ValidaCPF from "./ValidaCPF";

export default class GeraCPF{
    gerarRand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCPF(){
        const cpfSemDigito = this.gerarRand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return novoCPF;
    }

}
