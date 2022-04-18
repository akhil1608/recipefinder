$(document).ready(function() {
	$("#loginform").on("submit", function() {
		formData = { "username": $("#username").val(), "password": $("#password").val() };
		console.log(formData);
		$.ajax("https://85ox413pdj.execute-api.us-east-1.amazonaws.com/authenticate", {
			type: "GET",
			data: formData,
			dataType: "json"
		})
		.done(function (data, textStatus, jqXHR) {
			if (data.Count == 1)
				$(location).attr("href", "https://google.com");
			else {
				$("errormsg").text("Invalid username/password.");
				$("errormsg").show();
			}
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			$("errormsg").text("Server error. Try again later.");
			$("errormsg").show();
		});
		event.preventDefault();
	});
});
