import React from "react";
import styled from "styled-components";
import { SpecTable } from "ui-kit/SpecTable";
import { Carousel } from "ui-kit/Carousel";
import { Tabs } from "ui-kit/Tabs";
import { Collapse } from "ui-kit/Collapse";
import { Text } from "ui-kit/Text";
import { Button } from "ui-kit/Button";
import { Car } from "core/StorageContext";
import { CarBaseInfo } from "./components/CarBaseInfo";

export interface CarCardProps {
  car: Car;
}

export function CarCard(props: CarCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(true);

  const switchDetails = React.useCallback(
    () => setIsDetailsOpen((prev) => !prev),
    []
  );

  return (
    <CarContainer>
      <CarBaseInfo
        car={props.car}
        isDetailsOpen={isDetailsOpen}
        switchDetails={switchDetails}
      />

      <Collapse isOpen={isDetailsOpen}>
        <SpaceTable>
          <Tabs tabs={props.car.features.map((f) => ({ caption: f.name }))} />
          <Button kind="link" underline onClick={switchDetails}>
            <Text gordita size="m" color="Blue" weight={500}>
              Close
            </Text>
          </Button>
        </SpaceTable>

        <SpaceTable>
          <SpecTable specs={props.car.features[0].attributes} />
        </SpaceTable>

        <CarsCarousel>
          <Carousel
            images={props.car.photos.map((src) => ({
              src,
              name: props.car.name,
            }))}
          />
        </CarsCarousel>
      </Collapse>
    </CarContainer>
  );
}

const CarContainer = styled("div")`
  border: solid 1px #dddddd;
  background: white;
  width: 100%;
`;

const CarsCarousel = styled("div")`
  padding: 18px 13px;
`;

const SpaceTable = styled("div")`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;
