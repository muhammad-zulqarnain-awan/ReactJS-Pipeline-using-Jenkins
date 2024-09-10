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
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'username')]) {
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
                    sh "docker rmi ${username}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker rmi ${username}/${DOCKER_IMAGE}:${DOCKER_TAG_LATEST}"
                }
            }
        }

        stage ("Create Container") {
            steps {
                script {
                    def containerName = "reactjs-app-cont"

                    def containerExists = sh(script: "docker ps -a --filter 'name=${DOCKER_CONTAINER_NAME}' --format '{{.Names}}'", returnStdout: true).trim()

                    if (containerExists) {
                        sh "docker rm -f ${DOCKER_CONTAINER_NAME}"
                    }

                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'username')]) {
                        sh "docker run --name ${DOCKER_CONTAINER_NAME} -p 8080:80 ${username}/${DOCKER_IMAGE}:${DOCKER_TAG_LATEST}"
                    }
                }
            }
        }
    }
}