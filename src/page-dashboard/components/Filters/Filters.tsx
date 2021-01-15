import React from "react";
import styled from "styled-components";
import { Text } from "ui-kit/Text";
import { Slider } from "ui-kit/Slider";
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

      <BigSpace>
        <Tags>
          <Space>
            <Checkbox caption="Free" />
          </Space>

          <Space>
            <Checkbox caption="Cool" />
          </Space>

          <Space>
            <Checkbox caption="Fun" />
          </Space>

          <Checkbox caption="Sexy" />
        </Tags>
      </BigSpace>

      <BigSpace>
        <Slider caption="People dig it" kind="slider" />
      </BigSpace>
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

const Space = styled("div")`
  margin-bottom: 6px;
`;

const BigSpace = styled("div")`
  margin-bottom: 24px;
`;
