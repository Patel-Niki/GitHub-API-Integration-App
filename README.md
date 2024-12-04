# GitHub API Integration App

This is a full-stack web application built with React and Node.js that allows users to sign in using GitHub authentication and fetch their GitHub profile information, including their avatar and repositories. The app uses the GitHub API for seamless integration and data retrieval.

---

## Features

- **GitHub Authentication**: Sign in securely with GitHub.
- **Profile Display**: View your GitHub username, avatar, and repositories.
- **Search Functionality**: Search for repositories or issues from your GitHub account.
- **Modern UI**: Built using React and Tailwind CSS for a clean and responsive design.

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/github-api-integration-app.git
cd github-api-integration-app
```

### 2. Install Dependencies
- for the backend

```bash
cd server
npm install
```

- For the frontend:

```bash
cd client
npm install
```

## Configuration

### Set Up Environment Variables
- Create a .env file in the backend directory (server/) and configure the following:

```bash
GITHUB_CLIENT_ID=<your-github-client-id>
GITHUB_CLIENT_SECRET=<your-github-client-secret>
GITHUB_REDIRECT_URI=http://localhost:3001/auth/github/callback
```

- To get your GitHub Client ID and Client Secret, create an OAuth App on GitHub by following these instructions.