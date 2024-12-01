fetch('/api/get-secret-key')
    .then(response => response.json())
    .then(data => {
        document.getElementById("secretKey").textContent = data.secretKey;
    })
    .catch(error => console.error('Error fetching secret key:', error));
