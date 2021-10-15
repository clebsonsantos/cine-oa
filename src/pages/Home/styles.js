import styled from 'styled-components'

export const Content = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;