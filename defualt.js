
    
    function total() {
        var math = document.getElementById("math").value;
        var physics = document.getElementById("physics").value;
        var english = document.getElementById("english").value;
        var bangla = document.getElementById("bangla").value;
        var total = +math + +physics + +english + +bangla;
        document.getElementById("total").innerHTML = total;
    }

    var average;
    function average() {
      var math = document.getElementById("math").value;
        var physics = document.getElementById("physics").value;
        var english = document.getElementById("english").value;
        var bangla = document.getElementById("bangla").value;
        var avrg = +math + +physics + +english + +bangla;
        average = avrg / 4;
      document.getElementById("average").innerHTML = average;
    }
    var grade;
    function grade() {
      if (average <= 100 && average >=80) {
        document.getElementById("grade").innerHTML = "A+";
      }
      else if (average <= 79 && average >=70) {
        document.getElementById("grade").innerHTML = "A";
      }
      else if (average <= 69 && average >=60) {
        document.getElementById("grade").innerHTML = "A-";
      }
      else if (average <= 59 && average >=50) {
        document.getElementById("grade").innerHTML = "B";
      }
      else if (average <= 49 && average >=40) {
        document.getElementById("grade").innerHTML = "C";
      }
      else if (average <= 39 && average >=33) {
        document.getElementById("grade").innerHTML = "D";
      }
      else {
        document.getElementById("grade").innerHTML = "F";
      }
    }

    // function submit() {
    //   document.getElementById("total").innerHTML = total();

    //   document.getElementById("average").innerHTML = average();

    //   if (average <= 100 && average >=80) {
    //     document.getElementById("grade").innerHTML = "A+";
    //   }
    //   else if (average <= 79 && average >=70) {
    //     document.getElementById("grade").innerHTML = "A";
    //   }
    //   else if (average <= 69 && average >=60) {
    //     document.getElementById("grade").innerHTML = "A-";
    //   }
    //   else if (average <= 59 && average >=50) {
    //     document.getElementById("grade").innerHTML = "B";
    //   }
    //   else if (average <= 49 && average >=40) {
    //     document.getElementById("grade").innerHTML = "C";
    //   }
    //   else if (average <= 39 && average >=33) {
    //     document.getElementById("grade").innerHTML = "D";
    //   }
    //   else {
    //     document.getElementById("grade").innerHTML = "F";
    //   }

document.querySelectorAll('input[type=number]').forEach(function(input){
    input.addEventListener('input',limitRange);
  });
  
  function limitRange() {
    if (this.value < 0) this.value = 0;
    if (this.value > 100) this.value = 100;
  }