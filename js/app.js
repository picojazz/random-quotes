$(document).ready(function(){

var array = ["#1abc9c","#3498db","#9b59b6","#34495e","#95a5a6","#e74c3c","#f1c40f","#7f8c8d"]  ;
var i = 0;
    var j = 0;
    if(j>6){
        j=0;
    }
$("#button").on("click",function(e){
    e.preventDefault();

    $(".titre").css("color : red ;");

    $.getJSON('https://jsonp.afeld.me/?callback=?&url=http://quotes.stormconsultancy.co.uk/random.json', function(a) {

    var quote = a.quote;
    var author= a.author;

  $(".content").html(quote);
  $(".author").html(author);
  $(".tweet ").attr("href","https://twitter.com/intent/tweet?&text="+quote+'    '+author+" ");

        i++;

});
    $(".titre").css("color",array[j]);
    var s;
    s ={
        color : array[j]


    }
    $(".blockquote").css(s);
    $("#button").css("background-color",array[j]);
    j++
    if(j>6){
        j=0;
    }

});



});



