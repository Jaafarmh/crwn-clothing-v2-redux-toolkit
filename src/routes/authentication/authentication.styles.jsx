import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  margin: 30px auto;

  ${'' /* @media (max-width:500px){
   display:grid;
   width:100%;
   gird-template-columns: repeat (auto-fill, minmax(100px, 1fr));
   
  } */}
`;  
