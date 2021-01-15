import React from "react";
import styled from "styled-components";
import { Text } from "ui-kit/Text";
import { Slider } from "ui-kit/Slider";
import { Box } from "ui-kit/Box";
import { Checkbox } from "ui-kit/Checkbox";
import { Underline } from "ui-kit/Underline";

export function Filters() {
  return (
    <FiltersContainer>
      <Underline color="Black" size="m" space="xs">
        <Caption gordita size="m" weight={500}>
          Filters
        </Caption>
      </Underline>

      <Box marginBottom="l">
        <Tags>
          <Box marginBottom="xm">
            <Checkbox caption="Free" />
          </Box>

          <Box marginBottom="xm">
            <Checkbox caption="Cool" />
          </Box>

          <Box marginBottom="xm">
            <Checkbox caption="Fun" />
          </Box>

          <Checkbox caption="Sexy" />
        </Tags>
      </Box>

      <Box marginBottom="l">
        <Slider caption="People dig it" kind="slider" />
      </Box>

      <Slider caption="Helps me with job search" kind="range" />
    </FiltersContainer>
  );
}

const FiltersContainer = styled("div")`
  flex-shrink: 0;
  margin-right: 60px;
`;

const Caption = styled(Text)`
  padding-right: 30px;
`;

const Tags = styled("div")`
  padding: 12px 0;
  display: flex;
  flex-flow: column;
`;
