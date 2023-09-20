import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  :not(:last-child) {
    margin-right: 15px;
  }
  padding: 15px 15px;
  background-color: #292929;
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  color: #dbf723;
  text-decoration: none;

  &:hover {
    color: #f97a17;
  }
`;
