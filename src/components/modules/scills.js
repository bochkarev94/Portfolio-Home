import React from 'react';
import styled from 'styled-components';
import {SkillsData} from '../data/skills-icons';

const Scills = () => {
    return (
        <Container id='skills'>
            <H2>Что я использую в работе</H2>
            <Wrapper>
                {SkillsData.map((item, i) => {
                    return (
                        <Box key={i}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </Box>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

export default Scills;

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px calc((100vh - 1300px) / 2);
`

const H2 = styled.h2`
    text-align: center;
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: 48px;
    padding: 0 32px;
`

const Wrapper = styled.div`
    padding: 0 32px;
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 15px;


    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        font-size: 14px;
    }

    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
        
    }
`

const Box = styled.div`
    height: 100%;
    width: 100%;
    padding: 32px;
    border: 1px solid #000000;
`

const Icon = styled.div`
    font-size: 48px;
    margin-bottom: 16px;
`

const Title = styled.p`
    font-size: clamp(16px, 2.5vw, 24px);
    margin-bottom: 8px;
    font-weight: 700;
`

const Desc = styled.p`
    line-height: 22px;
`
