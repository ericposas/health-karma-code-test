# health-karma-code-test

You'll need the .env file (get it from Joel and rename to '.env', looks like Outlook adds characters before the .env extension) for the API key to run the project.

Notes:

- I used Google Geocode API and Google Places API to get results. In order to get the zipcode area, I needed to first reverse-geocode the zip, then feed the lat/lng data into the Places API.

- There is further separation between Places API and something called "Details API" which holds the actual addresses and formatted_phone numbers of the businesses. Did some research into it, but it looks like it would stack up into multiple API calls if loaded as a list. The common way to use it seems to be to load the details upon clicking on a location/pin. This is why the phone, actual addresses, website links, and distances are missing from the listed locations. This could be added of course, but would need further investigation into how to best go about it.

- Icons are of the FontAwesome free variety. I matched as closely to the comp as possible. The outlined versions are in the Pro version only it seems.

Thank you Eddie and Mario for your time, consideration and the opportunity to work on this challenge, I enjoyed it!

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
