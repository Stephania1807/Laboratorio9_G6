
$(document).ready(function () {
    // Metodo de obtención de parámetros

    const urlParams = new URLSearchParams(window.location.search);
    const idRegion = urlParams.get('region');
    let url = "https://pokeapi.co/api/v2/region/"+idRegion;
    $.ajax({
        method:"GET",
        url:url,
    }).done(function (data){
        let listapokemones1 = data.locations;
        let region = data.name;
        console.log(listapokemones1);
        console.log(listapokemones1.length);
        let tablaDinamic="";
        for(let i = 0; i<listapokemones1.length; i++){
            tablaDinamic += "<tr>";
            tablaDinamic += "<td>" + (i + 1) + "</td>";
            tablaDinamic += "<td>"+ listapokemones1[i].name + "</td>";
            tablaDinamic += "<td><a href='../detalleLocacion/detalleLocacion.html?locacion="+ (i+67)+"' class='btn btn-primary botonDetalle'>" +"Detalles" + "</a></td>";
            tablaDinamic += "</tr>";
        }
        $("#labelRegion").val(region);
        $("#tablaLocaciones").html(tablaDinamic);
    }).fail(function (e){
        console.log(e)
    });

});
