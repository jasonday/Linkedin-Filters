# LinkedIn-Filter-and-Sort
Bookmarklet for adding filtering &amp; sorting to LinkedIn's 'People you may know'

<a class="bookmarklet" href="javascript:(function()%7Bjavascript%3A%20var%20s%20%3D%20document.createElement('script')%3B%20s.setAttribute('src'%2C'https%3A%2F%2Fraw.githubusercontent.com%2Fjasonday%2FLinkedIn-Filter-and-Sort%2Fmaster%2Fbookmarklet%2FlinkedinFilter.js')%3B%20document.getElementsByTagName('body')%5B0%5D.appendChild(s)%3B%20void(s)%7D)()">Linkedin Filter</a>

## Features
* Load 100+ profiles by clicking a button
* Filter results by keyword (name & job title)
* Sort by number of shared connections

## Installation
Drag link to your browser address bar and initiate it (click) when you are on Linkedin's 'People You May Know' page. 

## Shortcomings
* Due to linkedin's infinite scroll, "sort by connections" won't sort new results introduced by scrolling. Filtering by keyword will work when new results are injected when scrolling, however this is a bit buggy. Both examples are the reasoning behind forcing load of 100 profiles before filtering or sorting.

