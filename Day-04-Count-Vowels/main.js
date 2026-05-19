function countVowel(){
    let countVowels = document.getElementById("value").value;
    let result = document.getElementById("result");

    let count = 0;

    for(let i=0;i<countVowels.length;i++){
        if(
            countVowels[i]==='a'||
            countVowels[i]==='e'||
            countVowels[i]==='i'||
            countVowels[i]==='o'||
            countVowels[i]==='u'

        ){
            count++;
        }
    }
    result.innerHTML = "Total vowels: " + count;
}