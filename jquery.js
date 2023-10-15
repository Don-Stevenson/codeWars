const mobileViewCheck = () => $(window).width() <= 450

$(window).on("resize", function () {
  return mobileViewCheck()
})

$(".ftitle").click(function () {
  if (mobileViewCheck()) {
    $(this).next().find(".hs-menu-wrapper ul").slideToggle(250)
    $(this).toggleClass("fmenu-open")
    return false
  }
})
