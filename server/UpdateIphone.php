<?php
  $name = $_POST['username'];
  $iphone = $_POST['iphone'];
  $sql = "UPDATE `users` SET `iphone`='$iphone' WHERE `username`='$name'";
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'xyongyong');
  $res = mysqli_query($link, $sql);
  mysqli_close($link);
  $jsonstr = json_encode($res);
  echo $jsonstr;
?>