import styled from "styled-components";
import { Icon } from "ui-kit/Icon";
import { Text } from "ui-kit/Text";
import { Stars } from "ui-kit/Stars";
import { Carousel } from "ui-kit/Carousel";
import { Tabs } from "ui-kit/Tabs";

export function Car() {
  return (
    <CarContainer>
      <div style={{ display: "flex" }}>
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
                Sold by: <span style={{ color: "#008cdd" }}>James Raj</span>
              </Text>
            </Space>
            <Stars stars={1} />
          </Seller>
        </BasicInfo>

        <Buy>Buy</Buy>
      </div>

      <div>
        <div style={{padding: "20px 30px"}}>
          <Tabs
            tabs={[
              { caption: "Specs" },
              { caption: "Reviews" },
              { caption: "Parts" },
            ]}
          />
        </div>

        <table>
          <tr>
            <td>Turbo-Engine</td>
            <td>This car rips hard</td>
          </tr>
          <tr>
            <td>Nitrus</td>
            <td>It’s like Fast & Furious</td>
          </tr>
          <tr>
            <td>8 cup-holders</td>
            <td>For all your friends</td>
          </tr>
          <tr>
            <td>Vin Diesel Mode</td>
            <td>Will make you a protein shake</td>
          </tr>
        </table>
      </div>

      <div style={{ width: "100%" }}>
        <Carousel />
      </div>
    </CarContainer>
  );
}

const CarContainer = styled("div")`
  border: solid 1px #dddddd;
  background: white;
  width: 100%;
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
