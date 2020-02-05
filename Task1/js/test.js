function generate() {
      let cont = 0;

      return function () {
            cont += 10;
            console.log(cont);
      }
}

let one = generate();
one();
one();
one();
let two = generate();
two();