import { useState } from 'react';
import StoreNumbers from "../../assets/images/storeNumbers.png";
import Newsletters from "../../components/layout/newsletters";
import 'bootstrap/dist/css/bootstrap.min.css';
import Countdown from 'react-countdown';

const BookCard = ({ book, onAddToCart, inCart }) => {
  const { id, image, title, author, description, currentPrice, originalPrice } = book;

  const handleAddToCart = () => {
    if (!inCart) {
      onAddToCart(id);
    }
  };

  return (
    <article className="book-card col-4">
      <figure className="book-card__figure">
        <div className="book-card__image-placeholder">
          {image ? (
            <img src="./la-nuit-des-temps.jpg" className="book-card__image" />
          ) : (
            <div className="book-card__placeholder">
              <i className="bi bi-book"></i>
              <span>Image not available</span>
            </div>
          )}
        </div>
      </figure>

      <section className="book-card__content">
        <header className="book-card__header">
          <h3 className="book-card__title">{title}</h3>
        </header>

        <nav className="book-card__categories">
          <span className="book-card__category book-card__category--biography">biography</span>
          <span className="book-card__category book-card__category--thriller">thriller</span>
          <span className="book-card__category book-card__category--horror">horror</span>
        </nav>

        <p className="book-card__description">{description}</p>
        <p className="book-card__author">{author}</p>

        <footer className="book-card__price-row">
          <span className="book-card__price">${currentPrice.toFixed(2)}</span>
          {originalPrice && (
            <span className="book-card__price-original">
              <s>${originalPrice.toFixed(2)}</s>
            </span>
          )}

          <button
            className="book-card__button"
            onClick={handleAddToCart}
            disabled={inCart}
          >
            <i className="bi bi-cart-dash"></i>
            Add to cart
          </button>
        </footer>
      </section>
    </article>
  );
};

