<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$ne = htmlentities($_GET['q'], ENT_QUOTES, 'UTF-8');
$country = filter_var($ne, FILTER_SANITIZE_STRING);
$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul>
