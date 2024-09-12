// function validarIdade(idade){
//     if(typeof idade !== 'number' || idade < 0){
//         throw "A idade deve ser um numero positivo.";
//     }
//     if(idade<18){
//         throw "Você é menor de idade e não pode acessar este conteúdo";
//     }
//     console.log("Acesso permitido. Bem-vindo");
// }
// try{
//     validarIdade(17);
// } catch(erro){
//     console.error("Ocorreu um erro", erro)
// }

// Q01



// try{
//     const nome = document.getElementById("nome").value
//     const idade = document.getElementById("idade").value
//     const email = document.getElementById("email").value
//     console.log("Nome": nome,idade,email)
// }catch(erro){
//     console.error("Ocorreu um erro", erro);
// }

// Q02


// const btn = document.getElementById("enviar")
// function estudo(){
//     return console.log("Hi")
// }

// btn.addEventListener('click', function(event){
//     try{
//         estudo()
//     }catch(error){
//         console.error('Ocorreu um erro ao precessar o clique', error.message);
//         alert('Ocorreu um erro inesperado. Por favor, tente novamente')
//     }
// }

// )