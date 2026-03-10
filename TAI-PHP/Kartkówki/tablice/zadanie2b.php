<?php
    $tab_max = $zadania[0];
        foreach($zadania as $v){
        if($v>$tab_max){
            $tab_max = $v;
        }
    }
    echo $tab_max;
?>
