<?php
  $name = $_POST['username'];
  $pw = $_POST['password'];
  $sql = "UPDATE `users` SET `password`='$pw' WHERE `username`='$name'";
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'xyongyong');
  $res = mysqli_query($link, $sql);
  mysqli_close($link);
  $jsonstr = json_encode($res);
  echo $jsonstr;
?>