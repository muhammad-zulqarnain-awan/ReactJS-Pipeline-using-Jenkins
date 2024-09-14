# CICD Pipeline for Build Docker Image and Push to DockerHub using Jenkins

In this project, we automated the task of building docker image of reactjs app, push image to dockerhub and running container of that image using Jenkins Pipeline.




## Installation

First, install jenkins from official documentation



[Jenkins Installation Webiste](https://www.jenkins.io/doc/book/installing/)


## Screenshots

Create a new Pipeline

![SS1](/screenshots/ss1.png)


Go to GitHub project settings and add the Web Hook for Jenkins Server

![SS2](/screenshots/ss2.png)


Checked the GitHub Hook Triggers option in Build Triggers

![SS3](/screenshots/ss3.png)


Add the Jenkinsfile location in Pipeline section

![SS4](/screenshots/ss4.png)
![SS5](/screenshots/ss5.png)


When you push changes to GitHub, it will triggered the Pipeline

![SS6](/screenshots/ss6.png)
![SS7](/screenshots/ss7.png)
![SS8](/screenshots/ss8.png)