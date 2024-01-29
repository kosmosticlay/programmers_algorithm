function solution(my_string, queries) {
  const stringArray = Array.from(my_string);
  queries.forEach((subArray) => {
    const [ startIndex, endIndex ] = subArray;
    const newString = stringArray.slice(startIndex, parseInt(endIndex) + 1).reverse();
    stringArray.splice(startIndex, (endIndex - startIndex) + 1, ...newString);
  })
    return stringArray.join('')
}