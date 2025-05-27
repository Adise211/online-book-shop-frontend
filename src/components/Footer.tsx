import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <>
      <AntFooter style={{ textAlign: "center", backgroundColor: "#f0f2f5" }}>
        © {new Date().getFullYear()} BookShop. All rights reserved.{" "}
      </AntFooter>
    </>
  );
};

export default Footer;
