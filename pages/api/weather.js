import axios from "axios";
import { getUnixTime, subDays, eachDayOfInterval, parseISO } from "date-fns";

export default async function handler(req, res) {
  try {
    const { lng, lat, date } = req.query;

    let results = [];

    const dateRange = eachDayOfInterval({
      start: subDays(new Date(), 5),
      end: parseISO(date),
    })?.map((date) => getUnixTime(date));

    await Promise.all(
      dateRange.map(async (date) => {
        const response = await axios.get(
          `${process.env.API_URL}?lat=${lat}&lon=${lng}&dt=${date}&units=metric&appid=${process.env.WEATHER_API_KEY}`
        );
        results.push(response?.data);
      })
    );

    results.sort((a, b) => {
      return b?.current?.dt - a?.current?.dt;
    });

    res.json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
}
