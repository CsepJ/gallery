document.addEventListener("DOMContentLoaded", () => {
    $("a").hover((e) => {
        $(e.target).css("color", "#c92828");
    }, (e) => {
        $(e.target).css("color", "#286bc9");
    })
})