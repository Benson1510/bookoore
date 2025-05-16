import { Component } from "react";
import newsletterBg from '../../assets/images/image-newsletter.png';

export default class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({ email: value, error: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const error = !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

    if (error) {
      this.setState({ error });
    } else {
      console.log("Email submitted:", email);
      this.setState({ submitted: true, email: "" });
    }
  }

  render() {
    const { email, error, submitted } = this.state;

    return (
      <section className="newsletter-section d-flex justify-content-center mb-5">
        <div className="newsletter-overlay"></div>
        <div className="newsletter-container container-fluid col-11 py-2">
          <img
            src={newsletterBg}
            alt=""
            className="newsletter-bg-img"
            aria-hidden="true"
          />

          <div className="newsletter-content my-2">
            {submitted ? (
              <div className="success-message">
                <h3>Thank you for subscribing!</h3>
                <p>You'll receive our latest book updates soon.</p>
              </div>
            ) : (
              <>
                <h2 className="newsletter-subtitle">
                  Subscribe to our newsletter for the newest books updates
                </h2>
                <form
                  className="newsletter-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      className={`form-input ${error ? 'input-error' : ''}`}
                      placeholder="Type your email address"
                      value={email}
                      onChange={e => this.handleChange(e.target.value)}  // <-- this.
                      required
                    />
                    <button type="submit" className="subscribe-button">
                      Subscribe
                    </button>
                  </div>
                  {error && (
                    <p className="error-message">
                      Please enter a valid email address
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}
