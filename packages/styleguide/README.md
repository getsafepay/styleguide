# @sfpy/styleguide

Safepay's styleguide and components for use on the web.

## Usage

1. Install Safepay Styleguide package:
   ```shell
   yarn add @sfpy/styleguide
   ```
2. Import global CSS files from the package in your JS(X)/TS(X) code:
   ```jsx
   import '@sfpy/styleguide/dist/sfpy-theme.css';
   ```
   or import it the main stylesheet file:
   ```css
   @import '@sfpy/styleguide/dist/sfpy-theme.css';
   ```
3. Add `'./node_modules/@sfpy/styleguide/dist/**/*.{js,ts,jsx,tsx}'` to the Tailwind `content` paths.

### Tailwind theme

For the Styleguide we use our custom Tailwind theme, which is based on the default TW theme, with the following differences:

- only valid media screen scopes are: `xs:`, `sm:`, `md:`, `lg:` and `xl:`
- there is a custom `hocus:` scope which is a shorthand for hover and focus states
- typography elements are predefined as a `heading-[size]` styles sets
- `icon-[size]` are custom component classes defined for icons sizing

The theme can be extended, if needed, and includes `@tailwindcss/typography` plugin by default, with a stripped down version of default config.

## Development

### Get started

1. Install dependencies with `yarn`.
2. Build everything with `yarn build`.
3. Develop with `yarn dev`.

### Changing Tailwind theme

In order to see changes made to the exported **tailwind.js** config:

- Change a value in **packages/styleguide/tailwind.js**
- Run `yarn build` in **packages/styleguide**
- Navigate to **example-web** and restart the dev server
