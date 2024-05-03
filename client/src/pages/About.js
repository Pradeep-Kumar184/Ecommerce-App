import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our ecommerce company operates online platforms to facilitate buying
            and selling of goods or services. They manage transactions, provide
            customer support, and handle logistics like shipping and delivery.
            These companies leverage the internet to reach a wide audience and
            offer convenience to shoppers by enabling them to make purchases
            from the comfort of their homes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
