class Encrypter {
    encrypt(stringToEncrypt) {
      // dit is een funtie om text te encrypten
      stringToEncrypt = stringToEncrypt.toUpperCase();
      // dit zorgt ervoor dat je de text opneemt in uppercase
      let encyptedString = [];
      // je maakt hier een lege array waar de text inkomt
      for (let i = 0; i < stringToEncrypt.length; i++) {
        // je maakt hier een for loop waar je  zegt dat als de stringtoencrypt kleiner is dan i dan moet je het uitvoeren
        switch (stringToEncrypt[i]) {
          case "A":
            encyptedString.push("D");
            break;
          case "B":
            encyptedString.push("E");
            break;
          case "C":
            encyptedString.push("F");
            break;
          case "D":
            encyptedString.push("G");
            break;
          case "E":
            encyptedString.push("H");
            break;
          case "F":
            encyptedString.push("I");
            break;
          case "G":
            encyptedString.push("J");
            break;
          case "H":
            encyptedString.push("K");
            break;
          case "I":
            encyptedString.push("L");
            break;
          case "J":
            encyptedString.push("M");
            break;
          case "K":
            encyptedString.push("N");
            break;
          case "L":
            encyptedString.push("O");
            break;
          case "M":
            encyptedString.push("P");
            break;
          case "N":
            encyptedString.push("Q");
            break;
          case "O":
            encyptedString.push("R");
            break;
          case "P":
            encyptedString.push("S");
            break;
          case "Q":
            encyptedString.push("T");
            break;
          case "R":
            encyptedString.push("U");
            break;
          case "S":
            encyptedString.push("V");
            break;
          case "T":
            encyptedString.push("W");
            break;
          case "U":
            encyptedString.push("X");
            break;
          case "V":
            encyptedString.push("Y");
            break;
          case "W":
            encyptedString.push("Z");
            break;
          case "X":
            encyptedString.push("A");
            break;
          case "Y":
            encyptedString.push("B");
            break;
          case "Z":
            encyptedString.push("C");
            break;
          default:
            encyptedString.push(stringToEncrypt[i]);
            break;
        }
        //hier zeg je dat als z intikt bivoorbeeld c uit moet komen
      }
      encyptedString = encyptedString.join("");
      // de uiteindelijke text komt in een encrypted string
      return encyptedString;
      // hier return je de string
    }
  }
  