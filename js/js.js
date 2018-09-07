var subMenu = document.getElementById('submenu'),
    articleArea = document.getElementById('article-area');

subMenu.addEventListener("mouseleave", function () {
    $('#submenu').collapse('toggle')
})

function populateArticle() {
    var article =
        articleArea.innerHTML =  "<h1>" + "All About Dave" +  "</h1>" +
        "<p>" +  "Dave is a pretty cool guy" + 
        "</p>"
    }