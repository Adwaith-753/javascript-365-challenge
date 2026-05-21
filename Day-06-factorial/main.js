function fact(){
    let input = Number(document.getElementById("value").value);
    let result = document.getElementById("result");
    let fact=1;

    for(let i=1;i<=input;i++){
        fact=fact*i
    }
    result.innerHTML = fact;
}