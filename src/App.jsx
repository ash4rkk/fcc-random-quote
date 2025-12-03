import { useEffect, useState } from 'react';

const backupQuotes = [
  { quote: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
  { quote: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
  { quote: "He who fears death will never do anything worthy of a living man.", author: "Seneca" },
  { quote: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius" },
  { quote: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },
  { quote: "If it is not right, do not do it, if it is not true, do not say it.", author: "Marcus Aurelius" },
  { quote: "No man is free who is not master of himself.", author: "Epictetus" },
  { quote: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { quote: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { quote: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" }
];

function App() {
  const [randomQuote, setRandomQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getQuote = async () => {
    setIsLoading(true);
    const url = `/api`;
    try {
      const response = await fetch(url, {
        cache: 'no-store'
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 3000));
        setRandomQuote({
          data: {
            quote: result[0].q,
            author: result[0].a
          }
        });
    } catch (error) {
      console.error(error.message);
      console.log("API not working, using backup quotes")
      const random = Math.floor(Math.random() * backupQuotes.length)
      setRandomQuote({data: backupQuotes[randomIndex]})
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);
  const tweetUrl = randomQuote
    ? `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + randomQuote.data.quote + '" ' + randomQuote.data.author)}`
    : '#';

  const tumblrUrl = randomQuote
    ? `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(randomQuote.data.author)}&content=${encodeURIComponent(randomQuote.data.quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
    : '#';
  return (
    <div className="container">
  <div className="content-wrapper">
    <div className="blur-effect" aria-hidden="true">
      <div className="gradient-shape"></div>
    </div>
    <div id='wrapper'>
      <div id='quote-box' className={isLoading ? 'loading' : ''}>
        <div id='quote-text'>
          <i className='fa-solid fa-quote-left'></i>
          <span id='text'>
            {isLoading ? (
              <div className='loading'>
                <div className='loading__letter'>S</div>
                <div className='loading__letter'>e</div>
                <div className='loading__letter'>a</div>
                <div className='loading__letter'>r</div>
                <div className='loading__letter'>c</div>
                <div className='loading__letter'>h</div>
                <div className='loading__letter'>i</div>
                <div className='loading__letter'>n</div>
                <div className='loading__letter'>g</div>
                <div className='loading__letter'>&nbsp;</div>
                <div className='loading__letter'>f</div>
                <div className='loading__letter'>o</div>
                <div className='loading__letter'>r</div>
                <div className='loading__letter'>&nbsp;</div>
                <div className='loading__letter'>b</div>
                <div className='loading__letter'>e</div>
                <div className='loading__letter'>s</div>
                <div className='loading__letter'>t</div>
                <div className='loading__letter'>&nbsp;</div>
                <div className='loading__letter'>q</div>
                <div className='loading__letter'>u</div>
                <div className='loading__letter'>o</div>
                <div className='loading__letter'>t</div>
                <div className='loading__letter'>e</div>
                <div className='loading__letter'>.</div>
                <div className='loading__letter'>.</div>
                <div className='loading__letter'>.</div>
              </div>
            ) : (
              randomQuote?.data.quote
            )}
          </span>
        </div>
        <div id='quote-author'>
          - <span id='author'>{isLoading ? '' : randomQuote?.data.author}</span>
        </div>
        <div id='buttons'>
          <a
            className='button'
            id='tweet-quote'
            title='Tweet this quote!'
            target='_top'
            href={tweetUrl}
          >
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a
            className='button'
            id='tumblr-quote'
            title='Post on tumblr!'
            target='_top'
            href={tumblrUrl}
          >
            <i className='fa-brands fa-tumblr'></i>
          </a>
          <button
            className='button'
            onClick={getQuote}
            disabled={isLoading}
            id='new-quote'
          >
            New Quote!
          </button>
        </div>
      </div>
    </div>
        </div>
    </div>

  );
}

export default App;
