import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: ${props => props.theme.colors.primary};

`;

export const Title = styled.h2`
   margin: 30px;
   color: #fff;
   font-size: 40px;
`

export const ContentFilm = styled.div`
    width: inherit;
    height: inherit;
    margin-left: 50px;
    margin-top: 50px;
`
export const ContentDescription = styled.div`
    width: 90%;
    margin-left: 50px;
`

export const Span = styled.span`
color: #fff;
margin: 30px;
`


export const ContentMovie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.primary};
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const ButtonLocation = styled.button`
  width: 120px;
  height: 80px;
  margin: 30px;
  color: #fff;
  background-color: #000;
  border-radius: 15px;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .6s;
  cursor: pointer;
    &:hover {
      opacity: 1;
      background-color: ${props => props.theme.colors.warning};
      color: ${props => props.theme.colors.primary};
      width: 130px;
      height: 85px;
    }
  

`