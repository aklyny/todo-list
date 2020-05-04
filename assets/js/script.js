$("ul").on("click","li ",function(){
     $(this).toggleClass("add");
     
});

$("ul").on("click","span",function(dass){
	$(this).parent().fadeOut(500,function(){
      $(this).remove();
	});
	dass.stopPropagation();
});

$("input[type ='text'").keypress(function(dass){
	if (dass.which===13) {
		var ent = $(this).val();
		$(this).val(""); 
		$("ul").append(" <li><span><i class='fa fa-trash'></i></span> "  + ent + "</li>");	
	}

});
$(".fa-plus-circle").click(function(){
	$("input[type='text'").fadeToggle();
});