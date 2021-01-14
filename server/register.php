<?php
  $username = $_POST['username'];
  $password = $_POST['password'];
  $nickname = $_POST['nickname'];
  $sql = "INSERT INTO `users` (`username`, `password`, `nickname`) VALUES('$username', '$password', '$nickname')";
  $link = mysqli_connect('localhost', 'root', 'root', 'xyongyong');
  $res = mysqli_query($link, $sql);
  mysqli_close($link);
  $jsonstr = json_encode($res);
  echo $jsonstr;
?>