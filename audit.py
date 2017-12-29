"""
Kasey Cox
December 2017

Python scripts to audit data contents of "Did it rain in Seattle? 
(1948-2017)" dataset from Kaggle.com 
(https://www.kaggle.com/rtatman/did-it-rain-in-seattle-19482017).

This dataset was compiled by NOAA and is in the public domain.
"""

### IMPORTS
import pandas as pd

### MAIN
weather_df = pd.read_csv("data/seattleWeather_1948-2017.csv")

# Structure of data
print weather_df.shape
print weather_df.columns
print weather_df.iloc[0:5]