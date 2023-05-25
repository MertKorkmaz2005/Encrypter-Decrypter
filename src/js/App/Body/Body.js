


class Body {
    view;
    htmlElement;
    inputHtmlElement;
    text;
    constructor(view, object) {
     
      this.htmlElement = document.createElement("section");
      //maak een section
      this.htmlElement.classList.add("view__body");
      //maak een class
      this.inputHtmlElement = document.createElement("textarea");
      //maak een textarea
      this.inputHtmlElement.classList.add("view__input")
      //geef class
      this.htmlElement.appendChild(this.inputHtmlElement);
      //zet de textarea in de sextion
      this.inputHtmlElement.placeholder = object.placeholder;
      //zet in de textarea de de data zijn place holder
      this.inputHtmlElement.value = object.value;
      //zet ook de value erin
      this.text =object.value
      //zet de object.vlue in een variabele
  
      this.inputHtmlElement.oninput = this.typed;
      //doe in de input elment de oninput functie en zet daarin de object.value
      this.view = view;
      //sla view op
      this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
      //ga naar de view en ga via de view naar de main en ga via de main naar de app en via de app naar de renderer en pak de functie render en de section in de view
  
  
    }
  
    typed = (event) => {
      this.text = event.target.value;
      // zet in de de text de event en de target en zet daar de value in /// VRAAG JEROEN
    }
  
    changeBody(newText){
      this.inputHtmlElement.value = newText;
      //de nieuwe text die je binnenkrijgt is de nieuwe value
    }
  }