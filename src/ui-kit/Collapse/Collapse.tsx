import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { usePrevious } from "core/hooks/usePrevious";
import { useMeasure } from "./hooks/useMeasure";

export interface CollapseProps {
  isOpen: boolean;
}

export function Collapse(props: React.PropsWithChildren<CollapseProps>) {
  const previous = usePrevious(props.isOpen);
  const [bind, { height: viewHeight }] = useMeasure<HTMLDivElement>();

  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: props.isOpen ? viewHeight : 0,
      opacity: props.isOpen ? 1 : 0,
    },
  }) as { height: number; opacity: number };

  return (
    <CollapseContainer
      style={{
        opacity,
        height: props.isOpen && previous === props.isOpen ? "auto" : height,
      }}
    >
      <div {...bind} children={props.children} />
    </CollapseContainer>
  );
}

const CollapseContainer = styled(animated.div)`
  overflow: hidden;
`;
