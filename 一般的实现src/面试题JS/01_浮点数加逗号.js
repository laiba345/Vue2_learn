function format(number) {
    return Intl.NumberFormat().format(number)
}

let result = format(12000000.11)
console.log(result)
