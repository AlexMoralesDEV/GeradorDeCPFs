const cpfProtegido = Symbol('cpf');

class ValidaCPF{
    constructor(cpf){
        this.cpf = cpf;
        this[cpfProtegido] = 0;
    }

    validar(){
        let cpfLimpo = this.cpf.replace(/\D+/g, '');

        let digito1 = this.encontrar(cpfLimpo.slice(0, -2));
        let digito2 = this.encontrar(cpfLimpo.slice(0, -2) + digito1);

        console.log(digito1);
        console.log(digito2);
    }

    encontrar(valor){
        let cpfArray = Array.from(valor);
        let contador = cpfArray.length + 1;

        let somaGeral = cpfArray.reduce((a, v) => {
            a += (contador * Number(v));
            contador--;
            return a;
        }, 0)

        return 11 - (somaGeral % 11);
    }
}

let cpf1 = new ValidaCPF('450.380.428-64');
cpf1.validar();