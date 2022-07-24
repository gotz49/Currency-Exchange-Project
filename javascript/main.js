const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4761079223msh08938456fea15f9p14e238jsne63d1fee6b21',
		'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
	}
};


const fetchConverter= (amount) => {
	return fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=${amount}`, OPTIONS)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};

const $ = selector => document.querySelector(selector)

const $formMonto = $('#formMonto');
const $monto = $('#monto');
const $submit = $('#convertirButton');
const $resultado = $('#resultado');


$formMonto.addEventListener('submit', async (e) => {
     e.preventDefault();
     const {value} = $monto
     if (!value) return
     
     $submit.setAttribute('disabled', '')
     $submit.setAttribute('aria-busy', 'true')
     
     const conversion = await fetchConverter(Number(value));
     
     $resultado.innerHTML = JSON.stringify(conversion, null, 2)
     
     
     console.log(Number(value));
     
     $submit.removeAttribute('disabled')
     $submit.removeAttribute('aria-busy')
})