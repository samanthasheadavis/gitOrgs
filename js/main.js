// Get info from file and when success, trigger OrgInfo constructor
$.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/jisaacks/orgs',
    error: function(responseObj, textStatus, error) {
        console.log(responseObj, textStatus, error);
    },
    success: function(data) {
        return new OrgInfo(data);
    }

});

// OrgInfo constructor
function OrgInfo(orgObject) {
    this.info = {
        name: null,
        img: null,
    };

    //  for-in loop that iterates through the seven org objects and stores name and icon image into this.info
    this.getInfo = function() {
        for (var key in orgObject) {
            this.info.name = orgObject[key].login;
            this.info.img = orgObject[key].avatar_url;
            this.createElements();
        }
    };
    //createElements method creates an orgInfo container and an <h2> and an <img> element for each org object iterated over.
    this.createElements = function() {
        var container = $('<div>').attr('class', 'orgInfo').appendTo('#container');
        var name = $('<h2>').html(this.info.name).appendTo(container);
        var img = $('<img>').attr('src', this.info.img).appendTo(container);
        //$( ".orgInfo" ).after( $( "button" ));
    };

    // the slidetoggle function makes the orginfo elements slide down when the button is clicked, and slide up again when the button is clicked again.
    $('#btn').on('click', function(event) {
        $('.orgInfo').slideToggle('slow');
    });

    this.getInfo();
}
