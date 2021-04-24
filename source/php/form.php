<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_mail'];
$text = $_POST['user_text'];
$file = $_FILES['user_file'];

if(!$name) {
  $name = 'данные отсутствуют.';
}

if(!$email) {
  $email = 'данные отсутствуют.';
}

if(!$text) {
  $text = 'данные отсутствуют.';
}


// Формирование самого письма
$title = "Данные заявки:";
$body = "
  <h2>Новая заявка с сайта Steel Balls !</h2>
  <b>Имя:</b> $name<br>
  <b>Почта:</b> $email<br><br>
  <b>Телефон:</b> $phone<br><br>
  <b>Сообщение:</b><br>$text
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
    $mail->Username   = 'info@steelballs-spb.ru' ; // Логин на почте
    $mail->Password   = 'TttZ79RX'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('info@steelballs-spb.ru', 'Иван Копосов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('master@stballs.ru', 'jury19y@mail.ru');

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
