import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  position: sticky;
  top:0px;
  height: 70px;
  width: 100%;
 
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items:center;
  z-index: 9;
  background-color: #f3f2ef;

`;

export const LogoContainer = styled(Link)`

  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`

  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
 @media (max-width:500px){
  padding:5px;
 }
`;
