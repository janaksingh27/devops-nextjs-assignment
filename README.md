# 🚀 DevOps Internship Assessment
## Containerize and Deploy a Next.js Application

**Author:** Janak Singh ✅

**Last Updated:** 07-Jan-2026
---

## 🖥 Getting Started (Development)

Install dependencies:
```bash
npm install
# or
yarn install

### Run development server

npm run dev
# or
yarn dev

## Open browser at 

http://localhost:3000

## 📌 Overview
This project is part of a **DevOps Internship Assessment**.

The objective of this project is to:
- Containerize a **Next.js** application using **Docker**
- Automate Docker image build & push using **GitHub Actions**
- Store the image in **GitHub Container Registry (GHCR)**
- Deploy the application on **Kubernetes (Minikube)** using manifests

---

## 🛠️ Tech Stack
- **Frontend:** Next.js
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Container Registry:** GitHub Container Registry (GHCR)
- **Orchestration:** Kubernetes
- **Local Cluster:** Minikube

---

## 📂 Project Structure

.
├── Dockerfile
├── .dockerignore
├── .github/workflows/docker-image.yml
├── k8s/
│ ├── deployment.yaml
│ └── service.yaml
├── package.json
├── next.config.js
└── README.md


---

## 🐳 Dockerization

### Build Docker Image Locally
```bash
docker build -t nextjs-app .
docker run -d -p 3000:3000 nextjs-app
http://localhost:3000

---

## 🔁 CI/CD with GitHub Actions

- GitHub Actions workflow runs on **push to main**
- Builds Docker image
- Tags image properly
- Pushes image to **GitHub Container Registry (GHCR)**

### GHCR Image

ghcr.io/janaksingh27/devops-nextjs-assignment/nextjs-app:latest

---

## ☸️ Kubernetes Deployment (Minikube)

### Start Minikube
```bash
minikube start

### Apply Kubernetes Mainfests
```bash
kubectl apply -f k8s/

### Check Deployment & Service
```bash
kubectl get deployments
kubectl get services

### Access App via Minikube
minikube service nextjs-service

## ✅ Verification

-Docker image runs successfully
-Image pulled from GHCR
-Application accessible on browser
-Kubernetes deployment running with replicas

## 📬 Submission Details

-Repository:
 https://github.com/janaksingh27/devops-nextjs-assignment

-GHCR Image:
 ghcr.io/janaksingh27/devops-nextjs-assignment/nextjs-app:latest
