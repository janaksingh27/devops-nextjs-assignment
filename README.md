# Next.js App on Kubernetes

🚀 **Next.js App running on Kubernetes**  
_Updated by Janak Singh ✅_

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app).

---

## 🖥 Getting Started (Development)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

## ☸️ Running on Kubernetes (Minikube)

We have deployed this app on **Kubernetes** using **Minikube + Docker**.

- **Deployment:** `nextjs-deployment`  
- **Replicas:** 2  
- **Service:** `nextjs-service`  
- **Ingress:** `nextjs-ingress`

**Access the app via Ingress URL:**  
[http://nextjs.local](http://nextjs.local)

> Make sure to add this in your `/etc/hosts` for local access:
>
> ```text
> 192.168.49.2 nextjs.local
> ```
