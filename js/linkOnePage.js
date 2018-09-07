$(document).ready(function() {
    $('a').click(function () {
        if( $(this).attr("href")[0] == '#' ){
            // console.log($($(this).attr("href")).children('img') );
            $('html, body').animate({
                    scrollTop: $($(this).attr("href")).offset().top
            },2000);
            // $(this).scrollIntoView({behavior: "instant", block: "start"});
        }
    });
});
