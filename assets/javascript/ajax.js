//api key//
//7s9K1paRvtAMBtvm1uOsui9v56po5P61//

//https key//
//"https://api.giphy.com/v1/gifs/random//

//build queryKey//
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript"></script> 
    $("button").on("click", function() {
        var rapper= $(this).attr("data-rapper");
        var queryURL="https://api.giphy.com/v1/gifs/search?q=" + rapper
        + "&api_key=7s9K1paRvtAMBtvm1uOsui9v56po5P61&limit5";
         
        //AJAX GET request to our queryURL//
        ajax ({
            url: queryURL,
            method: "GET"
        })
.then(function(response) {
    var requests= response.data;
    console.log(response)
});

//create a loop

for (var i=0; i< requests.length; i==)
{


}


