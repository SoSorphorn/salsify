import styled from 'styled-components';

const AppWrapper = styled.div `
  @media all and (min-width: 480px) {
    padding: 60px 0;
  }
`
const CardWrapper = styled.div `
  margin: 0 auto; 
  max-width: 400px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`
const ImgWrapper = styled.img `
    width: 70%;
    display: block ;
    margin-left:  auto ;
    margin-right:  auto ;
    margin-bottom:  20px 
`
const CardLink = styled.p`
 margin-top: 25px;
 text-align: center;
`
export {AppWrapper, CardWrapper,ImgWrapper, CardLink} ;