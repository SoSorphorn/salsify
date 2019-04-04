import styled from 'styled-components';

const AppWrapper = styled.div `
  @media all and (min-width: 480px) {
    padding: 60px 0;
  }
`
const FormWrapper = styled.form `
  margin: 0 auto; 
  max-width: 320px;
`
const ImgWrapper = styled.img `
    width: 70%;
    display: block ;
    margin-left:  auto ;
    margin-right:  auto ;
    margin-bottom:  20px 
`
export {AppWrapper, FormWrapper,ImgWrapper} ;