import { Sizes } from "ui-kit/theme/sizes";
import * as icons from "./icons-list";

export type IconsList = keyof typeof icons;

export interface IconProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  name: IconsList;
  size: Sizes;
}

const IconSizes: Record<Sizes, number> = {
  xs: 14,
  s: 16,
};

export function Icon(props: IconProps) {
  const { name, size, ...rest } = props;

  return (
    <img
      src={icons[name]}
      alt={name}
      width={IconSizes[props.size]}
      height={IconSizes[props.size]}
      {...rest}
    />
  );
}
