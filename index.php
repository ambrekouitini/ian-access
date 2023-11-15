<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
    <title>SGBoard</title>
</head>
<body>
    <header>
        <img src="images/icons/burger.svg" alt="Menu burger">
        <a href="login.php" class="home">
            <img src="images/icons/logo.svg" alt="Logo SGBoard">
        </a>
    </header>

    <main class="index">
        <div id="chatbot" class="chatbot">
            <img src="images/icons/bot.svg" alt="Chatbot">
        </div>

        <div id="popup" class="popup">
            <div id="close" class="close">
                <img src="images/icons/close.svg" alt="Fermer">
            </div>
            <div class="firstRow">
                <div class="profil">
                    <img src="images/icons/mainMascotte.svg" alt="Photo de profil">
                    <span id=name> SAM </span>
                    <div class="profil-content">
                        <div class="time">
                            <img src="images/icons/clock.png" alt="Heure">
                            <span> Aujourd'hui 15:10 </span>
                        </div>
                    </div>
                </div>
                <div class="vocalRed">
                    <div class="someone">
                        <img src="images/icons/miniMascotte.svg" alt="Photo de profil de Sam">
                        <span class="name"> SAM </span>
                    </div>
                    <img src="images/icons/vocred.svg" alt="">
                </div>
                <div class="vocal">
                    <div class="someone">
                        <img src="images/icons/profil.svg" alt="Ma Photo de profil">
                        <span class="name"> MOI </span>
                    </div>
                    <img src="images/icons/vocred.svg" alt="">
                </div>
                <div class="vocalRed">
                    <div class="someone">
                        <img src="images/icons/miniMascotte.svg" alt="Ma Photo de profil">
                        <span class="name"> SAM </span>
                    </div>
                    <img src="images/icons/chatred.svg" alt="Vocal en cours de création">
                </div>
            </div>
            <div class="secondRow">
                <img src="images/icons/mic.svg" alt="Appuyer pour parler">
            </div>
        </div>


        <div class="title">
            <h1><span>BIENVENUE</span>
            sur votre application mobile Société Générale
            </h1>
        </div>
        <div class="allActuality">
            <div class="titleContainer">
                <h2>ACTUALITES</h2>
                <img src="images/icons/news.svg" alt="Toutes les actualités">
            </div>
            <div class="card">
                <img src="images/pictures/news1.png" alt="Chèques vacances">
                <div class="card-content">
                    <p>Les chèques vacances sont <br> arrivés</p>
                </div>
            </div>
            <div class="card">
                <img src="images/pictures/news2.png" alt="RSE Crise cardiaque">
                <div class="card-content">
                    <p>RSE - Que faire en cas de crise <br> cardiaque</p>
                </div>
            </div>
            <div class="card">
                <img src="images/pictures/news3.png" alt="Soirée lauréats 2023">
                <div class="card-content">
                    <p>Soirée lauréats 2023</p>
                </div>
            </div>
        </div>
    </main>
    <script src="public/js/chatbot.js"></script>
</body>
</html>