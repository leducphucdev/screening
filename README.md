# Author:

Duc Phuc <<leducphuc1234@gmail.com>>

# Technical
[Docker][]
[Nginx][]
[React][]
[Express][]

[Docker]: https://www.docker.com
[React]: https://reactjs.org
[Nginx]: https://nginx.org
[Express]: https://expressjs.com

# RUN PROJECT
Run project has 2 options
## Option 1:

**1. Environment variable**

Create file .env in front-end/.env

> REACT_APP_API_ENDPOINT=http://localhost:3000

**2. Run Docker:** 

We use Docker to run a development web server and build the project.

After installing Docker, you should be able to run the following command docker-compose.

Start docker container, run:

    docker-compose up --build

Stop and remove the container, run:

    docker-compose -f down

**3. Open browser**

Then navigate to [http://localhost:3000](http://localhost:3000) in your browser

## Option 2:

**1. Environment variable**

**React**:

Create file .env in front-end/.env

> REACT_APP_API_ENDPOINT=http://localhost:8000

**2. Run:** 

Start react front end in port 3000, run:

    cd front-end

    yarn start

Start express back end in port 8000, run:

    cd back-end

    yarn start

**3. Open browser**

Then navigate to [http://localhost:3000](http://localhost:3000) in your browser

# TEST PROJECT

Test end user:

Case 1: From Blue, you can go with Green

Case 2: Reset will put you back to Blue 

Case 3: From Blue, you can go with Yellow

Case 4: From Green, you can't go to Yellow

Case 5: From Yellow, you can't go to Green

Case 6: ✅ Blue → Yellow

Case 7: ✅ Blue → Green → Blue → Yellow

Case 8: ✅ Blue → Green → ... → Blue → Green → Blue → Yellow

Case 9: ⛔ Blue → Yellow → Blue → Yellow

Case 10: Reset will reset all step save in back-end

Case 11: ⛔ Blue → Green → Blue → Yellow → Blue → Yellow

Test api:
- Use postman test api

Case 1: Send api `/api/transition/<nextstep>` but not `<nextstep>` then status code 400

Case 2: Send api `/api/transition/<nextstep>` but body not variable `from_step` then status code 400

Case 3: Send api `/api/transition/<nextstep>` but body not variable `first_load_page` then status code 400

Case 1: From Blue`<from_step>`, you send with Green
then status code 200

Case 3: From Blue`<from_step>`, you send with Yellowthen status code 200
 
Case 4: From Green`<from_step>`, you can't send Yellow then status code 400

Case 5: From Yellow`<from_step>`, you can't send Green then status code 400

Case 6: ✅ Send step from Blue → Yellow

Case 7: ✅ Send step Blue → Green → Blue → Yellow

Case 8: ✅ Send step Blue → Green → ... → Blue → Green → Blue → Yellow

Case 9: ⛔ Send step Blue → Yellow → Blue -> Yellow(then Green then status code 400)

Case 10: Reset with api `/api/step/reset` will reset all step save in back-end

Case 11: ⛔ Blue → Green → Blue → Yellow → Blue → Yellow(then Green then status code 400)
