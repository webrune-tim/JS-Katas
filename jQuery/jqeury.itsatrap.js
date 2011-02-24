jQuery.fn.itsatrap = function() {
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
	
	
	function init(){
		var txt;
		txt = '<h1>Add and Prime</h1>';
		txt+= '<label>';
		txt+= '<span>Please enter first number</span>';
		txt+= '<input type="text" class="input_text" id="number1"/>';
		txt+= '</label>';
		txt+= '<label>';
		txt+= '<span>Tada</span>';
		txt+= '<input type="text" class="input_text" id="result1"/>';
		txt+= '<label>';
		txt+= '<input type="button" value="Calculate" id="btn"/>';
		txt+= '</label>';
		txt+= '</div>';
		txt+= '<audio id="trap" src="itsatrap.mp3">';
		txt+= 'Your browser does not support the audio element.';
		txt+= '</audio>';
		$('#cube').append(txt);
		$("#btn").click(function(){
			if(isAnyDigitGroupSumPrime($('#number1').val())){
				trap.play();
				$('#result1').val("It's a Trap!");
			}
			else
				$('#result1').val("It's safe!");
		}); // END - btn.click
		
	}); // END - init
}