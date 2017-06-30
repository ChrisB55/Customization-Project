// Simple remove item functionality. 
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
// This function creates html architecture for dropdown windows. 
function panel_go() {

    $('.info_panel').each(function(){

        var link_text = $(this).attr('data-link-text');
        var info = $(this).html();

        $(this).html('<div class="info_panel_content_container" style="height:0px;"> <div class="info_panel_content">'+info+'</div></div>');


        $(this).append('<div class="info_panel_trigger">' + link_text+'</div>');

    });

    rollout_panels();
}
// This function allow each panel to roll down and return. 
function rollout_panels() {
    $('.info_panel .info_panel_trigger').on('click', function() {
        var new_height = null;

        var rollout_panel= $(this).closest('.info_panel');
        var rollout_info = rollout_panel.find('.info_panel_content_container');

        rollout_panel.toggleClass('open');

        if( rollout_panel.hasClass('open') ){
            new_height = rollout_panel.find('.info_panel_content').outerHeight(true);
        }
        else {
            new_height = 0;
        }

        rollout_info.animate({
            'height':new_height+'px'
        }, 500);

    });
}
    /*$(".col-4-projects").hover(function() {
        $("#project1").animate({ 
            width: "500px", 
            length: "500px" });
       }); */
