import WineListItem from "./WineListItem";

const WineList = () => {
  const redWines = [
    "All Red",
    "Cabernet Sauvignon",
    "Pinot Noir",
    "Shiraz",
    "Merlot",
    "Malbec",
    "Syrah",
    "Tempranillo",
    "Zinfandel",
    "Sangiovese",
    "Cabernet Franc",
    "Carmenere",
    "Grenache",
    "Red Blend",
    "Under $20",
    "90+ Points",
  ];

  const whiteWines = [
    "All White",
    "Chardonnay",
    "Sauvignon Blanc",
    "Riesling",
    "Pinot Grigio",
    "Gewurztraminer",
    "Viognier",
    "Pinot Gris",
    "Chenin Blanc",
    "White Blend",
    "Moscato",
    "Semillon",
    "Pinot Blanc",
    "Trebbiano",
    "90+ Points",
    "Under $20",
  ];

  const otherWines = [
    "All Sparkling",
    "Rose",
    "Grab & Go",
    "Box Wine",
    "Fortified",
    "Sake",
    "Other Options",
  ];

  const beersAndCiders = [
    "All Beer",
    "Coolers",
    "Domestic Beer",
    "Domestic Craft Beer",
    "Import Beer",
    "Cider",
  ];

  const spirits = [
    "All Spirits",
    "Whisky",
    "Vodka",
    "Brandy",
    "Cognac",
    "Gin",
    "Tequila/Mezcal",
    "Rum",
    "Liqueurs",
    "Others",
    "Refreshment Beverages",
  ];

  return (
    <>
      <WineListItem list={redWines} type={"Red Wines"} />
      <WineListItem list={whiteWines} type={"White Wines"} />
      <WineListItem list={otherWines} type={"Sparkling Wines & More"} />
      <WineListItem list={beersAndCiders} type={"Beer, Coolers & Cider"} />
      <WineListItem list={spirits} type={"Spirits"} />
    </>
  );
};

export default WineList;
