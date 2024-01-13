
# Social Media Analytics

A backend project used to get the Analytics of the text as no of words and average words length.

## API Reference

#### POST all items

```http
  POST /api/v1/posts/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | used to store id           |
| `text`    | `string` | used to store text         |

#### Get text by Id 

```http
  GET /api/v1/posts/{id}/analysis/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of document to fetch |

#### analyze(text)

Get the string and returns the total words count and average word length.

#### How to Run ?

```http
   git clone <repo>
   // Add environment variables
   npm install 
   npm start
```
#### Database used
 MongoDB database used for storing the data. 
 Redis use for caching.

#### IP based rate limiting 
  Used express-rate-limit which uses fixed window for 
  the 15 minutes  and 100 request in 15 minutes .

#### seeder.js
 Used the seeder function to initially import the data to database for testing get API
 
#### Successfully Deployed On RENDER Platform

#### POST
```http

   https://social-media-analytics-zxtg.onrender.com/api/v1/posts/
```

#### GET
```http

   https://social-media-analytics-zxtg.onrender.com/api/v1/posts/{id}/analysis/
```


