import styled from 'styled-components'

export const Content = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
`;

export const Button = styled.button`
  width: 25rem;
  height: 3rem;
  padding: 1rem;
  margin: 00.6rem;
  position: absolute;
  right: 35vw; 
  margin-top: 0.8rem;
  background-color:  ${props => props.theme.colors.success};
  border-radius: 0.8rem;
  color: ${props => props.theme.colors.white};
  transition: all .6s;
  cursor: pointer;

    &:hover {
      opacity: 1;
      background-color: ${props => props.theme.colors.warning};
      color: ${props => props.theme.colors.primary};
    }
`;

export const ContentForm = styled.div`
  height: 80%;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  border: 1px solid ${props => props.theme.colors.secondary};
  justify-content: center;
  align-items: center;
`