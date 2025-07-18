[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19956552&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This project demonstrates the fundamentals of MongoDB using **MongoDB Compass** only.

## Prerequisites
- MongoDB installed locally and `mongod` service running  
- MongoDB Compass installed
- Git & GitHub Classroom access

## Setup & Usage

1. **Start MongoDB**

   - **Windows**: Start `MongoDB Server` in Services (services.msc), or run:
     ```bash
     "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\6.0\bin\mongod.cfg"
     ```

   - **macOS** (Homebrew):
     ```bash
     brew services start mongodb-community
     ```

   - **Linux** (systemd):
     ```bash
     sudo systemctl start mongod
     ```

2. **Open MongoDB Compass**
   - Connect to: `mongodb://localhost:27017`
   - Click **Connect**.

3. **Create Database & Collection**
   - Click **+ Create Database**  
     - **Database Name:** `plp_bookstore`  
     - **Collection Name:** `books`  
   - Click **Create Database**.

4. **Insert Sample Data**
   - Go to **plp_bookstore ▶️ books**  
   - Use **Insert Document** to add 10 sample book records (see `queries.js` for reference JSON).

5. **Run Queries in Compass**
   - Use **Filter**, **Project**, **Sort**, **Limit**, **Skip**, and **Aggregation** tabs.
   - Create indexes under the **Indexes** tab and compare performance with **Explain Plan**.

6. **Submission**
   - Include a screenshot of the **books** collection showing all 10 entries (paste it below).
   - Commit & Push:
     ```bash
     git add README.md queries.js screenshot.png
     git commit -m "Complete MongoDB Fundamentals Assignment"
     git push origin main
     ```

---

<img width="1352" height="713" alt="image" src="https://github.com/user-attachments/assets/10863c86-145c-478e-a071-4fa1f1346814" />


Add your Compass screenshot file (e.g., `screenshot.png`) here in the repo and paste it below:

![Books Collection Screenshot](./screenshot.png)ative/) 
