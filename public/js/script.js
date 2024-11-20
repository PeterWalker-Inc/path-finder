//const newQuoteBtn = document.getElementById('new-quote');
const quoteText = document.getElementById('quote');

let apiQuotes = [
    "Come Hell or High Water",
    "Some times you need to Step back to move forward",
    "Remember, What goes up.. Must come down",
    "Continous learning is the minimum requirement for success in any field",
    "Yesterday I am Dumb, Today Dumber and Tomorrow Dumbest.",
    "ihack{Tis_is_not_the_flag}",
    "Dear Humans, Hope you are still alive in the universe!",
    "I Love You - A computer virus :>",
    "Cyber Security is not fun",
];

function getQuote() {
    console.log("quoted");
    for (let i = 0; i <= apiQuotes.length; i++){
        let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
        quoteText.textContent = quote;
        location.reload
    }
}

// New Quote click
//var i = newQuoteBtn.addEventListener('click', getQuote);


