function AboutPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">About SweetCrumbs</h2>
      <p className="lead text-center">
        SweetCrumbs is a family-owned cake shop dedicated to crafting delicious,
        beautiful cakes for every occasion. Our passion for baking and
        commitment to quality ingredients ensure every bite is a delight.
        Whether you’re celebrating a birthday, wedding, or just want to treat
        yourself, we have the perfect cake for you!
      </p>
      <div className="text-center mt-4">
        <img
          src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
          alt="About SweetCrumbs"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  );
}

export default AboutPage;
