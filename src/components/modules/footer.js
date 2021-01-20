import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {SiVk} from 'react-icons/si';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillSkype} from 'react-icons/ai';

const Footer = () => {
    return (
        <Container id='contacts'>
            <Wrapper>
                <Item>
                    <Text>Перезвонити мне:</Text>
                    <a className='phone' href='tel: +79990894248' >8 (999) 089 42 48</a>
                </Item>
                <Item>
                    <Text>или напешити мне:</Text>
                    <Email href='mailto:bochkarv_94@mail.ru'>bochkarv_94@mail.ru</Email>
                </Item>
                <Item>
                    <Text>Я в социальных сетях:</Text>
                    <Soc>
                        <a className="vk" href='https://vk.com/amur94'><SiVk/></a>
                        <a className='git' href='https://github.com/bochkarev94'><AiFillGithub/></a>
                        <a href='skype:[akbars06_2010@mail.ru]'><AiFillSkype/></a>
                    </Soc>
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    background: #25333c;
    padding: 40px calc((100vh - 1300px) / 2);
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    a{
        display: block;
        text-decoration: none;
        color: #fff;
        font-size: clamp(16px, 3vw, 30px);
        font-weight: 700;

        @media screen and (max-width: 500px) {
        font-size: 18px;
        margin-top: 10px;
    }
    &:hover {
        text-decoration: underline;
        }
    }
    
    @media screen and (max-width: 500px) {
        display: grid;
        grid-template-columns: 50%;
        gap: 10px;
    }

`
const Item = styled.div`
    text-align: left;
`

const Email = styled(Link)`
    &:hover {
        text-decoration: underline;
    }
`
const Text = styled.div`
    color: #fff;
    font-size: clamp(14px, 3vw, 20px);
    font-weight: 300;
    opacity: .8;

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`
const Soc = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .git {
        margin-left: 10px;
        margin-right: 10px;
    }
    a{
        &:hover {
            color : #c57700;
            transform: translateY(-2px);
            transition: 0.5s all;
        }
    }
    
    
`

