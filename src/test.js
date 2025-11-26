function outer(){
    const a = "Hello";
    function inner(){
        return a
    }
    return inner()
}
const inner = outer()
console.log(inner)