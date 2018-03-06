# LinkedIn-Filter-and-Sort
Bookmarklet for adding filtering &amp; sorting to LinkedIn's 'People you may know'

<a title="LinkedIn Filter bookmarklet" href="javascript: var s = document.createElement('script'); s.setAttribute('src','https://raw.githubusercontent.com/jasonday/LinkedIn-Filter-and-Sort/master/bookmarklet/linkedinFilter.js'); document.getElementsByTagName('body')[0].appendChild(s); void(s);"> Linkedin Filter</a>

## Features
* Load 100+ profiles by clicking a button
* Filter results by keyword (name & job title)
* Sort by number of shared connections

## Installation
Drag link to your browser address bar and initiate it (click) when you are on Linkedin's 'People You May Know' page. 

## Shortcomings
* Due to linkedin's infinite scroll, "sort by connections" won't sort new results introduced by scrolling. Filtering by keyword will work when new results are injected when scrolling, however this is a bit buggy. Both examples are the reasoning behind forcing load of 100 profiles before filtering or sorting.

