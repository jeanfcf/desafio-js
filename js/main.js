
$(document).ready(function(){
  
          var urlStr = "https://api.punkapi.com/v2/beers/random";

          
          $.ajax({
              
              url : urlStr,
              type : "get",
              dataType : "json",
              success : function(data){
                  console.log(data);
                  console.log(
                    data[0].name)
                  $("#titulo1").text(data[0].name);
                  $("#fabricacao1").text(data[0].first_brewed);
                  $("#slogan1").text(data[0].description);
                  $("#alcool1").text(data[0].ph);
                  $("#card1").css({
                    'background-image':'url('+data[0].image_url + ')',
                    'background-size': 'contain',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center'
                  });
              },
              error : function(erro){
                  console.log(erro);
                  console.log("errooo");
              }
          });
          $.ajax({
            url : urlStr,
            type : "get",
            dataType : "json",
            success : function(data){
                console.log(data);
                console.log(
                  data[0].name)
                $("#titulo2").text(data[0].name);
                $("#fabricacao2").text(data[0].first_brewed);
                $("#slogan2").text(data[0].description);
                $("#alcool2").text(data[0].ph);
                $("#card2").css({
                  'background-image':'url('+data[0].image_url + ')',
                  'background-size': 'contain',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center'
                });
            },
            error : function(erro){
                console.log(erro);
                console.log("errooo");
            }
        });
        $.ajax({
          url : urlStr,
          type : "get",
          dataType : "json",
          success : function(data){
              console.log(data);
              console.log(
                data[0].name)
              $("#titulo3").text(data[0].name);
              $("#fabricacao3").text(data[0].first_brewed);
              $("#slogan3").text(data[0].description);
              $("#alcool3").text(data[0].ph);
              $("#card3").css({
                'background-image':'url('+data[0].image_url + ')',
                'background-size': 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center'
              });
          },
          error : function(erro){
              console.log(erro);
              console.log("errooo");
          }
      });
      $.ajax({
        url : urlStr,
        type : "get",
        dataType : "json",
        success : function(data){
            console.log(data);
            console.log(
              data[0].name)
            $("#titulo4").text(data[0].name);
            $("#fabricacao4").text(data[0].first_brewed);
            $("#slogan4").text(data[0].description);
            $("#alcool4").text(data[0].ph);
            $("#card4").css({
              'background-image':'url('+data[0].image_url + ')',
              'background-size': 'contain',
              'background-repeat': 'no-repeat',
              'background-position': 'center'
            });
        },
        error : function(erro){
            console.log(erro);
            console.log("errooo");
        }
    });
    $.ajax({
      url : urlStr,
      type : "get",
      dataType : "json",
      success : function(data){
          console.log(data);
          console.log(
            data[0].name)
          $("#titulo5").text(data[0].name);
          $("#fabricacao5").text(data[0].first_brewed);
          $("#slogan5").text(data[0].description);
          $("#alcool5").text(data[0].ph);
          $("#card5").css({
            'background-image':'url('+data[0].image_url + ')',
            'background-size': 'contain',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          });
      },
      error : function(erro){
          console.log(erro);
          console.log("errooo");
      }
  });


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



