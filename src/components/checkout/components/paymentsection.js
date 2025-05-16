import { useState } from 'react';

export default function PaymentSection() {
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
        <aside className="col-12 ">
            <aside className="payment-section py-4">
                <header>
                    <h2 className="payment-section__title mb-2 pb-1">Payment</h2>
                </header>
                <div className="payment-methods flex-row d-flex gap-2 mb-3 pt-3 ">
                    <li
                        className={`payment-method col-4 py-1 d-flex justify-content-center text-center flex-column ${paymentMethod === 'bankTransfer' ? 'active' : ''}`}
                        onClick={() => handleMethodChange('bankTransfer')}
                    >
                        <span className="payment-method__icon text-center mb-2 "></span><i class="bi bi-arrow-down-up payment-i"></i>
                        <span>Bank Transfer</span>
                        {paymentMethod === 'bankTransfer' && (
                            <span className="payment-method__check">
                                <i className="bi bi-check "></i>
                            </span>
                        )}
                    </li>
                    <li
                        className={`payment-method col-4 py-1 d-flex justify-content-center text-center flex-column ${paymentMethod === 'creditCard' ? 'active' : ''}`}
                        onClick={() => handleMethodChange('creditCard')}
                    >
                        <span className="payment-method__icon credit-card mb-2"></span>
                        <i class="bi bi-credit-card payment-i"></i>
                        <span>Credit Card</span>
                        {paymentMethod === 'creditCard' && (
                            <span className="payment-method__check">
                                <i className="bi bi-check"></i>
                            </span>
                        )}
                    </li>
                    <li
                        className={`payment-method col-4 py-1 d-flex justify-content-center text-center flex-column ${paymentMethod === 'paypal' ? 'active' : ''}`}
                        onClick={() => handleMethodChange('paypal')}
                    >
                        <span className="payment-method__icon paypal mb-2"></span><i class="bi bi-paypal payment-i"></i>
                        <span>Paypal</span>
                        {paymentMethod === 'paypal' && (
                            <span className="payment-method__check">
                                <i className="bi bi-check"></i>
                            </span>
                        )}
                    </li>
                </div>

                {paymentMethod === 'creditCard' && (
                    <form className="credit-card-form ">
                        <fieldset className="form-group py-2 pt-3 ">
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
                        <fieldset className="row mb-2">
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
                            <section className="col-md-6 mb-2 mb-md-0">
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
                                </span>
                            </section>
                        </fieldset>
                    </form>
                )}

                <button className="btn btn-primary payment-button w-100 mt-3 ">PLACE ORDER</button>
            </aside>
        </aside>
    );
};
