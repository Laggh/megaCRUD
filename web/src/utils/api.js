const API_URL = 'http://localhost:3000/'
const HEADER = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

export function pingApi() {
    return fetch(API_URL + "ping", {
        method: "GET",
        headers: HEADER,
    })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error:", error));
}
