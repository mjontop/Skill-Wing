$(document).ready(() => {
    $("#menu").click(() => {
        $(".tohide").slideToggle("slow")
    })
})

let getmenuback = () => {
    if ($(window).width() > 768) {
		$(".tohide").slideDown("fast")
	}
	else{
		$(".tohide").slideUp("fast")
	}
}

$(window).on("resize", getmenuback)
