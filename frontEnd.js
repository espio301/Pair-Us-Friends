$(document).ready(function(){

});
//TODO: essentially hits tab. focuses on the next inputBox.
	function goToNext(){
		if (event.keyCode == 13) {
			$(event.target.id).next('.inputBox').focus(); // WHY IS THIS NOT WORKING!!! LIZ PLIZ!
		}
	}
	 function checkSubmit(){
	 	//validate the data and make sure they filled out everything.
	 	console.log(event.keyCode)
		if (event.keyCode == 13) {
 			this.form.submit();
 			return false;
 		}
	}

