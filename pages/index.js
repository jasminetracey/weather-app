import { useState } from "react";
import Calendar from "react-calendar";

import CitiesTab from "../components/CitiesTabs";

const Home = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl space-y-3 mb-10">
          <h1 className="text-emerald-600">Weather App</h1>
          <p>Check the Weather in Major Cities</p>
        </div>

        <div className="md:flex md:justify-between">
          <div className="">
            <CitiesTab date={date} />
          </div>
          <div>
            <Calendar maxDate={new Date()} onChange={setDate} value={date} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
