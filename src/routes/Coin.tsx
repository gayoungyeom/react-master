import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Contianer = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  return (
    <Contianer>
      <Header>
        <Title>{state?.name || 'Loading...'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Contianer>
  );
}

export default Coin;
