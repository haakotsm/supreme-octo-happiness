import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/api/mock", () => {
    return HttpResponse.json({
      id: 1,
      name: "John Doe",
    });
  }),
];
