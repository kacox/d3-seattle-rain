"""
Kasey Cox
December 2017

Python scripts to audit and explore data contents of "Did it rain in Seattle? 
(1948-2017)" dataset from Kaggle.com 
(https://www.kaggle.com/rtatman/did-it-rain-in-seattle-19482017).

This dataset was compiled by NOAA and is in the public domain.
"""

### IMPORTS
import pandas as pd
from datetime import date
import time
import seaborn as sns

### AUDIT
weather_df = pd.read_csv("data/seattleWeather_1948-2017.csv")

# Structure of data
#print weather_df.shape
#print weather_df.columns
#print weather_df.iloc[0:5]


### EXPLORE
# Transform date strings into a date objects (in 'DATE' column)
def make_date_obj(date_str):
    """
    Takes a string representing a date in ISO 8601 format.
    
    Returns a date object version of that date.
    """
    struct_time = time.strptime(date_str, "%Y-%m-%d")
    date_obj = date(struct_time[0], struct_time[1], struct_time[2])
    return date_obj


weather_df['DATE'] = weather_df['DATE'].map(make_date_obj)

# Add separate columns for year and month
def get_year(date_object):
    """
    Takes a date object.
    
    Returns the year.
    """
    return date_object.year


def get_month(date_object):
    """
    Takes a date object.
    
    Returns the month.
    """
    return date_object.month


weather_df['YEAR'] = None
weather_df['YEAR'] = weather_df['DATE'].map(get_year)

weather_df['MONTH'] = None
weather_df['MONTH'] = weather_df['DATE'].map(get_month)

# Basic summary
#print weather_df[["PRCP", "TMAX", "TMIN"]].describe().loc[["mean", "std", \
#                                                            "min", "max"]]

# Info by year
precip_by_year = weather_df.groupby("YEAR")["PRCP"].sum()

#sns.tsplot(data=precip_by_year, time=precip_by_year.index, 
#           value="Total Rainfall\n(Inches)")

# Info by month
precip_by_month = weather_df.groupby("MONTH")["PRCP"].sum()

#sns.tsplot(data=precip_by_month, time=precip_by_month.index, 
#           value="Total Rainfall\n(Inches)")

# Seems that Seattle has rainy winters and drier summers

# No. days with rain and no. days without rain by month
rain_days_by_month = weather_df[["MONTH", "RAIN"]].dropna(axis=0, 
                               how='any').reset_index(drop=True)
#sns.countplot(x='MONTH', hue='RAIN', data=rain_days_by_month, 
#              palette={True:'blue', False:'orange'}) 
                #blue for rain, orange for no rain

          
# Build new DataFrame for mean number of days with and without rain
month_map = {1:"January", 2:"February", 3:"March", 4:"April", 5:"May", 
             6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 
             11:"November", 12:"December"}

data_list = []

for (month, group) in weather_df.groupby("MONTH"):
    # Init
    true_count, false_count = 0, 0
    true_dict = {}
    false_dict = {}

    max_month_prcp = max(group['PRCP'])
    max_day = group[group['PRCP'] == max_month_prcp].iloc[0]
    
    # Build True and False counts
    for rain_bool in group["RAIN"]:
        if rain_bool == True:
            true_count += 1
        else:
            false_count += 1
            
    # Get month name from month number
    month_name = month_map[month]
    
    # True entry for given month
    true_dict["month"] = month_name
    true_dict["rain"] = "Rain"
    true_dict["mean_num_days"] = round(true_count/70.0)
    true_dict["max_date"] = max_day["YEAR"]
    true_dict["max_prcp"] = max_day["PRCP"]
    
    # False entry for given month
    false_dict["month"] = month_name
    false_dict["rain"] = "No Rain"
    false_dict["mean_num_days"] = round(false_count/70.0)
    false_dict["max_date"] = "Many"
    false_dict["max_prcp"] = 0.0
    
    # Add True and False entries to data_list
    data_list.append(true_dict)
    data_list.append(false_dict)


mean_rain_df = pd.DataFrame(data_list)

mean_rain_plot = sns.barplot(x="month", y="mean_num_days", hue="rain", 
                             data=mean_rain_df)
mean_rain_plot.figure.set_size_inches(10,6)


# Export data as csv file
mean_rain_df.to_csv("data/mean_rain_days.csv", index=False, 
                    columns=["month", "rain", "mean_num_days", "max_date", 
                             "max_prcp"])