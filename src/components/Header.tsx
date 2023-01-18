import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeadingProps) => {
  return <HeaderWrap>{children}</HeaderWrap>;
};

export default Header;

const HeaderWrap = styled.div`
  background-color: #b7b7b7;
  font-size: 20px;
  font-weight: 600;
  padding: 1em;
`;
