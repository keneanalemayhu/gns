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
  body {
    background:#f5f7fa;
    font-family:Arial, sans-serif;
    padding:20px;
  }

  .box {
    background:#ffffff;
    padding:30px;
    border-radius:14px;
    border:1px solid #e5e7eb;
    max-width:700px;
    margin:auto;
    box-shadow:0 4px 12px rgba(0,0,0,0.05);
  }

  /* HEADER */
  .header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:25px;
  }

  .logo-area {
    display:flex;
    align-items:center;
    gap:12px;
  }

  .logo-area img {
    height:55px;
  }

  .company-name {
    font-size:22px;
    font-weight:bold;
    color:#111827;
    letter-spacing:0.5px;
  }

  .date {
    font-size:14px;
    color:#6b7280;
    text-align:right;
  }

  /* CONTENT */
  .title {
    font-size:20px;
    font-weight:bold;
    margin-bottom:15px;
    color:#1f2937;
  }

  .label {
    font-weight:bold;
    margin-top:20px;
    color:#374151;
    font-size:14px;
  }

  .value {
    background:#f9fafb;
    padding:12px;
    border-radius:8px;
    margin-top:6px;
    border:1px solid #e5e7eb;
    font-size:14px;
  }

  /* FOOTER */
  .footer {
    margin-top:35px;
    padding-top:15px;
    border-top:1px solid #e5e7eb;
    text-align:center;
    font-size:12px;
    color:#6b7280;
    line-height:1.5;
  }
</style>
</head>
<body>

<div class="box">

  <!-- HEADER -->
  <div class="header">
    <div class="logo-area">
      <img src="https://gnstradingplc.com/logo.png" alt="GNS Trading Logo">
      <div class="company-name">GNS TRADING PLC</div>
    </div>
    <div class="date">'.date("F j, Y").'</div>
  </div>

  <!-- TITLE -->
  <div class="title">New Contact Form Submission</div>

  <!-- FIELDS -->
  <div class="label">Name</div>
  <div class="value">'.htmlspecialchars($name).'</div>

  <div class="label">Email</div>
  <div class="value">'.htmlspecialchars($email).'</div>

  <div class="label">Message</div>
  <div class="value">'.nl2br(htmlspecialchars($message)).'</div>

  <!-- FOOTER -->
  <div class="footer">
    GNS Trading PLC — Simplifying Trade, Amplifying Value<br>
    General Winget, Addis Ababa, Ethiopia • +251 91 122 0468 • contact@gnstradingplc.com
  </div>

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
  body {
    background:#f5f7fa;
    font-family:Arial, sans-serif;
    padding:20px;
  }

  .box {
    background:#ffffff;
    padding:30px;
    border-radius:14px;
    border:1px solid #e5e7eb;
    max-width:650px;
    margin:auto;
    box-shadow:0 4px 12px rgba(0,0,0,0.05);
  }

  /* HEADER */
  .header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:25px;
  }

  .logo-area {
    display:flex;
    align-items:center;
    gap:12px;
  }

  .logo-area img {
    height:55px;
  }

  .company-name {
    font-size:22px;
    font-weight:bold;
    color:#111827;
    letter-spacing:0.5px;
  }

  .date {
    font-size:14px;
    color:#6b7280;
    text-align:right;
  }

  /* CONTENT */
  .thanks {
    font-size:22px;
    font-weight:bold;
    color:#1f2937;
    margin-bottom:10px;
  }

  .msg {
    margin-top:10px;
    line-height:1.7;
    color:#374151;
    font-size:15px;
  }

  .copy-title {
    margin-top:25px;
    font-size:16px;
    font-weight:bold;
    color:#1f2937;
  }

  .copy-box {
    background:#f9fafb;
    padding:15px;
    border-radius:8px;
    margin-top:8px;
    border:1px solid #e5e7eb;
    font-size:14px;
    color:#374151;
    line-height:1.6;
  }

  /* FOOTER */
  .footer {
    margin-top:35px;
    padding-top:15px;
    border-top:1px solid #e5e7eb;
    text-align:center;
    font-size:12px;
    color:#6b7280;
    line-height:1.5;
  }
</style>
</head>
<body>

<div class="box">

  <!-- HEADER -->
  <div class="header">
    <div class="logo-area">
      <img src="https://gnstradingplc.com/logo.png" alt="GNS Trading Logo">
      <div class="company-name">GNS TRADING PLC</div>
    </div>
    <div class="date">'.date("F j, Y").'</div>
  </div>

  <!-- THANK YOU TEXT -->
  <div class="thanks">Thank you for contacting GNS Trading!</div>

  <p class="msg">
    Hello <strong>'.htmlspecialchars($name).'</strong>,<br><br>
    We appreciate you reaching out to us. Our team has received your message and we will respond shortly.<br><br>
    Here is a copy of your message:
  </p>

  <!-- USER MESSAGE -->
  <div class="copy-title">📄 Your Message</div>
  <div class="copy-box">'.nl2br(htmlspecialchars($message)).'</div>

  <!-- FOOTER -->
  <div class="footer">
    GNS Trading PLC — Simplifying Trade, Amplifying Value<br>
    General Winget, Addis Ababa, Ethiopia • +251 91 122 0468 • contact@gnstradingplc.com
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
