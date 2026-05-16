function reverseString(){
     let str = document.getElementById("value").value;
     let result=document.getElementById("result")
    if (str === "") {
        result.innerHTML = "No value";
        return;
    }

    let reversed = "";

    for(let i=str.length-1;i>=0;i--){
        
        reversed=reversed+str[i]
    }
    result.innerHTML = reversed;

}