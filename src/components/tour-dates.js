import Image from "next/image";

const TOUR_DATES = [
  {
    date: "Feb 19, 2026",
    venue: "Gabe's",
    city: "Iowa City",
    state: "IA",
    support: [],
  },
  {
    date: "Feb 21, 2026",
    venue: "Music Frozen Dancing",
    city: "Chicago",
    state: "IL",
    support: [],
  },
  {
    date: "May 25, 2026",
    venue: "No Fun",
    city: "Troy",
    state: "NY",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "May 26, 2026",
    venue: "The Rockwell",
    city: "Boston",
    state: "MA",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "May 27, 2026",
    venue: "La Sala Rossa",
    city: "Montreal",
    state: "QC",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "May 28, 2026",
    venue: "The Garrison",
    city: "Toronto",
    state: "ON",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "May 29, 2026",
    venue: "The Sanctuary",
    city: "Detroit",
    state: "MI",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "May 30, 2026",
    venue: "Beat Kitchen",
    city: "Chicago",
    state: "IL",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 2, 2026",
    venue: "Hi-Dive",
    city: "Denver",
    state: "CO",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 4, 2026",
    venue: "Kilby Court",
    city: "Salt Lake City",
    state: "UT",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 5, 2026",
    venue: "Holland Project",
    city: "Reno",
    state: "NV",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 7, 2026",
    venue: "Barboza",
    city: "Seattle",
    state: "WA",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 8, 2026",
    venue: "Wise Hall",
    city: "Vancouver",
    state: "BC",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 9, 2026",
    venue: "Polaris Hall",
    city: "Portland",
    state: "OR",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 11, 2026",
    venue: "Cafe Colonial",
    city: "Sacramento",
    state: "CA",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 12, 2026",
    venue: "Bottom of the Hill",
    city: "San Francisco",
    state: "CA",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 13, 2026",
    venue: "Zebulon",
    city: "Los Angeles",
    state: "CA",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 14, 2026",
    venue: "Valley Bar",
    city: "Phoenix",
    state: "AZ",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 17, 2026",
    venue: "29th Street Ballroom",
    city: "Austin",
    state: "TX",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 18, 2026",
    venue: "Dada",
    city: "Dallas",
    state: "TX",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 19, 2026",
    venue: "Fat Cat",
    city: "Hattiesburg",
    state: "MS",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 20, 2026",
    venue: "Masquerade (Altar)",
    city: "Atlanta",
    state: "GA",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 21, 2026",
    venue: "Pinhook",
    city: "Durham",
    state: "NC",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 23, 2026",
    venue: "Bottlerocket Social Hall",
    city: "Pittsburgh",
    state: "PA",
    support: ["Bejalvin", "Flatwounds"],
  },
  {
    date: "June 24, 2026",
    venue: "PhilaMOCA",
    city: "Philadelphia",
    state: "PA",
    support: ["Bejalvin", "Flatwounds"],
  },
];

export default function TourDates() {
  return (
    <table className="m-auto">
      <thead className="bg-dark text-[11px] font-bold text-left">
        <tr>
          <th className="p-1">Date</th>
          <th className="p-1 text-left">Location</th>
          <th className="p-1 text-center">Tickets</th>
        </tr>
      </thead>
      <tbody className="bg-light">
        {TOUR_DATES.map((tourDate, index) => (
          <tr
            key={index}
            className="text-xs bg-light odd:bg-accent hover:bg-white/50 h-[48px]"
          >
            <td className="p-2 text-navy font-bold">{tourDate.date}</td>
            <td className="p-2">
              <div className="font-bold">
                {tourDate.city}, {tourDate.state}
              </div>
              <div className="flex text-[11px] text-muted gap-1">
                <div className="font-bold">@ {tourDate.venue}</div>
                {tourDate.support.length > 0 && (
                  <div className="italic">
                    with {tourDate.support.join(", ")}
                  </div>
                )}{" "}
              </div>
            </td>

            <td className="p-2 text-navy font-bold flex items-center justify-center h-[48px] gap-2">
              <div>Get Tickets</div>
              <div>
                <Image
                  src={`/vip.gif`}
                  alt=""
                  width={11}
                  height={11}
                  unoptimized
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
