console.log("hello world")
    
const preschoolSum = (a, b) => {
    let result = a + b;
    
    if (result < 0) return 0
    if (result > 10) return "sok"
    return Math.floor(result)
}

module.exports = preschoolSum

