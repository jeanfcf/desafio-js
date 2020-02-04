
$(document).ready(function(){
  var urlStr = "https://api.punkapi.com/v2/beers/random";
  for (let index = 1; index < 6; index++) {
    $.ajax({
      url : urlStr,
      type : "get",
      dataType : "json",
      success : function(data){
        console.log(data);
        $("#titulo"+index).text(data[0].name);
        $("#fabricacao"+index).text("Fabricação: " + data[0].first_brewed);
        $("#slogan"+index).text(data[0].tagline);
        $("#alcool"+index).text(data[0].abv+"% de álcool");
        $("#cerveja"+index).css({'background-image':'url('+data[0].image_url + ')',});
      },
      error : function(erro){
        console.log(erro);
      }
    });
  }
});


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