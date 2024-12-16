$(document).ready(function() {
    $("#contact-form").submit(function(event) {
        event.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name == "" || email == "" || message == "") {
            alert("All fields must be filled out.");
        } else {
            alert("Thank you for contacting us!");
        }
    });
});
