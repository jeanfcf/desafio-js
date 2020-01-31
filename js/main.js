
$(document).ready(function(){
  
          var urlStr = "https://api.punkapi.com/v2/beers/"+getRandom(200);
       
          $.ajax({
              url : urlStr,
              type : "get",
              dataType : "json",
              success : function(data){
                  console.log(data);
                  console.log(
                    data[0].name)
                  $("#a").text(data[0].name);
                  $("#b").text(data[0].first_brewed);
                  $("#c").text(data[0].description);
                  $("#d").text(data[0].ph);
              },
              error : function(erro){
                  console.log(erro);
                  console.log("errooo");
              }
          });
  });



function getRandom(max) {
  return Math.floor(Math.random() * max + 1)
}

window.onload = function(){
  Swal.fire('Cadastre-se para mais notificacoes')
}
function cadastro(){
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Proximo &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3'],
        cancelButtonText: 'Cancelar'
      }).queue([
        {
          title: 'Cadastre-se',
          text: 'Insira seu nome:'
        },
        'Agora insira seu e-mail:',
        'Crie sua nova senha:'
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'Pronto!',
            confirmButtonText: 'Prosseguir para o site'
          })
        }
      })
}



