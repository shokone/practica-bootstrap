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

function init_map() {
    var var_location = new google.maps.LatLng(45.430817, 12.331516);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Venice"
    });

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_marker.setMap(var_map);

}


