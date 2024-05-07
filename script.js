const quote = document.getElementById('quote');
const author = document.getElementById('author');

const quoteUrl = 'https://api.quotable.io/random';
const twitterApi = 'https://twitter.com/intent/tweet?url=';

let getQuote = (url) => {
	fetch(url)
		.then((data) => data.json())
		.then((item) => {
			quote.innerText = item.content;
			author.innerText = item.author;
		});
};

window.addEventListener('load', getQuote(quoteUrl));
document.addEventListener('click', (e) => findQuote(e));

const findQuote = (e) => {
	switch (e.target.id) {
		case 'random':
			getQuote(quoteUrl);
			break;
		case 'famous-quotes':
			getQuote(quoteUrl + '?tags=famous-quotes');
			break;
		case 'technology':
			getQuote(quoteUrl + '?tags=technology');
			break;
		case 'business':
			getQuote(quoteUrl + '?tags=business');
			break;
		case 'wisdom':
			getQuote(quoteUrl + '?tags=wisdom');
			break;
		case 'life':
			getQuote(quoteUrl + '?tags=life');
			break;
		case 'love':
			getQuote(quoteUrl + '?tags=love');
			break;
		case 'friendship':
			getQuote(quoteUrl + '?tags=friendship');
			break;
		case 'success':
			getQuote(quoteUrl + '?tags=success');
			break;
		case 'inspirational':
			getQuote(quoteUrl + '?tags=inspirational');
			break;
		case 'sports':
			getQuote(quoteUrl + '?tags=sports');
			break;
		case 'speak':
			let utterance = new SpeechSynthesisUtterance(
				`${quote.innerText} by ${author.innerText}`
			);
			speechSynthesis.speak(utterance);
			break;
		case 'copy':
			navigator.clipboard.writeText(
				`${quote.innerText}  --${author.innerText}`
			);
			break;
		case 'twitter':
			window.open(
				`${twitterApi}${quote.innerText}  --${author.innerText}`,
				'_blank'
			);
			break;
	}
};