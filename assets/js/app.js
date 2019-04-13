// VARIABLES

// FUNCTIONS

$(document).ready(function(){


function get_articles(search_term){
    $("#formGroupInput1").on("keyup",function(){
        if($(this) === "return"){
            console.log($(this));
        }        
    })
    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=qLYGpSGjKjv43FYGw3Uvv2prfXcCzCU7",
        method: "GET"
    }).then(function(searchTerm){
        // console.log(searchTerm.response.docs);
        var article_array;
        article_array = searchTerm.response.docs;
        console.log(article_array);
        
        for(let i=article_array.length-1;i>0;i--){
            var newdiv = $('<div class="card">');
            newdiv.addClass("results");
            newdiv.append('<a href="'+article_array[i].web_url+'"><h3 class="card-title">'+ article_array[i].headline.main + '</h3></a>');
            newdiv.append('<p class="card-body">' + article_array[i].snippet + '</p>');
            $("#result_card").append(newdiv);
        }
    })
}


get_articles();
});