export interface CheckboxProps {
  caption: string;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" />
      {props.caption}
    </label>
  );
}
