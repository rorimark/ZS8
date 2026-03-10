<?php
$klucze = array('jeden','dwa','trzy','cztery','pięć','sześć','siedem','osiem','dziewięć','dziesięć');
// od tego miejsca rozwiązanie zdającego
$asocjacyjna = [];
for($i = 0; $i < count($klucze); $i++){
$asocjacyjna[$klucze[$i]] = $zadania[$i];
}
var_dump($asocjacyjna);