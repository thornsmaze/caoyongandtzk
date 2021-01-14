<?php
  $username = $_POST['username'];
  $sql = "SELECT * FROM `users` WHERE `username`='$username'";
  $link = mysqli_connect('localhost', 'root', 'root', 'xyongyong');
  $res = mysqli_query($link, $sql);
  $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
  mysqli_close($link);
  if (count($data)) {
    $arr = array(
      "message" => "有这个人",
      "code" => 1,
    );
  } else {
    $arr = array(
      "message" => "没有这个人",
      "code" => 0
    );
  }
  $jsonstr = json_encode($arr);
  echo $jsonstr;
?>