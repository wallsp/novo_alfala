import './style.css'
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconeHeader from "../IconesHeader";
import styled from 'styled-components';

const headerContainer =styled.header`
    display:flex;
    background-color: #FFF;
`

function Header() {
    return (
        <header className='App-header'>
           <headerContainer/>
            <Logo />
            <OptionsHeader />
            <IconeHeader />
        </header>
    );
};

export default Header;
