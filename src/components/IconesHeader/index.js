
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import './style.css'
import styled from 'styled-components';
const icones = [perfil, sacola]

const Icone = styled.li`
margin-right: 40px;
width: 25px;
`

const Icones = styled.ul`
display: flex;
align-items: center;
`

function IconeHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconeHeader;