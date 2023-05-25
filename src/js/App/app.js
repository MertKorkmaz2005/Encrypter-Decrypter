


class App {
    decrypter;
    encrypter;
    api;
    cleaner;
    renderer;
    main;
    constructor() {
      this.encrypter = new Encrypter();
      //relatie naar de encrypter
      this.decrypter = new Decrypter();
      //relatie naar de decrypter
      this.cleaner = new cleaner();
      //relatie naar de cleaner
      this.renderer = new Renderer();
      //relatie naar de renderer
      this.api = new API();
      //relatie naar de api
      this.api.getData("/src/data/data.json").then( (data) => {
        this.main = new Main(data,app);
        //je moet de api megeven aan de main
      });
  
    }
  
    encrypt(textToEncrypt){
      const encrypted = this.encrypter.encrypt(textToEncrypt);
      //maak een variabele die de encrypter zijn encrypt functie uitvoert met de text die hij meekrijgt
      this.main.changeEncrypter(encrypted);
      //de main zijn changeencrypter functie gaat werken in de encrypted
    }
  
    decrypt(textToDecrypt){
      const decrypted = this.decrypter.decrypt(textToDecrypt);
      //wat in de encrypted gebeurd gebeurd hier ook
      this.main.changeDecrypter(decrypted);
  
    }
  
  }
  
