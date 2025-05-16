import React, { useState } from "react";
import ratingInfo from '../../../src/assets/images/rating-info.png';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("details");

  const book = {
    detail: [
      {
        title: "Terrible Madness",
        author: "Didier",
        isbn: "978-2-123456-789-0",
        language: "French",
        pages: "Paperback, 350",
        published: "2024-05-01",
        publisher: "Edition Beny",
        tags: ["Thrill", "Drama", "Horror"],
      },
    ],
    reviews: [
      {
        avatar: "https://img.freepik.com/photos-gratuite/casual-jeune-homme-africain-souriant-isole-blanc_93675-128895.jpg?semt=ais_hybrid&w=740",
        user: "John Smith",
        rating: 5,
        comment: "Un chef-d'œuvre terrifiant et palpitant !",
      },
      {
        avatar: "https://img.freepik.com/photos-gratuite/casual-jeune-homme-africain-souriant-isole-blanc_93675-128895.jpg?semt=ais_hybrid&w=740",
        user: "Alice Brown",
        rating: 4,
        comment: "Très bien écrit, avec une atmosphère immersive.",
      },
    ],
  };

  const labels = [
    "Book Title",
    "Author",
    "ISBN",
    "Edition Language",
    "Book Format",
    "Date Published",
    "Publisher",
    "Tags",
  ];

  return (
    <div className="container-fluid mb-0 pb-0 mt-4">
      {/* Onglets */}
      <div className="mb-4">
        <button
          type="button"
          className={`btn btn-sm me-3 tags-title-text ${activeTab === "details"
            ? "text-dark "
            : "text-muted"
            }`}
          onClick={() => setActiveTab("details")}
        >
          Details Product
        </button>
        <button
          type="button"
          className={`btn btn-sm tags-title-text ${activeTab === "reviews"
            ? "text-dark "
            : "text-muted"
            }`}
          onClick={() => setActiveTab("reviews")}
        >
          Customer Reviews
        </button>
      </div>

<div className="row">
      <img src={ratingInfo} alt="Rating Info" />
    </div>
      {/* Contenu */}
      {activeTab === "details" && (
        <div className="row gx-0 tabs-text">
          <div className="col-md-3 px-0">
            <ul className="list-unstyled mb-0">
              {labels.map((label, idx) => {
                const isLast = idx === labels.length - 1;
                return (
                  <li
                    key={idx}
                    className={`py-3 ${isLast ? '' : 'border-bottom'}`}
                  >
                    <strong>{label}</strong>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-9 px-0">
            <ul className="list-unstyled mb-0">
              {book.detail.map((d, idx) => (
                <React.Fragment key={idx}>
                  <li className="py-3 border-bottom">{d.title}</li>
                  <li className="py-3 border-bottom">{d.author}</li>
                  <li className="py-3 border-bottom">{d.isbn}</li>
                  <li className="py-3 border-bottom">{d.language}</li>
                  <li className="py-3 border-bottom">{d.pages}</li>
                  <li className="py-3 border-bottom">{d.published}</li>
                  <li className="py-3 border-bottom">{d.publisher}</li>
                  <li className="py-3">
                    {d.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="badge bg-primary bg-opacity-10 tabs-tag text-primary me-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <hr />
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="row gx-0 tabs-text">
          <div className="col-md-10 px-0">
            <div className="list-group">
              {book.reviews.map((review, idx) => (
                <div key={idx} className="row list-group-item d-flex flex-column gap-2 px-0">
                  <div className="row">
                    <div className="col-2 px-3 py-2">
                      <img src={review.avatar} alt={review.user} className="" style={{ width: "50px", height: "50px" }} />
                    </div>
                    <div className="col-8 justify-content-start">
                      <p><strong>{review.user}</strong></p>
                      <p>Jan 4th, 2020</p>
                    </div>
                    <div className=" col-2 details-rating">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mb-0 px-2">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/*
.recommanded-books {

    background: url('./images/recommended.png');
    
}

.popular-books {

    background: url('./images/popular.png');
    
}
 */