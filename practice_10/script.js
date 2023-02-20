const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d793bfd78mshaf2a9e831d9fd4dp1b084fjsnf17651f9872f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=new%20york', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));