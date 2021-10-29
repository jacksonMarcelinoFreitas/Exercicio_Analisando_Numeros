let num = document.querySelector('input#fnum') //Valores informados
let lista = document.querySelector('select#flista') //Valores do select
let res = document.querySelector('div#res') //Selecionado para depois exibir na div
let valores = [] //neste array será armazenado os valores 

//Função para validar o range do numero
function isNumero(n){
    if(Number(n >= 1 && Number(n) <= 100)){
        return true
    }
    else{
        return false
    }
}

//Função para validar se já está na lista 
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){ //Função que faz a busca dentro do array e retorn -1 se não encontrado
        return true
    }
    else{
        return false
    }

}

//Botão adicionar aciona a função
function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){ //Se True...
        valores.push(Number(num.value)) //adiciona ao vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('Valor Inválido ou já encontrado na lista!')
    }
    num.value = '' //Para zerar o campo de preenchimento
    num.focus() //para manter o foco no campo de preenchimento
}

//Função que finaliza com as mensagens
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        let tot = valores.length //Atribui o total de números a tot
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos] //fazer a soma dos valores
            if (valores[pos] > maior){ 
                maior = valores[pos] //Pega o maior
            }
            if(valores[pos] < menor){
                menor = valores[pos] // Pega o menor
            }
        }
        media =  soma/tot //faz a média

        //alterações da div
        res.innerHTML = '' //primeiro, deixa vazia!
        res.innerHTML += `<p> Ao todo, temos ${tot} número(s) cadastrados !</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} !</p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor} !</p>`
        res.innerHTML += `<p> Somando todos os valores, temos  ${soma} !</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media} !</p>`
    }
}