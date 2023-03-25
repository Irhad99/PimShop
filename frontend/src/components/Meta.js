import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Dobrodošli u PimShop",
  description: "Prodajemo najbolje proizvode po najpovoljnijoj cijeni",
  keywords: "elektronika, kupi elektroniku, jeftina elektronika",
};

export default Meta;
