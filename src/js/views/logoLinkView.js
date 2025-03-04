import View from "./view";

class LogoLinkView extends View {
  constructor() {
    super();
    this._logo =  document.querySelector('.logo__link')
    this._addHandlerLogoLink();
  }

  _addHandlerLogoLink() {
    this._logo.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = window.location.origin + window.location.pathname;
    });
  }
}

export default new LogoLinkView();
