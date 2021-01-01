const http = require('http');

const server = http.createServer((request, response) =>{
	//Obtenemos informacion sobre el navegador, la maquina, etc
	console.log('headers',request.headers);
	//Obtenemos informacion sobre el metodo usado, GET/POST, etc
	console.log('method',request.method);
	//Tenemos informacion sobre la direccion url que hace la peticion
	console.log('url',request.url);
	const user = {
		name: 'Hugo',
		hobby: 'cantar'

	}
	//Si ponemos text/html en vez de application/json, enviamos informacion hmtl
	//Especifica el contenido de la peticion.
	response.setHeader('Content-Type','application/json');
	response.end(JSON.stringify(user));
})

server.listen(3000);
