$('a[href^="#"]').on("click",function(t){var e=$(this.getAttribute("href"));e.length&&(t.preventDefault(),$("html, body").stop().animate({scrollTop:e.offset().top},1e3))});
