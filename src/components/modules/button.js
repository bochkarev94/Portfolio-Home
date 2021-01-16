import styled from 'styled-components'
import {Link} from 'gatsby';

export const Button = styled(Link)`
    background ${({primary}) => (primary ? 'rgba(0, 0, 49, .4)' : '#c57700')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '16px 40px' : '10px 32px ')} ;
    color: #ffffff;
    font-size: ${({big}) => (big ? '20px' : '16px')} ;
    outline: none;
    border: none;
    min-width: 150px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius:${({round}) => (round ? '50px' : 'none')};
    z-index: 100;

    &:hover {
        background : #001263;
        transform: translateY(-2px);

    }
`