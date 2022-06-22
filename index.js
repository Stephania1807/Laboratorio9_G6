
$(document).ready(function () {
    let url = "https://pokeapi.co/api/v2/region"
    $.ajax({
        method:"GET",
        url:url,
    }).done(function (data){
        let listapokemones = data.results;
        console.log(listapokemones);
        console.log(listapokemones.length);
        let tablaDinamic="";
        for(let i = 0; i<listapokemones.length; i++){
            tablaDinamic += "<tr>";
            tablaDinamic += "<td>" + (i + 1) + "</td>";
            tablaDinamic += "<td>"+ listapokemones[i].name + "</td>";
            tablaDinamic += "<td><a href='detalleRegion/detalleRegion.htm?region="+ (i+1)+"' class='btn btn-primary'>" +"Detalles" + "</a></td>";
            tablaDinamic += "</tr>";
        }

        $("#body-paises").html(tablaDinamic);
    }).fail(function (e){
        console.log(e)
    });


});