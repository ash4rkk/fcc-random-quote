import { useEffect, useState } from 'react';

function App() {
  const [randomQuote, setRandomQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getQuote = async () => {
    setIsLoading(true);
    const url = 'https://stoic.tekloon.net/stoic-quote';
    try {
      const response = await fetch('/api/stoic-quote');
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setRandomQuote(result);
    } catch (error) {
      console.error(error.message);
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
    <div class="container">
  <div class="content-wrapper">
    <div class="blur-effect" aria-hidden="true">
      <div class="gradient-shape"></div>
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
