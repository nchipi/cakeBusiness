function AboutPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">
        About Nestlise Foods and Catering
      </h2>
      <p className="lead text-center mx-auto" style={{ maxWidth: "700px" }}>
        Nestlise Foods and Catering is a family-owned cake and snacks shop
        dedicated to crafting delicious, beautiful cakes for every occasion. Our
        passion for baking and commitment to quality ingredients ensure every
        bite is a delight. Whether you’re celebrating a birthday, wedding, or
        just want to treat yourself, we have the perfect cake for you!
      </p>
      <div className="d-flex justify-content-center mt-4">
        <img
          src="/cake_business/images/young_chef.jpg"
          alt="About Nestlise Foods and Catering"
          className="img-fluid rounded shadow"
          style={{
            maxWidth: "400px",
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default AboutPage;
