







<?php

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (isset($_POST["name"]) && isset($_POST["email"]) &&  isset($_POST["message"]) &&  isset($_POST["phone"])) {
        echo 'Enviado';
        header("location: ../index.php");
    } else {
        echo 'Não Enviado';
        header("./index.php?error");
    }
} else {
    echo "Not Found Error 404";
}

?>
