import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Checkout()  {
  return (
    <main className="checkout-page">
      <section className="container py-5">
        <article className="row">
          <header className="col-12">
            <nav aria-label="breadcrumb" className="checkout-page__breadcrumb mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </header>
        </article>

        <article className="row">
          <section className="col-12">
            <CheckoutProgress currentStep={2} />
          </section>
        </article>

        <section className="row mt-4">
          <article className="col-lg-6 mb-4">
            <BuyerInfoForm />
          </article>
          <aside className="col-lg-6">
            <PaymentSection />
          </aside>
        </section>
      </section>
    </main>
  );
};

const CheckoutProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Shopping Summary' },
    { id: 2, name: 'Checkout' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Shipping' }
  ];

  return (
    <div className="checkout-progress-container position-relative mb-5">
      
      <div className="progress-line position-absolute top-50 start-0 end-0 h-1 bg-secondary"></div>
      
      
      <div 
        className="progress-active-line position-absolute top-50 start-0 h-1 bg-primary" 
        style={{ width: `${(currentStep - 1) * 33.33}%` }}
      ></div>

      <div className="d-flex justify-content-between position-relative">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div key={step.id} className="d-flex flex-column align-items-center">
              {/* Cercle de l'étape */}
              <div 
                className={`step-circle rounded-circle d-flex align-items-center justify-content-center 
                  ${isCompleted ? 'bg-primary text-white' : ''}
                  ${isActive ? 'border-primary' : 'border-secondary'}
                  border-2 bg-white`}
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                {isCompleted ? (
                  <i className="bi bi-check"></i>
                ) : (
                  <span className={`${isActive ? 'text-primary fw-bold' : 'text-secondary'}`}>
                    {step.id}
                  </span>
                )}
              </div>
              
              
              <span className={`mt-2 small ${isCompleted || isActive ? 'text-primary fw-medium' : 'text-secondary'}`}>
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BuyerInfoForm = () => {
  const [buyerInfo, setBuyerInfo] = useState({
    firstName: 'Richard',
    lastName: 'Khan',
    email: 'richardkhan@mail.com',
    phone: '8512519825236',
    address: 'Corner Grove St, Franklin Avenue',
    state: 'England',
    postcode: '1241255',
    city: 'London',
    note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <article className="buyer-info card p-4">
      <header>
        <h2 className="buyer-info__title mb-4">Buyer Info</h2>
      </header>
      
      <form className="buyer-info__form">
        <fieldset className="row mb-3">
          <section className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="firstName" className="form-label">FIRST NAME</label>
            <input 
              type="text" 
              className="form-control"
              id="firstName" 
              name="firstName" 
              value={buyerInfo.firstName} 
              onChange={handleChange} 
            />
          </section>
          
          <section className="col-md-6">
            <label htmlFor="lastName" className="form-label">LAST NAME</label>
            <input 
              type="text" 
              className="form-control"
              id="lastName" 
              name="lastName" 
              value={buyerInfo.lastName} 
              onChange={handleChange} 
            />
          </section>
        </fieldset>
        
        <fieldset className="row mb-3">
          <section className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
            <input 
              type="email" 
              className="form-control"
              id="email" 
              name="email" 
              value={buyerInfo.email} 
              onChange={handleChange} 
            />
          </section>
          
          <section className="col-md-6">
            <label htmlFor="phone" className="form-label">MOBILE PHONE NUMBER</label>
            <input 
              type="tel" 
              className="form-control"
              id="phone" 
              name="phone" 
              value={buyerInfo.phone} 
              onChange={handleChange} 
            />
          </section>
        </fieldset>
        
        <fieldset className="row mb-3">
          <section className="col-12">
            <label htmlFor="address" className="form-label">ADDRESS</label>
            <input 
              type="text" 
              className="form-control"
              id="address" 
              name="address" 
              value={buyerInfo.address} 
              onChange={handleChange} 
            />
          </section>
        </fieldset>
        
        <fieldset className="row mb-3">
          <section className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="state" className="form-label">STATE</label>
            <span className="select-wrapper position-relative">
              <select 
                className="form-select"
                id="state" 
                name="state" 
                value={buyerInfo.state} 
                onChange={handleChange}
              >
                <option value="England">England</option>
                <option value="Scotland">Scotland</option>
                <option value="Wales">Wales</option>
                <option value="Northern Ireland">Northern Ireland</option>
              </select>
              <i className="bi bi-chevron-down select-icon position-absolute end-0 top-50 translate-middle-y me-3"></i> 
            </span>
          </section>
          
          <section className="col-md-6">
            <label htmlFor="postcode" className="form-label">POSTCODE/ZIP</label>
            <input 
              type="text" 
              className="form-control"
              id="postcode" 
              name="postcode" 
              value={buyerInfo.postcode} 
              onChange={handleChange} 
            />
          </section>
        </fieldset>
        
        <fieldset className="row mb-3">
          <section className="col-12">
            <label htmlFor="city" className="form-label">TOWN/CITY</label>
            <input 
              type="text" 
              className="form-control"
              id="city" 
              name="city" 
              value={buyerInfo.city} 
              onChange={handleChange} 
            />
          </section>
        </fieldset>
        
        <fieldset className="row">
          <section className="col-12">
            <label htmlFor="note" className="form-label">NOTE</label>
            <textarea 
              className="form-control"
              id="note" 
              name="note" 
              value={buyerInfo.note} 
              onChange={handleChange} 
              rows={4}
            ></textarea>
          </section>
        </fieldset>
      </form>
    </article>
  );
};

const PaymentSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardInfo, setCardInfo] = useState({
    nameOnCard: 'Richard Khan',
    cardNumber: '',
    cvv: '',
    month: 'August',
    year: ''
  });

  const handleMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardInfoChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardInfo(prev => ({ ...prev, cardNumber: formattedValue }));
  };

  return (
    <aside className="payment-section card p-4">
      <header>
        <h2 className="payment-section__title mb-4">Payment</h2>
      </header>
      
      <menu className="payment-methods d-flex gap-3 mb-4">
        <li 
          className={`payment-method flex-grow-1 text-center p-3 ${paymentMethod === 'bankTransfer' ? 'active' : ''}`}
          onClick={() => handleMethodChange('bankTransfer')}
        >
          <span className="payment-method__icon bank-transfer mb-2"></span><i class="bi bi-arrow-down-up"></i>
          <span>Bank Transfer</span>
          {paymentMethod === 'bankTransfer' && (
            <span className="payment-method__check">
              <i className="bi bi-check"></i>
            </span>
          )}
        </li>
        
        <li 
          className={`payment-method flex-grow-1 text-center p-3 ${paymentMethod === 'creditCard' ? 'active' : ''}`}
          onClick={() => handleMethodChange('creditCard')}
        >
          <span className="payment-method__icon credit-card mb-2"></span>
          <i class="bi bi-credit-card"></i>
          <span>Credit Card</span>
          {paymentMethod === 'creditCard' && (
            <span className="payment-method__check">
              <i className="bi bi-check"></i>
            </span>
          )}
        </li>
        
        <li 
          className={`payment-method flex-grow-1 text-center p-3 ${paymentMethod === 'paypal' ? 'active' : ''}`}
          onClick={() => handleMethodChange('paypal')}
        >
          <span className="payment-method__icon paypal mb-2"></span><i class="bi bi-paypal"></i>
          <span>Paypal</span>
          {paymentMethod === 'paypal' && (
            <span className="payment-method__check">
              <i className="bi bi-check"></i>
            </span>
          )}
        </li>
      </menu>
      
      {paymentMethod === 'creditCard' && (
        <form className="credit-card-form">
          <fieldset className="form-group mb-3">
            <label htmlFor="nameOnCard" className="form-label">NAME ON CARD</label>
            <input 
              type="text" 
              className="form-control"
              id="nameOnCard" 
              name="nameOnCard" 
              value={cardInfo.nameOnCard} 
              onChange={handleCardInfoChange} 
            />
          </fieldset>
          
          <fieldset className="row mb-3">
            <section className="col-md-8 mb-3 mb-md-0">
              <label htmlFor="cardNumber" className="form-label">CARD NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                id="cardNumber" 
                name="cardNumber" 
                value={cardInfo.cardNumber} 
                onChange={handleCardNumberChange} 
                placeholder="0000 0000 0000 0000"
                maxLength={19}
              />
            </section>
            
            <section className="col-md-4">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input 
                type="text" 
                className="form-control"
                id="cvv" 
                name="cvv" 
                value={cardInfo.cvv} 
                onChange={handleCardInfoChange} 
                maxLength={4}
              />
            </section>
          </fieldset>
          
          <fieldset className="row">
            <section className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="month" className="form-label">MONTH</label>
              <span className="select-wrapper position-relative">
                <select 
                  className="form-select"
                  id="month" 
                  name="month" 
                  value={cardInfo.month} 
                  onChange={handleCardInfoChange}
                >
                  <option value="August">August</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <i className="bi bi-chevron-down select-icon position-absolute end-0 top-50 translate-middle-y me-3"></i>
              </span>
            </section>
            
            <section className="col-md-6">
              <label htmlFor="year" className="form-label">YEAR</label>
              <span className="select-wrapper position-relative">
                <select 
                  className="form-select"
                  id="year" 
                  name="year" 
                  value={cardInfo.year} 
                  onChange={handleCardInfoChange}
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
                <i className="bi bi-chevron-down select-icon position-absolute end-0 top-50 translate-middle-y me-3"></i> 
              </span>
            </section>
          </fieldset>
        </form>
      )}
      
      <button className="btn btn-primary w-100 mt-4 py-3">PLACE ORDER</button>
    </aside>
  );
};

