const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const speakButton = document.getElementById('speak');
const copyButton = document.getElementById('copy');
const twitterButton = document.getElementById('twitter');
const randomButton = document.getElementById('random');

const fetchQuotes = async () => {
  try {
    const response = await fetch('/api/quotes');
    const quotes = await response.json();
    return quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
};

const displayQuote = (quote) => {
  quoteElement.textContent = quote.content;
  authorElement.textContent = quote.author;
};

const getRandomQuote = async () => {
  const quotes = await fetchQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  displayQuote(quotes[randomIndex]);
};

const speakQuote = async () => {
  const text = `${quoteElement.textContent} by ${authorElement.textContent}`;
  try {
    const response = await fetch('/api/speak', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });
    const audio = await response.blob();
    const audioUrl = URL.createObjectURL(audio);
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  } catch (error) {
    console.error('Error speaking quote:', error);
  }
};

const copyQuote = () => {
  const quote = `${quoteElement.textContent} - ${authorElement.textContent}`;
  navigator.clipboard.writeText(quote);
};

const shareOnTwitter = () => {
  const quote = `${quoteElement.textContent} - ${authorElement.textContent}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  window.open(twitterUrl, '_blank');
};

window.addEventListener('load', getRandomQuote);
speakButton.addEventListener('click', speakQuote);
copyButton.addEventListener('click', copyQuote);
twitterButton.addEventListener('click', shareOnTwitter);
randomButton.addEventListener('click', getRandomQuote);