

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
            let id = listapokemones2[i].url.split("/");
            tablaDinamic += "<td><button class='btn btn-primary pokemones' value='" + listapokemones2[i].url +"'>" +"Ver Pokemones" + "</button></td>";
            tablaDinamic += "</tr>";
        }
        let regresar = data.region.url.split("/");

        let button="";
            button ="<td><a href='../detalleRegion/detalleRegion.html?region="+ regresar[6]+"' class='btn btn-primary botonDetalle'>" +"Regresar a la Region" + "</a></td>";

        $("#regresarRegion").html(button);
        $("#labelLocacion").text("Locación: " +location);
        $("#labelRegion").text("Región: " +region);
        $("#tablaAreas").html(tablaDinamic);

    }).fail(function (e){
        console.log(e)
    });
    $("#tablaAreas").on("click", ".pokemones",function (){
        url = $(this).val();
        $("#pokemons").empty();
        $.get(url).done(function (data){
            $("#areaSeleccionada").html("Pokemons a encontrarse en el area: "+data.name);
            let listapokemones = data.pokemon_encounters;
            for(let i = 0; i<listapokemones.length; i++){
                $.get(listapokemones[i].pokemon.url).done(function (pikachu){
                    console.log(pikachu);
                    $("#pokemons").append("<div style='border: solid; margin-left: 50px; margin-right: 50px; margin-bottom: 50px' class='col-2'>" +
                        "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/version\n" +
                        "s/generation-v/black-white/animated/" +pikachu.id+".gif'> <br>" +pikachu.name +" </div>")
                }).fail(function (ee){
                    console.log(ee);
                })

            }

        }).fail(function (e){
            console.log(e);
        });
    });
});
