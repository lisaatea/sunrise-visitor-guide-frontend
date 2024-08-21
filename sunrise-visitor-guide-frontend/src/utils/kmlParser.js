import { DOMParser } from "xmldom";

export function parseKML(kmlString) {
  const parser = new DOMParser();
  const kml = parser.parseFromString(kmlString, "text/xml");
  const coordinates = kml
    .getElementsByTagName("coordinates")[0]
    .textContent.trim();

  return coordinates.split(" ").map((coord) => {
    const [lon, lat] = coord.split(",").map(parseFloat);
    return [lat, lon];
  });
}
