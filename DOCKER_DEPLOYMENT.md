# Docker Deployment Guide

## Overview
This guide explains how to deploy your Career Website using Docker.

## Files Created
- `Dockerfile` - Multi-stage build configuration for production deployment
- `docker-compose.yml` - Docker Compose configuration for local testing and deployment
- `.dockerignore` - Specifies files to exclude from Docker build context

## Prerequisites
- Docker (v20.10+)
- Docker Compose (v1.29+) - optional, for using docker-compose.yml

## Building the Docker Image

### Option 1: Using Docker CLI
```bash
docker build -t career-website:latest .
```

### Option 2: Using Docker Compose
```bash
docker-compose build
```

## Running the Container Locally

### Option 1: Using Docker CLI
```bash
# Run the container
docker run -p 3000:3000 career-website:latest

# Run in detached mode
docker run -d -p 3000:3000 --name career-website career-website:latest

# Stop the container
docker stop career-website

# Remove the container
docker rm career-website
```

### Option 2: Using Docker Compose
```bash
# Start the service
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the service
docker-compose down
```

## Production Deployment

### Environment Variables
If you need to set environment variables in production, add them to the Dockerfile or pass them at runtime:

```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  career-website:latest
```

### Cloud Platforms

#### AWS ECS / ECR
```bash
# Tag image for ECR
docker tag career-website:latest <your-aws-account>.dkr.ecr.<region>.amazonaws.com/career-website:latest

# Push to ECR
docker push <your-aws-account>.dkr.ecr.<region>.amazonaws.com/career-website:latest
```

#### Google Cloud Run
```bash
# Tag image
docker tag career-website:latest gcr.io/<project-id>/career-website:latest

# Push to GCR
docker push gcr.io/<project-id>/career-website:latest

# Deploy
gcloud run deploy career-website \
  --image gcr.io/<project-id>/career-website:latest \
  --platform managed \
  --region us-central1
```

#### DigitalOcean App Platform
1. Push to Docker Hub:
```bash
docker tag career-website:latest <dockerhub-username>/career-website:latest
docker push <dockerhub-username>/career-website:latest
```

2. Use the image in DigitalOcean App Platform dashboard

#### Docker Hub
```bash
docker tag career-website:latest <dockerhub-username>/career-website:latest
docker push <dockerhub-username>/career-website:latest
```

### Kubernetes Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: career-website
spec:
  replicas: 3
  selector:
    matchLabels:
      app: career-website
  template:
    metadata:
      labels:
        app: career-website
    spec:
      containers:
      - name: career-website
        image: career-website:latest
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

## Dockerfile Details

### Multi-Stage Build
The Dockerfile uses a multi-stage build for optimization:
1. **Builder Stage**: Installs dependencies and builds the Next.js application
2. **Production Stage**: Copies only necessary files, reducing image size

### Key Features
- **Non-root user**: Runs as `nextjs` user for security
- **Health Check**: Automatically checks if the application is running
- **Signal Handling**: Uses `dumb-init` for proper process management
- **Alpine Base**: Uses lightweight Alpine Linux to minimize image size
- **Layer Caching**: Optimized for Docker layer caching

## Checking Container Status

```bash
# View running containers
docker ps

# View all containers
docker ps -a

# View logs
docker logs <container-id>

# Follow logs
docker logs -f <container-id>

# Inspect container
docker inspect <container-id>
```

## Performance Tips

1. **Caching**: Docker caches layers, so changes to dependencies require full rebuild
2. **Image Size**: Current setup produces ~400-500MB images (optimized with Alpine)
3. **Build Time**: First build takes ~2-3 minutes, subsequent builds are faster due to caching

## Troubleshooting

### Container exits immediately
- Check logs: `docker logs <container-id>`
- Verify port is not in use: `docker port <container-id>`

### Port already in use
```bash
# Change port mapping
docker run -p 8080:3000 career-website:latest
```

### Permission issues
- Verify user permissions in Dockerfile
- Check volume mount permissions if using volumes

## Resources
- [Docker Documentation](https://docs.docker.com/)
- [Next.js Docker Guide](https://nextjs.org/docs/deployment/docker)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
