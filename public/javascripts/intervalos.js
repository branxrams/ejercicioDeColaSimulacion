const jStat = require('jstat');

function intervalos() {

    let intervalos = [],
        aux = 0;
        for (let i = 0; i <= 3; i++) {
            if (i==0) {
                intervalos.push({
                    id: i,
                    inf: 0,
                    sup: jStat.poisson.pdf(i, 0.333)
                });
            }else{
                intervalos.push({
                    id: i,
                    inf: aux,
                    sup: aux + jStat.poisson.pdf(i, 0.333)
                });
            }

            aux = intervalos[i].sup;
        }
        return intervalos;
}

module.exports = intervalos;