import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Row from '../components/Row';
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';
import { CSVLink } from "react-csv";
import { format } from 'date-fns';

const headers = [
    { label: "Barcode", key: "barcode" },
    { label: "Name", key: "name" },
    { label: "Quantity", key: "quantity" },
    { label: "Price", key: "price" },
    { label: "Weight", key: "weight" },
    { label: "Min Stock", key: "minStock" },
    { label: "Description", key: "description" }
];

const Inventory = () => {
    const [listProducts, setListProducts] = useState([]);
    const [data, setData] = useState([]);

    useEffect(async () => {
        const arrayProd = [];
        try {
            const response = await axios.get('/products');
            setListProducts(response.data);
            response.data.map(item => {
                arrayProd.push(item.data);
            })
            setData(arrayProd);
        }
        catch (error) {
            console.log(error);
        }
    }, []);



    return (
        <div className="rightSection">
            <h1>All Products</h1>
            <h5><a><FaIcons.FaFileUpload /></a> IMPORT &nbsp;&nbsp; <FaIcons.FaFileDownload />
                {/* <input type="button" value="EXPORT" /> */}
                <CSVLink
                    data={data}
                    headers={headers}
                    filename={'Inventory' + format(new Date(), 'MM-dd-yyyy HH:MM:SS') + '.csv'}
                >EXPORT</CSVLink>
            </h5>
            <Table responsive="sm" style={{ backgroundColor: '#1f1f1f' }} className="p-text">
                <thead>
                    <tr>
                        <th>Barcode</th>
                        <th>Name</th>
                        <th className="center-text">Quantity</th>
                        <th className="center-text ">Min Stock</th>
                        <th className="center-text">Price</th>
                        <th colSpan="2" className="center-text">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts.map((product) => (
                        <Row
                            key={product._id}
                            product={product}
                            listProducts={listProducts}
                            setListProducts={setListProducts} />
                    ))}
                </tbody>
            </Table>



        </div>
    );
}

export default Inventory;