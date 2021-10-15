import styled from 'styled-components'

export const Content = styled.a`
  .link{
    width: 30vw;
    height: 30vh;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.warning};
    border: 1px  solid ${props => props.theme.colors.white};
    display: flex;
    border-radius: 15px;
    align-items: center;
    transition: all .6s;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      opacity: 1;
      background-color: ${props => props.theme.colors.warning};
      color: ${props => props.theme.colors.primary};
      width: 35vw;
      height: 35vh;
    }
  }


`;

export const Thumb = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  left: -15%;
  border: 1px  solid ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
`;