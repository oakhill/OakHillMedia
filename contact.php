<?php

if($_POST["submit"]) {
    $recipient="info@oakhill.media";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $display="		<p>Thank you, your message has been sent! We'll get back to you asap</p>";
} else {
	$display="		<h2>Contact</h2>
					<p>Send us a message or use the contact info below</p>";
}

?><!DOCTYPE HTML>
<!--
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Oak Hill Media</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		<script src="js/jquery.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-layers.min.js"></script>
		<script src="js/init.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-xlarge.css" />
			<link rel="icon" type="image/png" href="images/logo_nofont.png">
		</noscript>
			<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
			<link rel="icon" type="image/png" href="favicon.png" />
	</head>
	<body>

		<!-- Header -->
			<header id="header">
				<h1><strong><a href="home.html">Oak Hill</a></strong> Media</h1>
				<nav id="nav">
					<ul>
						<li><a href="home.html">Home</a></li>
						<li><a href="contact.php">Contact</a></li>
						<li><a href="about.html">About</a></li>
					</ul>
				</nav>
			</header>

		<!-- Main -->
			<section id="main" class="wrapper">
				<div class="container">
					<header class="major special">
						<?=$display ?>
					</header>

					<!-- Form -->
						<section>
							<h3>New Message</h3>
							<form method="post" action="contact.php">
								<div class="row uniform 50%">
									<div class="6u 12u$(xsmall)">
										<input type="text" name="sender" placeholder="Name" />
									</div>
									<div class="6u$ 12u$(xsmall)">
										<input type="email" name="senderEmail" id="email" value="" placeholder="Email" />
									</div>
									<div class="12u$">
										<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
									</div>
									<div class="12u$">
										<ul class="actions">
											<li><input type="submit" name="submit" /></li>
											<li><input type="reset" value="Reset" /></li>
										</ul>
									</div>
								</div>
							</form>
							<hr />
						</section>

					<!-- Text -->
						<section>
							<h3>More Contact Info:</h3>
							<h4>Email:</h4>
							<p>info@oakhill.media</p>
							<h4>Phone:</h4>
							<p>704.942.4253</p>
							<h4>Address:</h4>
							<p>Morrisville, NC <br> 27560 <br> (message for full address)</p>
						</section>

				</div>
			</section>

		<!-- Footer -->
			<footer id="footer">
				<div class="container">
					<ul class="icons">
						<li><a href="#" class="icon fa-facebook"></a></li>
						<li><a href="#" class="icon fa-twitter"></a></li>
						<li><a href="#" class="icon fa-instagram"></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; Untitled</li>
						<li>Design: <a href="http://templated.co">TEMPLATED</a></li>
					</ul>
				</div>
			</footer>

	</body>
</html>