function Footer() {
    return (
        <footer className="text-black mt-4">
            <div className="container-fluid">
                <div className="row d-flex mx-4 justify-content-between ">
                    <div className="col-12 col-md-3 mb-2 mb-md-0">
                        <div className="row">
                            <div className="d-flex gap-1 col-12 p-0 mb-1">
                                <img className="logo-64 " src="/images/bookoe.png" alt="Logo de Bookeo" />
                                <div>
                                    <h2 className="my-0 mx-0">Bookoe</h2>
                                    <p className="mini-text mx-0">Book Store Website</p>
                                </div>
                            </div>
                            <p className="middle-text mb-2">
                                Bookoe is a Book Store Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </p>
                            <h5>Follow Us</h5>
                            <div className="d-flex my-1 gap-1">
                                <i className="bi-facebook footer-icon"></i>
                                <i id="youtube" className="bi bi-youtube footer-icon"></i>
                                <i className="bi-twitter-x footer-icon"></i>
                                <i className="bi-instagram footer-icon"></i>
                                <i className="bi-linkedin footer-icon"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-1 mb-md-0">
                        <h5>Books Categories</h5>
                        <div className="row">
                            <div className="col-6">
                                <ul className="list-unstyled my-1">
                                    <li className="my-1"><a href="#!" className="text-black">Action</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Advanture</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Comedy</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Crime</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Drama</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Fantasy</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Horror</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled my-1">
                                    <li className="my-1"><a href="#!" className="text-black">Law</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Mystery</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Professional</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">Romance</a></li>
                                    <li className="my-1"><a href="#!" className="text-black">TV Series</a></li>
                                    <li className="my-1"><a href="#!" className="text-primary fw-bold">View more ></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-1 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled my-2">
                            <li className="my-1"><a href="#!" className="text-black">About us</a></li>
                            <li className="my-1"><a href="#!" className="text-black">Contact us</a></li>
                            <li className="my-1"><a href="#!" className="text-black">Products</a></li>
                            <li className="my-1"><a href="#!" className="text-black">Login</a></li>
                            <li className="my-1"><a href="#!" className="text-black">Sign Up</a></li>
                            <li className="my-1"><a href="#!" className="text-black">FAQ</a></li>
                            <li className="my-1"><a href="#!" className="text-black">Shipment</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-1">Our Store</h5>
                        <iframe
                            width="100%"
                            height="100"
                            className="rounded mb-3"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4027%2C37.7673%2C-122.3917%2C37.7753&layer=mapnik&marker=37.7713,-122.3972"
                        />
                        <ul className="list-unstyled custom-text">
                            <li className="d-flex align-items-start mb-1">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                <span>
                                    832 Thompson Drive, San Francisco<br />
                                    CA 94107, United States
                                </span>
                            </li>
                            <li className="d-flex align-items-center mb-1">
                                <i className="bi bi-telephone-fill me-2"></i>
                                <span>+123 345123 556</span>
                            </li>
                            <li className="d-flex align-items-center mb-1">
                                <i className="bi bi-envelope-fill me-2"></i>
                                <span>support@bookoe.id</span>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="full-width-divider"></div>
                            <p className="custom-text my-1">Bookoe Book Store Website - © 2020 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
