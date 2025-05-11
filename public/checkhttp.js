/*if(!location.href.includes('imagequest')) {



function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if (new URLSearchParams(location.search).get('rs_ip') == null && getCookie('IPSTORED').valueOf() !== 'yes') {
fetch("https://api.ipify.org?format=json")
	.then(response => response.json())
	.then(data => {
        if (location.search === '') {
            location.replace(location.href + '?rs_ip=' + btoa(data.ip))
        } else {
            location.replace(location.href + '&rs_ip=' + btoa(data.ip))
        }
        var date = new Date()
document.cookie = "IPSTORED=yes;"
	})

}

if (!location.hostname.startsWith('www')) {
    location.replace('https://www.' + location.href.split('://').reverse()[0])
}
}*/

function changeUrlWithoutRefresh(newUrl) {
  window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      '',
      newUrl
  );
}
if (location.pathname.endsWith('.html')) {

  changeUrlWithoutRefresh(location.pathname.split('.html')[0] + (location.search) + (location.href.split('#')[1] ? ("#" + location.href.split('#')[1]) : ''))
}
if (location.href.endsWith('index')) {
  changeUrlWithoutRefresh(location.href.split('index')[0])
}