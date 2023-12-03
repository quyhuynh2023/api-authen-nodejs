```
Deploy hosting: https://api-authen-nodejs.onrender.com/
```

Example
```
POST https://api-authen-nodejs.onrender.com/auth/register
Content-Type : application/json
{
    "email": "example@email.com",
    "password": "1234"
}
```

```
POST https://api-authen-nodejs.onrender.com/auth/login
Content-Type : application/json
{
    "email": "example@email.com",
    "password": "1234"
}
```

```
POST https://api-authen-nodejs.onrender.com/auth/refresh-token
Content-Type : application/json
{
    "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDE1OTIwMDYsImV4cCI6MTczMzE0OTYwNiwiYXVkIjoiNjU2YWQyMTE1OWY5MWViNmU0MTcwOTY3In0.fUEFrRM40ed4XXZVnap1Ms9zgrG7m0JIQrOhg4fFdTU"
}
```

```
DELETE https://api-authen-nodejs.onrender.com/auth/logout
Content-Type : application/json
{
    "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDE1OTIwMDYsImV4cCI6MTczMzE0OTYwNiwiYXVkIjoiNjU2YWQyMTE1OWY5MWViNmU0MTcwOTY3In0.fUEFrRM40ed4XXZVnap1Ms9zgrG7m0JIQrOhg4fFdTU"
}
```


