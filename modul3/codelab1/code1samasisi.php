<?php
// SEGITIGA SAMA SISI
function segitigaSamaSisi($tinggi) {
    for ($i = 1; $i <= $tinggi; $i++) {
        echo str_repeat("*", $i) . "<br>";
    }
}

$tinggi = 5; // Anda dapat mengubah tinggi segitiga
segitigaSamaSisi($tinggi);
echo "<br>";
segitigaSamaSisiTerbalik($tinggi);
?>