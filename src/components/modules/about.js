import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {FaRegListAlt} from 'react-icons/fa';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {useStaticQuery, graphql} from 'gatsby';


const About= () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"},
                name: {in: "portret"}}) {
                edges {
                node {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            }
            }
    `)

    return (
        <Container id='about'>
            <H2>Про меня</H2>
            <Wrapper>
                <ColOne>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
                </ColOne>
                <ColTwo>
                    <Title>
                        <FaRegListAlt css={`
                            color: #c57700;
                            font-size: 32px;
                            margin-bottom: 16px;
                        `}/>
                        <h3>Sean Michaels</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repellendus
                        ipsa inventore libero alias porro ab, sed incidunt sapiente tempore molestias
                        minus unde deserunt repudiandae eum magni nostrum temporibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repellendus
                        ipsa inventore libero alias porro ab, sed incidunt sapiente tempore molestias
                        minus unde deserunt repudiandae eum magni nostrum temporibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repellendus
                        ipsa inventore libero alias porro ab, sed incidunt sapiente tempore molestias
                        minus unde deserunt repudiandae eum magni nostrum temporibus.</p>
                    </Title>
                    <WrapperItem>
                            <IoIosCheckmarkCircleOutline css={`
                            color: #c57700;
                            font-size: 22px;
                        `}/>             
                        <Item>
                            
                            <h4>Sean Michaels</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repellendus
                            ipsa inventore libero alias porro ab, sed incidunt sapiente tempore molestias
                            minus unde deserunt repudiandae eum magni nostrum temporibus.</p>
                        </Item>
                            <IoIosCheckmarkCircleOutline css={`
                            color: #c57700;
                            font-size: 22px;
                        `}/>
                       <Item>
                            <h4>Sean Michaels</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repellendus
                            ipsa inventore libero alias porro ab, sed incidunt sapiente tempore molestias
                            minus unde deserunt repudiandae eum magni nostrum temporibus.</p>.
                        </Item>
                    </WrapperItem>
                </ColTwo>
            </Wrapper>
        </Container>
    )
}

export default About

const Container = styled.div`
    background: #ece7ff;;
    color: #000;
    padding: 80px calc((100vh - 1300px) / 2);
`
const H2 = styled.h2`
    text-align: center;
    padding-left: 32px;
    margin-bottom: 34px;
    font-size: clamp(24px, 5vw, 32px);
    font-weight: 700;
`
const Wrapper = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30% 70%;
    justify-items: center;
    padding:0 32px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColOne = styled.div`
    margin-top: 32px;
    margin-right: 50px;
    border-radius: 10px;
    line-height: 2;
    width: 100%;
    max-height: 600px;
    position: relative;

    @media screen and (max-width: 768px) {
        margin-right: 0;
        margin-top: 0;
    }
    

`
const Title = styled.div`
    padding-top: 16px;
    padding-right: 32px;
    h3{
    margin-bottom: 16px;
    font-size: 24px;
    font-style: italic;
    }
    p {
        font-size: 20px;
        @media screen and (max-width: 992px) {
        font-size: 18px;
    }
        @media screen and (max-width: 768px) {
        font-size: 16px;
        padding-right: 0;
    }
    }
    @media screen and (max-width: 768px) {
        padding-right: 0;
    }
`
const ColTwo = styled.div `
    margin-left: 60px;
    text-align: justify;
    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`

const Images = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
`
const WrapperItem = styled.div`
    padding-right: 100px;
    padding-top: 32px;
    display: grid;
    grid-template-columns: 5% 45% 5% 45%;
    column-gap: 10px;

    @media screen and (max-width: 992px) {
        grid-template-columns: 5% 95% ;
        row-gap: 25px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 5% 45% 5% 45%;
    }
    @media screen and (max-width: 568px) {
        grid-template-columns: 1fr ;
        row-gap: 10px;
        padding-right: 0;
    }
`

const Item = styled.div`
    font-size: 14px;
        h4 {
        font-size: 18px;
        }

`