import React from "react";
import styled from "styled-components";
import { Icon } from "ui-kit/Icon";
import { Text } from "ui-kit/Text";
import { Stars } from "ui-kit/Stars";
import { ImagePreview } from "ui-kit/ImagePreview";
import { Button } from "ui-kit/Button";
import { Underline } from "ui-kit/Underline";
import { Car } from "core/StorageContext";

export interface CarBaseInfoProps {
  car: Car;
  isDetailsOpen: boolean;
  switchDetails: () => void;
}

export function CarBaseInfo(props: CarBaseInfoProps) {
  return (
    <CarBaseInfoContainer>
      <ImagePreview src={props.car.avatarUrl} alt={props.car.name} />
      <BasicInfo>
        <Description>
          <CarName>
            <Text gordita size="m" color="GrayDark" weight={500}>
              {props.car.name}
            </Text>
          </CarName>

          <Text avenir size="s" color="GrayDark">
            {props.car.description}

            <Button kind="link" underline>
              <Text avenir size="s" color="Blue" onClick={props.switchDetails}>
                {props.isDetailsOpen ? "Hide" : "View"} Details
              </Text>
            </Button>
          </Text>
        </Description>

        <Seller>
          <Icon name="user" size="m"></Icon>
          <Space>
            <Text avenir size="s">
              Sold by: <Button kind="link">{props.car.soldBy}</Button>
            </Text>
          </Space>
          <Stars stars={props.car.rating} />
        </Seller>
      </BasicInfo>

      <Button kind="plain" big>
        <Underline color="White" space="m">
          <Text gordita size="m" color="White">
            Buy
          </Text>
        </Underline>
      </Button>
    </CarBaseInfoContainer>
  );
}

export const CarBaseInfoContainer = styled("div")`
  display: flex;
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
