# Product Authentication System

A modern product authentication platform that helps manufacturers and customers verify genuine products using QR code-based verification, secure product registration, and real-time authenticity validation.

**GitHub Repository:** https://github.com/kalyan0996/product-authentication-system

---

# 📌 Project Overview

The Product Authentication System provides a reliable solution for combating counterfeit products by enabling manufacturers to register products and customers to verify authenticity through QR codes.

### Key Features

* QR Code-Based Product Verification
* Secure Product Registration and Management
* Real-Time Authenticity Validation
* Manufacturer Dashboard
* Customer Verification Portal
* Product Tracking and Monitoring
* Counterfeit Detection and Prevention

---

# 🛠 Technology Stack

| Layer            | Technology                   |
| ---------------- | ---------------------------- |
| Frontend         | React.js, Nginx              |
| Backend          | Node.js, Express.js          |
| Database         | MongoDB                      |
| Authentication   | JWT                          |
| Containerization | Docker, Docker Compose       |
| Deployment       | AWS EC2, Nginx Reverse Proxy |
| Orchestration    | Kubernetes                   |

---

# 📂 Project Structure

```text
product-authentication-system/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── build/
│
├── docker/
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
│
├── k8s/
├── monitoring/
├── nginx.conf
├── README.md
└── .gitignore
```

---

# 🚀 Core Workflow

### Manufacturer

1. Create an account and log in.
2. Register product details.
3. Generate a unique QR code for the product.
4. Manage registered products from the dashboard.

### Customer

1. Scan the QR code on a product.
2. Submit verification request.
3. System validates the product record.
4. Product authenticity status is displayed instantly.

---

# ☁️ AWS EC2 Deployment

## Recommended Configuration

| Component        | Specification       |
| ---------------- | ------------------- |
| Operating System | Ubuntu 22.04 LTS    |
| Instance Type    | t2.medium or higher |
| Storage          | 20GB+ EBS           |

---

## Security Group Rules

| Type    | Port  | Source        |
| ------- | ----- | ------------- |
| SSH     | 22    | Your IP       |
| HTTP    | 3000  | 0.0.0.0/0     |
| API     | 5000  | 0.0.0.0/0     |
| MongoDB | 27017 | Internal Only |

---

## Connect to EC2

```bash
ssh -i your-key.pem ubuntu@YOUR_PUBLIC_IP
```

---

# 🚀 Quick Start

## Clone Repository

```bash
git clone https://github.com/kalyan0996/product-authentication-system.git
cd product-authentication-system
```

## Install Docker

```bash
sudo apt update -y
sudo apt install docker.io docker-compose -y

sudo systemctl start docker
sudo systemctl enable docker

sudo usermod -aG docker ubuntu
newgrp docker

docker --version
```

---

## Deploy Application

```bash
cd docker

docker compose up -d --build
```

---

## Verify Containers

```bash
docker ps
```

Expected containers:

```text
frontend
backend
mongodb
```

---

# 🌐 Application Access

| Component   | URL                            |
| ----------- | ------------------------------ |
| Frontend    | http://YOUR_PUBLIC_IP:3000     |
| Backend API | http://YOUR_PUBLIC_IP:5000     |
| MongoDB     | mongodb://YOUR_PUBLIC_IP:27017 |

---

# 🔐 Authentication

The application uses:

* JWT Authentication
* Password Hashing (bcrypt)
* Protected API Routes
* Role-Based Access Control

---

# 🧪 API Testing

```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
"email":"demo@product.app",
"password":"Demo1234!"
}'
```

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
MONGODB_URI=mongodb://mongo:27017/product-authentication-db

JWT_SECRET=your_jwt_secret_key

PORT=5000

NODE_ENV=production
```

---

# 📊 CI/CD Pipeline

The project supports automated deployment workflows for:

* Application Build
* Testing
* Container Image Creation
* Deployment Automation
* Infrastructure Updates

---

# 🔒 Security Features

* JWT Authentication
* Password Encryption with bcrypt
* Secure API Communication
* Environment Variable Protection
* Dockerized Deployment
* Reverse Proxy Security Configuration

---

# ❌ Common Issues

## Docker Permission Denied

```bash
sudo usermod -aG docker ubuntu
newgrp docker
```

---

## MongoDB Connection Failed

```bash
docker logs mongodb
```

---

## Frontend Cannot Reach Backend

Verify Nginx proxy configuration:

```nginx
location /api/ {
    proxy_pass http://backend:5000/api/;
    proxy_set_header Host $host;
}
```

---

# ✅ Features

* Product Registration
* QR Code Generation
* Product Verification
* Manufacturer Dashboard
* Customer Verification Portal
* Counterfeit Product Detection
* MongoDB Data Persistence
* Docker Containerization
* Kubernetes Deployment Support
* Nginx Reverse Proxy
* JWT Authentication
* Responsive User Interface

---

# 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is released under the MIT License.

---

# 👨‍💻 Author

Kalyan

GitHub: https://github.com/kalyan0996

Repository:
https://github.com/kalyan0996/product-authentication-system

---

# 📞 Support

For issues and support:

* Review application logs
* Verify Docker containers are running
* Check environment variable configuration
* Validate network and firewall settings
* Open an issue in the GitHub repository

---

**Last Updated:** June 2026
