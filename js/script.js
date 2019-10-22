/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Lloyd Stevens
github: llogostevo 

******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Quotes array contains an object in each array position that contains the details about each quote
***/

let quotes = [{
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    citation: 'Speech',
    year: '1999'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    year: '1962'

  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: 'Steve Jobs',
    citation: 'Harvard Speech',
    year: '2004'

  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    year: '1944'

  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: 'Oprah Winfrey',
    citation: 'Autobiography',
    year: '2006'
  }

];

/***
  `getRandomQuote` function pulls out a random quote from the above array:
***/

function getRandomQuote() {
  //uses the Math library to call a random number between 0 and length of the array
  randomNumber = Math.floor(Math.random() * quotes.length);

  //returns the random quote by using the random number as the index value to call within the array
  return quotes[randomNumber];
}

/***
   `printQuote` function to display random quote
***/
function printQuote() {

  //setup variables for the function
  let randomQuote = getRandomQuote();
  let citation = "";
  let year = "";


  // set citation html if it exists
  if ("citation" in randomQuote) {
    //citation property exists
    citation = '<span class="citation">' + randomQuote.citation + '</span>';
  }

  // set year html if it exists
  if ("year" in randomQuote) {
    //year property exists
    year = '<span class="year">' + randomQuote.year + '</span>';
  }

  // create the quote as HTML
  let htmlString = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + citation + year + '</p>';

  //change the value of quote-box to be the htmlString
  document.getElementById('quote-box').innerHTML = htmlString;

}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);