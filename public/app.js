$(document).ready(function() {
    console.log("document read loaded")


    // post request
    $('.form').submit(function(event) {
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
            success: function(data, textStatus, jqXHR) {},
            error: function(jqXHR, textStatus, errorThrown) {

            }
        });
        this.reset();
    });
    //get request for rendering users to DOM
    $('#getUsers').click(function() {
        console.log('users requested')
        $.ajax({
          dataType: "json",
          url: "/users",
          type: "GET",
          data: {},
          success: function(data, textStatus, jqXHR) {
            console.log(data)
            
          },
          error: function(jqXHR, textStatus, errorThrown) {}


        })

    });


}); //close of doc ready function
