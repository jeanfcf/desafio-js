

function cadastro(){
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Proximo &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3'],
        cancelButtonText: 'Cancelar'
      }).queue([
        {
          title: 'Cadastre-se para receber mais informacoes',
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

