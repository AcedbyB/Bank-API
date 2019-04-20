var itemsDiv;
var bodyTag;
var DeckID;
var PlayerCardImg;
var ComputerCardimg;
var PlayButton;
var CardStack = [];
var PlayerCardNum;
var ComputerCardNum;

window.onload = function () {
    var NewGameButton = document.createElement("button");
    var Person = prompt("please enter your username:","");
    console.log(Person);
    PlayButton = document.createElement("button");
    PlayButton.setAttribute("class","mt-5");
    var PlayerNameTag = document.createElement("p");
    PlayerNameTag.appendChild(document.createTextNode(Person)); 
    var ComputerNameTag = document.createElement("p");
    ComputerNameTag.appendChild(document.createTextNode("Computer"));
    PlayerCardNum = document.createElement("p");
    ComputerCardNum = document.createElement("p");
    var BackofCard1 = document.createElement("img");
    var BackofCard2 = document.createElement("img");
    BackofCard1.setAttribute("src","BackOfCard.png");
    BackofCard2.setAttribute("src","BackOfCard.png");
    BackofCard1.setAttribute("style","width=100px; height=50px");
    BackofCard2.setAttribute("style","width=100px; height=50px");
    var CardImgDiv = document.createElement("div");
    var CardPilesDiv = document.createElement("div");
    var PlayerPileDiv = document.createElement("div");
    PlayerPileDiv.setAttribute("class","d-flex flex-column");
    PlayerPileDiv.setAttribute("style","text-align:center");
    PlayerPileDiv.appendChild(PlayerNameTag);
    PlayerPileDiv.appendChild(BackofCard1);
    PlayerPileDiv.appendChild(PlayerCardNum);
    var ComputerPileDiv = document.createElement("div");
    ComputerPileDiv.setAttribute("class","d-flex flex-column");
    ComputerPileDiv.setAttribute("style","text-align:center");
    ComputerPileDiv.appendChild(ComputerNameTag);
    ComputerPileDiv.appendChild(BackofCard2);
    ComputerPileDiv.appendChild(ComputerCardNum);
    CardPilesDiv.appendChild(PlayerPileDiv);
    CardPilesDiv.appendChild(PlayButton);
    CardPilesDiv.appendChild(ComputerPileDiv);
    CardPilesDiv.setAttribute("class","d-flex justify-content-around m-0");
    PlayerCardImg = document.createElement("img");
    ComputerCardimg = document.createElement("img");
    PlayerCardImg.setAttribute("style","width=60px");
    ComputerCardimg.setAttribute("style","width=60px");
    CardImgDiv.setAttribute("class","d-flex justify-content-around m-5");
    CardImgDiv.setAttribute("style","background-color:#308834; height=350px");
    bodyTag = document.getElementsByTagName("body")[0];
    bodyTag.setAttribute("style", "background-color:#308834")
    createHeader();
    bodyTag.appendChild(CardPilesDiv);
    PlayButton.appendChild(document.createTextNode("Next Draw"));
    PlayButton.setAttribute("style", "height:50px; width:100px");
    CardImgDiv.appendChild(PlayerCardImg);
    CardImgDiv.appendChild(ComputerCardimg);
    bodyTag.appendChild(CardImgDiv);
    init();
    NewGameButton.onclick = function() {
        init();
    }
    var NewGameButtonDiv = document.createElement("div");
    NewGameButtonDiv.setAttribute("class","d-flex justify-content-center");
    bodyTag.appendChild(NewGameButtonDiv);
    NewGameButtonDiv.appendChild(NewGameButton);
    NewGameButton.appendChild(document.createTextNode("New Game"));
}

function init() {
    var jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", function (deck, status) {
        console.log(deck);
        DeckID = deck.deck_id;
        jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count=26", function (PlayerCard, status) {
            console.log(PlayerCard);
            PlayerCard.cards.forEach(CurrentCard => {
                jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/pile/Player/add/?cards=" + CurrentCard.code, function (PlayerPile, status) {
                   
                });
                if(PlayerCardNum.lastChild !== null)
                PlayerCardNum.removeChild(PlayerCardNum.lastChild);
                PlayerCardNum.appendChild(document.createTextNode("26"));

            })
        });

        jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count=26", function (ComputerCard, status) {
            console.log(ComputerCard);
            ComputerCard.cards.forEach(CurrentCard => {
                jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/pile/Computer/add/?cards=" + CurrentCard.code, function (ComputerPile, status) {
                });
                if(ComputerCardNum.lastChild !== null)
                ComputerCardNum.removeChild(ComputerCardNum.lastChild);
                ComputerCardNum.appendChild(document.createTextNode("26"));
            })

            PlayButton.onclick = function () {
                DrawNewRound();
            };

        });
    });
}
function createHeader() {
    var header = document.createElement("h1");
    header.setAttribute("class", "m-2");
    header.appendChild(document.createTextNode("WAR!"));
    header.setAttribute("style", "font-family:roboto; font-weight:100; font-size:250%; text-align:center; color:white; background-color:#308834");
    bodyTag.appendChild(header);
}

