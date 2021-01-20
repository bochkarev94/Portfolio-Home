import React from "react";
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {Menu} from '../data/menu';
import {Button} from './button';
import {Link} from "react-scroll";

const Header = ({toggle}) => {
  return (
    <Nav>
      <NavLink logo='true'>PORTFOLIO</NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        {Menu.map((item, i) => {
          return (
            <NavLink key={i}>
              <Link
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                  {item.title}
                </Link>
            </NavLink>
          ) 
      })}
      </NavMenu>
      <NavBtn>
        <Button primary='true' 
        round='true' 
        href='http://sparrow-black2020.ru/Download-fails/resume.pdf'
        download="">
          Download cv
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav `
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 8px calc((100vw - 1300px) / 2);
    z-index: 100;
    position: relative;

`

const NavLink = styled.div`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 16px;
    height: 100%;
    cursor: ${({logo}) => (logo ? ' ': 'pointer')} ;
    font-size: ${({logo}) => (logo ? '30px' : '20px')} ;
    font-family: ${({logo}) => (logo ? "'Redressed', cursive;" : "'Roboto', sans-serif;")} ;
    &:hover {
    color: ${({logo}) => (logo ? ' ': '#c57700')} ;
    transition: 0.5s all;
    }

     @media screen and (max-width: 768px) {
       font-size: ${({logo}) => (logo ? '25px' : '15px')} ;
     }
`

const Bars = styled(FaBars) `
    display: none;
    color: #ffffff;

    @media screen and (max-width: 912px) {
        display: block;
        position: absolute;
        top: 0px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 30px;
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    

    

    @media screen and (max-width: 912px) {
        display: none;
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 912px){
        display: none;
    }
`
