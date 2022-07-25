import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'HOME' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={location.pathname === item.to ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
