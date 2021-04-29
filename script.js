$.getJSON('http://api.mediastack.com/v1/news?access_key=a103ad4e4fc77ca5ef3370eb317b70fc&keywords=corona', function(response) {
    var num = Math.floor(Math.random() * 10) + 1 
    var text = `${response.data[num].title}<br>`
    var d = `${response.data[num].description}<br>`
    var image = `${response.data[num].image}<br>`
    var date = `${response.data[num].published_at}<br>`
    var author = `${response.data[num].author}<br>`
    $(".emailtitle").html(text);
    $(".emailDescription").html(d);
    $(".emailimage").html(image);
    $(".emailDate").html(date);
    $(".emailAuthor").html(author);

});
