
import logo from '../../img/logo.svg'
import styled from 'styled-components';

const LogoContainer=styled.div`
display: flex;
font-size: 30px;
`

const LogoImage=styled.img`
margin-right: 10px;
`


function Logo() {
    return (
        <LogoContainer>
            <LogoImage
            src={logo} 
            alt='Alfala logo'>
            </LogoImage>
            <p><strong>Alfala</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;
