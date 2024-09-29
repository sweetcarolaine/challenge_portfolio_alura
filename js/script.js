document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input');
  
    inputs.forEach(input => {
      const label = input.closest('.input-container').querySelector('label');
  
      // Verifica se o campo já tem algum valor para mover a label para cima
      if (input.value !== "") {
        label.classList.add('active');
      }
  
      // Quando o campo ganha foco, move a label para cima
      input.addEventListener('focus', function() {
        label.classList.add('active');
      });
  
      // Quando o campo perde foco, verifica se tem valor
      input.addEventListener('blur', function() {
        if (input.value === "") {
          label.classList.remove('active');
        }
      });
    });
  
    // Formulário de envio
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nome = form.nome.value;
      const email = form.email.value;
      const assunto = form.assunto.value;
      const mensagem = form.message.value;
      
      // Monta o corpo do email com o mailto:
      const mailtoLink = `mailto:tcmoura@outlook.com?subject=${encodeURIComponent(assunto)}&body=Nome: ${encodeURIComponent(nome)}%0AEmail: ${encodeURIComponent(email)}%0AMensagem: ${encodeURIComponent(mensagem)}`;
      
      window.location.href = mailtoLink;
    });
  });
  