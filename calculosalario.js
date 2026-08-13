function CalcularSalarioLiquido() {
    let salariobruto = Number(document.getElementById("salariobruto").value);
    let resultado = document.getElementById("resultado");
    resultado.style.display = "block";

    if (!salariobruto || salariobruto <= 0) {
        resultado.innerHTML = "Digite um salário bruto válido.";
        return;
    }

    let descontofgts = salariobruto * 0.08;

    let descontoinss;

    if (salariobruto <= 1621) {
        descontoinss = salariobruto * 0.075;
    } else if (salariobruto <= 2902) {
        descontoinss = salariobruto * 0.09;
    } else if (salariobruto <= 4345) {
        descontoinss = salariobruto * 0.12;
    } else if (salariobruto <= 8475) {
        descontoinss = salariobruto * 0.14;
    } else {
        descontoinss = 988.08; // ninguém paga mais do que isso de INSS
    }

    let descontoirrf;

    if (salariobruto <= 5000) {
        descontoirrf = 0;
    } else if (salariobruto <= 7350) {
        descontoirrf = salariobruto * 0.13;
    } else {
        descontoirrf = salariobruto * 0.275;
    }

    let salarioliquido = salariobruto - (descontoinss + descontoirrf);

    resultado.innerHTML = "Salário Bruto: R$ " + salariobruto.toFixed(2) + "<br>" +
        "Desconto INSS: R$ " + descontoinss.toFixed(2) + "<br>" +
        "Desconto IRRF: R$ " + descontoirrf.toFixed(2) + "<br>" +
        "FGTS (depositado pela empresa): R$ " + descontofgts.toFixed(2) + "<br>" +
        "Salário Líquido: R$ " + salarioliquido.toFixed(2);
}
