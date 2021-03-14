$("h1").css("color","red");
 $(document).keydown(function(event){
     var as = event.key;
    $("h1").text(as);
});
