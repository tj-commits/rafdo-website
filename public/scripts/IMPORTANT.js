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