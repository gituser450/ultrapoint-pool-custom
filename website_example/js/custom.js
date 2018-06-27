/* Insert your pool's unique Javascript here */

var coinLogoUrl = 'http://104.219.251.190:7000/images/ultrapoint_logo.png'
var coinName = 'Ultrapoint'
var coinSymbolElt = document.getElementById('coinSymbol')
var coinLogoBrandElt = document.createElement('span')

document.getElementsByTagName('title')[0].innerText = coinName + ' Mining Pool'

coinLogoBrandElt.setAttribute('id', 'coinLogo')
coinLogoBrandElt.innerHTML = '<img src="' + coinLogoUrl + '" alt="coinLogo">'

if (coinSymbolElt) coinSymbolElt.parentElement.insertBefore(coinLogoBrandElt, coinSymbolElt)
