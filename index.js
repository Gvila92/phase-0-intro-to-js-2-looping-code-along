function writeCards(names, occasion) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const message = `Thank you, ${name}, for the wonderful ${occasion} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const messages = writeCards(["Charlie", "Samip", "Ali"], "surprise");
  console.log(messages);
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(5);