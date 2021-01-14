<?php
  $name = $_POST['username'];
  $address = $_POST['address'];
  $sql = "UPDATE `users` SET `adress`='$address' WHERE `username`='$name'";
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'xyongyong');
  $res = mysqli_query($link, $sql);
  mysqli_close($link);
  $jsonstr = json_encode($res);
  echo $jsonstr;
?>