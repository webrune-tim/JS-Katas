function isAnyDigitGroupSumPrime(text){
	var e = text.split(',');
	for (var i=0; i < e.length; i++){
		var num = 0;
		for (pos = 0; pos < e[i].length; pos++) { 
			num = num + parseInt(e[i].charAt(pos))
		}
		
		console.info("Testing %i, the sum of digits %s.", num, e[i]);
		var prime = isPrime(num);
		
		if(prime){
			console.info("%i, the sum of digits %s, is prime!.", num, e[i]);
			return true;
		}
	}
	return false;
}

function isPrime(num){
	for (var divisor = 2; divisor < num; divisor++) {
		if (num % divisor == 0) {
			console.info("%i divides evenly into %i. It is not prime.", divisor, num);
			return fals	e;
		}
		else
			console.info("%i does not divide evenly into %i", divisor, num);
	}
	return true;
}


$(function(){

	$("#btn").click(function(){
		if(isAnyDigitGroupSumPrime($('#number1').val())){
			trap.play();
			$('#result1').val("It's a Trap!");
		}
		else
			$('#result1').val("It's safe!");
	}); // END - btn.click
	
}); // END - ready