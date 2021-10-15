import styled from 'styled-components'

export const Content = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
`;

export const Table = styled.table`
  border-spacing: 20px 30px;
  border: 1px solid #fff;
  width: 90%;
  height: 180px;
  position: relative;
  top: 150px;
  margin: auto;
  border-collapse: collapse;
  text-align: center;
  background-color: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.primary};
`;

export const Button = styled.button`
  width: 40%;
  height: 22px;
  padding: 5px;
  margin: 15px;
  color:  ${props => props.theme.colors.primary};
  font-size: 15px;
`;

export const Title = styled.h2`
   margin: 30px;
   color: #fff;
   font-size: 40px;
`