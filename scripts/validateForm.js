        function validateForm() {
            var name = document.forms["rsvp"]["name"].value;
            var surname = document.forms["rsvp"]["surname"].value;
            var email = document.forms["rsvp"]["email"].value;
            if (name == null || name == "") {   <!--Validate first name-->
                alert("Please enter a first name");
                return false;
            }
            else if (surname == null || surname == "") { <!--Validate surname-->
                alert("Please enter a surname");
                return false;
            }
            else if (email == null || email == "") {    <!--Validate email-->
                alert("Please enter an email address");
                return false;
            }
            else {
                alert("Thank you for sending your RSVP");
            }
        }