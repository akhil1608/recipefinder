$(document).ready(function() {
	$("#loginform").on("submit", function() {
		formData = "{\"username\": \"" + $("#username").val() + "\", \"password\": \"" + $("#password").val() + "\"}";
		console.log(formData);
		$.ajax("https://85ox413pdj.execute-api.us-east-1.amazonaws.com/authenticate", {
			type: "GET",
			data: formData,
			dataType: "json"
		})
		.done(function (data, textStatus, jqXHR) {
		    	console.log(data);
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR.responseText);
		});
		event.preventDefault();
	});
});
