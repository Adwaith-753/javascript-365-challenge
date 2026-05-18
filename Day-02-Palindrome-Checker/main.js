function Checker(){
    let checker =document.getElementById("value").value;
    let result =document.getElementById("result");
    let reversed = "";

    if(checker===""){
        result.innerHTML="No Value";
        return;
    }

    for(let i=checker.length-1;i>=0;i--){
        reversed =reversed+checker[i]
    }
    if(checker === reversed){
        result.innerHTML="its a palindrome number"
    }else{
        result.innerHTML="Not a palindrome number"
    }
}