/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await axios.get("http://localhost:8080/products");
    setProducts(products.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    getProducts();
  };

  return (
    <>
      <h3 className="title">Data Product</h3>
      <Link to="/add" className="button is-small is-link">
        Add
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>
                Rp.{" "}
                <NumericFormat
                  displayType="text"
                  thousandSeparator=","
                  value={product.price}
                />{" "}
              </td>
              <td>
                <Link
                  to={`/edit/${product.id}`}
                  className="button is-warning is-small mr-2"
                >
                  Edit
                </Link>
                <button
                  className="button is-small is-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListProduct;