const SpecialOffers = () => {
  const allBooks = [
    {
      id: 1,
      image: '/la-nuit-des-temps.jpg',
      title: 'SECONDS [Part I]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      author: 'Kevin Smiley',
      currentPrice: 18.78,
      originalPrice: 25
    },
    {
      id: 2,
      title: 'Terrible Madness',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      author: 'David Here',
      currentPrice: 18.78,
      originalPrice: 25
    },
    {
      id: 3,
      title: 'Rework',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      author: 'Margaretha Helew',
      currentPrice: 18.78,
      originalPrice: 25
    }
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (bookId) => {
    setCartItems([...cartItems, bookId]);
  };

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <section className="special-offers" aria-labelledby="offers-heading">
            <header>
              <h2 id="offers-heading" className="special-offers__title">Special Offers</h2>
              <p className="special-offers__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </header>

            <div className="special-offers__grid">
              <div className="row">
                {allBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onAddToCart={handleAddToCart}
                    inCart={cartItems.includes(book.id)}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const FlashSale = () => {

  const FLASH_SALE_DURATION = 7 * 24 * 60 * 60 * 1000;

  const getTargetDate = () => {
    const savedDate = localStorage.getItem('flashSaleEndTime');


    if (savedDate) {
      const parsedDate = parseInt(savedDate, 10);
      if (parsedDate > Date.now()) {
        return parsedDate;
      }
    }


    const newEndTime = Date.now() + FLASH_SALE_DURATION;
    localStorage.setItem('flashSaleEndTime', newEndTime.toString());
    return newEndTime;
  };

  const [targetDate] = useState(getTargetDate());


  const Completionist = () => <span className="flash-sale__ended">Terminé !</span>;


  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      localStorage.removeItem('flashSaleEndTime');
      return <Completionist />;
    } else {
      return (
        <section className="flash-sale-container" aria-label="Flash sale">
          <article className="flash-sale">
            <header className="flash-sale__header">
              <h2 className="flash-sale__title">Flash Sale</h2>
              <p className="flash-sale__subtitle">
                Offres spéciales pour un temps limité !
              </p>
            </header>

            <div className="countdown-timer" role="timer" aria-live="polite">
              {days > 0 && (
                <time className="countdown-unit" dateTime={`P${days}D`}>
                  <span className="countdown-value">{days}</span>
                  <span className="countdown-label">Days</span>
                </time>
              )}
              <time className="countdown-unit" dateTime={`PT${hours}H`}>
                <span className="countdown-value">{hours.toString().padStart(2, '0')}</span>
                <span className="countdown-label">Hours</span>
              </time>
              <time className="countdown-unit" dateTime={`PT${minutes}M`}>
                <span className="countdown-value">{minutes.toString().padStart(2, '0')}</span>
                <span className="countdown-label">Minutes</span>
              </time>
              <time className="countdown-unit" dateTime={`PT${seconds}S`}>
                <span className="countdown-value">{seconds.toString().padStart(2, '0')}</span>
                <span className="countdown-label">Second</span>
              </time>
            </div>
          </article>
        </section>
      );
    }
  };

  return (
    <main className="container">
      <Countdown
        date={targetDate}
        renderer={renderer}
      />
    </main>
  );
};

const recommendedBooks = [
  { title: 'Book 1', cover: 'https://via.placeholder.com/120x170?text=Rec+1' },
  { title: 'Book 2', cover: 'https://via.placeholder.com/120x170?text=Rec+2' },
  { title: 'Book 3', cover: 'https://via.placeholder.com/120x170?text=Rec+3' },
  { title: 'Book 4', cover: 'https://via.placeholder.com/120x170?text=Rec+4' },
  { title: 'Book 5', cover: 'https://via.placeholder.com/120x170?text=Rec+5' },
  { title: 'Book 6', cover: 'https://via.placeholder.com/120x170?text=Rec+6' },
];

const popularBooks = [
  { title: 'Book A', cover: 'https://via.placeholder.com/120x170?text=Pop+1' },
  { title: 'Book B', cover: 'https://via.placeholder.com/120x170?text=Pop+2' },
  { title: 'Book C', cover: 'https://via.placeholder.com/120x170?text=Pop+3' },
  { title: 'Book D', cover: 'https://via.placeholder.com/120x170?text=Pop+4' },
  { title: 'Book E', cover: 'https://via.placeholder.com/120x170?text=Pop+5' },
  { title: 'Book F', cover: 'https://via.placeholder.com/120x170?text=Pop+6' },
];

// Pour gérer le défilement
const scroll = (direction, listSelector) => {
  const list = document.querySelector(listSelector);
  if (list) {
    list.scrollBy({
      left: direction === 'left' ? -240 : 240,
      behavior: 'smooth',
    });
  }
};

// Composant Main
export default function Main() {
  return (
    <main className="main-container">

      <div className="container mt-3">
        <div className="row justify-content-center">
          <article className="col-lg-8">
            <section className="hero-banner" aria-labelledby="hero-heading">
              <header className="hero-heading">
                <div className="col-lg-8">
                  <div className="hero-content">
                    <div className="hero-content text-lg-start text-center">
                      <h4>BACK TO SCHOOL</h4>
                      <h1 id="hero-heading">Special 50% Off</h1>
                      <h3>for our student community</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>

                    <nav className="hero-buttons">
                      <button className="btn btn-primary me-2">
                        Get the deal <i className="bi bi-arrow-right me-1"></i>
                      </button>
                      <button className="btn btn-outline-light">See other promos</button>
                    </nav>
                  </div>
                </div>
              </header>
            </section>
          </article>

          <aside className="col-lg-4">
            <section className="side-banner">
              <article className="side-content">
                <div className="book-card">
                  <header className="book-header">
                    <h1>Best Seller</h1>
                    <p>Based sales this week</p>
                  </header>
                  <figure className="book-image-container">
                    <img
                      src="/book-cover.jpg"
                      alt="Pushing Clouds Book Cover"
                      className="book-image"
                    />
                  </figure>
                  <footer className="book-footer">
                    <h6 className="book-title">Pushing Clouds</h6>
                    <p className="book-genre">ADVENTURE SCIENCE, COMEDY</p>
                    <button className="btn btn-success"><s>60.00</s> USD 45.25</button>
                  </footer>
                </div>
              </article>
            </section>
          </aside>
        </div>
      </div>

      <section className="container mt-5">
        <div className="row">
          {/* Recommended Books */}
          <div className="col-md-6 mb-4">
            <article className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
              <header className="mb-4">
                <h3 className="h5 fw-bold">Recommended For You</h3>
                <p className="text-muted">Personalized book suggestions based on your preferences</p>
              </header>

              <div className="d-flex align-items-center position-relative">
                <button
                  className="btn btn-light shadow-sm rounded-circle me-2"
                  onClick={() => scroll('left', '.recommended-list')}
                  aria-label="Scroll left Recommended books"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <div className="overflow-auto flex-grow-1">
                  <ul className="d-flex gap-3 list-unstyled m-0 p-0 recommended-list">
                    {recommendedBooks.map((book, index) => (
                      <li key={index} style={{ flex: '0 0 auto', width: '120px', height: '170px' }}>
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="img-fluid rounded shadow-sm"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-light shadow-sm rounded-circle ms-2"
                  onClick={() => scroll('right', '.recommended-list')}
                  aria-label="Scroll right Recommended books"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </article>
          </div>

          {/* Popular Books */}
          <div className="col-md-6 mb-4">
            <article className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
              <header className="mb-4">
                <h3 className="h5 fw-bold">Popular in 2020</h3>
                <p className="text-muted">Bestselling books from the year 2020</p>
              </header>

              <div className="d-flex align-items-center position-relative">
                <button
                  className="btn btn-light shadow-sm rounded-circle me-2"
                  onClick={() => scroll('left', '.popular-list')}
                  aria-label="Scroll left Popular books"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <div className="overflow-auto flex-grow-1">
                  <ul className="d-flex gap-3 list-unstyled m-0 p-0 popular-list">
                    {popularBooks.map((book, index) => (
                      <li key={index} style={{ flex: '0 0 auto', width: '120px', height: '170px' }}>
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="img-fluid rounded shadow-sm"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-light shadow-sm rounded-circle ms-2"
                  onClick={() => scroll('right', '.popular-list')}
                  aria-label="Scroll right Popular books"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
      <SpecialOffers />
      <FlashSale />
        <div className="d-flex justify-content-center my-4 py-1 store-numbers">
          <img src={StoreNumbers} className="img-fluid" alt=""></img>
        </div>
      <Newsletters />
    </main>
  );
}