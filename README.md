# Number Classification API

This API classifies a given number and returns interesting mathematical properties about it, along with a fun fact fetched from the [Numbers API](http://numbersapi.com).

---

## **Features**
- **Number Classification**: Determines if a number is prime, perfect, or an Armstrong number.
- **Digit Sum**: Calculates the sum of the digits of the number.
- **Fun Fact**: Fetches a fun fact about the number from the Numbers API.
- **RESTful Endpoint**: Provides a simple `GET` endpoint for number classification.

---

## **API Endpoint**

### **GET `/api/classify-number`**
Classifies a number and returns its mathematical properties and a fun fact.

#### **Request**
- **Query Parameter**:
  - `number` (required): The number to classify.

#### **Response**

- **200 OK**:

  ```json
  {
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
  }
  ```

- **400 Bad Request**:
  ```json
  {
    "number": "abc",
    "error": true
  }
  ```

---

## **Technologies Used**
- **Backend**: Node.js, Express.js
- **External API**: [Numbers API](http://numbersapi.com)
- **Deployment**: Google Cloud Platform (Cloud Run)
- **Containerization**: Docker
- **Version Control**: GitHub

---

## **Setup and Installation**

### **Prerequisites**
- Node.js (v16 or higher)
- npm (Node Package Manager)
- Docker (optional, for containerization)
- Google Cloud SDK (optional, for deployment)

### **Steps to Run Locally**
1. Clone the repository:
   ```bash
   git clone git@github.com:DJIOTSA/devops_task1.git
   cd number-classification-express-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Access the API:
   - Open your browser or use a tool like Postman.
   - Visit: `http://localhost:3000/api/classify-number?number=371`

---

## **Deployment to Google Cloud Platform (GCP)**

### **Prerequisites**
- Google Cloud account (free tier available)
- Google Cloud SDK installed and configured

### **Steps to Deploy**
1. Build the Docker image:
   ```bash
   docker build -t gcr.io/YOUR_PROJECT_ID/number-classification-api .
   ```

2. Push the Docker image to Google Container Registry (GCR):
   ```bash
   docker push gcr.io/YOUR_PROJECT_ID/number-classification-api
   ```

3. Deploy to Cloud Run:
   ```bash
   gcloud run deploy number-classification-api \
     --image gcr.io/YOUR_PROJECT_ID/number-classification-api \
     --platform managed
   ```

4. Access the deployed API:
   - Cloud Run will provide a URL like:
     ```
     https://number-classification-api-xyz.a.run.app
     ```
   - Visit: `https://number-classification-api-xyz.a.run.app/api/classify-number?number=371`

---

## **API Documentation**

### **Mathematical Properties**
- **Prime**: A number greater than 1 with no positive divisors other than 1 and itself.
- **Perfect**: A number equal to the sum of its proper divisors (e.g., 6 = 1 + 2 + 3).
- **Armstrong**: A number equal to the sum of its own digits each raised to the power of the number of digits (e.g., 371 = 3³ + 7³ + 1³).
- **Odd/Even**: Determines if the number is odd or even.
- **Digit Sum**: The sum of all digits in the number.

### **Fun Fact**
- Fetched from the [Numbers API](http://numbersapi.com) using the `math` type.

---

## **Contributing**
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

---

## **License**
This project is licensed under the MIT License.

---

## **Acknowledgments**
- [Numbers API](http://numbersapi.com) for providing fun facts about numbers.
- Google Cloud Platform for hosting the API.

---

## **Contact**
For questions or feedback, please contact:
- **Your Name**
- **Email**: mhulodjiotsa@gmail.com
- **GitHub**: [DJIOTSA](https://github.com/DJIOTSA)
