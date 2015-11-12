'user-strict'

$(document).ready(function(){
	var gw = new Groundwork({
    'api_url': 'https://api.thegroundwork.com',
		'oauth_client_id': 'pub-un-test.refugee-survey-int-30wNLFqA4VCph7fWteAfRartPvyFP7XEuvE.XSI21OEpd4MFgLOqRPcGSdOTVxohT1XU18eLBVflSM2WjIHigw'
  });

  // submitRecipe();
  var id = getId();
  shareRecipe(id,gw);
  shareHeader(id,gw);
  recipeSignup(id,gw);
  placeCardSignup(id,gw);
  topicSignup(id,gw);


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
//1 share recipe
function shareRecipe(id,gw){
  $('.email-signup').submit(function(event){
  	console.log($('.email-signup'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendRecipeData(id,network,gw);
  });

}

function sendRecipeData(id,network,gw){
  var data = {
    source: "friendsgiving header signup",
    email: $('.email-signup')[0][0].value,
    name: $('.email-signup')[0][1].value,
    mobile: $('.email-signup')[0][2].value,
    tags: {
      // email: $('.email-signup')[0][0].value,
      // name: $('.email-signup')[0][1].value,
      // recipeName: $('.email-signup')[0][2].value,
      // instructions: $('.email-signup')[0][3].value,
      // imageLink: $('.email-signup')[0][4].value,
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
    console.log("success")
  })
  .catch(function(res){
    console.log(res);
    console.log("failure")
    $("#share-recipe-error").append("sorry an error has occured")
  });
};
// 2 header sigup
function shareHeader(id,gw){
  $('#create-recipe-form').submit(function(event){
  	console.log('#create-recipe-form')
  	console.log($('#create-recipe-form'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendHeaderData(id,network,gw);
  });

}

function sendHeaderData(id,network,gw){
  var data = {
    source: "friendsgiving share recipe",
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
    console.log("success")
  })
  .catch(function(res){
    console.log(res);
    console.log("failure")
    $("#header-error").append("we're sorry, an error has occured.")
  });
};

// 3 downloadRecipe sigup
function recipeSignup(id,gw){
  $('#download-recipe-form').submit(function(event){
  	console.log($('#download-recipe-form'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendRecipeSignup(id,network,gw);
  });

}

function sendRecipeSignup(id,network,gw){
  var data = {
    source: "friendsgiving download-recipes",
    email: $('#download-recipe-form')[0][1].value,
    name: $('#download-recipe-form')[0][0].value,
    tags: {
      // email: $('#download-recipe-form')[0][1].value,
      // name: $('#download-recipe-form')[0][0].value
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
    console.log("success")
  })
  .catch(function(res){
    console.log(res);
    console.log("failure")
    $("#download-recipe-error").append("We're sorry, an error has occured.")
  });
};

//4 PLACECARD signup
function placeCardSignup(id,gw){
  $('#placecard-form').submit(function(event){
  	console.log($('#placecard-form'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendPlaceCardSignup(id,network,gw);
  });

}

function sendPlaceCardSignup(id,network,gw){
  var data = {
    source: "friendsgiving placecard signup",
    email: $('#placecard-form')[0][1].value,
    name: $('#placecard-form')[0][0].value,
    tags: {
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
    console.log("success")
  })
  .catch(function(res){
    console.log(res);
    console.log("failure")
    $("#placecard-error").append("We're sorry, an error has occured.")
  });
};


// 5 Topic signup
function topicSignup(id,gw){
  $('#topic-form').submit(function(event){
  	console.log($('#topic-form'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendTopicSignup(id,network,gw);
  });

}

function sendTopicSignup(id,network,gw){
  var data = {
    source: "friendsgiving topic signup",
    email: $('#topic-form')[0][1].value,
    name: $('#topic-form')[0][0].value,
    tags: {
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
    console.log("success")
  })
  .catch(function(res){
    console.log(res);
    console.log("failure")
    $("#placecard-error").append("We're sorry, an error has occured.")
  });
};