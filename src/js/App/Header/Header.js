
class Header {
    view;
    htmlElement;
    headingHtmlElement;
    constructor(view, headingText) {
      
      this.htmlElement = document.createElement("header");
      //maak een header
      this.htmlElement.classList.add("view__header");
      //maak een class header
      this.headingHtmlElement = document.createElement("h1");
      //maak een h1
      this.headingHtmlElement.innerText = headingText;
      //geef de h1 de data die je mee krijgt heading text
      this.headingHtmlElement.classList.add("view__heading")
      this.htmlElement.appendChild(this.headingHtmlElement);
      this.view = view;
      //je slaat de view op
      this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
      //via de view ga je naar de main via de main ga je naar de app via de app ga je naar de renderer en daarvan pak je de render functie en zet je de header in de main
    }
  }