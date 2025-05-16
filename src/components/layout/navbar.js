import { useState, useEffect } from 'react';
import { BsSearch, BsGrid } from 'react-icons/bs';



const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // ici je supprime l'evenement
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu-dropdown')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar py-1 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="navbar-brand d-flex align-items-center">
            <div className="logo">
              <img src="/images/bookoe.png" width="90" height="90" alt="Bookoe logo" />
            </div>
            <div className="brand-text ms-2">
              <h1 className="title m-0">Bookoe</h1>
              <p className="subtitle m-0">Book store website</p>
            </div>
          </a>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsExpanded(!isExpanded)}
            aria-controls="navbarContent"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div 
            className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} 
            id="navbarContent"
          >
            <div className="mx-auto nav">
              <div className="nav-menu-dropdown dropdown">
                <button
                  className="btn btn-light menu-dropdown-toggle dropdown-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                >
                  <BsGrid className="menu-icon" aria-hidden="true" />
                  <span className="ms-2">Menus</span>
                </button>
                
                <ul 
                  className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}
                  aria-labelledby="menuDropdown"
                >
                  <li><a className="dropdown-item" href="#fiction">Fiction</a></li>
                  <li><a className="dropdown-item" href="#non-fiction">Non-Fiction</a></li>
                  <li><a className="dropdown-item" href="#children">Children's Books</a></li>
                  <li><a className="dropdown-item" href="#bestsellers">Bestsellers</a></li>
                  <li><a className="dropdown-item" href="#new-releases">New Releases</a></li>
                </ul>
              </div>
              
              <form className="d-flex search-form" role="search">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control search-input"
                    placeholder="Search over 30 million book titles"
                    aria-label="Search books"
                  />
                  <button className="btn search-button" type="submit" aria-label="Search">
                    <BsSearch aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
            
            <div className="nav auth-buttons">
              <a href="#login" className="btn btn-outline-primary log-in-btn me-2">Log In</a>
              <a href="#signup" className="btn btn-primary sign-up-btn">
                <span className="bi bi-person btn-signup me-1" aria-hidden="true"></span>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;