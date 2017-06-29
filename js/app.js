$(function() {
            $("#fadeOut").click(function() {
                $("#project1").fadeOut("normal");
            });
            $("#fadeIn").click(function() {
                $("#project1").fadeIn("normal");
            });
            
            
        });
$(document).ready(function(){
    panel_go();
}
);

function panel_go() {

    $('.info_panel').each(function(){

        var link_text = $(this).attr('data-link-text');
        var content = $(this).html();

        $(this).html('<div class="info_panel_content_container"> <div class="info_panel_content">'+content+'</div></div>');


        $(this).append('<div class="info_panel_trigger">' + link_text+'</div>');

    });
}

    /*$(".col-4-projects").hover(function() {
        $("#project1").animate({ 
            width: "500px", 
            length: "500px" });
       }); */
