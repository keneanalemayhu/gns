<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
    exit;
}

$name    = trim($_POST["name"] ?? "");
$email   = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    echo json_encode(["status" => "error", "message" => "Please fill in all fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit;
}

$to = "contact@gnstradingplc.com";
$subject = "New Contact Form Message from $name";

$body = "
Name: $name
Email: $email
Message:
$message
";

$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send message."]);
}
?>
