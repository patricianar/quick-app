import React, { useState, useEffect } from "react";
import Row from "../components/Row";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import { CSVLink } from "react-csv";
import { format } from "date-fns";
import FileUpload from "../components/FileUpload";
import Modal from "react-bootstrap/Modal";
import Cookies from "js-cookie";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const headers = [
  { label: "Barcode", key: "barcode" },
  { label: "Name", key: "name" },
  { label: "Quantity", key: "quantity" },
  { label: "Price", key: "price" },
  { label: "Weight", key: "weight" },
  { label: "Min Stock", key: "minStock" },
  { label: "Description", key: "description" },
];

const Inventory = () => {
  const [listProducts, setListProducts] = useState([]);
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(async () => {
    const arrayProd = [];
    try {
      const response = await axios.get("/products", {
        params: Cookies.get("Company"),
      });
      setListProducts(response.data);
      response.data.forEach((item) => {
        arrayProd.push(item.data);
      });
      setData(arrayProd);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const closeHandler = () => {
    setOpenModal(false);
    window.location.reload(true);
  };

  const clickHandler = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="rightSection">
        <h1>All Products</h1>
        <h5>
          <FaIcons.FaFileUpload />
          <a onClick={clickHandler}> IMPORT &nbsp;&nbsp;</a>
          <FaIcons.FaFileDownload />
          <Modal show={openModal} onHide={closeHandler} size="md">
            <Modal.Body>
              <FileUpload />
            </Modal.Body>
          </Modal>
          <CSVLink
            data={data}
            headers={headers}
            filename={
              "Inventory" + format(new Date(), "MM-dd-yyyy HH:MM:SS") + ".csv"
            }
          >
            EXPORT
          </CSVLink>
        </h5>
        <MDBTable responsive scrollY maxHeight="85vh" bordered large hover dark>
          <MDBTableHead textWhite style={{ backgroundColor: "black" }}>
            <tr>
              <th className="center-text">Barcode</th>
              <th className="center-text">Name</th>
              <th className="center-text">Quantity</th>
              <th className="center-text ">Min Stock</th>
              <th className="center-text">Price</th>
              <th colSpan="2" className="center-text">
                Action
              </th>
              <th colSpan="2" className="center-text">
                Alarms
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody textWhite>
            {listProducts.map((product) => (
              <Row
                key={product._id}
                product={product}
                listProducts={listProducts}
                setListProducts={setListProducts}
              />
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default Inventory;
