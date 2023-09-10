
// Check if the user is on a mobile device
function isMobileDevice(): boolean {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
}

export default isMobileDevice