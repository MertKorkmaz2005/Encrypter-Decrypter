
class Main {
    encrypterView;
    decrypterView;
    htmlElement;
    app;
    constructor(data,app) {
  
      this.app = app;
      //je krijgt de app classe binne
      
      
  
      this.htmlElement = document.createElement("main");
      //maak een main
      this.htmlElement.classList.add("main");
      //geef classe main
      this.app.renderer.render(this.htmlElement, document.querySelector("body"));
      //ga naar de app ze renderer pak daarvan de render functie en render de main in de body
  
  
      this.encrypterView = new EncrypterView(this,data.encrypt);
      // de relatie naar de encrypterview
      this.decrypterView = new DecrypterView(this,data.decrypt);
      // de relatie naar de decrypterview
    }
  
    cipher(textToChiper, type){
      if(type === "ENCRYPT"){
        // als je encrypt
        this.app.encrypt(textToChiper);// dan ga naar de app en voer encrypt fucntie uit en ze t de text to chipher erin
      }else{
        this.app.decrypt(textToChiper);// hier gebeurd het zelfde maar decrypt je het 
      }
    
    }
  
    changeEncrypter(encryptedText){
      this.encrypterView.changeBody(encryptedText);
      //ga naar de encrypterview naar de changebody functie en zet daarin de encryptedtext
    }
  
    changeDecrypter(decryptedText){
      this.decrypterView.changeBody(decryptedText);
      //hier gebeurd het zelfde
    }
  }