<?php
  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = "SELECT * FROM `users` WHERE `username`='$username' AND `password`='$password'";
  $link = mysqli_connect('localhost', 'root', 'root', 'xyongyong');
  $res = mysqli_query($link, $sql);
  $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
  mysqli_close($link);
  if (count($data)) {
    $arr = array(
      "message" => "登录成功",
      "code" => 1,
      "nickname" => $data[0]['nickname'],
      "username" => $data[0]['username']
    );
  } else {
    $arr = array(
      "message" => "登录失败",
      "code" => 0
    );
  }
  $jsonstr = json_encode($arr);
  echo $jsonstr;
?>
