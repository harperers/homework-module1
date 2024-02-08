$(document).ready(function () {
    $("td").hover(function () {
        if ($(this).html() != "Not Available" && $(this).html() != "Hiking" && $(this).html() != "Kayak" && $(this).html() != "Skydiving" && $(this).html() != "Biking" && $(this).html() != "Camping") {
            $(this).css("cursor", "pointer");
        }
    },
        function () {
            this.css("cursor", "default");
        });
    $(document).click(function (e) {
        var target = $(e.target).closest("td");
        if (target.html() != "Not Available" && target.html() != "Hiking" && target.html() != "Kayak" && target.html() != "Skydiving" && target.html() != "Biking" && target.html() != "Camping") {
            target.toggleClass("highlight");
        }
    });
});