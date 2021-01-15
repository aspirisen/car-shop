import styled from "styled-components";
import { Stat } from "ui-kit/Stat";
import { Text } from "ui-kit/Text";

export function SearchSection() {
  return (
    <SearchSectionContainer>
      <Results>
        <Text gordita size="s" color="White">
          283 Results for:
        </Text>
      </Results>

      <Stats>
        <Stat name="Product" value="Mercedes Benz" hasMargin />
        <Stat name="Color" value="Black" hasMargin />
        <Stat name="Year" value="2009" hasMargin />
        <Stat name="Miles" value="Less than 1,000" hasMargin />
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
