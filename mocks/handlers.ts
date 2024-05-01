import { HttpResponse, http } from "msw";
import { weatherData } from "./data";

export const handlers = [
  http.get("/api/weather", ({ request }) => {
    const url = new URL(request.url);
    const location = url.searchParams.get("location");
    const date = url.searchParams.get("date");
    const hasNoQueryParams = !location && !date;
    if (hasNoQueryParams) {
      return HttpResponse.json(weatherData);
    }
    return HttpResponse.json({
      ...(location
        ? weatherData.filter((w) => w.location === location)
        : weatherData
      ).filter((w) => !date || w.date === date),
    });
  }),
];
