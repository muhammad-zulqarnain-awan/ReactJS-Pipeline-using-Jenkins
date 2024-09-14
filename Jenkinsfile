pipeline {

    agent any

    environment {
        DOCKER_IMAGE = "reactjs-app-jenkins"
        DOCKER_TAG = "v${BUILD_ID}"
        DOCKER_TAG_LATEST = "latest"
        DOCKER_CONTAINER_NAME = "reactjs-app-cont"
    }

    stages {

        stage("Checkout Source Code") {
            steps {
                git branch: 'main', url: 'https://github.com/muhammad-zulqarnain-awan/ReactJS-Pipeline-using-Jenkins/'
            }
        }
        
        stage ("Build Docker Image") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'password', usernameVariable: 'username')]) {
                    sh "docker build -t ${username}/${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker image tag ${username}/${DOCKER_IMAGE}:${DOCKER_TAG} ${username}/${DOCKER_IMAGE}:${DOCKER_TAG_LATEST}"
                }
            }
        }

        stage ("Push Docker Image to DockerHub") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'username', passwordVariable: 'password')]) {
                    sh "docker login -u ${username} -p ${password}"
                    sh "docker push ${username}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker push ${username}/${DOCKER_IMAGE}:${DOCKER_TAG_LATEST}"
                }
            }
        }

        stage ("Create and Run Container") {
            steps {
                script {

                    def containerExists = sh(script: "docker ps -a | grep ${DOCKER_CONTAINER_NAME}", returnStdout: true).trim()

                    if (containerExists) {
                        sh "docker rm -f ${DOCKER_CONTAINER_NAME}"
                    }

                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'username', passwordVariable: 'password')]) {
                        sh "docker run -dit --name ${DOCKER_CONTAINER_NAME} -p 8081:80 ${username}/${DOCKER_IMAGE}:${DOCKER_TAG_LATEST}"
                    }
                }
            }
        }
    }
}