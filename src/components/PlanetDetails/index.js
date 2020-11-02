import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Table, Container, Menu } from "semantic-ui-react";
import { ResidentsList } from "./ResidentsList";

import "./index.css";

const PlanetDetails = () => {
  const location = useLocation();
  const backUrl = location.state ? location.state.page : '/';
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    if (location.state && location.state.planet) {
      setPlanet(location.state.planet);
    } else {
      fetch("https://swapi.dev/api" + location.pathname)
        .then((response) => response.json())
        .then((data) => setPlanet(data));
    }
  }, [location]);

  return (
    <Container className="planetDetails">
      <Menu compact icon="labeled">
        <Menu.Item name="Back">
          <Link to={backUrl}>Back</Link>
        </Menu.Item>

        <Menu.Item name="Home">
          <Link to="/">Home</Link>
        </Menu.Item>
      </Menu>
      {planet && (
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>{planet.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Rotation period</Table.Cell>
              <Table.Cell>{planet.rotation_period}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Diameter</Table.Cell>
              <Table.Cell>{planet.diameter}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Climate</Table.Cell>
              <Table.Cell>{planet.climate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Gravity</Table.Cell>
              <Table.Cell>{planet.gravity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Population</Table.Cell>
              <Table.Cell>{planet.population}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Residents</Table.Cell>
              <Table.Cell>
                {planet && planet.residents && (
                  <ResidentsList residents={planet.residents} />
                )}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )}
    </Container>
  );
};

export default PlanetDetails;
