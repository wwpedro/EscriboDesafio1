function realizarSomatorioNumerosDivisiveis3e5() {

    Swal.fire({
        title: 'Digite um número:',
        input: 'text',
        inputPlaceholder: 'Digite aqui',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            let numero = result.value;

            let somatorio = 0;

            if (isNaN(numero)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Digite um valor numérico!',
                    allowOutsideClick: false,
                }).then(() => {
                    realizarSomatorioNumerosDivisiveis3e5();
                });
            } else {
                if (numero > 0) {
                    for (let i = 1; i < numero; i++) {
                        if (i % 3 == 0 || i % 5 == 0) {
                            somatorio = somatorio + i;
                        }
                    }
                    if (somatorio == 0) {
                        Swal.fire({
                            icon: 'info',
                            title: 'Atenção',
                            text: 'O somatório dos números divisíveis por 3 e 5 até igual a 0, pois você digitou um valor insuficiente.',
                            allowOutsideClick: false,
                        }).then(() => {
                            realizarSomatorioNumerosDivisiveis3e5();
                        });
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Sucesso',
                            text: 'O somatório dos números divisíveis por 3 e 5 até o número que você digitou é ' + somatorio,
                            allowOutsideClick: false,
                        }).then(() => {
                            realizarSomatorioNumerosDivisiveis3e5();
                        });
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Digite um número positivo maior que 0!',
                        allowOutsideClick: false,
                    }).then(() => {
                        realizarSomatorioNumerosDivisiveis3e5();
                    });
                }
            }
        }
    });

}

realizarSomatorioNumerosDivisiveis3e5();