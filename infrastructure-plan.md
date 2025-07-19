## 🧱 Terraform Infrastructure Plan for App Deployment

### 📦 Core Services

- **ECS (Fargate)**

  - To run your stateless Node.js containers (`service-one`, `-two`, `-three`)
  - Includes Task Definitions and Service resources

- **Application Load Balancer (ALB)**

  - Distributes traffic to ECS services
  - HTTP listener (port 80)

- **RDS (PostgreSQL)**

  - Managed relational database
  - Subnet group + DB instance

- **ElastiCache (Redis)**

  - Managed Redis cluster
  - Subnet group + cluster configuration

---

### 🌐 Networking

- **VPC**

  - Custom IP range (e.g., `10.0.0.0/16`)

- **Subnets**

  - 2× Public Subnets (for ALB, NAT Gateway)
  - 2× Private Subnets (for ECS, RDS, Redis)

- **Internet Gateway**

  - Enables outbound internet for public subnets

- **NAT Gateway**

  - Allows ECS tasks in private subnets to reach the internet

- **Route Tables**

  - One for public subnets
  - One for private subnets (with route to NAT Gateway)

---

### 🔐 Access & Permissions

- **Security Groups**

  - For ALB (allow inbound HTTP)
  - For ECS Tasks (allow traffic from ALB)
  - For RDS (allow from ECS)
  - For Redis (allow from ECS)

- **IAM Roles**

  - Task execution role (for pulling images, writing logs)
  - (Optional) Task role (if your app needs to call AWS services)

---

### 🧾 Optional / Utility

- **CloudWatch Logs**

  - For ECS container logs

- **Secrets Management**

  - AWS Systems Manager Parameter Store (for DATABASE_URL, etc.)

---

### 📦 Container Image Registry

- **Amazon ECR (optional)**

  - If you want to push your images to AWS instead of Docker Hub

---

**📝 Note:**
For transparency, this README and infrastructure plan were generated with the help of AI based on my existing Docker Compose file. This is my first Terraform project, and I’m using AI to assist with learning and planning the infrastructure. All decisions are reviewed and adapted as I go.

---
