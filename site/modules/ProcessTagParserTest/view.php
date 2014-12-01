<?php
echo $inputForm;

if($result) {
    echo "<p>The parser generated...</p>";
    echo "<pre>" . htmlspecialchars($result, ENT_QUOTES, 'UTF-8') . "</pre>";
}
