<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь

$name = $_POST['tooMuch'];
$phone = $_POST['notInterested'];
$email = $_POST['user_mail'];
$text = $_POST['dontUse'];

if(!$name) {
  $name = 'данные отсутствуют.';
}

if(!$email) {
  $email = 'данные отсутствуют.';
}

if(!$text) {
  $text = 'Поле не было заполнено';
}


// Формирование самого письма
$title = "Данные формы:";
$body = "
  <h2>Получены данные о причинах отписки: </h2>
  <b>Слишком часто приходят письма:</b> $name<br>
  <b>Неинтересные письма:</b> $email<br><br>
  <b>Больше не пользуюсь услугами магазина:</b> $phone<br><br>
  <b>Другая причина:</b><br>$text
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
    $mail->Username   = 'почта на хостинге' ; // Логин на почте
    $mail->Password   = 'пароль от почты на хостинге'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('совпадает с адресом почты на хостинге отправителя', 'Имя отправителя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('...@mail.ru');

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

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
