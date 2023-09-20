import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Nav, Link } from './AppLayout.styled';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin: 0 auto;
`;

const AppLayout = () => {
  return (
    <Container>
      <Nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/movies">Movies</Link>
        </div>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AppLayout;
