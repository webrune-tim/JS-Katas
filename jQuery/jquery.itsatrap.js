(function( $ ){
  $.fn.itsatrap = function() {
		$.itsatrap.init();
  }
  
  $.itsatrap = {};
  
  $.itsatrap.init = function(){
	var txt = "";
	txt += '<h1>Add and Prime</h1>';
	txt += '<label for="number1">';
	txt += 'Please enter first number';
	txt += '</label>';
	txt += '<input type="text" class="input_text" id="number1"/>';
	txt += '<button id="btn">Calculate</button>';
	txt += '<span id="result">test</span>';
	txt += '<audio id="trap" src="itsatrap.mp3">';
	txt += 'Your browser does not support the audio element.';
	txt += '</audio>';
	
	$('#cube').append(txt);
	//$("#cube input[type=text]").textbox();
	$("#cube #result").hide();
	$("#cube #number1").focus(function(){
		$("#cube #result").hide();
	});
	//$("#cube #btn").button();
	$("#cube #btn").click(function(){
		try{
			if($.itsatrap.isAnyDigitGroupSumPrime($('#number1').val())){
				trap.play();
				$('#result').show().text("It's a Trap!");
			}
			else
				$('#result').show().text("It's safe!");
		}
		catch(er) {
			$('#result').show().text(er);
		}
	}); // END - btn.click
  };
  
  $.itsatrap.isAnyDigitGroupSumPrime = function(text){
		var e = text.split(",");
		if(e.length == 0 || text.length == 0 || /[^0-9,\s]/.test(text))
			throw "Bad Format";
	
		console.debug(e);

		for (var i=0; i < e.length; i++){
			var num = 0;
			for (pos = 0; pos < e[i].length; pos++) { 
				num = num + parseInt(e[i].charAt(pos))
			}
			
			console.info("Testing %i, the sum of digits %s.", num, e[i]);
			var prime = $.itsatrap.isPrime(num);
			
			if(prime){
				console.info("%i, the sum of digits %s, is prime!.", num, e[i]);
				return true;
			}
		}
		return false;
	};
		
	$.itsatrap.isPrime = function(num){
			for (var divisor = 2; divisor < num; divisor++) {
				if (num % divisor == 0) {
					console.info("%i divides evenly into %i. It is not prime.", divisor, num);
					return false;
				}
				else
					console.info("%i does not divide evenly into %i", divisor, num);
			}
			return true;
		};

  
})( jQuery );
