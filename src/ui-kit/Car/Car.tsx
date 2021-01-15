import styled from "styled-components";
import { Icon } from "ui-kit/Icon";
import { Text } from "ui-kit/Text";
import { Stars } from "ui-kit/Stars";
import { SpecTable } from "ui-kit/SpecTable";
import { Carousel } from "ui-kit/Carousel";
import { Tabs } from "ui-kit/Tabs";
import { Button } from "ui-kit/Button";
import { Underline } from "ui-kit/Underline";

export function Car() {
  return (
    <CarContainer>
      <div style={{ display: "flex" }}>
        <CarImage src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg" />
        <BasicInfo>
          <Description>
            <CarName>
              <Text gordita size="m" color="GrayDark" weight={500}>
                Brand New Never Used Mercedes Benz
              </Text>
            </CarName>

            <Text avenir size="s" color="GrayDark">
              This is a random description of this car. It’s only a couple words
              because this is a test project. Good luck!
              <Button kind="link" underline>
                <Text avenir size="s" color="Blue">
                  View Details
                </Text>
              </Button>
            </Text>
          </Description>

          <Seller>
            <Icon name="user" size="m"></Icon>
            <Space>
              <Text avenir size="s">
                Sold by: <Button kind="link">James Raj</Button>
              </Text>
            </Space>
            <Stars stars={1} />
          </Seller>
        </BasicInfo>

        <Button kind="plain" big>
          <Underline color="White" space="m">
            <Text gordita size="m" color="White">
              Buy
            </Text>
          </Underline>
        </Button>
      </div>

      <div>
        <SpaceTable>
          <Tabs
            tabs={[
              { caption: "Specs" },
              { caption: "Reviews" },
              { caption: "Parts" },
            ]}
          />
        </SpaceTable>

        <SpaceTable>
          <SpecTable
            specs={[
              { name: "Turbo-Engine", value: "This car rips hard" },
              {
                name: "Nitrus",
                value: "It’s like Fast & Furious",
              },
              {
                name: "8 cup-holders",
                value: "For all your friends",
              },
              {
                name: "Vin Diesel Mode",
                value:
                  "Will make you a protein shakeWill make you a protein shake",
              },
            ]}
          />
        </SpaceTable>
      </div>

      <CarsCarousel>
        <Carousel
          images={[
            {
              name: "A",
              src:
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            },
            {
              name: "A",
              src:
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            },
            {
              name: "A",
              src:
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            },
            {
              name: "A",
              src:
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            },
            {
              name: "A",
              src:
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            },
          ]}
        />
      </CarsCarousel>
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

const CarsCarousel = styled("div")`
  padding: 18px 13px;
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

const SpaceTable = styled("div")`
  padding: 20px 30px;
`;
