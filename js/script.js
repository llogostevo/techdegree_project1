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
    year: '1999', 
    location: 'South Africa'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    year: '1962',
    location: 'Hollywood'

  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: 'Steve Jobs',
    citation: 'Harvard Speech',
    year: '2004',
    Age: '46'

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

/***********************************************
  `getRandomQuote` function pulls out a random quote from the above array:
***********************************************/

function getRandomQuote() {
  //uses the Math library to call a random number between 0 and length of the array
  randomNumber = Math.floor(Math.random() * quotes.length);

  //returns the random quote by using the random number as the index value to call within the array
  return quotes[randomNumber];
}

/***********************************************
  random background colour
***********************************************/

// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function random_bg_color() {
  // random numbers between 0 and 256 for RGB
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  //set the background to equal the random number using RGB
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
  document.getElementById('loadQuote').style.background = bgColor;
}

/***********************************************
  interval function
***********************************************/

//automatically change quote after 10s of previous quote being displayed
// use arrow function to call printquote on an interval of 10s
function interval() {
  setInterval(printQuote, 10000);

}

// declare randomQuote as global variable



/***********************************************
   `printQuote` function to display random quote
***********************************************/
function printQuote() {
  let randomQuote = getRandomQuote();

  /***********************************************
   `checkProperty` function to check a property in an object
***********************************************/

  function getProperty(property) {
    let result = "";
    // set  html if it exists
    // use [] notation rather than . notation
    if (randomQuote[property]) {
      //citation property exists
      result = '<span class="' + property + '">' + randomQuote[property] + '</span>';
    }
    return result;
  }

  //create a new array with the entries from randomquote
  const entries = Object.entries(randomQuote);
  // set an empty string array to contain the property HTML
  let propertyHTML = "";
  //loop through the array
  for (const [attribute, value] of entries) {
    //only look for properties that are not quote or source
    if ((attribute != 'quote') && (attribute != 'source')) {
      propertyHTML += getProperty(attribute);
    }
  }

  // create the quote as HTML
  // add in quote and source as these will appear for all objects
  // use the propertyHTML variable to add in any other properties 
  let htmlString = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + propertyHTML + '</p>';

  //change the value of quote-box to be the htmlString
  document.getElementById('quote-box').innerHTML = htmlString;

  //call the random colour function
  random_bg_color();
  //call the interval function
  interval();

}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//calls interval function which means quote will change after the designated interval even if the button isn't clicked
interval();