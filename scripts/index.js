$(document).ready(() => {
    $("#menu").click(() => {
        $(".tohide").slideToggle("slow")
    })
    getmenuback()
})

let getmenuback = () => {
    if ($(window).width() > 768) {
        $(".tohide").slideDown("fast")
    } else {
        $(".tohide").slideUp("fast")
    }
    if ($(window).width() > 1080) {
        $("#desc").slideDown("fast")
    } else {
        $("#desc").slideUp("fast")
    }
}

$(window).on("resize", getmenuback)
