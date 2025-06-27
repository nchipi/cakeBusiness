function MenuPage() {
  const cakes = [
    {
      name: "Chocolate Fudge Cake",
      description: "Rich chocolate cake layered with creamy fudge frosting.",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Red Velvet Cake",
      description: "Classic red velvet with cream cheese frosting.",
      price: "$28",
      image:
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lemon Drizzle Cake",
      description: "Moist lemon cake with a tangy lemon glaze.",
      price: "$22",
      image:
        "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Carrot Cake",
      description: "Spiced carrot cake with walnuts and cream cheese frosting.",
      price: "$24",
      image:
        "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80",
    },
  ];
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">Our Cakes Menu</h2>
      <div className="row">
        {cakes.map((cake, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={cake.image} className="card-img-top" alt={cake.name} />
              <div className="card-body">
                <h5 className="card-title">{cake.name}</h5>
                <p className="card-text">{cake.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <span className="fw-bold">{cake.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
