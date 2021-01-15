import React from "react";
import styled from "styled-components";
import { Button } from "ui-kit/Button";
import { Stat } from "ui-kit/Stat";
import { Text } from "ui-kit/Text";
import { Underline } from "ui-kit/Underline";

export function SearchSection() {
  return (
    <SearchSectionContainer>
      <Results>
        <Underline color="Blue" space="m">
          <Text gordita size="m" color="White" weight={500}>
            283 Results for:
          </Text>
        </Underline>
      </Results>

      <Stats>
        <Stat name="Product" value="Mercedes Benz" hasMargin />
        <Stat name="Color" value="Black" hasMargin />
        <Stat name="Year" value="2009" hasMargin />
        <Stat name="Miles" value="Less than 1,000" hasMargin />
        <Button kind="link">
          <Text gordita size="l" color="Blue">
            Redo Search
          </Text>
        </Button>
      </Stats>
    </SearchSectionContainer>
  );
}

const SearchSectionContainer = styled("section")`
  background-image: linear-gradient(to right, #00658d, #003554);
  padding: 22px 0;
`;

const Results = styled("div")`
  margin: 0 32px;
  margin-bottom: 22px;
`;

const Stats = styled("div")`
  margin: 0 32px;
`;
