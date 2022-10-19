console.log('"Pari e dispari" loaded');

//salviamo in variabili gli imput dell'utente: pari o dispari + numero da 1 a 5
//generiamo un numero random da 1 a 5 con una funzione
  //**facoltativo**generiamo numero da 1 a 2 per il browser 1 = dispari 2 = pari**
//facciamo la somma del numero dell'utente con numero generato
//se numero generato è come dice l'utente: utente vince
//altrimenti utente perde

let playButton = document.querySelector('button');

playButton.addEventListener('click', function(){

  const pariDispari = document.getElementById('pod').value;
  let numberSelected = document.getElementById('number').value;
  const textParagraph = document.querySelector('p');

  let control;
  console.log(numberSelected);
  console.log(pariDispari);
  
  let browserNumber = randomNumberGenerator(1, 5);
  console.log(browserNumber);
  
  let numberSum = parseInt(numberSelected) + browserNumber;
  
  console.log(numberSum);
  
  if(!(numberSum % 2)) control = "pari";
  else control = "dispari";
  
  
  console.log(control);
  
  if(pariDispari == control){
    textParagraph.innerHTML = `
      L'utente gioca <strong>${numberSelected}</strong> e <strong>${pariDispari}</strong>. Il browser gioca <strong>${browserNumber}</strong> La somma è <strong>${numberSum}</strong>. L'utente vince!
    `;
    console.log('Utente vince!');
  }else{
    textParagraph.innerHTML = `
      L'utente gioca <strong>${numberSelected}</strong> e <strong>${pariDispari}</strong>. Il browser gioca <strong>${browserNumber}</strong> La somma è <strong>${numberSum}</strong>. L'utente perde...
    `;
    console.log('Utente perde...');
  }

});



function randomNumberGenerator(min, max){
  const numberGenerated = Math.floor(Math.random() * max - min + 1) + min;
  return numberGenerated;
}