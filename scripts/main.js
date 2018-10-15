var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
var counter = 0; //variable to keep count of cards remaining on the screen.

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function placeDiv(div) {
	var element = document.getElementById('deck');
	var positionInfo = element.getBoundingClientRect();

	var cardPos =div.getBoundingClientRect();

	div.style.position = "absolute";
	div.style.left = (Math.random() * (positionInfo.width - cardPos.width));//Math.random() * window.innerWidth - window.innerWidth / 2 ;
	div.style.top = (Math.random() * (positionInfo.height));//Math.random() * window.innerHeight - window.innerHeight / 2 ;
  }


function renderDeck()
{
	counter = 0;
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);

		placeDiv(card)
	}
}

function createPlaceholder()
{
	for(var i = 0; i <suits.length; i++)
	{
		var card = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "placeholderCard";
		suit.className = "suit " + suits[i];

		card.appendChild(suit);

		document.getElementById("placeholder").appendChild(card);
	}
}


function load()
{
	deck = getDeck();
	createPlaceholder();
	renderDeck();
}

function restart()
{
	renderDeck();
	document.getElementById("restart").children[0].style.display = "none";
	document.getElementById("restart").style.display = "none";
}

window.onload = load;