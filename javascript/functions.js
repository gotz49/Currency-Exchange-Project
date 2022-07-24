//! FUNCIONES 


// resultado ARS to UYU
const resARStoUYU = (data) => {
     
     $resultado.innerHTML = `
          <p>
               Convertiste: ${data.amount} ${data.base_currency_code} a ${data.rates.UYU.currency_name}
          </p>
          <p>
               El resultado son ${data.rates.UYU.rate_for_amount}
          </p>
          <p>
               Tipo de cambio: ${data.rates.UYU.rate}
          </p>
     `
}

// resultado UYU to ARS
const resUYUtoARS = (data) => {
     
     $resultado.innerHTML = `
          <p>
               Convertiste: ${data.amount} ${data.base_currency_code} a ${data.rates.ARS.currency_name}
          </p>
          <p>
               El resultado son ${data.rates.ARS.rate_for_amount}
          </p>
          <p>
               Tipo de cambio: ${data.rates.ARS.rate}
          </p>
     `
}

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

convertir2 = () => {
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