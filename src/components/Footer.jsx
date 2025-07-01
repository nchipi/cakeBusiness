function Footer() {
  return (
    <footer className="text-center py-4 bg-warning-subtle mt-5 shadow">
      <div>
        <p className="fw-bold">
          © {new Date().getFullYear()} Nestlise Foods and Catering. Designed and
          developed by NCHIPI Web Solutions{" "}
        </p>
      </div>
      <div className="mt-2">
        <a
          href="https://github.com/nchipi"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-dark text-decoration-none"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-dark text-decoration-none"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
