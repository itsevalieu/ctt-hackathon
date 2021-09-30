export interface LocationProps {
  name: string;
  link: string;
  active: boolean;
}
export interface ILocations {
  locations: LocationProps[];
}
export default function Nav({ locations }: ILocations) {
  //if locations are active, render the a tag for it
  return (
    <nav>
      {locations.map((location, index) =>
        location.active ? (
          <a key={index} href={`/${location.link}`}>
            {location.name}
          </a>
        ) : null
      )}
    </nav>
  );
}
