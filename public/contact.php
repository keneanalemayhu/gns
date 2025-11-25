<?php
header("Content-Type: application/json");

// VALIDATE REQUEST
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

// ADMIN EMAIL SETTINGS
$to = "contact@gnstradingplc.com";

$cc  = "sales@gnstradingplc.com";
$bcc = "internal@gnstradingplc.com";

$subject = "New Contact Form Message from $name";

// HTML Email Template for Admin
$adminBody = '
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  body { background:#f5f7fa; font-family:Arial; padding:20px; }
  .box { background:#fff; padding:25px; border-radius:12px; 
         border:1px solid #e5e7eb; max-width:600px; margin:auto; }
  .title { font-size:22px; font-weight:bold; text-align:center; }
  .label { font-weight:bold; margin-top:15px; color:#1f2937; }
  .value { background:#f3f4f6; padding:10px; border-radius:8px; margin-top:5px; }
  .logo { text-align:center; margin-bottom:20px; }
  .logo img { height:70px; }
</style>
</head>
<body>

<div class="box">
  <div class="logo">
    <img src="https://gnstradingplc.com/logo.png" alt="GNS Trading Logo">
  </div>

  <div class="title">📩 New Contact Form Submission</div>

  <div class="label">Name</div>
  <div class="value">'.htmlspecialchars($name).'</div>

  <div class="label">Email</div>
  <div class="value">'.htmlspecialchars($email).'</div>

  <div class="label">Message</div>
  <div class="value">'.nl2br(htmlspecialchars($message)).'</div>

</div>
</body>
</html>
';

// HEADERS FOR ADMIN EMAIL
$adminHeaders  = "MIME-Version: 1.0\r\n";
$adminHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
$adminHeaders .= "From: $name <$email>\r\n";
$adminHeaders .= "Reply-To: $email\r\n";
$adminHeaders .= "Cc: $cc\r\n";
$adminHeaders .= "Bcc: $bcc\r\n";

// SEND EMAIL TO ADMIN
$mailSent = mail($to, $subject, $adminBody, $adminHeaders);


// AUTO-REPLY EMAIL TO CUSTOMER
$replySubject = "Thank you for contacting GNS Trading";

$autoReplyBody = '
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  body { background:#f5f7fa; font-family:Arial; padding:20px; }
  .box { background:#fff; padding:25px; border-radius:12px; 
         border:1px solid #e5e7eb; max-width:600px; margin:auto; }
  .header { text-align:center; }
  .logo img { height:60px; }
  .thanks { font-size:20px; font-weight:bold; margin-top:10px; }
  .msg { margin-top:15px; line-height:1.6; }
  .copy-title { margin-top:25px; font-size:15px; font-weight:bold; }
  .copy-box { background:#f3f4f6; padding:15px; border-radius:8px; margin-top:5px; }
  .footer { margin-top:25px; font-size:12px; text-align:center; color:#64748b; }
</style>
</head>
<body>

<div class="box">
  <div class="header">
    <div class="logo"><img src="https://gnstradingplc.com/logo.png"></div>
    <div class="thanks">Thank you for contacting GNS Trading!</div>
  </div>

  <p class="msg">
    Hello <strong>'.htmlspecialchars($name).'</strong>,<br><br>
    We have received your message and our team will get back to you shortly.
    Below is a copy of your message:
  </p>

  <div class="copy-title">📄 Your Message</div>
  <div class="copy-box">'.nl2br(htmlspecialchars($message)).'</div>

  <div class="footer">
    GNS Trading PLC — Simplifying Trade, Amplifying Value<br>
    General Winget, Addis Ababa, Ethiopia | +251 91 122 0468
  </div>
</div>

</body>
</html>
';

$replyHeaders  = "MIME-Version: 1.0\r\n";
$replyHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
$replyHeaders .= "From: GNS Trading <contact@gnstradingplc.com>\r\n";
$replyHeaders .= "Reply-To: contact@gnstradingplc.com\r\n";


// SEND AUTO-REPLY TO USER
mail($email, $replySubject, $autoReplyBody, $replyHeaders);


// FINAL JSON RESPONSE
echo json_encode([
    "status" => $mailSent ? "success" : "error",
    "message" => $mailSent ? "Message sent successfully!" : "Failed to send message."
]);
