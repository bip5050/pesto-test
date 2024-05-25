# Project Setup Instructions

To run the project, please follow these steps:

1. **Clone the repository and install dependencies:**
   - Clone the repository to your local machine:
     ```
     git clone <repository_url>
     ```
   - Navigate to the project directory:
     ```
     cd <project_directory>
     ```
   - Install dependencies using npm:
     ```
     npm install
     ```

2. **Run your local MongoDB server:**
   - If MongoDB is not installed on your local machine, follow these steps to install it:
     - For Linux:
       - Open a terminal window.
       - Run the following command to import the MongoDB public key:
         ```
         wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
         ```
       - Create a list file for MongoDB:
         ```
         echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
         ```
       - Update the package repository:
         ```
         sudo apt-get update
         ```
       - Install MongoDB:
         ```
         sudo apt-get install -y mongodb-org
         ```
     - For other operating systems, refer to the MongoDB installation documentation: [Install MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)
   - Start the MongoDB server by running the following command in a terminal window:
     ```
     mongod
     ```

3. **Run the project:**
   - After MongoDB is running, navigate to the root project directory in a new terminal window.
   - Run the following command to start both the server and client:
     ```
     npm start
     ```
   - Once the project is running, you can view it in your browser at [http://localhost:3001/](http://localhost:3001/).
