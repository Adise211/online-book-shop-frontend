import { Layout } from "antd";

const { Header } = Layout;

const NavBar: React.FC = () => {
  const firstHeaderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#2c293b",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
  };

  const secondHeaderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#2c293b",
    height: 48,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <>
      <Header style={firstHeaderStyle}>
        <h1>Logo</h1>
        <h1>Search Box</h1>
        <h1>Login</h1>
      </Header>
      <Header style={secondHeaderStyle}>
        <p>category</p>
        <p>category2</p>
        <p>category3</p>
        <p>category4</p>
        <p>category5</p>
      </Header>
    </>
  );
};

export default NavBar;
