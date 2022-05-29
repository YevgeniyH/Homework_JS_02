function calculateEngravingPrice(message, pricePerWord) {
   const totalWordList =  message.split(" ").length;
    return totalWordList*pricePerWord;
    
}

console.log("Цена гравировки всех слов в строке:",
    calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10));

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus', 20));

  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));

  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));