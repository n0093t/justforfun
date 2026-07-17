async function getIP() {
    let response = await fetch(
        "https://api.ipify.org",
        {
            method: "GET",
        }
    )
    .catch(() => {});

    if (response.ok) {
        return await response.text();
    } else {
        return "can\'t get ip";
    }
}

let ipAddr = await getIP();

console.log(ipAddr);