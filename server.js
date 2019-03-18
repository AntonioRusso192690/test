const express = require ('express');
const app= express ();

app.set ('views', __dirname+'/views');
app.set ('view engine','ejs');

app.get ('/:nome', function (req, res){
		const nome = req.params.nome;
		res.render ('saluta',{
			nome:nome
		});
});

app.listen (3000);
