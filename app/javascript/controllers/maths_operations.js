export const maths_operations = {
  "addition": () => {
    let sum = 0;
    num.forEach(element => {
      sum += element;
    });
    return sum;
  },
  "substraction": () => {
    let sub = 0;
    num.forEach(element => {
      sub -= element;
    });
    return sub;
  },
  "multiply": () => {
    let mult = 1;
    num.forEach(element => {
      mult *= element;
    });
    return mult;
  },
  "divide": () => {
    let div = 0;
    num.forEach(element => {
      div += element;
    });
    return div;
  },
  "module": () => {
    let mod = 0;
    num.forEach(element => {
      mod %= element;
    });
    return mod;
  }
}