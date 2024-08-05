import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

app.get("/", (c) => {
  return c.html(html`<!DOCTYPE html>
    <title>HTMX demo</title>
    <script src="https://unpkg.com/htmx.org@2.0.1"></script>
    <button hx-post="/clicked" hx-swap="innerHTML" hx-target="#addContent">
      Click me
    </button>
    <div id="addContent"></div>`);
});

app.post("/clicked", (c) => {
  return c.text("<b>Hello Hono! </b> You clicked the button");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
