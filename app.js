const titulo = document.querySelector ('.container__texto h1')
const subtitulo = document.querySelector ('.container__texto h2')
const btnChutar = document.querySelector ('.container__texto__btn')
const input = document.querySelector ('.container__texto__input')
let numeroMisterioso = Math.floor(Math.random() * 31)
var numeroInserido = ""
var tentativas = 1

    btnChutar.addEventListener ('click', () => 

    {           
        numeroInserido = parseInt(input.value);
        

    if (numeroInserido > numeroMisterioso) {

            titulo.innerHTML = `
            <h1>Voce <span class="container__texto-azul">Errou!</span></h1>
            ` ;
            subtitulo.textContent = 'O numero inserido é MAIOR que o numero misterioso'    
        }

        else {
            if(numeroInserido < numeroMisterioso) {

                titulo.innerHTML = `
                <h1>Voce <span class="container__texto-azul">Errou!</span></h1>
            ` ;
                subtitulo.textContent = 'O numero inserido é MENOR que o numero misterioso'        
            }

            else {
            titulo.innerHTML = `
                <h1>Você <span class="container__texto-azul">acertou!</span></h1>
            ` ;
            subtitulo.textContent = `Parabéns você acertou o numero misterioso em ${tentativas} tentativas `
            }  
    }
            tentativas++;
                 
    }) 



    


    









console.log(numeroMisterioso)
