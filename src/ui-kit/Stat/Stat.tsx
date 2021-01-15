import styled, { css } from "styled-components";
import { Text } from "ui-kit/Text";

export interface StatProps {
  name: string;
  value: string | number;
  hasMargin?: boolean;
}

export function Stat(props: StatProps) {
  return (
    <StatContainer hasMargin={props.hasMargin}>
      <StatName avenir size="xs" color="White" as="div">
        {props.name}
      </StatName>

      <Text gordita size="m" color="White" as="div">
        {props.value}
      </Text>
    </StatContainer>
  );
}

const StatContainer = styled("div")<Pick<StatProps, "hasMargin">>`
  display: inline-block;
  ${(props) =>
    props.hasMargin &&
    css`
      margin-right: 60px;
    `}
`;

const StatName = styled(Text)`
  opacity: 0.5;
  margin-bottom: 6px;
`;
