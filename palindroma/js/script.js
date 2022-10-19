console.log('Loaded "Palindroma"');

//chiedo la parola all'utente
//inserisco la stringa in un altra stringa ma partendo dall'ultima lettera
//confronto le due parole
//se uguali allora è palindroma

palindromaCheck();

function palindromaCheck(){
  const askedWord = "anna";
  let reverseWord = "";
  let counterString = askedWord.length - 1;
  
  while(counterString >= 0){    
    reverseWord += askedWord[counterString];
    counterString--;
  }

  if(askedWord === reverseWord){
    console.log(askedWord, 'Parola palindroma!');
  }else{
    console.log(askedWord, 'Non è palindroma...');
  }
}