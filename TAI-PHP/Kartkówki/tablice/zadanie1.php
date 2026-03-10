<?php
$zadania = [];
for($i = 0; $i<10; $i++){
    $zadania[$i] = rand(100, 999);
}

echo "<table>";
echo "<tr>";
foreach($zadania as $v){
echo "<td>$v</td>";
}
echo "</tr>";
echo "</table>";
?>