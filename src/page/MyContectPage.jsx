import React from "react";
import styled from "styled-components";
import MyDetailHeader from "../component/my_detail/MyDetailHeader";
import Footer from "../component/common/Footer";
import MyContect from "../component/my_detail/MyContect";

const Layout = styled.div`
  width: 100%;
`;

const MyContectPage = () => {
  return (
    <Layout>
      <MyDetailHeader />
      <MyContect />
      <Footer />
    </Layout>
  );
};

export default MyContectPage;
