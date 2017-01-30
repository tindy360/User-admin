$(document).ready(function() {
    console.log("document read loaded")


    // post request
$('.form').submit(function(event) {
        console.log("submit hit")
        event.preventDefault();
        const email = event.target.email.value;
        const userName = event.target.userName.value;
        const password = event.target.password.value;
        console.log(email);
        const formData = {
            email,
            userName,
            password
        };


        $.ajax({
            url: "/users/add",
            type: "POST",
            data: formData,
            success: function(data, textStatus, jqXHR) {
                //data - response from server
            },
            error: function(jqXHR, textStatus, errorThrown) {

            }
        });
    });

});//close of doc ready function
