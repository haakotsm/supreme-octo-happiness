import { HttpResponse, http } from "msw";
import { weatherData } from "./data";

export const handlers = [
  /**
   * A fake API endpoint to get weather data.
   *
   * @openapi
   * /api/weather:
   *   get:
   *     summary: Get weather data.
   *     parameters:
   *       - name: location
   *         in: query
   *         description: Location name to filter by.
   *         schema:
   *           type: string
   *       - name: date
   *         in: query
   *         description: Date to filter by.
   *         schema:
   *           type: string
   *           format: date
   *     responses:
   *       '200':
   *         description: Weather data.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/WeatherData'
   */
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
