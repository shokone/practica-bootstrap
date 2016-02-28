/**
 * funcion para la carga de imágenes en el slider
 */
function sliderHome() {
    $(function() {
        $('#slider a:gt(0)').hide();
        var tiempo = setInterval(changeDiv, 6000);
        //funcion para cambiar de una imagen a otra
        function changeDiv() {
            $('#slider a:first-child').fadeOut(1000).next('a').fadeIn(1000).end().appendTo('#slider');
        };
        //cambiar a la siguiente imagen al hacer click
        $('.mas').click(function() {
            changeDiv();
            clearInterval(tiempo);
            tiempo = setInterval(changeDiv, 6000);
        });
        //cambiar a la anterior imagen al hacer click
        $('.menos').click(function() {
            $('#slider a:first-child').fadeOut(1000);
            $('#slider a:last-child').fadeIn(1000).prependTo('#slider');
            clearInterval(tiempo);
            tiempo = setInterval(changeDiv, 6000);
        });
    });
}


