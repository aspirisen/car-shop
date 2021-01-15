import RcSlider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";
import { Text } from "ui-kit/Text";

export type SliderKind = "range" | "slider";
export interface SliderProps {
  caption?: string;
  kind: SliderKind;
}

export function Slider(props: SliderProps) {
  const Component = props.kind === "range" ? Range : RcSlider;

  return (
    <div>
      {props.caption && (
        <Caption>
          <Text avenir size="m">
            {props.caption}
          </Text>
        </Caption>
      )}

      <Component min={0} max={20} />
    </div>
  );
}

const Caption = styled("div")`
  margin-bottom: 6px;
`;
