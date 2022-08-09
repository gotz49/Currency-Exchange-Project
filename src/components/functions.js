//! FUNCIONES 


// resultado ARS to UYU
const resARStoUYU = (data) => {
     
     let monto = Number(data.amount);
     let moneda1 = data.base_currency_code;
     let moneda2 = data.rates.UYU.currency_name;
     let resultado = Number(data.rates.UYU.rate_for_amount);
     let cambio = Number(data.rates.UYU.rate);
     
     $resultado.innerHTML = `
          <p>
               Convertiste: ${monto} ${moneda1} a ${moneda2}
          </p>
          <p>
               El resultado son ${resultado}
          </p>
          <p>
               Tipo de cambio: ${cambio}
          </p>
     `;
     
     const anterior =`
                         Conversión anterior: ${monto} ${moneda1} a ${moneda2}
                         = ${resultado}
                         Tipo de cambio utilizado: ${cambio}
                         `;
     guardarStorage(anterior);
};

// resultado UYU to ARS
const resUYUtoARS = (data) => {
     
     let monto = Number(data.amount);
     let moneda1 = data.base_currency_code;
     let moneda2 = data.rates.ARS.currency_name;
     let resultado = Number(data.rates.ARS.rate_for_amount);
     let cambio = Number(data.rates.ARS.rate);
     
     
     $resultado.innerHTML = `
          <p>
               Convertiste: ${monto} ${moneda1} a ${moneda2}
          </p>
          <p>
               El resultado son ${resultado}
          </p>
          <p>
               Tipo de cambio: ${cambio}
          </p>
     `
     const anterior =`
                         Conversión anterior: ${monto} ${moneda1} a ${moneda2}
                         = ${resultado}
                         Tipo de cambio utilizado: ${cambio}
                         `;
     guardarStorage(anterior);
          
};

convertir1 = () => {
     $formMonto.addEventListener('submit', async (e) => {
          e.preventDefault();
          const {value} = $monto
          if (!value) return
          
          $submit.setAttribute('disabled', '')
          $submit.setAttribute('aria-busy', 'true')
          
          await fetchUYUtoARS(Number(value));
          
          
          $submit.removeAttribute('disabled')
          $submit.removeAttribute('aria-busy')
     })
}

convertir2 = async () => {
     $formMonto.addEventListener('submit', async (e) => {
          e.preventDefault();
          const {value} = $monto
          if (!value) return
          
          $submit.setAttribute('disabled', '')
          $submit.setAttribute('aria-busy', 'true')
          
          await fetchARStoUYU(Number(value));
          
          
          $submit.removeAttribute('disabled')
          $submit.removeAttribute('aria-busy')
     })
}