import '../styles/EmotionPage.css';
import ResultBubble from '../components/ResultBubble';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmotionPage() {
  const [bubbles, setBubbles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const bubblesPerPage = 18;
  const pages = [];

  // Load bubbles from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('bubbles');
    if (stored) {
      setBubbles(JSON.parse(stored));
    }
  }, []);

  // Divide bubbles into pages
  for (let i = 0; i < bubbles.length; i += bubblesPerPage) {
    pages.push(bubbles.slice(i, i + bubblesPerPage));
  }

  const scrollToPage = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const pageWidth = el.offsetWidth;
    el.scrollTo({
      left: pageWidth * index,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const pageWidth = el.offsetWidth;
    const pageIndex = Math.round(el.scrollLeft / pageWidth);
    setCurrentPage(pageIndex);
  };

  const startOver = () => {
    navigate('/')
  }

  return (
    <div className='emotion-page'>
      <div className='emotion-page-background' />

      {bubbles.length > 0 ? (
        <div className="bubbles-scroll-wrapper" ref={scrollRef} onScroll={handleScroll}>
          {pages.map((pageBubbles, pageIndex) => (
            <div className="bubble-page" key={pageIndex}>
              {pageBubbles.map((bubble, index) => (
                <div key={index} className="submitted-bubble">
                  <ResultBubble size={150} emotions={bubble.emotions} triggers={bubble.triggers} />
                  <h4 className="bubble-name">{bubble.name}</h4>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className='empty-message'>No session results to display.</p>
      )}

      <button className="finished-button" onClick={() => startOver()}>Done</button>

      <div className="page-indicator">
        {pages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? 'active' : ''}`}
            onClick={() => scrollToPage(index)}
          />
        ))}
      </div>
    </div>
  );
}
