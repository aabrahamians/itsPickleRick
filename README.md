# itsPickleRick

Coding challange to retrieve data from api and display a filterable list

### Installation

```sh
  - git clone git@github.com:aabrahamians/itsPickleRick.git
  - cd itsPickleRick
  - npm or yarn install
  - npm run start
  - visit http://localhost:3000/
```

#### View working demo bellow

[![Edit elated-hertz-nl5jf](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elated-hertz-nl5jf?fontsize=14&hidenavigation=1&theme=dark)

#### Notes

- decided to use 'useReducer' hook to simplify state management.
- using a proxy hosted on heroku to circumvent cors
- was not sure if data was '"' on purpose but one entry has the key "tag" mis-spelled as " tag". Normally, the data source would be tracked and cleaned up but in this case there is a "sanitation" method to clean data.
