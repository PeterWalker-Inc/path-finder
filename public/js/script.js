const newQuoteBtn = document.getElementById('new-quote');
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
    "Cyber Security is not fun (Period)",
];

function getQuote() {
    console.log("quoted");
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    quoteText.textContent = quote;
}

// New Quote click
newQuoteBtn.addEventListener('click', getQuote);

