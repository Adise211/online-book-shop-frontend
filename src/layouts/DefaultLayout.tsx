import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen p-4">
        <Outlet /> {/* This renders the child route */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
