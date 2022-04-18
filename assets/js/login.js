$(document).ready(function() {
	$("#loginform").on("submit", function() {
		const formData = new FormData(event.target);
	  	const formDataJSON = {};
	  	formData.forEach((value, key) => (formDataJSON[key] = value));
		data = "'"+JSON.stringify(formDataJSON)+"'";
		console.log(data);
		$.ajax("https://85ox413pdj.execute-api.us-east-1.amazonaws.com/authenticate", {
			type: "POST",
			data: data,
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
