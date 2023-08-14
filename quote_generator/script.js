const quote = [
    "You define your own life. Don't let other people write your script - Oprah Winfrey.",
    "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens - Mandy Hale",
    "Belief creates the actual fact - William James",
    "Weaknesses are just strengths in the wrong environment - Marianne Cantwell",
    "When it comes to luck, you make your own - Bruce Springsteen",
    "The journey of a thousand miles begins with one step. - Lao Tzu"
  ];
  
  const text = document.getElementById("quote");
  const Btn = document.getElementById("generate-btn");
  
  Btn.addEventListener("click", generateRandomQuote);
  
  function generateRandomQuote() 
  {
    const random = Math.floor(Math.random() * quote.length);
    const rQuote = quote[random];
    text.textContent = rQuote;
    }
  