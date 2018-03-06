// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$(".add-burger").on("submit", function(event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		var newBurger = {
			name: $("#burger_name").val().trim()
		};

		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function() {
			console.log("added new burger");
			// Reload the page to get the updated list
			location.reload();
		});
	});

	$(".change-devoured").on("click", function(event) {
		var id = $(this).data("id");
		var devour = $(this).data("devour");

		var newDevour = {
			devoured: 1
		};

		 // Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevour
		}).then(function() {
			console.log("devoured");
			// Reload the page to get the updated list
			location.reload();
		});
	});
})