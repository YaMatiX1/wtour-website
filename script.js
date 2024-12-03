document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventSelection = document.getElementById('event').value;
    const date = document.getElementById('date').value;
    const tickets = document.getElementById('tickets').value;

    const message = `
        Booking Details:
        Name: ${name}
        Email: ${email}
        Event: ${eventSelection}
        Date: ${date}
        Number of Tickets: ${tickets}
    `;

    document.getElementById('message').textContent = message;

    // Optionally, send this data to a server or email service here
});
