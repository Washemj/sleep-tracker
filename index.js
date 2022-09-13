
function validateForm() {
  let x = document.forms["myForm"]["today"].value;
  let y = document.forms["myForm"]["yesterday"].value;
  let z = document.forms["myForm"]["1dbyesterday"].value;
  let a = document.forms["myForm"]["2dbyesterday"].value;
  let b = document.forms["myForm"]["3dbyesterday"].value;
  if (x == "" ||y == "" ||z == "" ||a == "" ||b == "") {
    alert("All times must be filled out");
    return false;
  }
  var time = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!x.match(time) || !y.match(time) || !z.match(time) || !a.match(time) || !b.match(time)) {
    alert("Format must be either h:mm or hh:mm")
    return false;
  }
  return true;
}

$('#submit').click(function () {
    if(validateForm()){
      let x = document.forms["myForm"]["today"].value;
      let y = document.forms["myForm"]["yesterday"].value;
      let z = document.forms["myForm"]["1dbyesterday"].value;
      let a = document.forms["myForm"]["2dbyesterday"].value;
      let b = document.forms["myForm"]["3dbyesterday"].value;
      var today = Number(x.substring(0, x.indexOf(':')))*60 + Number(x.slice(-2));
      var yday = Number(y.substring(0, y.indexOf(':')))*60 + Number(y.slice(-2));
      var twodbf = Number(z.substring(0, z.indexOf(':')))*60 + Number(z.slice(-2));
      var threedbf = Number(a.substring(0, a.indexOf(':')))*60 + Number(a.slice(-2));
      var fourdbf = Number(b.substring(0, b.indexOf(':')))*60 + Number(b.slice(-2));
      var average = (today + yday + twodbf + threedbf + fourdbf)/5;
      var tempMin1 = average - 90;
      tempMin1 = String(Math.floor(tempMin1/60)) + ":" + String(tempMin1 % 60);
      var tempMin2 = average - 120;
      tempMin2 = String(Math.floor(tempMin2/60)) + ":" + String(tempMin2 % 60);

      document.forms["myForm"].style.display="none";
      document.getElementById("result").style.display="block";
      document.querySelector(".padding").innerHTML += tempMin2 + " - " + tempMin1;

    }
});
$('#recalc').click(function () {
  document.forms["myForm"].style.display="inline-block";
  document.getElementById("result").style.display="none";
});
