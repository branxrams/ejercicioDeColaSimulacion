function generarDatosCaja(clientes, tiempoAtencion) {
    const datosCaja = {
      tiempoDeLlegadaCliente: 0,
      ClientesEnCola: 0,
      IdDelClienteQueEspera: null,
      idSiguienteCliente: null,
    };
  
    const resultados = [];
  
    let tiempoTotalAtencion = 0;
  
    while (tiempoTotalAtencion < 60) {
      const proximoCliente = clientes.shift();
      const tiempoAtencionProximoCliente = tiempoAtencion.shift();
  
      datosCaja.tiempoDeLlegadaCliente += proximoCliente;
  
      if (datosCaja.ClientesEnCola > 0) {
        datosCaja.IdDelClienteQueEspera = resultados[resultados.length - 1].idSiguienteCliente;
      } else {
        datosCaja.IdDelClienteQueEspera = null;
      }
  
      if (clientes.length > 0) {
        datosCaja.idSiguienteCliente = clientes.indexOf(1);
      } else {
        datosCaja.idSiguienteCliente = null;
      }
  
      datosCaja.ClientesEnCola += proximoCliente - 1;
  
      tiempoTotalAtencion += tiempoAtencionProximoCliente;
  
      resultados.push({
        tiempoDeLlegadaCliente: datosCaja.tiempoDeLlegadaCliente,
        ClientesEnCola: datosCaja.ClientesEnCola,
        IdDelClienteQueEspera: datosCaja.IdDelClienteQueEspera,
        idSiguienteCliente: datosCaja.idSiguienteCliente,
      });
   }
}

module.exports = generarDatosCaja;