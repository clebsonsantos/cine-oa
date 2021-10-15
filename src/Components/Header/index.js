
import {Header, Logo, Search, Image } from  './styles'
import { Link } from 'react-router-dom'

export default function HeaderTop(){
  return(
    <Header>
      
        <Logo>
        <Link to="/profile">
          <Image src='https://fontmeme.com/permalink/211015/c6fe05ec659fb1d2827a7e5316aae8c2.png' style={{height:'100%'}}/>
        </Link>
        </Logo>

        <Search>
          <Link to="/profile">
            <Image src='https://cdn-icons.flaticon.com/png/512/5007/premium/5007726.png?token=exp=1634317520~hmac=f3e10ab8743cc59d02e1a10229395b71' style={{height:'100%'}}/>
          </Link>
        </Search>
    </Header>
  )
}