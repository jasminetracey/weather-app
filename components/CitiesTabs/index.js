import { useEffect, useState } from "react";
import useSWR from "swr";
import { format } from "date-fns";

import { fetcher } from "../../utils";

import Tab from "../Tab";
import WeatherItem from "../WeatherItem";
import Loading from "../Loading";
import ErrorModal from "../ErrorModal";

const locations = [
  { name: "New York", lng: 40.7128, lat: 74.006 },
  { name: "London", lng: 51.5072, lat: 0.1276 },
  { name: "Paris", lng: 48.8566, lat: 48.8566 },
  { name: "Berlin", lng: 52.52, lat: 13.405 },
  { name: "Tokyo", lng: 35.652832, lat: 139.839478 },
  { name: "Jamaica", lng: 18.1096, lat: 77.2975 },
];

const CitiesTab = ({ date }) => {
  const [active, setActive] = useState(locations[0]);
  const [open, setOpen] = useState(false);

  const { data, error } = useSWR(
    active
      ? `/api/weather?lng=${active.lng}&lat=${active.lat}&date=${format(
          date,
          "yyyy-MM-dd"
        )}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (error) {
      setOpen(true);
      setActive(null);
    }
  }, [error]);

  return (
    <div>
      <div className="flex space-x-4">
        {locations.map((location) => (
          <Tab
            key={location.name}
            location={location}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
      <div className="mt-3 bg-white rounded-xl p-4 space-y-4">
        {data ? (
          Array.isArray(data) &&
          data.length &&
          data?.map((day) => <WeatherItem key={day?.current?.dt} day={day} />)
        ) : (
          <Loading />
        )}
      </div>

      <ErrorModal open={open} setOpen={setOpen} location={active?.name} />
    </div>
  );
};

export default CitiesTab;
