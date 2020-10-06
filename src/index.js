module.exports = function toReadable (number) {
  let numArr = [];
  let units;
  let decades;
  let hundreds;
  const wordNumber = [['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten'],
                      ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
                      ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
                      ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']];
  if(number === 0){
    return 'zero';
  }else{
    if(number <= 10) {
      return wordNumber[0][number - 1];
    }else if(number > 10 && number < 20){
      decades = number.toString().split('');
      return wordNumber[1][decades[1] - 1];
    }else if(number >= 20 && number < 100){
      numArr = number.toString().split('');
      if(numArr[1] === '0'){
        decades = parseInt(numArr[0]);
        return wordNumber[2][decades - 2];
      }else{
        decades = parseInt(numArr[0]);
        units = parseInt(numArr[1]);
        return `${wordNumber[2][decades - 2]} ${wordNumber[0][units - 1]}`;
      }
    }else if(number >= 100 && number < 1000){
      numArr = number.toString().split('');
      if(numArr[1] === '0' && numArr[2] === '0'){
        hundreds = parseInt(numArr[0]);
        return wordNumber[3][hundreds - 1];
      }else if(numArr[2] === '0'){
        hundreds = parseInt(numArr[0]);
        decades = parseInt(numArr[1]);
        if(decades === 1){
          return `${wordNumber[3][hundreds - 1]} ${wordNumber[0][9]}`;
        }
        return `${wordNumber[3][hundreds - 1]} ${wordNumber[2][decades - 2]}`;
      }else if(numArr[1] === '0'){
        hundreds = parseInt(numArr[0]);
        units = parseInt(numArr[2]);
        return `${wordNumber[3][hundreds - 1]} ${wordNumber[0][units - 1]}`;
      }else{
        hundreds = parseInt(numArr[0]);
        decades = parseInt(numArr[1]);
        units = parseInt(numArr[2]);
        if(decades === 1 ){
          return `${wordNumber[3][hundreds - 1]} ${wordNumber[1][units - 1]}`;
        }
        return `${wordNumber[3][hundreds - 1]} ${wordNumber[2][decades - 2]} ${wordNumber[0][units - 1]}`;
      }
    }   
  }
}
