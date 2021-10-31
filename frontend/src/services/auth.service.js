export const authService = {
    login
}

async function login(user) {
    const configuration = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }

    const request = await fetch('http://localhost:3001/singin' ,  configuration);
    const requestJson = await request.json();

    return requestJson;
}