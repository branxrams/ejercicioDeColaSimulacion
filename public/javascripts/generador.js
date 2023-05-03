function generador(vx, va, vc, vm){
    let variable = {
        x: vx,
        a: va,
        c: vc,
        m: vm,
    }
    let numeros = [];
    let constA = variable.a,
        constC = variable.c,
        constM = variable.m;
    let auxX = variable.x;
    let a, x, intervalo;

    for (let i = 1; i <variable.m; i++) {
        a = constA*auxX+constC;
        x = a%constM;
        intervalo = x/constM;
        numeros.push({id: i, a: a, x: x, i: intervalo});
        auxX = x;
    }

    return numeros;
}

module.exports = generador;