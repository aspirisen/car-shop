import styled from "styled-components";
import { Text } from "ui-kit/Text";

export interface Spec {
  name: string;
  value: string;
}

export interface SpecTableProps {
  specs: Spec[];
}

export function SpecTable(props: SpecTableProps) {
  return (
    <SpecTableContainer>
      <tbody>
        {props.specs.map((s) => (
          <tr key={s.name}>
            <SpecCell>
              <Text avenir size="m" weight={600} color="GrayDark">
                {s.name}
              </Text>
            </SpecCell>
            <SpecCell>
              <Text avenir size="m" color="GrayDark">
                {s.value}
              </Text>
            </SpecCell>
          </tr>
        ))}
      </tbody>
    </SpecTableContainer>
  );
}

const SpecTableContainer = styled("table")`
  width: 100%;
`;

const SpecCell = styled("td")`
  padding: 8px 0;
  padding-right: 10px;
`;
