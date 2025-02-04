# HNG12 Stage 0

This project is a simple RESTful API that returns basic information about the developer, including an email address, current date and time in ISO 8601 format, and the GitHub URL of the project's codebase.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Backlinks](#Backlinks)

## Description

This is a simple Express.js API built for the HNG12 internship. The API provides the following information:

- The registered email of the developer.
- The current date and time in ISO 8601 format.
- The GitHub URL where the project is hosted.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KolarDev/HNG12-Stage0-API.git

   ```

2. **Navigate to the project directory:**

   ```
   cd HNG12-Stage0-API

   ```

3. **Install the dependencies:**

   ```
   npm install
   ```

4. **Set up environment variables: Create a .env file in the root of the project and add the following variables:**

   ```
   PORT=6001
   NODE_ENV=development
   ```

5. **SRun the application:**

   ```
   npm start
   ```

## API Documentation

```
Endpoint URL:
GET /api/v1/info - Returns the developer's email, current datetime, and GitHub URL.

Request:

Method: GET

URL: /api/v1/info



```

1. **Response (200 OK)**

```

{
"email": "muhyideenabdulbasit11@gmail.com",
"current_datetime": "2025-01-30T09:30:00Z",
"github_url": "https://github.com/KolarDev/HNG12-Stage0-API.git"
}

```

2. **Example Usage:**
   a. **Making a GET request using curl:**

```
curl http://localhost:6001/api/v1/info
```

b. **Response:**

```
{
"email": "muhyideenabdulbasit11@gmail.com",
"current_datetime": "2025-01-30T09:30:00Z",
"github_url": "https://github.com/KolarDev/HNG12-Stage0-API"
}

```

## Backlinks

Explore more opportunities to hire developers in different programming languages:

https://hng.tech/hire/python-developers

https://hng.tech/hire/csharp-developers

https://hng.tech/hire/golang-developers

https://hng.tech/hire/php-developers

https://hng.tech/hire/java-developers

https://hng.tech/hire/nodejs-developers
