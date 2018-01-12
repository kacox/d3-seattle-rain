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
Initially I thought of using a bar chart with two adjacent bars per month, one
representing the number of rain days and the other the number of non-rain days.
I instead decided that a stacked bar chart would be more effective at
emphasizing the proportion rather than absolute number of days. It is clear
that summer months have more days without rain using this design.


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


## Resources
http://seaborn.pydata.org/  
https://pandas.pydata.org/pandas-docs/stable/index.html  
http://dimplejs.org/examples_viewer.html?id=bars_vertical_stacked  
https://stackoverflow.com/questions/25478673/add-colors-to-dimple-js-bar-chart-based-on-value-and-add-goal-line  
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart  
https://developer.mozilla.org/  
https://stackoverflow.com/questions/23291200/dimple-js-how-can-i-change-the-labels-of-a-chart-axis-without-changing-the-data  
https://stackoverflow.com/questions/30090642/customizing-colors-on-dimple-js-charts  


## Data Source:  
https://www.kaggle.com/rtatman/did-it-rain-in-seattle-19482017

**Columns:**  
    DATE = the date of the observation in the format (Year-Month-Day)  
    PRCP = the amount of precipitation, in inches (decimal)  
    TMAX = the maximum temperature for that day, in degrees Fahrenheit  
    TMIN = the minimum temperature for that day, in degrees Fahrenheit  
    RAIN = TRUE if rain was observed on that day, FALSE if it was not
