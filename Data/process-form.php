
<?php // Testa o Metodo do Form e se os campos existem

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (isset($_POST["name"]) && isset($_POST["email"]) &&  isset($_POST["message"]) &&  isset($_POST["phone"])) {
        header("Location: ../index.php?status=success");
        exit();
    } else {
        header("Location: ./index.php?status=error");
        exit();
    }
} else {
    echo "Not Found Error 404";
}

?>
