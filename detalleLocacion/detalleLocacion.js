
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idLocacion = urlParams.get('locacion');

    let url = "https://pokeapi.co/api/v2/location/"+idLocacion;
    $.ajax({
        method:"GET",
        url:url,
    }).done(function (data){
        let listapokemones2 = data.areas;
        console.log(listapokemones2);
        console.log(listapokemones2.length);
        let tablaDinamic="";
        for(let i = 0; i<listapokemones2.length; i++){
            tablaDinamic += "<tr>";
            tablaDinamic += "<td>" + (i + 1) + "</td>";
            tablaDinamic += "<td>"+ listapokemones2[i].name + "</td>";
            tablaDinamic += "<td><a href='detalleLocacion/detalleLocacion.html?location="+ (i+1)+"' class='btn btn-primary botonDetalle'>" +"Detalles" + "</a></td>";
            tablaDinamic += "</tr>";
        }

        $("#tablaAreas").html(tablaDinamic);
    }).fail(function (e){
        console.log(e)
    });

});