const math = require('mathjs');

const tiempos = {
    tiempoAtentcion1: function(numeros){
        let tiempo = [];
        let num;
        for (let i = 0; i < numeros.length; i++) {
            num = -2 * math.log(numeros[i].i)
            tiempo.push(parseFloat(num.toFixed(2)));
        }
    
        return tiempo;
    },
    
    tiempoAtentcion2: function(numeros){
        let tiempo = [];
        let num;
        for (let i = 0; i < numeros.length; i++) {
            num = 1 + numeros[i].i;
            tiempo.push(parseFloat(num.toFixed(2)));
        }
        return tiempo;
    }
}



module.exports = tiempos;