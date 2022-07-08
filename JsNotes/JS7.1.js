
let l = 'Sonu'
let m = 'Raj'
let n = 'Neel'
let o = 'Monu'
function greet(g, h='You'){
    console.log(h + " got a call from " + g)
    console.log( g + ' is waiting')
}
greet(l, o)
greet(m,n)
greet(n)
//  when the place is emty , it takes default value 
