$(function() {
    $.getJSON("https://github.com/api/v2/json/commits/list/lmatteis/selectjs-api/master/README.md?callback=?", function(data) {
        var latest_commit = data.commits[0],
            latest_commit_id = latest_commit.id;
        // now  get the README.md blob
        $.getJSON("https://github.com/api/v2/json/blob/show/lmatteis/selectjs-api/"+latest_commit_id+"/README.md?callback=?", function(data) {
            // convert markdown to html
            var md = data.blob.data;
            var converter = new Showdown.converter();
            var html = converter.makeHtml(md);

            $('#md').html(html);
        });
    });
});
