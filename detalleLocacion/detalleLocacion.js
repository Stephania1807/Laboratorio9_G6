
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
            tablaDinamic += "<td><a href='../detalleLocacion/detalleLocacion.html?locacion-area="+ (i+283)+"' class='btn btn-primary botonDetalle'>" +"Ver Pokemones" + "</a></td>";
            tablaDinamic += "</tr>";
        }
        let regresar = data.region.url.split("/");

        let button="";
            button ="<td><a href='../detalleRegion/detalleRegion.html?region="+ regresar[6]+"' class='btn btn-primary botonDetalle'>" +"Regresar a la Region" + "</a></td>";

        $("#regresarRegion").html(button);
        $("#labelLocacion").text("Locación:" +location);
        $("#labelRegion").text("Región:" +region);
        $("#tablaAreas").html(tablaDinamic);
    }).fail(function (e){
        console.log(e)
    });

});


$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idLocacion_area = urlParams.get('area');
    let url = "https://pokeapi.co/api/v2/location-area/"+idLocacion_area;
    $.ajax({
        method:"GET",
        url:url,
    }).done(function (data){
        let listapokemones3 = data.pokemon_encounters;
        let card="";
        for(let i = 0; i<listapokemones3.length; i++){
            card +="<div>";
            card +="</div>";
        }
        $("#pokemons").html(card);
    }).fail(function (e){
        console.log(e)
    });

});

