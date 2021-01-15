import React from "react";
import styled from "styled-components";
import { Text } from "ui-kit/Text";
import { Slider } from "ui-kit/Slider";
import { Checkbox } from "ui-kit/Checkbox";

export function Filters() {
  return (
    <div>
      <Text gordita size="s">
        Filters
      </Text>
      <Checkbox caption="Free" />
      <Checkbox caption="Cool" />
      <Checkbox caption="Fun" />
      <Checkbox caption="Sexy" />

      <Text gordita size="s">
        People dig it
      </Text>
      <Slider />

      <Text gordita size="s">
        Helps me with job search
      </Text>
      <Slider />
    </div>
  );
}
