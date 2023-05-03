const generador = require("../public/javascripts/generador");
const intervalos = require("../public/javascripts/intervalos");
const tiempoAtentcion = require("../public/javascripts/tiempoAtencion");

const mainController = {
    index: (req, res) => {
        res.render('index');
    }, 
    simulate: (req, res) => {
        let data = {
            server1: parseInt(req.body.server1),
            server2: parseInt(req.body.server2)
        };
        let numeros = generador(97, 373, 227, 509);
        let numeros2 = generador(13, 1067, 3, 1091);
        let intervalo = intervalos();
        
        let cliente = [];
        let tiempoAt1 = tiempoAtentcion.tiempoAtentcion1(numeros2);
        let tiempoAt2 = tiempoAtentcion.tiempoAtentcion2(numeros2);
        
        for (let i = 0; i < numeros.length; i++) {
            for (let j = 0; j < intervalo.length; j++) { 
                if (numeros[i].i >= intervalo[j].inf && numeros[i].i <= intervalo[j].sup) {
                    cliente.push(j);
                }
            }
        }


        res.json(tiempoAt2);

    }
}

module.exports = mainController;