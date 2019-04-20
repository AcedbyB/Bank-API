# CSC 210 
## Assignment: jQuery / Data - **WAR!**
### Assignment Duration: One Week
### Available points: 10 + 2 Bonus

For this assignment you will be using a publicly available web API to consume data for a card game

# Game Requirements
## The API
You will be using the **deck of cards API** for your assignment.
It is your responsibility to get familiar with the API and how to use it.  

* I would suggest using a tool like [Postman](https://www.getpostman.com/) to get familiar with the API calls.  They are mostly *GET* requests. 

* Documentation: http://www.deckofcardsapi.com/

* Video explanation of how to play War: https://www.youtube.com/watch?v=23QQ1Hz2-jY

* Official Rules: https://www.bicyclecards.com/how-to-play/war/

## The Game
### The playing card game: WAR!
The rules are simple...
* Two players draw a card, and the card with the highest value wins.  For this assignment, it will be one player vs. an AI player.

* If the values are tied, then its WAR and each player draws *one* additional face-down cards to up the ante, and one more card is drawn to be the tie-breaker.  The highest card value wins, if tied, repeat the *WAR* condition until there is a winner.
  
* The winner of each round now owns the cards from the round that both players have played.

## Requirements
* You must use one deck, and you must maintain one, unique *deck_id* for the duration of your game.  There is a feature that won't work with multiple decks, so don't use >1 for this game.
* You will need to provide a place for a user to supply their name and show it on their *play field*.
* You should use one of the ways we have discussed in class to consume the API.  
  *   jQuery might make things go much quicker
* You should have reusable functions in your JavaScript code and think through the design of your game and eventing structures.
* There should be a reasonable design effort given to the display of your game.  Put styles in appropriate CSS files and use appropriate rules to apply styles to your visual elements.

### Games
* You should be able to start a new game at any time by clicking a *new game* button or link.
* The game is over when one player runs out of cards completely from their pile.
  * You should display who the winner is at the end of the final turn.

### Turns
* Each turn is kicked off by a client-side event such as a button click to draw cards for the turn.
* Once both players have drawn cards, the page should show each player's card on their *play field*.  Make sure there is a clear visual indication of where the *play field* for each player is on the screen.
* Your game logic must determine which card played has the higher *card value*.
  *   The API will give you a value for each card 2-10; however, you must handle face cards
      *   ... 10 < Jack < Queen < King < Ace.  Ace is always high.
  *   As stated above, you must handle a tie *or WAR* condition and present it on the screen the *n* number of times you have to draw until there is a winner for the round.


### Piles 
  * The deck of card **piles** feature allows the API to track which player has which cards
  * In the beginning of the game, randomly split the deck into two **piles** and assign them to both the CPU and the human player
  * You must always draw off the **top** of a pile and add to the **bottom**


# Bonus
* Shuffle the player's or CPU's hand when you realize their pile will run out of cards upon a draw.
* Keep track of how many turns a game goes, incrementing once for each turn


# Submission
Check-in your code to your personal repository for this assignment.
