'use strict';


// ADDING CONTENT TO THE ELEMENTS

// .innerHTML = 'content'    or   .createTextNode('text content')
// or.textContent = ' text content'
//
// .innerHTML is dynamic and it can be used to create HTML elements


// Create element
const articleBrief = document.createElement('h3');
const articleContent = document.createElement('p');

// Create text node
const textContent1 = document.createTextNode('Last year, a number of startups building OKR-focused software raised lots of venture capital, drawing TechCrunch’s attention.');
const textContent2 = document.createTextNode('Why is everyone making software that measures objectives and key results? we wondered with tongue in cheek. After all, how big could the OKR software market really be? It’s a subniche of corporate planning tools! In a world where every company already pays for Google or Microsoft’s productivity suite, and some big software companies offer similar planning support, how substantial could demand prove for pure-play OKR startups?');

// Append text node to element
articleBrief.appendChild(textContent1);
articleContent.appendChild(textContent2);

// Append element (with text) to the body
body.appendChild(articleBrief);
body.appendChild(articleContent);


const h1 = document.querySelector('#title');
h1.textContent = 'Rapid growth in 2020 reveals OKR software market’s untapped potential';

const articleImage = document.createElement('img');
articleImage.setAttribute(
  'src',
  'https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-ORNG.jpg',
);

articleImage.style.width = '80%';
articleImage.style.display = 'block'; // Image is an inline-element
articleImage.style.margin = '0 auto'; // display: block is needed for this to work


// .insertBefore(newNode, referenceNode )
body.insertBefore(articleImage, articleBrief);
