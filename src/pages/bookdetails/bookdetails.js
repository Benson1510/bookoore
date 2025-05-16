import FeaturesSecondary from '../../components/layout/featuresSecondary';
import BookOnSales from '../../components/layout/bookonsales';
import BrandLogo from '../../components/layout/brandlogo';
import BookDetails from '../../components/books/bookdetails';
import Newsletter from '../../components/layout/newsletters';

export default function BooksDetails() {
    return (
        <>
        <BookDetails />
        <FeaturesSecondary currentPage={"books"} />
        <BookOnSales />
        <BrandLogo />
        <Newsletter />
        </>
    );
}
