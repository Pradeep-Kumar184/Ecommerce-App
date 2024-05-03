import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Our policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Privacy and Data Security</p>
          <p>Customer Satisfaction</p>
          <p>Product Quality and Authenticity</p>
          <p>Fair and Transparent Pricing</p>
          <p>Payment Security</p>
          <p>Community Guidelines and Responsible Use</p>
          <p>Environmental Sustainability</p>
          <p>Continuous Improvement and Compliance</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
