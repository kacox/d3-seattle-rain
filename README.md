### d3-seattle-rain
# Repository for D3 Seattle Rain Visualization

See the visualization directly here: https://kacox.github.io/d3-seattle-rain/

## Summary
This visualization shows the average number of rainy days in Seattle,
Washington per month. Summer months experience less rain than the winter
months. Using Python (Pandas), I distilled this information from a larger
dataset. The original dataset contains weather information for 25,551
consecutive days spanning from 1948 to 2017 collected at the Seattle-Tacoma
International Airport (SeaTac, Washington, U.S., just south of Seattle).


## Design
I considered two different types of bar plots when developing this
visualization. I initially thought of using a bar chart with two grouped bars
per month, one representing the number of rain days and the other the number
of non-rain days. For my first visualization draft I instead made a
stacked bar chart. I thought that would be more effective at emphasizing the
proportion rather than absolute number of days. My first feedback volunteer
was not impressed by the stacked bar chart, so I reverted to my original
design idea.


## Feedback
**Feedback #1**  
_What do you think is the main takeaway from this visualization?_  
Seattle has less rain in the summer months. Seattle generally seems like a wet
location: even in the driest month, there are 5 rain days, about 1 per week.

_What questions do you have about the data?_  
What constitutes a rainy day?

_Things to improve:_  
Reword the first sentence of the Summary, it is confusing.  
Have a blurb saying how to see the visualization directly as a web page.  
Change the tooltip; having "rain: Rain" is redundant.

_Suggestions:_  
I'm not convinced that a stacked bar chart is better than a side by side bar
chart.

**Feedback #2**  
_What do you notice in the visualization?_  
We notice that there's a clear trend between the time of the month and how
much rain we see in Seattle.

_What questions do you have about the data?_  
Based on the visualization alone, it's hard to know, what constitutes a rainy
day? I assume it's likely based on the amount of precipitation in a day.

I'm also interested in knowing what the original dataset looks like and how
many data points do we have in a day.

_What relationships do you notice?_  
We notice that Seattle sees more rain in winter months as compared to summer.

_What do you think is the main takeaway from this visualization?_  
That we see more rain in winter as compared to summer

_Is there something you don’t understand in the graphic?_  
No, the visualization is quite clear.

_Suggestions:_  
Give more details on what the dataset looks like and how many data points are
present in a day.

Indicate what classifies as a rainy vs non-rainy day.

**Feedback #3**  
_What do you notice in the visualization?_  
From what I observe, this visualization communicates the number of days it
rained and it didn't every month in the city of Seattle. The relationship
between the month and the number of days it rained/didn't is pretty clear to
me.

_What questions do you have about the data?_   
One question I would have or something which would have been a good addition
would be seeing a deeper reveal of information on interaction. It could maybe
highlight the day it rained the most in the active (on hover) bar and the day
it rained the least. There could also be potential use of color to distinguish
between the active bar in contrast with the other bars in the chart. This
would add another layer to this visualization.

_Is there something you don’t understand in the graphic?_   
There is nothing that I don't understand in the graphic except maybe the
number appearing at the top of the bar on interaction. It took me a few
seconds to understand that given it seems a little repetitive and
unnecessary as the y axis scale is small enough to gauge the exact number of
days by looking at the level of the bar. This interaction could instead be
used an excellent opportunity to add a third level of information to the graph
as mentioned earlier.

Overall, I think the visualization is effective and does a great job of
communicating the relationship between the average number of days it rained
during the time frame of an year in Seattle between 1948 - 2017.

## Resources
http://seaborn.pydata.org/  
https://pandas.pydata.org/pandas-docs/stable/index.html  
http://dimplejs.org/examples_viewer.html?id=bars_vertical_stacked  
https://stackoverflow.com/questions/25478673/add-colors-to-dimple-js-bar-chart-based-on-value-and-add-goal-line  
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart  
https://developer.mozilla.org/  
https://stackoverflow.com/questions/23291200/dimple-js-how-can-i-change-the-labels-of-a-chart-axis-without-changing-the-data  
https://stackoverflow.com/questions/30090642/customizing-colors-on-dimple-js-charts  
http://annapawlicka.com/pretty-charts-with-dimple-js/  
https://stackoverflow.com/questions/36314656/selecting-a-section-of-data-from-csv-in-d3-js


## Data Source:  
https://www.kaggle.com/rtatman/did-it-rain-in-seattle-19482017

**Columns:**  
    DATE = the date of the observation in the format (Year-Month-Day)  
    PRCP = the amount of precipitation, in inches (decimal)  
    TMAX = the maximum temperature for that day, in degrees Fahrenheit  
    TMIN = the minimum temperature for that day, in degrees Fahrenheit  
    RAIN = TRUE if rain was observed on that day, FALSE if it was not
