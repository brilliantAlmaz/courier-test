<?php
ob_start(); require_once './connect.php'; ?>
<?php
$login = $_POST["login"];
$password = $_POST["password"];


echo $_POST['name'];
echo $_POST['phone'];
echo $_POST['whatsapp'];




?>



<?php
$htmlMessage = "<div>
Пользователь
<b>
	" . $_POST['name'] . "
</b> хочет заказать звонок на номер " . $_POST["phone"] . "
</div>";
if ($_POST['whatsapp'] == "on") {
	$htmlMessage = $htmlMessage . "<div>Он указал, что можно написать ему на WhatsApp</div>";
}


echo $htmlMessage;
?>

<?php

session_start();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '../PHPMailer/src/Exception.php';
require_once '../PHPMailer/src/PHPMailer.php';
require_once '../PHPMailer/src/SMTP.php';


$mail = new PHPMailer(true);


$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'botmailerbrilliantalmaz';
$mail->Password = 'joxxdvqrgtflrtaa';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;
$mail->setFrom('botmailerbrilliantalmaz@yandex.ru', 'Рассылка RuchHouse');
$mail->CharSet = "utf-8";
$mail->addAddress('ruch_house@mail.ru');

$mail->isHTML(true);
$mail->Subject = '=?UTF-8?B?' . base64_encode('Пользователь оставил заявку') . '?=';
$mail->Body = $htmlMessage;

$mail->send();

header("Location: /index.php");