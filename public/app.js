$(document).ready(function(){
  $.getJSON("ajax/users", function( data ){
    console.log(data);
    $(.json).html( data );

  })
})


// post request
