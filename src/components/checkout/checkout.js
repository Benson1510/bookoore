import 'bootstrap/dist/css/bootstrap.min.css';

import CheckoutForm from './checkoutform';

export default function Checkout() {
  return (
    <main className="checkout-page">
      <section className="container-fluid px-5">
        <section className="row ">
          <CheckoutForm/>
        </section>
      </section>
    </main>
  );
};

