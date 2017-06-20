# 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#
# 2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.
#
# 3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days
#
# 4. Remove either the weekdays or the weekends
# Your choice...
#
# 5. Sort the remaining days alphabetically

#create an array
days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  #move sunday from end to beginning
  days_of_the_week.delete('Sunday')
  days_of_the_week.unshift('Sunday')
  #create new arrays weekdays and weekend
  days_of_the_week.delete('Sunday')
  days_of_the_week.push('Sunday')
  days_of_the_week.each_slice(5).to_a
  #remove either the weekdays or the weekends
  days_of_the_week - ['Sunday','Saturday']
  puts days_of_the_week
  #Sort the remaining days alphabetically
  days_of_the_week.sort
  puts days_of_the_week
