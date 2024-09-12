document.getElementById('lojaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nomeLoja = document.getElementById('nomeLoja').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const vendas = parseFloat(document.getElementById('vendas').value.trim());
    

   
    const messageElement = document.getElementById('message');
    messageElement.textContent = ''; 

    try {
        
        if (!nomeLoja || !cidade || isNaN(vendas)) {
            throw new Error('Todos os campos devem ser preenchidos corretamente.');
        }

        
        if (vendas < 0) {
            throw new Error('O valor total vendido deve ser maior ou igual a zero.');
        }

        
        alert('Loja cadastrada com sucesso!');
    } catch (error) {
        
        messageElement.textContent = error.message;
    } finally {
       
        console.log('Validação concluída.');
        reset.removeAttribute('hidden')
    }
});

const reset = document.getElementById('recarregar');

reset.addEventListener('click',function(){ location.reload();});

