import React, {useState} from "react"
import Header from "./modules/header";
import {GlobalStyle} from './global-style/global';
import Sidepanel from "./modules/sidepanel";


const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
  return (
    <>
    <GlobalStyle />
    <Sidepanel isOpen={isOpen} toggle={toggle}/>
      <Header toggle={toggle}/>
        <main>{children}</main>
    </>
  )
}

export default Layout;
