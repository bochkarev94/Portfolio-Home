import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {Button} from './button';
import {AiFillGithub} from 'react-icons/ai';

const MyWorks = () => {

    const data = useStaticQuery(graphql`
        query WorksQuery {
            allWorksJson {
                edges {
                    node {
                        alt
                        button
                        name
                        to
                        link
                        img {
                            publicURL
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    function getWorks(data) {
        let worksArray = [];
        data.allWorksJson.edges.forEach((item, i) => {
            worksArray.push(
                <Card Wrapper key={i}>
                    <WarksImg 
                        alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid}
                    />
                    <Item>
                        <Text>
                            <Title>{item.node.name}</Title>
                        </Text>
                        <Button to={item.node.to}
                        round='true'
                        css={`
                        position:absolute;
                        top: 420px;
                        `}>{item.node.button}</Button>
                    </Item>
                    <Icon>
                        <a className="git" href={item.node.link}><AiFillGithub/></a>
                    </Icon>
                </Card>
            )
        })
        return worksArray;
    }

    return (
        <Container id='works'>
            <H2>Мои работы</H2>
            <Wrapper>{getWorks(data)}</Wrapper>
        </Container>
    )
}

export default MyWorks;

const Container = styled.div`
    min-height: 100vh;
    background: #ece7ff;
    padding: 80px calc((100vh - 1300px) / 2);
    color: #fff;
`

const H2 = styled.h2`
    font-size: clamp(20px, 5vw, 48px);
    text-align: center;
    margin-bottom: 80px;
    color: #000000;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 32px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 870px) {
        grid-template-columns: 1fr;
    }

`
const Card = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const WarksImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 1.065, 1);

    &:hover {
        filter: brightness(100%);
    }
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 32px;
`
const Text = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 350px;
`
const Title= styled.div`
    font-weight: 400;
    font-size: 26px;
    margin-left: 8px;
`
const Icon = styled.div`
    position: absolute;
    bottom: 0;
    right: 20px;
    font-size: 50px;
    cursor: pointer;
    .git {
        color : #fff;

        &:hover {
            color : #c57700;
            transition: 0.5s all;
        }
    }
`