function compare(Playercard, ComputerCard) {
    var a = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
    var Playerpoint = a.indexOf(Playercard[0]);
    var Computerpoint = a.indexOf(ComputerCard[0]);
    if (Playerpoint > Computerpoint) return 1;
    if (Playerpoint === Computerpoint) return 0;
    return -1;
}

function DrawNewRound() {
    jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + DeckID + "/pile/Player/draw/bottom/?count=1", function (PlayerTopCard, status) {
        console.log(PlayerTopCard);
        PlayerCardImg.setAttribute("src", PlayerTopCard.cards[0].image);
        jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + DeckID + "/pile/Computer/draw/bottom/?count=1", function (ComputerTopCard, status) {
            console.log(ComputerTopCard);
            ComputerCardimg.setAttribute("src", ComputerTopCard.cards[0].image);
            CardStack.push(PlayerTopCard.cards[0].code);
            CardStack.push(ComputerTopCard.cards[0].code);
            PlayButton.onclick =function(){ DefineResults(PlayerTopCard,ComputerTopCard);}
            PlayButton.removeChild(PlayButton.lastChild);
            PlayButton.appendChild(document.createTextNode("Continue"));
            //CheckPiles;
        });
    });
}

function DefineResults(PlayerTopCard,ComputerTopCard) {
    PlayerCardImg.setAttribute("src","");
    ComputerCardimg.setAttribute("src","");
    var CurResult = compare(PlayerTopCard.cards[0].code, ComputerTopCard.cards[0].code);
    console.log(CurResult);
    if (CurResult === 0) {
        PlayButton.removeChild(PlayButton.lastChild);
        PlayButton.appendChild(document.createTextNode("WAR!"));
        PlayButton.onclick = function () {
            war();
        }
    }
    else if (CurResult === 1) {
        var AllTheCardsOnTheField = CardStack.toString();
        CardStack = [];
        jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + DeckID + "/pile/Player/add/?cards=" + AllTheCardsOnTheField, function (CurrentData, status) {
            PlayerCardNum.removeChild(PlayerCardNum.lastChild);
            PlayerCardNum.appendChild(document.createTextNode(CurrentData.piles.Player.remaining));
            ComputerCardNum.removeChild(ComputerCardNum.lastChild);
            ComputerCardNum.appendChild(document.createTextNode(CurrentData.piles.Computer.remaining));
        });
    }
    else {
        var AllTheCardsOnTheField = CardStack.toString();
        CardStack = [];
        jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + DeckID + "/pile/Computer/add/?cards=" + AllTheCardsOnTheField, function (CurrentData, status) {
            ComputerCardNum.removeChild(ComputerCardNum.lastChild);
            ComputerCardNum.appendChild(document.createTextNode(CurrentData.piles.Computer.remaining));
            PlayerCardNum.removeChild(PlayerCardNum.lastChild);
            PlayerCardNum.appendChild(document.createTextNode(CurrentData.piles.Player.remaining));
        });
    }
    PlayButton.removeChild(PlayButton.lastChild);
    PlayButton.appendChild(document.createTextNode("Next Draw"));
    PlayButton.onclick = function() {
        DrawNewRound();
    }
}

function CheckPiles() {
    jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + DeckID + "/pile/Player/list", function (Piles, status) {
        if (Piles.piles.Player.remaining === 0) {
            console.log("oh no");
            PlayerCardImg.setAttribute("src", "");
        }
        if (Piles.piles.Computer.remaining === 0) {
            console.log("oh no");
            ComputerCardimg.setAttribute("src", "");
        }
    });
}

function war() {
    jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + DeckID + "/pile/Player/draw/?count=1", function (PlayerTopCard, status) {
        CardStack.push(PlayerTopCard.cards[0].code);
        console.log(PlayerTopCard);
        jqxhr = $.getJSON("https://deckofcardsapi.com/api/deck/" + DeckID + "/pile/Computer/draw/?count=1", function (ComputerTopCard, status) {
            CardStack.push(ComputerTopCard.cards[0].code);
            PlayerCardNum.removeChild(PlayerCardNum.lastChild);
            PlayerCardNum.appendChild(document.createTextNode(ComputerTopCard.piles.Player.remaining));
            ComputerCardNum.removeChild(ComputerCardNum.lastChild);
            ComputerCardNum.appendChild(document.createTextNode(ComputerTopCard.piles.Computer.remaining));
            DrawNewRound();
            PlayButton.removeChild(PlayButton.lastChild);
            PlayButton.appendChild(document.createTextNode("Next Draw"));
        });
    });
}