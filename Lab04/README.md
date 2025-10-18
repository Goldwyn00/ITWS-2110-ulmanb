Prompts: I was able to achieve this with only one prompt:

I would like you to create a simple website following these specifications
1. A home page. This page contains two main features
a. On the left, the current weather (temperature) in Troy, New York, what the temperature feels like, Today's High, Low, and the current humidity.
b. On the right, a random Magic: The Gathering Card, with a description that says the name of the card and its TCGPlayer Pricing in USD.
2. There should be three main files for this website.
a. index.html - This should be the HTML page that shows the user the data.
b. APIcalls.js - This file should use ajax to make API pulls from openweathermap.org and scryfall.com. This should use the key '4ec97b3938b2f16107dccf59bde91c16', using lattitude 42.7315 and a longitude of -73.686. It should then convert any temperatures given Kelvin Temperatures to Celsius and Farenheit, displaying all three on the page. Then, use ajax to make a call from scryfall's api that makes a random search for 'game:paper unique cards'. Then, display the "normal" image the api call returns on the index.html page.
3. styles.css - This file contains some CSS files that create a dark mode, clean asthetic, with a minimalist look. It should split the Weather Data and Random Magic: The Gathering card between the left and right halves of the page.

As far as limitations I encounteered, I had literally no issues and was able to do it with one prompt so there isn't much to talk about. I made sure to write detailed instructions about exactly what it was, to make sure there was a minimal amount of ambiguity, at least other than the CSS. The CSS is more difficult to give exact specifications for without extensive prompting because visual presentation is a bit less of an exact science than file structures or API calls. I guess one issue that I had was that it creates a lot of needless variables in the code and overproduces unnecessary variables when it could directly create a link, since for this website I don't need to be able to update the location or the API calls, it just needs to make the exact same, consistent, and simple calls every time with no variation.