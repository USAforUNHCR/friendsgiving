'user-strict'

$(document).ready(function(){
	var gw = new Groundwork({
    'api-url': 'https://un.dev.thegroundwork.com',
		'oauth_client_id': 'pub-un-test.refugee-survey-int-30wNLFqA4VCph7fWteAfRartPvyFP7XEuvE.XSI21OEpd4MFgLOqRPcGSdOTVxohT1XU18eLBVflSM2WjIHigw'
  });


});

function submitRecipe(){
	$form = $("#create-recipe-form");

	$form.submit(function(event){
		console.log(event);
		event.preventDefault();

		$ajax({
			type: "POST",
			url: '//nyc.us11.list-manage.com/subscribe/post-json?u=7aa897cfc40f7cfbb83ffadd4&amp;id=c8e53459bc&c=?',
			data: $form.serialize(),
			timeout: 5000,
			cache: false,
			dataType: 'jsonp',
			contentType: "application/json; charset=utf-8",
			error: function(err) {console.log("Error.")},
			success: function(data){
				if (data.result != "success") {
					console.log("error")
				} else {
					console.log("success")
				}
			}
		})
	})
}

function sendData(id,network,gw){
  var data = {
    source: "friendsgiving signup",
    email: "junk@junk.com",
    tags: {
      id: id,
      network: network
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