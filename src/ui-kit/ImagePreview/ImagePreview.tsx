import React from "react";
import styled from "styled-components";

export interface ImagePreviewProps {
  src: string;
  alt: string;
}

export function ImagePreview(props: ImagePreviewProps) {
  const [shouldShowPreview, setShouldShowPreview] = React.useState(false);

  return (
    <ImagePreviewContainer>
      <Image
        src={props.src}
        alt={props.alt}
        onMouseEnter={() => setShouldShowPreview(true)}
        onMouseLeave={() => setShouldShowPreview(false)}
      />
      {shouldShowPreview && <Preview src={props.src} alt={props.alt} />}
    </ImagePreviewContainer>
  );
}

const ImagePreviewContainer = styled("span")`
  position: relative;
`;

const Image = styled("img")`
  width: 150px;
  height: 100%initial;
  object-fit: cover;
`;

const Preview = styled("img")`
  position: absolute;
  box-shadow: 1px 1px 2px #a09d9d;
  z-index: 1;
  pointer-events: none;
  top: 16px;
  left: 16px;
  max-width: 300px;
  max-height: 300px;
`;
