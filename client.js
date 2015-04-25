console.log("client linked");
//dom references
var button = $("#submitbutton");
var form = $("#mainform");
var template = $("#template").text();
var clearbutton = $("#clearbutton");

//listeners
button.on("click", function(event){
    $("#container").empty();
    $.ajax({
        url: "https://api.github.com/users/"+ form.val() + "/followers",
        type: "GET";
    }).done(function(data){
        console.log(data);
        data.forEach(function(e){
            var name = e.login;
            var avatar = e.avatar_url;
            var type = e.type;
            var url = e.html_url;
            var rendered = Mustache.render(template, {name: name, avatar: avatar, type:type, url: url});
            $("#container").append(rendered);
        })
    })
})

clearbutton.on("click", function(event){
    $("#container").empty();
})