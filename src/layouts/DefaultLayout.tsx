import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import NavBar from "../components/NavBar";

const { Content } = Layout;
const DefaultLayout = () => {
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "24px",
    minHeight: "280px",
    height: "calc(100vh - 64px)", // Adjust height based on header/footer
    backgroundColor: "#f0f2f5",
    width: "100%",
    overflowY: "auto", // Allow scrolling if content overflows
  };

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <NavBar />
      <Content style={contentStyle}>
        <Outlet /> {/* This renders the child route */}
      </Content>
      {/* <Footer /> */}
    </Layout>
  );
};

export default DefaultLayout;
