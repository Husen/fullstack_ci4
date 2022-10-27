/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8080/products/${id}`, {
      title: title,
      price: price,
    });
    navigate(-1);
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <>
      <h3 className="title">Edit Data Product...</h3>
      <Link to="/" className="button is-small is-link mb-3">
        Back
      </Link>
      <form onSubmit={updateProduct}>
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

export default EditProduct;
