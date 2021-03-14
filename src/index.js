module.exports = function toReadable (number) {
  if (number === 0) return "zero";
  if (1 <= number && number <= 9) return ones(number);
  if (10 <= number && number <= 99) return tens(number);
  return hundreds(number);
  
}

function ones(number) {
  let text;
  switch(number) {
    case 1: text = "one"; break;
    case 2: text = "two"; break;
    case 3: text = "three"; break;
    case 4: text = "four"; break;
    case 5: text = "five"; break;
    case 6: text = "six"; break;
    case 7: text = "seven"; break;
    case 8: text = "eight"; break;
    case 9: text = "nine"; break;
  }
  return text;
}

function tens(number) {
  let text, 
      tensOfNumber = Math.trunc(number / 10),
      onesOfNumber = number - Math.trunc(number / 10) * 10;
  switch(number) {
    case 10: text = "ten"; break;
    case 11: text = "eleven"; break;
    case 12: text = "twelve"; break;
    case 13: text = "thirteen"; break;
    case 14: text = "fourteen"; break;
    case 15: text = "fifteen"; break;
    case 16: text = "sixteen"; break;
    case 17: text = "seventeen"; break;
    case 18: text = "eighteen"; break;
    case 19: text = "nineteen"; break;
  }

  switch(tensOfNumber) {
    case 2: text = "twenty"; break;
    case 3: text = "thirty"; break;
    case 4: text = "forty"; break;
    case 5: text = "fifty"; break;
    case 6: text = "sixty"; break;
    case 7: text = "seventy"; break;
    case 8: text = "eighty"; break;
    case 9: text =  "ninety"; break;
  }
  if (!(number % 10) || number <= 19) return text;
  return `${text} ${ones(onesOfNumber)}`;
}

function hundreds (number) {
  let tensFromHundred = number - Math.trunc(number / 100) * 100;
  if (tensFromHundred === 0) return `${ones(Math.trunc(number / 100))} hundred`;
  return (tensFromHundred < 10) ? 
  `${ones(Math.trunc(number / 100))} hundred ${ones(tensFromHundred)}` : 
  `${ones(Math.trunc(number / 100))} hundred ${tens(tensFromHundred)}`;
}