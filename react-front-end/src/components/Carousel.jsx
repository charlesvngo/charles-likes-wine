import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from "@mui/material";

import wineGlass from '../public/wineglass.jpg'
import wineTasting from '../public/winetasting.jpg'
import wineStorage from '../public/winestorage.jpg'
import wineVariety from '../public/winevariety.jpg'

function NewsCarousel(props) {
  var items = [
    {
      name: "Wine Sale",
      image: wineGlass,
      description: "Shop Now",
    },
    {
      name: "Vintages Room",
      image: wineTasting,
      description: "Explore",
    },
    {
      name: "Special Sale Item",
      image: wineStorage,
      description: "Shop Now",
    },
    {
      name: "Learn about wines",
      image: wineVariety,
      description: "Explore",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <img
        src={props.item.image}
        srcSet={props.item.image}
        alt={props.item.description}
        style={{width: "100%"}}
      />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default NewsCarousel;
