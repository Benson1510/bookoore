import FeaturesSecondary from '../../components/layout/featuresSecondary';
import Checkout from '../../components/checkout/checkout';
import BreadCrumb from '../../components/layout/breadcrumb';
import CheckoutProgress from '../../components/checkout/components/checkoutprogress';

export default function CheckoutPage() {
    return (
        <>
            <BreadCrumb />
            <CheckoutProgress />
            <Checkout />
            <FeaturesSecondary currentPage={"books"} />
        </>
    );
}