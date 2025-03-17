import React from 'react';
import './price.css';

const PricingTable = () => {
    return (
      <div className="table-container">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Package</th>
              <th>
                <div className="package-header">
                  <p className="price">$100</p>
                  <p className="title">Basic</p>
                  <p className="desc">Silver Package</p>
                  <p className="detail">
                    Mildly Detailed Product, 3 renders Provided - Kindly Contact
                    me before ordering
                  </p>
                </div>
              </th>
              <th>
                <div className="package-header">
                  <p className="price">$300</p>
                  <p className="title">Standard</p>
                  <p className="desc">Gold Package</p>
                  <p className="detail">
                    Highly Detailed Product, 6 renders Provided - Kindly Contact
                    me before ordering
                  </p>
                </div>
              </th>
              <th>
                <div className="package-header">
                  <p className="price">$1000</p>
                  <p className="title">Premium</p>
                  <p className="desc">Diamond Package</p>
                  <p className="detail">
                    Ultra detailed model 9 render provided, Animation - Kindly
                    Contact me regarding this
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3D Modelling</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Texturing And Lighting</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Include Animation</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Source File</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>3D Renders</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Revisions</td>
              <td>9</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Delivery Time</td>
              <td>
                <input type="radio" name="basic-delivery" /> 4 Days
                <br />
                <input type="radio" name="basic-delivery" /> 2 Days
              </td>
              <td>
                <input type="radio" name="standard-delivery" /> 4 Days
                <br />
                <input type="radio" name="standard-delivery" /> 2 Days
              </td>
              <td>
                <input type="radio" name="premium-delivery" /> 7 Days
                <br />
                <input type="radio" name="premium-delivery" /> 2 Days
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="select-btn">Select</button>
              </td>
              <td>
                <button className="select-btn">Select</button>
              </td>
              <td>
                <button className="select-btn">Select</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PricingTable;
