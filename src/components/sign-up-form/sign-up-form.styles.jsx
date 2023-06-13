import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  ${'' /* flex:50%; */}
  flex-direction: column;
  padding:10px;
  min-width:300px;
  width:75%;
  max-width:600px;
  positon:relative;
  h2 {
    margin: 10px 0;
  }
  `;


export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media(max-width:400px){
    flex-direction:column;
    width:100%;
    align-items: center;

  }
`;