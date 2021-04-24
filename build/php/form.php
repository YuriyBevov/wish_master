<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь

$tooMuch = $_POST['tooMuch'];
$notInterested = $_POST['notInterested'];
$dontUse = $_POST['dontUse'];
$customVariant = $_POST['customVariant'];

if(!$tooMuch) {
  $tooMuch = 'пользователь не заполнил данное поле..';
} else {
    $tooMuch = 'да';
  }

if(!$notInterested) {
  $notInterested = 'пользователь не заполнил данное поле..';
} else {
    $notInterested = 'да';
  }

if(!$dontUse) {
    $dontUse = 'пользователь не заполнил данное поле..';
} else {
    $dontUse = 'да';
  }

if(!$customVariant) {
  $customVariant = 'пользователь не заполнил данное поле..';
}


// Формирование самого письма
$title = "Данные формы:";
$body = "
  <h2>Получены данные о причинах отписки: </h2>
  <b>Слишком часто приходят письма:</b> $tooMuch<br>
  <b>Неинтересные письма:</b> $notInterested<br><br>
  <b>Больше не пользуюсь услугами магазина:</b> $dontUse<br><br>
  <b>Другая причина:</b><br>$customVariant
  ";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.timeweb.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'wish_test@cp06698.tmweb.ru' ; // логин от почты на хостинге
    $mail->Password   = 'kerqw623n1'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('wish_test@cp06698.tmweb.ru', 'Юрий'); // Адрес почты на хостинге и имя отправителя

    // Получатель письма
    $mail->addAddress('jury19y@mail.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Данные не были отправлены. Причина ошибки: {$mail->ErrorInfo}";
}

$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
exit();

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
