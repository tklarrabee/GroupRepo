// VARIABLES
var article_array;
// FUNCTIONS


function get_articles(search_term){

    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=qLYGpSGjKjv43FYGw3Uvv2prfXcCzCU7",
        method: "GET"
    }).then(function(searchTerm){
        // console.log(searchTerm.response.docs);
        article_array = searchTerm.response.docs;
        console.log(article_array);
        
        for(let i=article_array.length;i>0;i--){
            var newdiv = $('<a src="'+ article_array[i].web_url +'">');
            newdiv.addClass("results");
            newdiv.append('<h3>'+ article_array[i].headline.main + '</h3>');
            // console.log(article_array[i].headline.main);
            newdiv.append('<p>' + article_array[i].snippet + '</p>');
            // console.log(article_array[i].snippet);
            // newdiv.attr("data-link",article_array[i].web_url);
            // console.log(article_array[i].web_url);
        }
    })
}


get_articles();