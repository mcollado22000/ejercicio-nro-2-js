    let nome1 = prompt("Nome da 1era pessoa")
    let sobrenome1 =prompt("Sobrenome da 1era pessoa")
    let idade1 = prompt("Idade da 1era pessoa")
    let nacionalidade1 = prompt("Nacionalidade da 1era pessoa")
    let estadocivil1 = prompt("Estado Civil da 1era pessoa") 
    let color1 = prompt("Cor favorito 1era pessoa")

    let nome2 = prompt("Nome da 2da pessoa")
    let sobrenome2 =prompt("Sobrenome da 2da pessoa")
    let idade2 = prompt("Idade da 2da pessoa")
    let nacionalidade2 = prompt("Nacionalidade da 2da pessoa")   
    let estadocivil2 = prompt ("Estado Civil da 2da pesooa") 
    let color2 = prompt("Cor favorito 2da pessoa")

console.log (`DADOS 1era PESSOA`)
console.log(`Eu so:${nome1}`)
console.log(`meu sobrenome e:${sobrenome1}`)
console.log(`Eu tem:${idade1} anos`);
console.log(`Tem nacionalidade:${nacionalidade1}`)
console.log(`Meu estado civil é:${estadocivil1}`)
console.log ( `Meu cor favorito e: ${color1}`)
    
console.log (`DADOS 2da PESSOA`)
console.log(`Eu so:${nome2}`)
console.log(`meu sobrenome e:${sobrenome2}`)
console.log(`Eu tem:${idade2} anos`);
console.log(`Tem nacionalidade:${nacionalidade2}`)
console.log(`Meu estado civil é:${estadocivil2}`)
console.log ( `Meu cor favorito e: ${color2}`)


if (idade1 === idade2) {
    console.log(`todos tem la misma idade`)
} 
else if(idade1 > idade2) {
    console.log(`${nome1} é mais velho que ${nome2}`)
 }
 else {
     console.log(`${nome2} é mais novo que ${nome1}`)
}

if (nacionalidade1 === nacionalidade2){
    console.log(`${nome1} é ${nome2}, tem a misma nacionalidade`)
}
 else {
   console.log(`${nome1} é ${nome2}, tem diferente nacionalidade`)
}

if (estadocivil1 === estadocivil2){
    console.log(`${nome1} é ${nome2}, tem e mismo estado civil`)
}
 else {
   console.log(`${nome1} é ${nome2}, tem diferente estado civil`)
}

if (color1 === color2){
    console.log(`${nome1} é ${nome2}, eles gostam da mesmo cor`)
}
 else {
   console.log(`${nome1} é ${nome2}, eles gostam de cores diferentes,`)
} 
