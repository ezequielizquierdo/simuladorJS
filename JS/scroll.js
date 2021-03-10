// Scrollear desde header hasta las cotizaciones.3

$("a").click(function(event){
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $("#preciosmedios").offset().top
    }, 500);
});
