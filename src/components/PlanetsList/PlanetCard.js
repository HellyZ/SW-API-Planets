import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import * as style from "./index.scss";

const PlanetCard = (props) => {
  const { planet, page } = props;
  const planetId = planet.url
    .match("/planets/[0-9]+")[0]
    .split("/")
    .slice(-1)[0];
  const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;

  return (
    <Link
      to={{
        pathname: `/planets/${planetId}`,
        state: { planet: planet, page: page },
      }}
      className={style.planetCard}
    >
      <Card>
        <Card.Content>
          <Card.Header>{planet.name}</Card.Header>
          <Card.Meta>Climate: {planet.climate.replace(/\s/g, "")}</Card.Meta>
        </Card.Content>
        <Image
          src={imgUrl}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400?text=No+Image";
          }}
        />
        <Card.Content extra>
          Population: {planet.population.replace(/(.)(?=(\d{3})+$)/g, "$1,")}
        </Card.Content>
      </Card>
    </Link>
  );
};

export default PlanetCard;
