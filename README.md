# Author:

* Mr.Duc Phuc <<leducphuc1234@gmail.com>>

# Description
Run project has 2 options

# Technical
* [Docker][]
* [Nginx][]
* [React][]
* [Express][]

## Option 1

**1. Environment variable**

**React**:

Create file .env in front-end/.env

> REACT_APP_API_ENDPOINT=http://localhost

**2. Docker:** 

We use Docker to run a development web server and build the project.

After installing Docker, you should be able to run the following command docker-compose.

Start docker container, run:

    docker-compose up --build

Stop and remove the container, run:

    docker-compose -f down

**3. Open browser**

Then navigate to [http://localhost](http://localhost) in your browser

## Option 2

**1. Environment variable**

**React**:

Create file .env in front-end/.env

> REACT_APP_API_ENDPOINT=http://localhost:8000

**2. Run:** 

**React**:

Start express back end, run:

    cd front-end

    yarn start

**Express Back-end**:

Start express back end, run:

    cd back-end

    yarn start

**3. Open browser**

Then navigate to [http://localhost:3000](http://localhost:3000) in your browser

[Docker]: https://www.docker.com
[React]: https://reactjs.org
[Nginx]: https://nginx.org/en
[Express]: https://expressjs.com
