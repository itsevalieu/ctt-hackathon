export interface LocationProps {
  name: string;
  link: string;
  active: boolean;
}

export default function Location(location: LocationProps) {
  return <div>{location.name}</div>;
}
