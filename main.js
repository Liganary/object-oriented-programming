function Book(title, author,year){
    this.title= title,
    this.author=author,
    this.year= year
}

const book1 = new Book("How to never forget", "liganary","2021")
console.log(book1)


function addNumbers(num1,num2,num3,num4){
    return(num1+num2+num3+num4)
}
console.log(addNumbers(9,8,7,6))


const sumNumbers = (num1,num2,num3) => {
    return(num1+num2+num3)
}
console.log(sumNumbers(1,2,3))