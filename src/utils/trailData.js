const baseUrl = "https://lisaatea.github.io/sunrise-visitor-guide-frontend";

const trailData = [
  {
    id: 1,
    name: "Burroughs Mountain",
    distance: "9 miles RT",
    directions:
      "From the Sunrise Visitor Center, hike west on the Sourdough Ridge trail to the Frozen Lake junction. From there, bear left to follow the Burroughs Mountain trail.",
    features:
      "Views of Mount Rainier, featuring the Winthrop Glacier. Alpine tundra vegetation. Possibility of mountain goat sightings.",
    imageUrl: new URL("../assets/burroughs.jpg", import.meta.url).href,
    kmlUrl: `${baseUrl}/burroughs.kml`,
  },
  {
    id: 2,
    name: "Fremont Lookout",
    distance: "5.6 miles RT",
    directions:
      "From the Sunrise Visitor Center, hike west on the Sourdough Ridge trail to the Frozen Lake junction. At this junction, a signed trail for the lookout leads off to the right.",
    features:
      "Views of Mount Rainier, Cascade mountains, and Grand Park. Possibility of mountain goat sightings. Exploring a former fire lookout.",
    imageUrl: new URL("../assets/fremont.jpg", import.meta.url).href,
    kmlUrl: `${baseUrl}/fremont.kml`,
  },
  {
    id: 3,
    name: "Skyscraper Pass",
    distance: "7 miles RT",
    directions:
      "From the Sunrise Visitor Center, hike west on the Sourdough Ridge trail to the Frozen Lake junction. At the junction, follow the sign directing you straight onto the Wonderland trail. At 2.25 miles, bear left to continue to stay on the Wonderland trail, passing the signed junction that leads to Berkeley Park.",
    features:
      "Wildflowers. Views of Mount Rainier. Possibility of mountain goat, marmot, and black bear sightings. Exploring part of the famed Wonderland trail.",
    imageUrl: new URL("../assets/skyscraper.jpg", import.meta.url).href,
    kmlUrl: `${baseUrl}/skyscraper.kml`,
  },
  {
    id: 4,
    name: "Berkeley Park",
    distance: "7.7 miles RT",
    directions:
      "From the Sunrise Visitor Center, hike west on the Sourdough Ridge trail to the Frozen Lake junction. At the junction, follow the sign directing you straight onto the Wonderland trail. At 2.25 miles, bear right towards the signed trail that leads to Berkeley Park.",
    features:
      "Meadows with streams and varied and abundant wildflowers. Possibility of marmot, black bear sightings.",
    imageUrl: new URL("../assets/berkeley.jpg", import.meta.url).href,
    kmlUrl: `${baseUrl}/berkeley.kml`,
  },
  {
    id: 5,
    name: "Dege Peak",
    distance: "4 miles RT",
    directions:
      "From the Sunrise Visitor Center, hike east on the Sourdough Ridge trail. About 2 miles from the trailhead, a spur trail leading north (left) will climb the last 200 feet to Dege Peak.",
    features:
      "Views of Mount Rainier, the Cowlitz Chimneys, and the volcanic peaks of Mount St. Helens, Mount Adams, Glacier Peak and Mount Baker.",
    imageUrl: new URL("../assets/dege.jpg", import.meta.url).href,
    kmlUrl: `${baseUrl}dege.kml`,
  },
  {
    id: 6,
    name: "Glacier Basin",
    distance: "6.5 miles RT",
    directions:
      "From the White River campground, the signed trail leads you directly to Glacier Basin. About 1 mile in, pass an optional 0.5 mile side trail up the Emmons Moraine for an up-close view of Emmons Glacier.",
    features:
      "Wildflowers, views of Mount Rainier and the White River valley, open meadows, access to a backcountry camp (permit required).",
    imageUrl: new URL("../assets/glacierbasin.jpg", import.meta.url).href,
    kmlUrl: `${baseUrl}/glacierbasin.kml`,
  },
];

export default trailData;
