function launchnta(){
    let value = document.getElementById("valuenta").value
    let result = document.getElementById("result")

    let calcul = Array.from(String(value), Number)

    result.innerHTML= "";

    for (let i = 0; i < calcul.length; i++) {
        calcul[i] = calcul[i] + 1
    }
    result.innerHTML = calcul

    console.log(calcul)


}