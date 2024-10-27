<?php

// SEGITIGA SAMA SISI TERBALIK
function segitigaSamaSisiTerbalik($tinggi) {
    for ($i = $tinggi; $i >= 1; $i--) {
        echo str_repeat("*", $i) . "<br>";
    }
}

$tinggi = 5; // Anda dapat mengubah tinggi segitiga
segitigaSamaSisi($tinggi);
echo "<br>";
segitigaSamaSisiTerbalik($tinggi);
?>