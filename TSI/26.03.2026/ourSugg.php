<?php
$query = "SELECT * FROM `samochody` WHERE `marka` = 'Toyota'";
$result = mysqli_query($conn, $query);
while ($row = mysqli_fetch_assoc($result)) {
    echo $row["id"] . '/' . $row["marka"] . '/' . $row["rocznik"] . '/' . $row["kolor"] . '/' . $row["stan"] . '/' . "<br>";
}
?>