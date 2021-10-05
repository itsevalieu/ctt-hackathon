import styled from "styled-components";

export interface LocationProps {
  name: string;
  link: string;
  active: boolean;
}
export interface ILocations {
  locations: LocationProps[];
}
export default function Nav({ locations }: ILocations) {
  const Nav = styled.nav`
    // border: 1px solid red;
    display: flex;
    a {
      padding: 5px;
    }
  `;
  //if locations are active, render the a tag for it
  return (
    <Nav>
      {locations.map((location, index) =>
        location.active ? (
          <a key={index} href={`/${location.link}`}>
            {location.name}
          </a>
        ) : null
      )}
    </Nav>
  );
}
