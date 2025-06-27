function ContactPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning fw-bold">
              Send Message
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              <strong>Email:</strong> info@sweetcrumbs.com
              <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>123 Cake Lane, Dessert City, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
