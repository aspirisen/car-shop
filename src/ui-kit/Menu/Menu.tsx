import styled from "styled-components";
import { Icon } from "ui-kit/Icon";
import { Text } from "ui-kit/Text";

export interface MenuProps {
  userName: string;
}

export function Menu(props: MenuProps) {
  return (
    <MenuContainer>
      <UserInfo>
        <Avatar />
        <Text avenir size="s">{`Hey, ${props.userName}`}</Text>
      </UserInfo>
    </MenuContainer>
  );
}

const MenuContainer = styled("div")`
  display: flex;
  border: solid 1px #e7e7e7;
`;

const UserInfo = styled("div")`
  display: flex;
  align-items: center;
  color: #000000;
  padding: 12px 16px;
  margin-left: auto;
`;

const Avatar = styled(Icon).attrs({ name: "avatar", size: "xs" })`
  margin-right: 8px;
`;
