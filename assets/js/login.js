$(document).ready(function() {
	$("#loginform").on("submit", function() {
		const formData = new FormData(event.target);
	  	const data = {};
	  	formData.forEach((value, key) => (data[key] = value));
	  	console.log(JSON.stringify(data));
		$.ajax("https://85ox413pdj.execute-api.us-east-1.amazonaws.com/authenticate", {
			type: "POST",
			data: JSON.stringify(data),
		})
		.done(function (data, textStatus, jqXHR) {
		    	console.log(data);
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log(textStatus);
		});
		event.preventDefault();
	});
});
