$(document).ready(function(){
    $("a.register-btn").click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1200);
    });
});