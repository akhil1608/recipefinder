$(document).load(function() {
	console.log(document.cookie);
	if (document.cookie.includes("username"))
		$(location).attr("href", "https://akhil1608.github.io/recipefinder");
});
$(document).ready(function() {
	$("#loginform").on("submit", function() {
		$("#errormsg").hide();
		formData = { "username": $("#username").val(), "password": $("#password").val() };
		$.ajax("https://85ox413pdj.execute-api.us-east-1.amazonaws.com/authenticate", {
			type: "GET",
			data: formData,
			dataType: "json"
		})
		.done(function (data, textStatus, jqXHR) {
			if (data.Count == 1) {
				document.cookie = "username=" + $("#username").val() + "; path=/";
				$(location).attr("href", "https://akhil1608.github.io/recipefinder");
			}
			else {
				$("#errormsg").text("Invalid username/password.");
				$("#errormsg").show();
			}
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			$("#errormsg").text("Server error. Try again later.");
			$("#errormsg").show();
		});
		event.preventDefault();
	});
});
// document.cookie = "username=;expires=" + new Date(0).toUTCString()
