pipeline {
    agent any

    environment {
        // Define Docker image name and tag
        IMAGE_NAME = 'academade-frontend'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/rehanzproject/academade-frontend.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    echo "Building Docker image..."
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container (optional, if you want to run it after building)
                    echo "Running Docker container..."
                    sh "docker run -d -p 80:80 --name ${IMAGE_NAME} ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Optionally, remove the old container before deploying
                    echo "Stopping and removing old container..."
                    sh "docker rm -f ${IMAGE_NAME} || true"
                    
                    // Deploy: Run the new container
                    echo "Deploying new container..."
                    sh "docker run -d -p 80:80 --name ${IMAGE_NAME} ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        // Optional: You can add a stage to clean up old images to save space
        stage('Clean Up Docker Images') {
            steps {
                script {
                    // Remove old images if necessary
                    echo "Cleaning up old Docker images..."
                    sh "docker image prune -af"
                }
            }
        }
    }
}
