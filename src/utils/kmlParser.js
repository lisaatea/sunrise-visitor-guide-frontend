import { DOMParser } from "xmldom";

export function parseKML(kmlString) {
  const parser = new DOMParser();
  const kml = parser.parseFromString(kmlString, "text/xml");

  const coordinatesElement = kml.getElementsByTagName("coordinates")[0];

  if (!coordinatesElement) {
    console.error();
    return [];
  }

  const coordinates = coordinatesElement.textContent.trim();

  return coordinates.split(" ").map((coord) => {
    const [lon, lat] = coord.split(",").map(parseFloat);
    return [lat, lon];
  });
}
