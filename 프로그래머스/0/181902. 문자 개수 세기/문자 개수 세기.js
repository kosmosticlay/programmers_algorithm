function solution(my_string) {
    const upperAlphabet = [
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let result = new Array(52).fill(0);
    
    for (let i=0; i < my_string.length; i++) {
        upperAlphabet.map((each, index) => {
            if(my_string[i] === each) return result[index]++
        })
    }
    return result;
}