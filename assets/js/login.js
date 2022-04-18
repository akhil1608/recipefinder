$(document).ready(function() {
	$("#loginform").on("submit", function() {
		const formData = new FormData(event.target);
	  const data = {};
	  formData.forEach((value, key) => (data[key] = value));
	  console.log(JSON.stringify(data));
		$.ajax({
			type: "POST",
			url: "post.php",
			data: JSON.stringify(data),
			success: function (data) {
			  $("#errormsg").text("success");
			},
			error: function(xhr,status,error) {
				$("#errormsg").text(error);
			}
		});
		$("#errormsg").show();
		event.preventDefault();
	});
});