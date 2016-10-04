// Get info from file and when success, trigger

$.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/jisaacks/orgs',
    success: function(data) {
        return new OrgInfo(data);
    }
});

function OrgInfo(orgObject) {
    // console.log(orgObject);
    this.info = {
        name: null,
        img: null,
    };

    this.getInfo = function() {
        for (var key in orgObject) {
            this.info.name = orgObject[key].login;
            // this.info.url= orgObject[key].url;
            this.info.img = orgObject[key].avatar_url;
            console.log(this.info);
            this.createElements();
        }

    };

    this.createElements = function() {
        var container = $('<div>').attr('class', 'orgInfo').appendTo('#container');
        var name = $('<h2>').html(this.info.name).appendTo(container);
        var img = $('<img>').attr('src', this.info.img).appendTo(container);
        //$( ".orgInfo" ).after( $( "button" ));
    };

    this.getInfo();
}


// this.createElements();
