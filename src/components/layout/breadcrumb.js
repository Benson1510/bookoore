import { useLocation } from 'react-router-dom';

export default function BreadCrumb() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPage = pathSegments[pathSegments.length - 1] || 'Home';
    const formattedPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

    return (
            <article className="row pt-2 d-flex justify-content-center mt-1 px-5 ">
                <header className="col-10 ">
                    <nav aria-label="breadcrumb" className="checkout-page__breadcrumb mb-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-primary" href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {formattedPage}
                            </li>
                        </ol>
                    </nav>
                </header>
            </article>
    )
}
