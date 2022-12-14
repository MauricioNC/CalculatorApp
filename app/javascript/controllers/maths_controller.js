window.addEventListener('load', e => {

  const maths_operations = {
    "addition": (data1, data2) => {
      return data1 + data2;
    },
    "substraction": (data1, data2) => {
      return data1 - data2;
    },
    "multiply": (data1, data2) => {
      return data1 * data2;
    },
    "divide": (data1, data2) => {
      return data1 / data2;
    },
    "percentage": (data1, data2) => {
      return ((data1 * data2) / 100);
    },
    "module": (data1, data2) => {
      return data1 % data2;
    }
  }

  let num = [];
  let symbol = "";
  let display = document.getElementById("result");
  let history = document.getElementById("history");

  document.querySelectorAll("div.kbd_btn").forEach(key_pressed => {
    key_pressed.addEventListener('click', () => {
      
      if (key_pressed.textContent != " =" && key_pressed.textContent != "C" && key_pressed.textContent != "X2")
        display.textContent += key_pressed.textContent;
      else if (key_pressed.textContent == "C")
      {
        display.textContent = "";
        history.textContent = "";
      }
      else if (key_pressed.textContent == " =")
      {
        let regex = /[0-9]/;
        let regex2 = /[^0-9]/;
        let display_str = display.textContent.split(regex);
        let display_str2 = display.textContent.split(regex2);

        num = display_str2.map(item => parseInt(item)).filter(item => !isNaN(item));
        
        display_str = display_str.filter(item => item != "");
        
        symbol = display_str;
        
        let result = 0

        symbol.forEach(element => {
          if(element == "*")
          {
            result = maths_operations.multiply(num[0], num[1]);
            num.shift();
            num.shift();
            num.splice(0,0,result);
          }
        })
        symbol.forEach(element => {
          if(element == "/")
          {
            result = maths_operations.divide(num[0], num[1]);
            num.shift();
            num.shift();
            num.splice(0,0,result);
          }
        })
        symbol.forEach(element => {
          if(element == "+")
          {
            result = maths_operations.addition(num[0], num[1]);
            num.shift();
            num.shift();
            num.splice(0,0,result);
          }
        })
        symbol.forEach(element => {
          if(element == "-")
          {
            result = maths_operations.substraction(num[0], num[1]);
            num.shift();
            num.shift();
            num.splice(0,0,result);
          }
        })
        symbol.forEach(element => {
          if(element == "%")
          {
            result = maths_operations.percentage(num[0], num[1]);
            num.shift();
            num.shift();
            num.splice(0,0,result);
          }
        })
        symbol.forEach(element => {
          if(element == "mod")
          {
            result = maths_operations.module(num[0], num[1]);
            num.shift();
            num.shift();
            num.splice(0,0,result);
          }
        })
        history.textContent = display.textContent;
        display.textContent = result;
      }
    })
  })
})
