import React from "react";
import { MenuContainer, MenuItem, MenuLink, MenuList } from "./TabMenu.styles";

type Option = { title: string; url: string };
type Props = {
  links: Option[];
};

const TabMenu = ({ links }: Props) => (
  <MenuContainer>
    <MenuList>
      {links.map(item => (
        <MenuItem>
          <MenuLink activeClassName="active" to={item.url}>
            {item.title}
          </MenuLink>
        </MenuItem>
      ))}
    </MenuList>
  </MenuContainer>
);

export default TabMenu;
