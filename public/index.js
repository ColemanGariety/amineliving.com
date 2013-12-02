setTimeout(function () {
  $("meta[name=viewport]").attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
}, 100)

$("nav a").hover(function () {
  var colors = ['red', 'blue', 'yellow']
  
  $(this).addClass(colors[Math.floor(Math.random() * colors.length)])
}, function () {
  $(this).attr('class','')
})

$('a[href="/download"]').click(function (e) {
  e.preventDefault()
  $(".stripe-button-el").trigger('click')
})

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function orientationUpdate(orientation) {
  
    if (dorientation() === 'landscape') var rotation = -orientation.beta / 4
    else var rotation = -orientation.gamma / 4
    $("#water").css('transform', 'rotate(' + rotation + 'deg)')
  }, false)
} else {
  if (typeof Storage !== 'undefined') {
    if (localStorage.transform) $("#water").css('transform', localStorage.transform)
  
    window.onbeforeunload = function () {
      localStorage.transform = $("#water").css('transform')
    }
  }

  var toggle = true
  
  void function wave() {
    
    if (toggle) {
      toggle = false
      
       $("#water").animate({
         transform: 'rotate(2deg)'
       }, 3000)
    } else {
      toggle = true
      
      $("#water").animate({
        transform: 'rotate(-2deg)'
      }, 3000)
    }
  
    setInterval(wave, 3000)
  }()
}

function dorientation() {
  var viewportWidth = window.innerWidth;
  if (viewportWidth > 320) {
    return 'landscape'
  }
  else {
    return 'portrait'
  }
}