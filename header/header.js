
fetch('../header/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('header').innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching header:', error);
        // Handle the error here, e.g., display an error message to the user
    });
