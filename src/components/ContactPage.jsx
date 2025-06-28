import { FaWhatsapp, FaPhone } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mt-4 text-center">
            <p>
              <FaWhatsapp color="#25D366" size={22} className="me-2" />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/+265998168577"
                target="_blank"
                rel="noopener noreferrer"
              >
                +265998168577
              </a>
              <br />
              <FaPhone color="#ffc107" size={20} className="me-2" />
              <strong>Call:</strong>{" "}
              <a href="tel:+265887577647">+265887577647</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
