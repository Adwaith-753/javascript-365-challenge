function evenNumber(){
    let userInput=document.getElementById("value").value;
    let result = document.getElementById("result");

    let arr=userInput.split(",").map(Number);

    let even =[];
    for(let i = 0;i<arr.length;i++){

        if(arr[i]%2===0){
            even.push(arr[i])
        }
    }
    result.innerHTML = "Even Numbers: " + even.join(", ");

}