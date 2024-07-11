<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portifólio</title>
    <link rel="stylesheet" href="./data/cascading-port.css">
</head>

<body>
    <?php include_once('./data/header.phtml') ?>
    <body>
    <div id="box">
        <div id="box-content">
            <div id="contents">
                <div id="left" class="flex-grow-1">
                    <h1>Projects Page</h1>
                    <img id="photo-project" class="circle" src="./img/Robots/Work.jpg" alt="robot-work">
                    <div class="summary">
                    <h2>This is my Project Page</h2>
                    <h2>On the side you can access information about each of them &rarr;</h3>
                    <h2> &darr; Below is my github to access the source of each of them</h3>
                    </div>
                        <div id="info">
                        <a href="https://github.com/KuroKagami" class="link" target="_blank"><h2>My GitHub</h2></a>
                        <a rel="noopener" href="index.php" class="link">
                            <h2>Back to Home Page</h2>
                        </a>
                        
                    </div>
                </div>
                <div id="right" class="flex-grow-3">
                    <h1 id="hello">My Projects</h1>
                    <div id="buttons">
                    </div>
                    <div id="project-info-container">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    <?php include_once('./data/footer.phtml') ?>
    <script src="./data/script-proj.js"></script>
</body>

</html>
