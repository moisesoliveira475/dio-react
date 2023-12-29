import Card from '../../components/Card/index';
import UserInfo from '../../components/UserInfo/index';

import Header from '../../components/Header/index';

import { Container, Column, Title, TitleHighlight } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

const Feed = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
        <Header/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome={user.name} image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={25}/>
                <UserInfo nome={user.name} image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={65}/>
                <UserInfo nome={user.name} image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={45}/>
                <UserInfo nome={user.name} image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export default Feed; 