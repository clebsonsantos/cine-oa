import styled from 'styled-components'


export const ListMovie = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

`
export const ListArea = styled.div`
  overflow-x: hidden;

`

export const MovieRow = styled.div`
 width: 999999px;


`
export const MovieRowItem = styled.div`
  display: inline-block;
  width: 250px;

`
export const Image = styled.img`
  width: 100%;
  height: 280px;
  transform: scale(0.9);
  transition: all ease 0.2s ;

  &:hover{
    transform: scale(1);
  }

`

export const Title = styled.h2`
   margin: 30px;
   color: #fff;
   font-size: 40px;
`