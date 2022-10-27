import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/products", {
      title: title,
      price: price,
    });
    navigate(-1);
  };

  return (
    <>
      <h3 className="title">Add Data Product...</h3>
      <Link to="/" className="button is-small is-link mb-3">
        Back
      </Link>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Colomn Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write title this colomn..."
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Colomn Price</label>
          <div className="control">
            <input
              type="number"
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Rp. ****"
              required
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success is-small">Save</button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
