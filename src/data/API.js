const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4761079223msh08938456fea15f9p14e238jsne63d1fee6b21',
		'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
	}
};






// ARS to UYU
const fetchARStoUYU= (amount) => {
	fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=ARS&to=UYU&amount=${amount}&language=es`, OPTIONS)        
	.then(response => response.json())
	.then(data => resARStoUYU(data))
	.catch(err => console.error(err))
};




// UYU to ARS
const fetchUYUtoARS= (amount) => {
	fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=UYU&to=ARS&amount=${amount}&language=es`, OPTIONS)        
	.then(response => response.json())
	.then(data => resUYUtoARS(data))
	.catch(err => console.error(err))
};

