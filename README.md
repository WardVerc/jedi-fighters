## Welcome to Jedi-Fighters!

Assemble your team to fight the dark side!

## Getting Started

Install the packages first:

```bash
npm i
```

To start, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the tests, run:

```bash
npm run test
```

## Notes

- This is a [React](https://react.dev/) project using [NextJS 14](https://nextjs.org/) and [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/)
- ⚠ Installed [redux-persist](https://github.com/rt2zz/redux-persist) to keep data when changing pages. ⚠ This needs to be removed and the Provider must wrap the central App module.
- [Material UI](https://mui.com/material-ui/) was used to style some components
- [Jest](https://jestjs.io/) was used for unit tests
- [DALL-E](https://openai.com/dall-e-2) was used to create the background and placeholder image.

## Next steps

- Let your team battle against a random evil team doing rock/paper/scissors
  - Check my Python script that does this from my [100 days of Python repo](https://github.com/WardVerc/python-course/blob/master/day-4-rock-paper-scissors/rock-paper-scissors.py)
- Add translations
- Write more unit tests
