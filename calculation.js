window.onload=function () {
	var keys = document.getElementsByTagName('button');
	for (var i =0; i <keys.length; i++) {
		keys[i].onclick = function(){
			//con
			var keyValue	= this.innerHTML,
				detail 		= document.getElementById('detail'),
				detalValue 	= detail.innerHTML,
				result		= document.getElementById('result-value');


			switch (keyValue){
				case 'C':
					detail.innerHTML = '';
					result.innerHTML = '0';
					break;
				case '/':
					detail.innerHTML+=this.innerHTML;
					break;
				case '*':
					break;
				case '+':
					break;
				case '-':
					break;
				case '=':
					eval(detail.innerHTML);
				default:
					break;

			detail.innerHTML+=this.innerHTML;

				
			}

		}
	}
}