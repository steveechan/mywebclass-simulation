1. choose a deployment platform: i would say to use AWS, google cloud, heroku (discontinued), or digitalocean.

2. create a new server instance on the platform to host your project

3. setup the server with node js

# updates 

sudo apt-get update

# installing node

sudo apt-get install node.js

# install pm2 process

sudo npm install -g pm2

# files and project stuff

1. make sure to move the files you need for your project onto the server
2. navigate to the project directory and type npm install in the terminal to get the dependencies
3. npm start to start the project

# starting project

pm2 start index.html

# saving

pm2 save

# starting PM2 on startup

pm2 startup systemd
