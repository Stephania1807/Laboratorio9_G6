
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
        let location = data.name;
        let region = data.region.name;
        console.log(listapokemones2);
        console.log(listapokemones2.length);
        let tablaDinamic="";
        for(let i = 0; i<listapokemones2.length; i++){
            tablaDinamic += "<tr>";
            tablaDinamic += "<td>" + (i + 1) + "</td>";
            tablaDinamic += "<td>"+ listapokemones2[i].name + "</td>";
            tablaDinamic += "<td><a href='' class='btn btn-primary botonDetalle'>" +"Ver Pokemones" + "</a></td>";
            tablaDinamic += "</tr>";
        }
        $("#labelLocacion").val(location);
        $("#labelRegion").val(region);
        $("#tablaAreas").html(tablaDinamic);
    }).fail(function (e){
        console.log(e)
    });

});