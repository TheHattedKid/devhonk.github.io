var files = ls("./ba").filter(function(file) {
    return file.endsWith(".md");
});
for(var i = 0; i < files.length; i++) {
    var f = files[i];
    log("Baking \"" + f + "\"...")
    exec("bamaker ./ba/" + f + " ./ba/" + f.replace(".md", ".html"));
    exec("google-chrome ./ba/" + f.replace(".md", ".html"))
}