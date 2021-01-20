import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiJquery } from "react-icons/si";
import { FaReact} from "react-icons/fa";
import { GrGatsbyjs} from "react-icons/gr";


export const SkillsData = [
    {
        icon: <AiFillHtml5
        css={`
        color: #f34f2e;`}/>,
        title: 'HTML5',
        desc: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.' 
    },

    {
        icon: <DiCss3
        css={`
        color: #047bf1;`}/>,
        title: 'CSS3',
        desc: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!'
    },

    {
        icon: <SiJavascript
        css={`
        color: #f3a82e;`}/>,
        title: 'Java Script',
        desc: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.' 
    },

    {
        icon: <SiJquery
        css={`
        color: #f3a82e;`}/>,
        title: 'Jquery',
        desc: 'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует.' 
    },

    {
        icon: <FaReact
        css={`
        color: #3af500;`}/>,
        title: 'React',
        desc: 'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт под любые цели.' 
    },
    {
        icon: <GrGatsbyjs
        css={`
        color: #047bf1;`}/>,
        title: 'Gatsby',
        desc: 'Данный фреймворк отлично подходит для создания небольших и статических сайтов. Отличается быстрой загрузкой страниц ' 
    }
]