# Web Development Project 6 - *Data Dashboard Part 2*

Submitted by: **Ida Touray**

This web app: **An astronomy weather dashboard that fetches forecast data from the Visual Crossing Weather API and displays daily moon and temperature conditions for a location. It features summary cards, a moon-phase line chart and temperature bar chart, and a searchable/filterable list where each row links to a detail page with in-depth moon-phase information.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [X] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [X] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!


## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://s2.ezgif.com/tmp/ezgif-28fd0df21b823fdf.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with EZGIF  
<!-- Recommended tools:
https://ezgif.com/

## Notes

Describe any challenges encountered while building the app.

- Sharing the fetched API data across both the dashboard and detail views took some thought, since the data is fetched once at the top level and passed down as props. The detail page then filters that data by the `datetime` URL param to find the matching day.
- Choosing the right chart types and mapping the correct data keys (`moonphase`, `temp`, `datetime`) with Recharts required some trial and error to get the axes and tooltips to display cleanly.



## License

    Copyright [2026] [Ida Touray]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.