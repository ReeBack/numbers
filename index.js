var num1 = {
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten"
  };
  
  var cat = Math.floor((Math.random() * 9) + 1);
  document.getElementById("number").innerHTML = cat;
  
  function go() {
    var str = document.getElementById("num").value;
    if (str == num1[cat]) {
      document.getElementById("type").innerHTML = "Yes";
      document.getElementById("num").value = "";
      setTimeout(look, 1000);
    } else {
      document.getElementById("type").innerHTML = "No";
    }
  }
  
    function look() {
      cat = Math.floor((Math.random() * 9) + 1);
      console.log(cat);
      document.getElementById("number").innerHTML = cat;
      document.getElementById("type").innerHTML = "";
    }