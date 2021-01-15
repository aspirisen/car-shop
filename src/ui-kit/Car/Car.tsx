import styled from "styled-components";
import { Icon } from "ui-kit/Icon";
import { Text } from "ui-kit/Text";
import { Stars } from "ui-kit/Stars";

export function Car() {
  return (
    <CarContainer>
      <CarImage src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg" />
      <BasicInfo>
        <Description>
          <CarName>
            <Text gordita size="s" color="GrayDark">
              Brand New Never Used Mercedes Benz
            </Text>
          </CarName>

          <Text avenir size="s" color="GrayDark">
            This is a random description of this car. It’s only a couple words
            because this is a test project. Good luck!
            <ViewMore>View Details</ViewMore>
          </Text>
        </Description>

        <Seller>
          <Icon name="user" size="m"></Icon>
          <Space>
            <Text avenir size="s">
              Sold by: <span style={{color: '#008cdd'}}>James Raj</span>
            </Text>
          </Space>
          <Stars stars={1} />
        </Seller>
      </BasicInfo>

      <Buy>Buy</Buy>
    </CarContainer>
  );
}

const CarContainer = styled("div")`
  display: flex;
  border: solid 1px #dddddd;
  background: white;
`;

const CarName = styled("div")`
  margin-bottom: 6px;
`;

const BasicInfo = styled("div")`
  display: flex;
  flex-flow: column;
`;

const Space = styled("span")`
  display: inline-block;
  padding: 0 8px;
`;

const Description = styled("div")`
  padding: 20px 26px;
`;

const Seller = styled("div")`
  display: flex;
  align-items: center;
  padding: 8px 26px;
  background-color: #f9f9f9;
  margin-top: auto;
`;

const CarImage = styled("img")`
  width: 150px;
  object-fit: cover;
`;

const ViewMore = styled("button")`
  font-family: Avenir;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.19px;
  color: #008cdd;
  background: transparent;
  border: none;
`;

const Buy = styled("div")`
  padding: 53px 39px;
  border: solid 1px #dddddd;
  background-color: #003554;
  color: white;
  font-family: Gordita;
`;
