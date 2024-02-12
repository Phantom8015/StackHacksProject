import csv
import sys

# Function to get city data from the CSV file
def get_city_data(city_name):
    # Open the CSV file in UTF-8 encoding
    with open('population.csv', encoding='utf-8') as csvfile:
        # Create a CSV reader object
        csvreader = csv.reader(csvfile)
        # Iterate through each row in the CSV file
        for row in csvreader:
            # Check if the first column (city name) matches the given city_name
            if row[0] == city_name:
                # Return the row if a match is found
                return row
        # Return a message if no data is found for the city
        return "No data found for this city"

population = 0

# Get the city name from command line arguments
city_name = sys.argv[1]
# Replace underscores with spaces and capitalize the first letter of each word
city_name = city_name.replace("_", " ")
for i in range(len(city_name)):
    if i == 0 or city_name[i-1] == " ":
        city_name = city_name[:i] + city_name[i].upper() + city_name[i+1:]

# Get city data from the CSV file
city_data = get_city_data(city_name)

# Check if no data is found for the city
if city_data == "No data found for this city":
    print(city_data)
    sys.exit()

# Extract information from city_data
city_name1 = city_data[0]
population = int(city_data[9])

city_country = city_data[4]
cars_per_1m = 905364
cars = population / 1000000 * cars_per_1m
carbon_per_car = 4.9
emission_mtn = carbon_per_car * cars
emission_mtn = round(emission_mtn)
killraten = emission_mtn / 4434
killraten = round(killraten)
population = "{:,}".format(population)
emission_mt = "{:,}".format(emission_mtn)
killrate = "{:,}".format(killraten)

# Format the data into a list
allitems = [population, city_name1, city_country, emission_mt, killrate]

# Print the list data
print(allitems)
