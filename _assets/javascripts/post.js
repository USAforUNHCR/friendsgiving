'user-strict'

$(document).ready(function(){
	var gw = new Groundwork({
    'api-url': 'https://un.dev.thegroundwork.com',
		'oauth_client_id': 'pub-un-test.refugee-survey-int-30wNLFqA4VCph7fWteAfRartPvyFP7XEuvE.XSI21OEpd4MFgLOqRPcGSdOTVxohT1XU18eLBVflSM2WjIHigw'
  });

  // submitRecipe();
  var id = getId();
  shareRecipe(id,gw);
  shareHeader(id,gw);
  recipeSignup(id,gw);
  placeCardSignup(id,gw);
  topicSignup(id,gw);

  showRecipe();
  showPlacecard();
  showTopic();

  //Clear local storage

  clearBtn();


});

function getId(){
  var id = /=(.*)/.exec(document.location.href);
  if(id){
  return id[1];
  }
  else{
    return -1
  }
}
//1 header signup
function shareHeader(id,gw){
  $('.email-signup').submit(function(event){
  	console.log($('.email-signup'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendHeaderData(id,network,gw);
  });

}

function sendHeaderData(id,network,gw){
  var data = {
    source: "friendsgiving header signup",
    email: $('.email-signup')[0][0].value,
    sendEmail: 0,
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
    $("#header-error").append("Thank you for signing up!")
  })
  .catch(function(res){
    console.log(res);
    console.log("failure")
    $("#header-error").append("sorry an error has occured")
  });
};
// 2 shareRecipe
function shareRecipe(id,gw){
  $('#create-recipe-form').submit(function(event){
  	console.log('#create-recipe-form')
  	console.log($('#create-recipe-form'))
    event.preventDefault();
    var network = $(event.target).attr('class');
    sendRecipeData(id,network,gw);
  });

}

function sendRecipeData(id,network,gw){
  var data = {
    source: "friendsgiving share recipe",
    name: $('#create-recipe-form')[0][1].value,
    email: $('#create-recipe-form')[0][0].value,
    sendEmail: 0,
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
    $("#share-recipe-error").append("we're sorry, an error has occured.")

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
    sendEmail: 0,
    name: $('#download-recipe-form')[0][0].value,
    tags: {
      // email: $('#download-recipe-form')[0][1].value,
      // name: $('#download-recipe-form')[0][0].value
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    localStorage.recipe = "show";
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
    sendEmail: 0,
    name: $('#placecard-form')[0][0].value,
    tags: {
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
    localStorage.placecard = "show";
    console.log("success")
  })
  .catch(function(res){
    showPlacecard()
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
    sendEmail: 0,
    name: $('#topic-form')[0][0].value,
    tags: {
    }
  }
  console.log(data);
  gw.supporters.create(data)
  .then(function(res){
    localStorage.topic = "show";
    console.log(res);
    console.log("success")
  })
  .catch(function(res){
    
    console.log(res);
    console.log("failure")
    $("#topic-error").append("We're sorry, an error has occured.")
  });
};

//recipe
function showRecipe() {
  
  if (localStorage.recipe == "show") {
    $("#download-recipe").show();
  } else {
    $("#download-recipe").hide();
  }
}

//placecard

function showPlacecard() {

  if (localStorage.placecard == "show") {
    $("#download-place-cards").show();
  } else {
    $("#download-place-cards").hide();
  }
}
//topic
function showTopic() {
  $("#download-topics").show();
  if (localStorage.topic == "show") {
    $("#download-topics").show();
  } else {
    $("#download-topics").hide();
  }
}
function clearBtn(){
  $("#clear-btn").on("click", function(){
    localStorage.topic = ""
    localStorage.placecard = ""
    localStorage.recipe = ""
    console.log(localStorage)
  })
}

