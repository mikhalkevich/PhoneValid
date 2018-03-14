<?php
// собираем email. Нельзя массивом, т.к. функция mail не пропускает элементы массива.
$one = 'mikhalkevich@ya.ru';
$two = 'levinsv@belhard.com';
$three = 'SkugarevskayaTV@belhard.com';
$four = 'kalyuzhinvv@belhard.com';
$five = 'olga.mahonina.67@gmail.com';
//
$body = '';
$thema = <<<THEMA
Сообщение с сайта (http://tc.belhard.com/courselist/kursy-intensiv-14.php)
THEMA;
$course = "Курс: детский интенсив \n";
if ($_POST['first']) {
    if ($_POST['fio'] or $_POST['phone']) {
        $body = <<<BODY
 $course
 Имя: $_POST[fio] \n
 Телефон: $_POST[phone] \n
BODY;
    }
}

if ($_POST['second']) {
    if ($_POST['fio2'] or $_POST['phone2']) {
        $body = <<<BODY
 $course
 Имя: $_POST[fio2] \n
 Телефон: $_POST[phone2] \n
 Сообщение: $_POST[ttext] \n
BODY;
    }
}

if ($_POST['third']) {
    if ($_POST['fio3'] or $_POST['phone3']) {
        $body = <<<BODY
 $course
 Перезвонить пользователю сайта \n
 Имя: $_POST[fio3] \n
 Телефон: $_POST[phone3] \n
BODY;
    }
}

mail($one,$thema,$body);
mail($two,$thema,$body);
mail($three,$thema,$body);
mail($four,$thema,$body);
mail($five,$thema,$body);
header('location:http://tc.belhard.com/courselist/kursy-intensiv-14.php');