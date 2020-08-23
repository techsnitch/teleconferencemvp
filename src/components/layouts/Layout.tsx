import React from "react";

const Layout = (props: any) => {
  return (
    <>
      <nav>Navbar</nav>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
