let a = + prompt("Number of sybols!")
// if (a === !isNaN ) {
//   alert ()
// }
box = ""
for (let i = 0; i < a; i++) {
  for (let q = 0; q < a; q++) {
    // if (typeof a == !isNaN) {
      if (q == i || i ==0 || q == 0 || i == (a - 1) || q == (a - 1)) {
        box += "⬛"
      } else {
        box += "⬜"
      }
    
    }
  
    // else{
    // alert('error')
    // }
    console.log(box);
    box = ""
  
  }


// q % 2 == 0 && i % 2 == 0 || q % 2 == 1 && i % 2 == 1