<?php
// Database configuration
$servername = "localhost";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password for XAMPP
$dbname = "booking"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$pickup_location_id = $_POST['pickup_location_id'];
$pickup_date = $_POST['pickup_date'];
$pickup_time = $_POST['pickup_time'];
$return_location_id = $_POST['return_location_id'];
$return_date = $_POST['return_date'];
$return_time = $_POST['return_time'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO booking (pickup_location_id, pickup_date, pickup_time, return_location_id, return_date, return_time) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("isssss", $pickup_location_id, $pickup_date, $pickup_time, $return_location_id, $return_date, $return_time);

// Execute the statement
if ($stmt->execute()) {
    echo "Reservation successful!";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
