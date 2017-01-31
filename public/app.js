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
            error: function(jqXHR, textStatus, errorThrown) {}

        });
        this.reset();
        $('#formModal').modal('hide');
    }); //submit closes
    //get request for rendering users to DOM
    function retreiveUsers() {
        $.getJSON("/users", function(users) {
            renderUsers(users);
        });
    };

    function renderUsers(users) {
        console.log(users);
        $.each(users, function(i, value) {

            $('#userTable').append('<tr><td>' + value.userName + '</td><td>' + value.email + '</td><td>' + '<button type="button" class="btn btn-danger btn-sm">Delete User</button>' + '</td></tr>')
        });
    }
    retreiveUsers();
}); //close of doc ready function
