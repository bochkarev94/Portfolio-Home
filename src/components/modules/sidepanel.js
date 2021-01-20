import React from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Menu} from '../data/menu';
import {Link} from "react-scroll";

const Sidepanel = ({isOpen, toggle}) => {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Close/>
            </Icon>
            <Wrapper>
                <SideMenu>
                    {Menu.map((item, i) => {
                        return (
                            <SideLink key={i}>
                                <Link
                                onClick={toggle} 
                                activeClass="active"
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >
                                {item.title}
                            </Link>
                            </SideLink>
                            )
                    })}
                </SideMenu>
            </Wrapper>
        </Container>
    )
}

export default Sidepanel;

const Container = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ?  '1' : '0')};
    top: ${({ isOpen }) => (isOpen ?  '0' : '-100%')};
`
const Icon = styled.div`
    position: absolute;
    top: 20px;
    right: 24px;
    background: transparent;
    font-size: 32px;
    cursor: pointer;
    outline: none;
`
const Close = styled(FaTimes)`
    color: #fff;
`
const Wrapper = styled.div`
    color: #fff;
    
`

const SideMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 64px;

    @media screen (max-width: 480px) {
        grid-template-rows: repeat(4, 60px)
    }
`

const SideLink = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #f26a2e;
    }
`
