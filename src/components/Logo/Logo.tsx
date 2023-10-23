import styled from 'styled-components';
import logoPath from './assets/logo.svg';

const LogoImage = styled.img`
  display: block;
`;

function Logo() {
  return <LogoImage src={logoPath} alt="logo" />;
}

export default Logo;
