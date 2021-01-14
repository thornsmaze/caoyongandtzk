<?php
  $name = $_POST['username'];
  $nickname = $_POST['nickname'];
  $sql = "UPDATE `users` SET `nickname`='$nickname' WHERE `username`='$name'";
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'xyongyong');
  $res = mysqli_query($link, $sql);
  mysqli_close($link);
  $jsonstr = json_encode($res);
  echo $jsonstr;
?>