document.getElementById("form-agendamento")
.addEventListener("submit", function(e){

e.preventDefault()

let nome=this[0].value
let telefone=this[1].value
let servico=this[2].value
let data=this[3].value
let mensagem=this[4].value

let texto=`Olá, meu nome é ${nome}.
Quero agendar ${servico}.
Data: ${data}
Telefone: ${telefone}
Mensagem: ${mensagem}`

let url=`https://wa.me/5599984270256?text=${encodeURIComponent(texto)}`

window.open(url)

})