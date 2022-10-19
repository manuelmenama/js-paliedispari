console.log('Loaded "Palindroma"');

//chiedo la parola all'utente
//inserisco la stringa in un altra stringa ma partendo dall'ultima lettera
//confronto le due parole
//se uguali allora è palindroma

palindromaCheck();

function palindromaCheck(){
  const askedWord = prompt('Inserisci una parola:');
  let askedWordLower = askedWord.toLowerCase();
  let reverseWord = "";
  let counterString = askedWord.length - 1;
  
  while(counterString >= 0){
    
    reverseWord += askedWordLower[counterString];
    counterString--;
  }

  const pText = document.querySelector('p');

  if(askedWordLower === reverseWord){
    pText.innerHTML = `<strong>${askedWord}</strong> &egrave; una parola palindroma!`;
    console.log(askedWord, 'Parola palindroma!');
  }else{
    pText.innerHTML = `<strong>${askedWord}</strong> non &egrave; una parola palindroma...`;
    console.log(askedWord, 'Non è palindroma...');
  }
}