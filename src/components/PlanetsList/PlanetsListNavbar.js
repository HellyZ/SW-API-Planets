import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./index.css";

const NavBtn = (props) => {
  const { pathname, currentPage, listMeta, direction } = props;
  let iconName;
  let query = "?page=";
  let isPrime;

  switch (direction) {
    case "prev":
      iconName = "long arrow alternate left";
      query += Number(currentPage) - 1;
      isPrime = !listMeta.prev ? false : true;
      break;

    case "next":
      iconName = "long arrow alternate right";
      query += Number(currentPage) + 1;
      isPrime = !listMeta.next ? false : true;
      break;

    default:
      iconName = "circle notched";
      query += 1;
      isPrime = true;
      break;
  }
  return (
    <Button icon primary={isPrime} disabled={!isPrime} className="navBtn">
      <Link to={{ pathname: pathname, search: query }}>
        <Icon name={iconName} color="black" size="big" />
      </Link>
    </Button>
  );
};

const PlanetsListNav = (props) => {
  const { listMeta, currentPage } = props;

  return (
    <div className="pagination">
      <NavBtn direction="prev" {...props} />
      <Button className="navBtn">
        <Link to="/">
          {currentPage * 10}/{listMeta.count || 0}
        </Link>
      </Button>
      <NavBtn direction="next" {...props} />
    </div>
  );
};

export default PlanetsListNav;
