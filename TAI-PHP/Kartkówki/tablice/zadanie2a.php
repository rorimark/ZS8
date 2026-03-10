<?php
    $tab_min = $zadania[0];
    foreach($zadania as $v){
        if($v<$tab_min){
            $tab_min = $v;
        }
    }
    echo $tab_min;
?>
