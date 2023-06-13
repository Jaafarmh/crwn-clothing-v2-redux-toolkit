import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding:10px;
  min-width:200px;
  width:75%;
  max-width:600px;
    h2 {
      margin: 10px 0;
    }


  
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding:0 5px;
  @media(max-width:400px){
    flex-direction:column;
    
  }

`;

