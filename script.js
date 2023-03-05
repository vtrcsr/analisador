let numero = document.getElementById('fnum') 
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []



function analisar(){
  if(isNumber(numero.value) && !inLista(numero.value, valores)){
    valores.push(Number(numero.value))
    let item = document.createElement('option')
    item.text = `Valor ${numero.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
  }else{
    alert('Error')
  }
  numero.value = ''
  numero.focus()
}

function isNumber(n){
  if (Number(n) >= 1 && Number(n) <= 100){
    return true
  } else{
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  } else{
    return false
  }
}

function finalizar(){
  if (valores.length == 0){
    alert('Adicione um número')
  } else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]

    let soma = 0
    let media = 0

    for(let pos in valores){
      soma += valores[pos]
      if (valores[pos] > maior)
      maior = valores[pos]
      if (valores[pos] < menor)
      menor = valores[pos]
    }

    media = soma/total

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados. </p>`
    res.innerHTML += `<p>O maior valor foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor foi ${menor}</p>` 
    res.innerHTML += `<p>A soma de todos valores é ${soma}</p>` 
    res.innerHTML += `<p>A média é ${media}</p>` 
  }
}