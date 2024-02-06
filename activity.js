$(document).ready(function () {
    $("td").hover(function () {
        if ($(this).html() != "Not Available") {
            $(this).css("cursor", "pointer");
        }
    },
        function () {
            this.css("cursor", "default");
        });
    $(document).click(function (e) {
        var target = $(e.target).closest("td");
        if (target.html() != "Not Available") {
            target.toggleClass("highlight");
        }
    });
});