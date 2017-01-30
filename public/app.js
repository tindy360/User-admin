$(document).ready(function(){
  console.log("loaded")
  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// post request
//wrap in on submit function
/* $(.form).submit(function(event) {
  console.log('getting here')
   const email = $(this).find(.email).val();
   const userName = $(this).find(.email).val();
   const password = $(this).find(.email).val();
   const formData = {email, userName, password};
   console.log(formdata.val)

    $.ajax({
        url: "ajax/users/add",
        type: "POST",
        data: formData,
        success: function(data, textStatus, jqXHR) {
            //data - response from server
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}); */

});
