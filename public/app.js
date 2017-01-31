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
        console.log('users requested'),
        $.getJSON("/users", function(users){
          renderUsers(users);
        })
    });

function renderUsers(users){
  console.log(users);
 $.each(users, function(i, value) {
   console.log(value.email),
   $('ul').append('<li>' + value.userName + '|' + '&nbsp' + value.email + '</li>')
 });
}

}); //close of doc ready function
