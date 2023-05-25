


class Footer {
    view;
    htmlElement;
    buttonHtmlElement;
    constructor(view, buttonText) {
      this.htmlElement = document.createElement("footer");
      //maak een footer
      this.htmlElement.classList.add("view__footer")
      //maak een classen
      this.buttonHtmlElement = document.createElement("button");
      //maak een button
      this.buttonHtmlElement.innerText = buttonText;
      // geef de button text die je meegeeft
      this.buttonHtmlElement.classList.add("view__button");
      //geef de class een button
      this.buttonHtmlElement.onclick = this.buttonClicked;
      //als je op de button clicked dan voer de arrow functie uit
      this.htmlElement.appendChild(this.buttonHtmlElement);
      //zet de button in de footer
      this.view = view;
      // sla de view op die je binnenkrijgt
      this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
      //ga naar de view via de view naar de main via de main naar de renderer en pak van de renderer de render functie en zet de htlmelement (footer)in de main
  
    }
  
    buttonClicked = () => {
      this.view.getDataFromBody();
    }
  }