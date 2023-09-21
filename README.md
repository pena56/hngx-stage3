# MovieBox

An Image Gallery web application using Reactjs

## How to Run Locally

- Clone this repo locally using the command

```
git clone https://github.com/pena56/hngx-stage3.git
```

- Signup on [Firebase] using your gmail account to be able to use the Authentication feature.(https://console.firebase.google.com).

- Create a new Project on Firebase and enable the email/password authentication feature on the project.

- create a .env.local file and populate with these content

```
VITE_FIREBASE_API_KEY=<your firebase project api key>
VITE_FIREBASE_AUTH_DOMAIN=<your firebase project auth domain>
VITE_FIREBASE_PROJECT_ID=<your firebase project id>
VITE_FIREBASE_STORAGE_BUCKET=<your firebase project storage bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your firebase project messaging sender id>
VITE_FIREBASE_APP_ID=<your firebase app id>

```

- Install the dependecies using the command

```
yarn
```

- Run the dev server using this command

```
yarn dev
```

- Open your browser on

```
http://localhost:5173/
```
