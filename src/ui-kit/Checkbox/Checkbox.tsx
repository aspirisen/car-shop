import styled from "styled-components";
import { Text } from "ui-kit/Text";
export interface CheckboxProps {
  caption?: string;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer>
      <HiddenInput name="sd" />
      <Check>
        <CheckIcon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </CheckIcon>
      </Check>

      {props.caption && (
        <Caption avenir size="xm">
          {props.caption}
        </Caption>
      )}
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled("label")`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenInput = styled("input").attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  margin: 0;
`;

const Check = styled("span")`
  display: inline-block;
  border: solid 1px #e6e6e6;
  background: white;
  width: 16px;
  height: 16px;
`;

const CheckIcon = styled("svg")`
  fill: none;
  stroke: #cccccc;
  stroke-width: 2px;
`;

const Caption = styled(Text)`
  padding-left: 8px;
`;
