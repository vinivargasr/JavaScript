let parametros=url.parse(req.url,true);

  let mat=parametros.query.matricula;
  let pas=parametros.query.senha;

  let dados=null
  
  if(mat=="123" && pas=="321"){
    dados = {
      nome: "Bruno",
      acesso:10
    }
  }