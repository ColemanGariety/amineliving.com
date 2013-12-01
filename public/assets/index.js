setTimeout(function () {
  $("meta[name=viewport]").attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
}, 100)

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function orientationUpdate(orientation) {
  
    if (dorientation() === 'landscape') var rotation = -orientation.beta / 4
    else var rotation = -orientation.gamma / 4
    $("#water").css('transform', 'rotate(' + rotation + 'deg)')
  }, false)
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