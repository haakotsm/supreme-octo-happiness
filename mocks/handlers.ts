import { HttpResponse, http } from "msw";
import { weatherData } from "./data";

export const handlers = [
  http.get("/api/weather", ({ request }) => {
    const url = new URL(request.url);
    const location = url.searchParams.get("location");
    if (!location) {
      return HttpResponse.json(weatherData);
    }
    return HttpResponse.json({
      ...weatherData.filter((w) => w.location === location),
    });
  }),
];
