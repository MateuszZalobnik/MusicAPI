# Backend REPO 
## [Music API]()
With our web app, developers and DJs alike have access to the tools and information they need to succeed in their respective fields. Whether you're looking to build a music-related application or take your DJ skills to the next level, our platform has everything you need to make your vision a reality.

## [Frontend REPO](https://github.com/MateuszZalobnik/music-api-page)

## Backend Technologies

TypeScript

Node.js

Express.js

MongoDB

## Frontend Technologies

TypeScript

React

Next.js 13v

Styled Components


## [Demo]()

## [Docs]()

### Endpoints
```
https://musicapi-fpzm.onrender.com
```
#### GET/music
```
https://musicapi-fpzm.onrender.com/music
```
Returns all music from database.
#### GET/music/:id
```
https://musicapi-fpzm.onrender.com/music/63e6a45999d2f9ac59f010d9
```
Returns music by id.
#### GET/music?bpm_lt=140&bpm_gt=90
```
https://musicapi-fpzm.onrender.com/music?bpm_lt=140&bpm_gt=90
```
Returns music which have bpm between 90 and 140.

It is possible to mix parameters for example:
```
https://musicapi-fpzm.onrender.com/music?bpm_lt=140&camelot=4a&title=phrase
```
Returns music which bpm is lower than 140, camelot is 4A and include in title "phrase".

| PARAM | TYPE | DETAILS |
| --- | --- | --- |
| bpm_lt | number | returns all music with bpm lower than value |
| bpm_gt | number | returns all music with bpm greater than value |
| camelot | string | returns all music with supplied camelot, letter case doesn't matter |
| title | string | returns all music whitch include supplied phrase in title, letter case doesn't matter |
