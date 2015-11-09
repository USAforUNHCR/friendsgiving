'user-strict'

$(document).ready(function(){
	var gw = new Groundwork({
    'api-url': 'https://un.dev.thegroundwork.com',
		'oauth_client_id': 'pub-un-test.refugee-survey-int-30wNLFqA4VCph7fWteAfRartPvyFP7XEuvE.XSI21OEpd4MFgLOqRPcGSdOTVxohT1XU18eLBVflSM2WjIHigw'
  });

  // submitRecipe();
  var id = getId();
  shareListener(id,gw);


});

// function submitRecipe(){
// 	$form = $("#create-recipe-form");

// 	$form.submit(function(event){
// 		console.log($form);
// 		event.preventDefault();
// 		// data = {
// 		//   email: email,
// 		//   source: "friendsgiving recipe",
// 		//   tags:{
// 		//     recipeTitle:"title",
// 		//     recipeInstructions: "etc",
// 		//     sendEmail: 0
// 		//     }
// 		//   }

// 		$.ajax({
// 			type: "POST",
// 			url: '//nyc.us11.list-manage.com/subscribe/post-json?u=7aa897cfc40f7cfbb83ffadd4&amp;id=c8e53459bc&c=?',
// 			data: $form.serialize(),
// 			timeout: 5000,
// 			cache: false,
// 			dataType: 'jsonp',
// 			contentType: "application/json; charset=utf-8",
// 			error: function(err) {console.log("Error.")},
// 			success: function(data){
// 				if (data.result != "success") {
// 					console.log("error")
// 				} else {
// 					console.log("success")
// 				}
// 			}
// 		})
// 	})
// }
function getId(){
  var id = /=(.*)/.exec(document.location.href);
  if(id){
  return id[1];
  }
  else{
    return -1
  }
}
function shareListener(id,gw){
  $('#create-recipe-form').submit(function(event){
  	console.log('#create-recipe-form')
  	console.log($('#create-recipe-form'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendData(id,network,gw);
  });

}

function sendData(id,network,gw){
  var data = {
    source: "friendsgiving",
    email: "test@test.com",
    tags: {
      email: $('#create-recipe-form')[0][0].value,
      name: $('#create-recipe-form')[0][1].value,
      recipeName: $('#create-recipe-form')[0][2].value,
      instructions: $('#create-recipe-form')[0][3].value,
      imageLink: $('#create-recipe-form')[0][4].value,
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
  })
  .catch(function(res){
    console.log(res);
  });
};