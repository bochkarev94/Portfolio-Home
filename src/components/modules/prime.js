import React from "react";
import styled from 'styled-components';
import {Button} from './button';
import Video from '../../assets/videos/video.mp4'

const Prime = () => {
    return (
        <Conteiner>
            <Bg>
                <VideoBg 
                src={Video} 
                tupe='video/mp4' 
                autoPlay 
                loop
                muted 
                playsInline/>
            </Bg>
            <Content>
                <Items>
                    <P>Меня зовут Бочкарев Иван</P>
                    <H1>Я WEB-разработчик из Москвы</H1>
                    <PrimeButton>
                        <Button 
                            primary='trye' 
                            big='trye'
                            round='trye'
                            href='http://sparrow-black2020.ru/Download-fails/resume.pdf'
                            download=""
                        >   
                        Download cv
                    </Button>
                    </PrimeButton>
                </Items>
            </Content>
        </Conteiner>
    )
}
export default Prime;

const Conteiner = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 16px;
    position: relative;
    margin-top: -80px;
    color: #fff;

        :before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            background: 
                linear-gradient(
                    180deg, 
                    rgba(0, 0, 0, .1) 0%,
                    rgba(0, 0, 0, .9) 100%);
        }
`

const Bg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const Content = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0px calc((100vh - 1300px) / 2);
`

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: 700;
`

const H1 = styled.h1`
    font-size: clamp(24px, 6vw, 54px);
    margin-bottom: 24px;
    letter-spacing: 3px;
    font-weight: 700;
    padding: 0 16px;
`

const P = styled.p`
    font-size: clamp(16px, 3vw, 48px);
    margin-bottom: 32px;
    font-weight: 400;
`

const PrimeButton = styled.div`
    padding-top: 20px;

`
