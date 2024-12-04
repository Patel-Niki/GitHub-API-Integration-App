import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

app.get('/', (res) => {
    res.status(200).send("Hello from New Jersey");
})

app.get('/auth/github', (req, res) => {
    const redirectUri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
    res.redirect(redirectUri);
})

app.get('/auth/callback', async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send('Authorization code not provided');
    }

    try {
        const response = await axios.post('https://github.com/login/oauth/access_token', {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
            },
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        const accessToken = response.data.access_token;

        const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const user = userResponse.data;
        res.redirect(`http://localhost:3000/home?token=${accessToken}&username=${user.login}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Authentication failed');
    }
});

app.listen(PORT, (error) => {
    if(!error) {
        console.log("Server is running on Port:" + PORT);
    } else {
        console.log("Can not connect to server", error);
    }
});