import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuantitySelector from '../layout/quantityselector';
import LikeButton from '../layout/likebutton';
import ProductTabs from "./producttabs";
import RelatedBooks from "./relatedbook";

export default function BookDetails() {
    const book = {
        url: "https://www.editions-rm.ca/wp-content/uploads/2024/05/C1_Existantes-1371x2059.jpg",
        title: "Terrible Madness",
        note: "4.0",
        review: "235",
        like: "456",
        description: "C'est l'histoire d'un homme qui se retrouve piégé dans un monde où la réalité et la folie se confondent. Il doit naviguer à travers des épreuves terrifiantes pour retrouver son chemin. Un récit captivant qui explore les profondeurs de l'esprit humain et les limites de la perception. Un voyage à travers la peur et la résilience. Un roman qui vous tiendra en haleine jusqu'à la dernière page. Un mélange de suspense, d'angoisse et de révélations surprenantes. Préparez-vous à être transporté dans un univers où chaque page est une nouvelle découverte. Un livre qui remet en question vos certitudes et vous pousse à réfléchir sur la nature de la réalité. Un chef-d'œuvre de la littérature contemporaine qui ne manquera pas de vous marquer. Un incontournable pour les amateurs de thrillers psychologiques et de récits d'horreur. Un roman qui vous fera frissonner et vous tiendra en haleine jusqu'à la dernière page. Une expérience de lecture inoubliable qui vous laissera sans voix. Un livre à ne pas manquer pour ceux qui aiment les histoires captivantes et dérangeantes. Un récit qui vous fera réfléchir sur la nature de la réalité et les limites de l'esprit humain. Un roman qui vous plongera dans un univers sombre et mystérieux, où chaque page est une nouvelle découverte. Un chef-d'œuvre de la littérature contemporaine qui ne manquera pas de vous marquer. Un incontournable pour les amateurs de thrillers psychologiques et de récits d'horreur",
        avatar: "https://img.freepik.com/photos-gratuite/casual-jeune-homme-africain-souriant-isole-blanc_93675-128895.jpg?semt=ais_hybrid&w=740",
        author: "Didier",
        publisher: "Edition Beny",
        year: "2025",
        price: "45,4",
        oldPrice: "98,4",
        reduction: "30%",
        detail: [
            {
                title: "Terrible Madness",
                author: "Didier",
                isbn: "978-2-123456-789-0",
                language: "French",
                pages: "Paperback, 350",
                published: "2024-05-01",
                publisher: "Edition Beny",
                tags: "THRILL, DRAMA, HORROR",
            }
        ],
        reviews: [
            {
                user: "John Smith",
                rating: 5,
                comment: "Un chef-d'œuvre terrifiant et palpitant !",
            },
            {
                user: "Alice Brown",
                rating: 4,
                comment: "Très bien écrit, avec une atmosphère immersive.",
            }
        ]
    };

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(prev => prev + 1);
    };

    const decrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <section className="d-flex align-items-center py-2 my-2">
            <div className="container-fluid px-5">
                <div className="row">
                    {/* Image */}
                    <div className="col-md-3">
                        <img src={book.url} alt={book.title} className="img-fluid img-details px-1 shadow" />
                    </div>
                    {/* Detail Product */}
                    <div className="col-md-9 ">
                        <h2 id="title">{book.title}</h2>
                        <div className="row d-flex text-center py-2 align-items-center">
                            {/* Note, Review, Like */}
                            <div className="col-6 justify-content-start align-items-center d-flex gap-2">
                                <div className="mb-0">
                                    <strong className="details-rating"> {'★'.repeat(Math.floor(book.note))}{'☆'.repeat(5 - Math.floor(book.note))} </strong> <strong>{book.note}</strong>
                                </div>
                                <div>
                                    <div className="mb-0 custom-text"><i class="bi bi-chat-left-text-fill px-1" id="review" /> {book.review} Reviews</div>
                                </div>
                                <div>
                                    <div className="mb-0 custom-text"><i class="bi bi-hand-thumbs-up-fill px-1" id="like" /> {book.like}k Likes</div>
                                </div>
                            </div>

                            {/* Social Buttons */}
                            <div className="col-6 justify-content-end pe-0 d-flex gap-1">
                                <button className="btn btn-sm py-1" id="facebook">
                                    <i className="bi bi-facebook btn-signup" /> Facebook
                                </button>
                                <button className="btn btn-sm py-1" id="twitter">
                                    <i className="bi bi-twitter btn-signup" /> Twitter
                                </button>
                                <button className="btn btn-sm py-1" id="whatsapp">
                                    <i className="bi bi-whatsapp btn-signup" /> WhatsApp
                                </button>
                                <button className="btn btn-sm py-1" id="email">
                                    <i className="bi bi-envelope btn-signup" /> Email
                                </button>
                            </div>
                        </div>

                        <p className="middle-text">{book.description}</p>
                        <div className="row my-3 d-flex align-items-center justify-content-start ">
                            <div className="col-6 d-flex justify-content-start align-items-center gap-3">
                                <img src={book.avatar} alt={book.author} className="" style={{ width: "50px", height: "50px" }} />
                                <div className="">
                                    <div className="list-unstyled justify-content-start">
                                        <div className="book-details">Written by:</div>
                                        <div><strong className="book-details-info">{book.author}</strong></div>
                                    </div>
                                </div>
                                <div>
                                    <list className="list-unstyled justify-content-start">
                                        <li className="book-details">Publisher:</li>
                                        <li><strong className="book-details-info">{book.publisher}</strong></li>
                                    </list>
                                </div>
                                <div>
                                    <list className="list-unstyled justify-content-start">
                                        <li className="book-details">Year:</li>
                                        <li><strong className="book-details-info">{book.year}</strong></li>
                                    </list>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div>
                                    <list className="list-unstyled px-2">
                                        <button className="btn btn-purple btn-sm ">
                                            <i className="bi bi-lightning-fill" id="shipping" /> <strong>FREE SHIPPING</strong>
                                        </button>
                                    </list>
                                </div>
                                <div>
                                    <list className="list-unstyled px-2">
                                        <button className="btn btn-green btn-sm ">
                                            <i className="bi bi-shield-fill-check" id="stocks" /> <strong>IN STOCKS</strong>
                                        </button>
                                    </list>
                                </div>
                            </div>
                        </div>
                        <hr id="ligne"></hr>
                        <div className="row text-center my-2 align-items-center py-1">
                            <div className="col-md-6 d-flex justify-content-start align-items-center">
                                <span className="fw-bold" id="description-price">${book.price}</span>{' '}
                                <span className="text-muted text-decoration-line-through px-3" id="description-oldprice">${book.oldPrice}</span>{' '}
                                <span className="badge" id="description-reduction">{book.reduction}</span>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <span className="d-flex">
                                    <QuantitySelector quantity={quantity} increase={increase} decrease={decrease} />
                                    <button className="btn-details btn-primary mx-1">
                                        <i className="bi bi-cart "></i>  Add to Cart
                                    </button>
                                    <span ><LikeButton /></span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Customer Reviews */}
                <br />
                <div className="row my-3 justify-content-start">
                    <div className="col-8"><ProductTabs /></div>
                    <div className="col-4"><RelatedBooks /></div>
                </div>
            </div>
        </section>
    );
}

