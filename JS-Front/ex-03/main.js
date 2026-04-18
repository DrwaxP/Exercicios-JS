let data = new Date()
let ano = data.getFullYear();
let btn = document.getElementById('search');

btn.addEventListener('click', () => {
    let nasc = document.querySelector('input.nasc');
    let mascSelected = document.querySelector('input.masculino').checked;
    let femSelected = document.querySelector('input.feminino').checked;
    let total = Number(ano - nasc.value);
    let texto = document.getElementsByTagName('p')[0];

    if(nasc.value == 0 || Number(nasc.value) > ano) {
        alert('[Error] Digite um valor válido ou coloque os dados corretos.');
        return
    }


    let gen = '';
    if(mascSelected === true) {
       gen = 'Masculino'
            
    }
    else if(femSelected === true) {
        gen = 'Feminino'
        
    } else {
        alert('Dados incorretos ou faltando. Reinicie e tente novamente.');
        return
    }
    texto.innerHTML = `Você tem ${total} anos. Seu sexo e ${gen}. `
    
});
 