const { esPar } = require("./numeros.js");
const Logger = require("logplease");
const logger = Logger.create("resultado función");

const resultado = (n) => {
    if (esPar(n)) {
        return logger.info("El número es par.");
      } else {
        return logger.error("El número es impar");
      }      
}

resultado(782828);