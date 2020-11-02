import React, { useEffect, useState } from "react";
import { Grid, Container, Header } from "semantic-ui-react";
import { useQuery } from "../../hooks";
import PlanetCard from "./PlanetCard";
import PlanetsListNav from './PlanetsListNavbar'

import {style} from './index.scss';


const PlanetsList = () => {
  const queryParams = useQuery();
  const currentPage = queryParams.get("page");
  const [planetsList, setPlanetsList] = useState([]);
  const [listMeta, setListMeta] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${currentPage}`)
      .then((response) => {return response.ok ? response.json() : {results: []}})
      .then((data) => {
        setPlanetsList(data.results || []);
        setListMeta({
          next: data.next || null,
          prev: data.previous || null,
          count: data.count || null
        });
      });
  }, [currentPage]);

  return (
    <>
      <Container className={style.planetsListContainer}>
        <Header as='h2' icon textAlign='center'>
          Star Wars Planets
        </Header>
        <Grid centered columns={3}>
          {planetsList.map((item, index) => (
            <PlanetCard key={index} planet={item} page={"/planets?page="+currentPage}/>
          ))}
        </Grid>
      </Container>
      <Container className={style.planetsListFooter}>
        <PlanetsListNav pathname="/planets" currentPage={currentPage} listMeta={listMeta} />
        {/* <Button icon>
          <Link to={{pathname: "/planets", search: `?page=${Number(currentPage) - 1}`}} >
            <Icon name='long arrow alternate left' />
          </Link>
        </Button>
        <span>
          {currentPage * 10}/{listMeta.count} 
        </span>
        <Button icon>
          <Link to={{pathname: "/planets", search: `?page=${Number(currentPage) + 1}`}} >
            <Icon name='long arrow alternate right' />
          </Link>
        </Button> */}
        
          {/* <Link
            to={{
            pathname: "/planets",
              search: `?page=${Number(currentPage) - 1}`
            }}
          >
            Prev
          </Link>
          <Link
            to={{
              pathname: "/planets",
              search: `?page=${Number(currentPage) + 1}`
            }}
            className="paginationBtn"
          >
            Next
          </Link> */}
      </Container>
    </>
  );
};

export default PlanetsList;