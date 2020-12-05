import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

const MenuBar = () => {
  // Handle activeItem by URL
  const { pathname } = useLocation();
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  // Handle activeItem by clicking MenuItem
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size='massive' color='purple'>
      <Container>
        <Menu.Item
          name='home'
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to='/'
        />

        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to='/login'
          />
          <Menu.Item
            name='register'
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to='/register'
          />
          <Menu.Item
            name='logout'
            active={activeItem === "logout"}
            onClick={handleItemClick}
            as={Link}
            to='/logout'
          />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default MenuBar;
