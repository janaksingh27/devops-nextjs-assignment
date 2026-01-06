# DevOps Internship Assessment  
## Containerize and Deploy a Next.js Application

## 📌 Overview
This project is part of a **DevOps Internship Assessment**.  
The objective is to containerize a Next.js application using Docker, automate image build and push using GitHub Actions and GitHub Container Registry (GHCR), and deploy the application on Kubernetes using Minikube.

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
├── README.md
└── next.config.js

---

## 🐳 Dockerization

### Build Docker Image
```bash
docker build -t nextjs-app .
