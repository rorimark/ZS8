<?php
$query = "SELECT marka, model FROM `samochody`";
$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_assoc($result)) {
    echo "<li>" . $row['marka'] . " " . $row['model'] . "</li>";
}

?>