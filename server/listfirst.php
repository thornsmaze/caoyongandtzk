<?php
header('content-type:text/html;charset=utf-8');
$listText = $_GET['listone'];
$sql = "SELECT * FROM `xiaomi_table` WHERE `good_section`='$listText'";
$link = mysqli_connect('127.0.0.1','root','root','xiaomi');
$res = mysqli_query($link,$sql);
$data = mysqli_fetch_all($res,MYSQLI_ASSOC);
mysqli_close($link);
$arr = array(
    "message" => "发送成功",
    "list" => $data,
    "code" => 1
);
echo json_encode($arr);

?>