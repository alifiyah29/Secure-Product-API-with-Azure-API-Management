# Secure Product API with Azure API Management

This project demonstrates how to build and secure a simple Node.js API using [Azure API Management (APIM)](https://learn.microsoft.com/en-us/azure/api-management/).

🚀 Hosted on Azure  
🔐 Secured with JWT Authentication  
📊 Rate-limited and monitored via Azure APIM  
📘 Includes Developer Portal for frontend/API consumers

---

## 🛠 Tech Stack

- Node.js + Express
- Azure App Service (hosting)
- Azure API Management (gateway)
- Postman (API testing)

---

## ⚙️ How It Works

1. Build a REST API with a `/products` endpoint.
2. Deploy the API to Azure App Service.
3. Expose and secure the API using Azure API Management:
   - Enforce JWT token validation
   - Apply rate limiting
   - Enable logging and analytics
   - Provide documentation via Developer Portal

---

## 🏁 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/alifiyah29/Secure-Product-API-with-Azure-API-Management.git
cd Secure-Product-API-with-Azure-API-Management
npm install
```

### 2. Run Locally

```bash
node server.js
```

Visit: [http://localhost:3000/products](http://localhost:3000/products)

---

## ☁️ Deployment to Azure

1. Create a new Azure App Service via CLI or Portal
2. Zip the project:
   ```bash
   zip -r app.zip .
   ```
3. Deploy:
   ```bash
   az webapp deployment source config-zip \
     --resource-group <your-resource-group> \
     --name <your-app-name> \
     --src app.zip
   ```

---

## 🔐 Secure with Azure API Management (APIM)

- Create an APIM instance via Azure Portal
- Add your deployed API as a backend service
- Configure:
  - JWT validation policy
  - Rate limiting
  - Developer Portal

---

## 📬 Example Response

```json
[
  { "id": 1, "name": "Espresso" },
  { "id": 2, "name": "Latte" },
  { "id": 3, "name": "Cappuccino" }
]
```

---

## 🧠 Learn More

- [Azure API Management Docs](https://learn.microsoft.com/en-us/azure/api-management/)
- [JWT Token Generator](https://jwt.io/)
- [Postman](https://www.postman.com/)

---

## 📄 License

MIT © Alifiyah
```
