<?php
    $name = $_GET['list_username'];
    $sql = "SELECT * FROM `users` WHERE `username` = '$name'";
    $link = mysqli_connect('127.0.0.1','root','root','xyongyong');
    $res = mysqli_query($link,$sql);
    $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
    mysqli_close($link);
    $arr = array(
        "message" => "成功找到个人信息",
        "code" => 1,
        "list" => $data
    );
    echo json_encode($arr);
?>