// VARIABLES

// FUNCTIONS

$(document).ready(function(){


function get_articles(search_term, how_many, start_year, end_year){


    
    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search_term+"&?end_date="+end_year+"&?begin_date="+start_year+"&api-key=qLYGpSGjKjv43FYGw3Uvv2prfXcCzCU7",
        method: "GET"
    }).then(function(searchTerm){
        // console.log(searchTerm.response.docs);
        var article_array;
        article_array = searchTerm.response.docs;
        // console.log(article_array);
        
        for(let i=0;i<how_many;i++){
            var newdiv = $('<div class="card">');
            newdiv.addClass("results");
            newdiv.append('<a href="'+article_array[i].web_url+'"><h3 class="card-title">'+ article_array[i].headline.main + '</h3></a>');
            newdiv.append('<p class="card-body">' + article_array[i].snippet + '</p>');
            $("#result_card").append(newdiv);
        }
    })
}

$("#search_button").on("click",function(){

    var searchTerm = $("#formGroupInput1").val();
    var how_many = $("#formGroupSelect").val();
    var start_year = $("#formGroupInput2").val();
    var end_year = $("#formGroupInput3").val();
    $("#result_card").empty();
    get_articles(searchTerm,how_many,start_year,end_year);

})



// get_articles();
});