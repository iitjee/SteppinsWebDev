

/*
  1-2 (1-3,4 watched but not written)
*/




<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>YOYO</title>
</head>
<body>
	<?php 

$original = './yoyo.jpg';
$destination = './output/';

$sizes = [
	'small' => 300,
	'small@2' => 600,
	'large' => 450,
	'large@2' => 900
];


$resource = imagecreatefromjpeg($original);

foreach ($sizes as $name => $size)
{
	$scaled = imagescale($resource, $size);
	imagejpeg($scaled, $destination . 'hoover_' . $name . '.jpg', 60);
	imagedestroy($scaled);

}

imagedestroy($resource);
echo 'Done';

 ?>
</body>
</html>
