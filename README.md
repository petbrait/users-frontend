# Petbrait - Users site

## Development quickstart

Clone the repo and run the following commands:

- `npm install` to install project dependencies
- Make sure you have a `.env` file at the root level (copy `.env.sample`)
- `next dev` to start development server
- Open the app at http://localhost:3000.

Some additional commands that are frequently used in development are:

- `npm test` run all tests and collect the coverage information

## Building for production

- `next build` builds for production
- `next start` start the production server

## Environment variables

Environment variables can be used to override the application default configuration. List of configurable environment variables is:

| Variable                        |   Values   |  Default value  | Description                                                        |
| ------------------------------- | :--------: | :-------------: | ------------------------------------------------------------------ |
| NEXT_PUBLIC_GOOGLE_MAPS_API_KEY | `<string>` | `"development"` | Specifies the value of the api-key provided by the google maps api |

## Maintainers

@jaredortega

## External documentation
