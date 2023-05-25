

class EncrypterView {
    header;
    body;
    footer;
    main;
    htmlElement;
    type;
    constructor(main, object) {
      this.htmlElement = document.createElement("article");
      //maak een article
      this.htmlElement.classList.add("view");
      //maak een class in de article
  
      this.main = main;
      //sla de main op
      this.type = "ENCRYPT"
      // zeg dat de type encrypt zodat ie hem herkent in de functies
  
  
      this.main.app.renderer.render(this.htmlElement,this.main.htmlElement);
      //ga naar de main en ga via de main naar de renderer class en pak daar de functie render en render  de article in de main
      this.header = new Header(this, "Encrypter");
      // relatie naar de header
      this.body = new Body(this, object);
      //relatie naar de body
      this.footer = new Footer(this, "Encrypter");
      //relatie naar de footer
     
    }
  
    getDataFromBody(){
      this.main.cipher(this.body.text, this.type);
      // pak van de main de functie cipher en zet in de functie de body zijn text de type die je hier meegeeft
    }
  
    changeBody(encryptedText){
      this.body.changeBody(encryptedText);
      //ga naar de body en pak daar de changebody en zet daar in ecryptedtext
  
    }
  }