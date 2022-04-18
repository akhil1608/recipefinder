$(document).ready(function() {
	$("#loginform").on("submit", function() {
		const formData = new FormData(event.target);
	  	const data = {};
	  	formData.forEach((value, key) => (data[key] = value));
	  	console.log(JSON.stringify(data));
		$.ajax({
			type: "POST",
			url: "https://85ox413pdj.execute-api.us-east-1.amazonaws.com/authenticate",
			data: JSON.stringify(data),
			success: function (data) {
			  console.log(data);
			},
			error: function(xhr,status,error) {
				console.log(error);
				$("#errormsg").text(error);
				$("#errormsg").show();
			}
		});
		event.preventDefault();
	});
});
