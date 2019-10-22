function divisor(){
  let number1 = document.getElementById('firstnumber').value;
  let number2 = document.getElementById('secondnumber').value;
  let regexNumber = /^[0-9]+\,?[0-9]*$/;
  // debut de la condition
  if (regexNumber.test(number1) && regexNumber.test(number2)){
    let number1Ready = number1.replace(',','.');
    let number2Ready = number2.replace(',','.');
    let result = number1%number2;
    alert (result);
  }
  else{alert ('Un ou plusieurs de vos nombres ne suivent pas la demande');}
}
