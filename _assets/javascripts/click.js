$( document ).ready(function() {
	// create new recipe modal
	$("#share-button").on("click", function(){
		$("#create-recipe-form").show();
		$("#veil").show();
		$("#veil").on("click", function(){
			$("#veil").hide();
			$("#create-recipe-form").hide();
		});

			console.log("show new recipe modal")
	})
	// email and name modal for recipe download
	$("#download-recipe-button").on("click", function(){
			console.log("download recipe modal")
	})
	// email and name modal for placecard download
	$("#download-placecard-button").on("click", function(){
			console.log("download placecard modal")
	})
	// email and name modal for topic download
	$("#download-conversation-button").on("click", function(){
			console.log("download conversation modal")
	})

});