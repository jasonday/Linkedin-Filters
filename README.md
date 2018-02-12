# LinkedIn-Filter-and-Sort
Chrome extension for adding filtering &amp; sorting to LinkedIn's 'People you may know'

## Features
* Load 100+ profiles by clicking a button
* Filter results by keyword (name & job title)
* Sort by number of shared connections

## Installation
Download the extension. Then in Chrome, open up chrome://extensions/ in your browser and click “Developer mode” in the top right. Now click “Load unpacked extension…” and select the extension’s directory. You should now see LinkedIn Filter & Sort in the list.

This code is in alpha and is subject to frequent changes and may need to be reloaded occasionally.

## Shortcomings
* Due to linkedin's infinite scroll, "sort by connections" won't sort new results introduced by scrolling. Filtering by keyword will work when new results are injected when scrolling, however this is a bit buggy. Both examples are the reasoning behind forcing load of 100 profiles before filtering or sorting.

