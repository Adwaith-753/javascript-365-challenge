function largestNumber(){

    let userInput = document.getElementById("value").value;
    let userResult =document.getElementById("result");

    if (userInput === "") {
        result.innerHTML = "No Value";
        return;
    }

    let arr=userInput.split(",").map(Number);
      

    largest =arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    console.log(largest);


}