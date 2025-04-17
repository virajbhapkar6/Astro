import type { APIRoute } from "astro"
import notesData from "../../data/data.json"

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(notesData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

