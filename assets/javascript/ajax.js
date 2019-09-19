//api key//
//7s9K1paRvtAMBtvm1uOsui9v56po5P61//

//https key//
//"https://api.giphy.com/v1/gifs/random//

//build queryKey//
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src= "assets/javascript/ajax.js"></script>
    $("button").on("click", function() {
        var rapper= $(this).attr("data-rapper");
        var queryURL="https://api.giphy.com/v1/gifs/search?q=" + rapper
        + "&api_key=7s9K1paRvtAMBtvm1uOsui9v56po5P61&limit5";
         
        //AJAX GET request to our queryURL//
        $.ajax ({
            url: queryURL,
            method: "GET"
        })
.then(function(response) {
    var requests = response.data;
    var rating = ratings[i].ratings;
    console.log(response)
});

//Loop through results 

for (var i=0; i< requests.length; i==)
{
     if (requests[i].ratings=== "pg-13" && requests.ratings!== "r") {
             // Creating a div for the gif
             var gifDiv = $("<div>");

             // Storing the result item's rating
             var rating = requests[i].ratings;

             // Creating a paragraph tag with the result item's rating
             var p = $("<p>").text("Rating: " + ratings);

             // Creating an image tag
             var rapperImage = $("<img>");

             // Giving the image tag an src attribute of a proprty pulled off the
             // result item
             rapperImage.attr("src", requets[i].images.fixed_height.url);

             // Appending the paragraph and personImage we created to the "gifDiv" div we created
             gifs.append(p);
             gifs.append(rapperImage);

             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
             $("#gifs-appear-here").prepend(gifDiv);


    }

}
    