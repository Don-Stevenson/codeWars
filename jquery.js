const mobileViewCheck = () => $(window).width() <= 450

$(".ftitle").click(function () {
  if (mobileViewCheck()) {
    $(this).next().find(".hs-menu-wrapper ul").slideToggle(250)
    $(this).toggleClass("fmenu-open")
    return false
  }
})
