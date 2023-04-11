const inverseString = (str) => {
    if (str === undefined || str === null || str === '') {
        return ''
    } 
    if()
    if (typeof (str) === 'string') {
        let resultat = str.split(' ').reverse().join(' ')
        return resultat
    }
}



module.exports = inverseString;

console.log(inverseString('')) // ''
console.log(inverseString('Hello World')) // World Hello
console.log(inverseString('Ynov Ytrack Informatique ')) // Informatique Ytrack Ynov
console.log(inverseString('Hello')) // Hello
console.log(inverseString(' Hey')) // Hey
console.log(inverseString(undefined)) // ''
console.log(inverseString(null)) // ''
console.log(inverseString("123 456 789")) // 789 456 123