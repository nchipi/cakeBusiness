import { useState } from "react";

function MenuPage() {
  const cakes = [
    {
      name: "Chicken and beef pie",
      description:
        " so yummy 😋 not much spice. And we have others for babies, very delicious 😋",
      price: "$25",
      image: "/cake_business/images/Chicken_and_beef_pie.jpg",
    },
    {
      name: "Golden brown snamoni",
      description: "🍥 roll, fresh and not much sugar",
      price: "$28",
      image: "/cake_business/images/Golden_brown_snamoni.jpg",
    },
    {
      name: "Fresh and baked sausage",
      description:
        "Good snacks for your event eg birthday party, packing food for babies for school",
      price: "$22",
      image: "/cake_business/images/fresh_and_baked_sausage.jpg",
    },
    {
      name: "Donus and beef samoosa",
      description: "for birthday party or meeting snacks",
      price: "$24",
      image: "/cake_business/images/Donus_and_beef_samoosa.jpg",
    },
    {
      name: "Lemon scone",
      description:
        "The best scone, affordable price, the softness and few sugar amounts.",
      price: "$24",
      image: "/cake_business/images/lemon_scone.jpg",
    },
    {
      name: "Chocolate cup cake",
      description: "restore your energy⚡and yummy😋",
      price: "$24",
      image: "/cake_business/images/Chocolate_cup_cake.jpg",
    },
    {
      name: "Drumstick",
      description:
        "for the meeting snacks, birthday party 🎉 or home joy, tell us we will save your time at affordable prices",
      price: "$24",
      image: "/cake_business/images/drumstick.jpg",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredCakes = cakes.filter((cake) =>
    cake.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-center mb-0">Our Cakes and Snacks Menu</h2>
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: 250 }}
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredCakes.length === 0 ? (
          <div className="col-12 text-center">
            <p>No products found.</p>
          </div>
        ) : (
          filteredCakes.map((cake, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <img
                  src={cake.image}
                  className="card-img-top"
                  alt={cake.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                  data-aos="fade-up"
                />
                <div className="card-body">
                  <h5 className="card-title">{cake.name}</h5>
                  <p className="card-text">{cake.description}</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <span className="fw-bold">{cake.price}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MenuPage;
