// deno-lint-ignore-file
import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
context.log("Geo header function called: ", JSON.stringify(context.geo));
  // Here's what's available on context.geo

  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     latitude?: number;
  //     longitude?: number;
  //     timezone?: string;
  //   }
  // }
 
  return context.json({
    geo: context.geo,
    header: request.headers.get("x-nf-geo"),
  });
};
