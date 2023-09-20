import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Image = styled.img`
  display: block;
  height: 350px;
`;
