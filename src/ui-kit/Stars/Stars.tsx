import ReactStars from "react-rating-stars-component";

export interface StarsProps {
  stars: 1 | 2 | 3 | 4 | 5;
}

export function Stars(props: StarsProps) {
  return (
    <ReactStars
      count={5}
      size={10}
      value={props.stars}
      activeColor="#008cdd"
      color="rgba(0, 140, 221, 0.2)"
    />
  );
}
