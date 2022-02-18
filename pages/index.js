import { subMonths, subWeeks } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";

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
            <DatePicker
              minDate={subWeeks(new Date(), 2)}
              maxDate={new Date()}
              onChange={(date) => setDate(date)}
              selected={date}
              inline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
