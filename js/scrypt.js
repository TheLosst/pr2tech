// число, которое нужно угадать

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let result = false;

function restart_1()
{
	result = false;
	const number = getRandomInt(10);
	randomNum(result,number);
}

function randomNum(result1,number) {
	while (!result1) {
 	 const answer = prompt('Угадай число от 1 до 10?');
 	 if (answer === null) {
 	   break;
 	 }
 	 switch (+answer) {
 	   case number - 2:
  	  case number + 2:
  	    alert('Уже теплее!');
 	     break;
 	   case number - 1:
 	   case number + 1:
 	     alert('Горячо!');
   	   break;
  	  case number:
  	    alert('Ты угадал! Это число ' + number + '.');
  	    result1 = true;
  	    break;
  	  default:
  	    alert('Холодно!');
  		}
	} 
}