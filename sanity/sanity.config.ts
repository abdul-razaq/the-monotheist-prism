import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "the-monotheist-prism",
  title: "The Monotheist Prism",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
