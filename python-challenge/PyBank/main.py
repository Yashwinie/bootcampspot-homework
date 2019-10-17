#Import modules before starting the activity
import os
import csv 
import statistics

#Define the file name that I will be using
budget_csv = os.path.join("Resources", "budget_data.csv")

#Define variables to store information
months = 0
netTotal = 0
changes = []
averageChange = 0
dates = []

afterChange = []
diff = []

#Open and read the csv 
with open(budget_csv, newline="") as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")
    #read the header row
    csv_header = next(csvfile)

#define variables to store information
    #read through each row of data after the header
    for row in csvreader:

        #calculate the total number of months included in the dataset
        months += 1

        #calculate the net total amount of the Profits/Losses over the entire period
        netTotal += int(row[1])

        #calculate the changes between Profits/Losses for each entry
        changes.append(row[1])

            #taking the elemenets in row 0, which are dates, and putting them into a list to use later
        dates.append(row[0])

    for item in changes[1:]:
        afterChange.append(item)
    del changes[-1]
    for i in range(len(afterChange)):
        diff.append(int(afterChange[i])-int(changes[i]))

    #calculate the average of the changes in "Profits/Losses" over the entire period
    averageChange = sum(diff)/len(diff)

    #calculate the greatest increase in profits (date and amount) over the entire period
    increaseDate = dates[diff.index(max(diff))+1]
    increaseMax = max(diff)

    #calculate the greatest decrease in losses (date and mount) over the entire period
    decreaseDate = dates[diff.index(min(diff))+1]
    decreaseMin = min(diff)

    #print the analysis to terminal
    print("Financial Analysis")
    print("--------------------------------------")
    print("Total months: " + str(months))
    print("Net total amount: " + str(netTotal))
    print("Average change: " + str(averageChange))
    print("Greatest increase in profits: " + str(increaseDate) + "($" + str(increaseMax) + ")")
    print("Greatest decrease in profits: " + str(decreaseDate) + "($" + str(decreaseMin) + ")")
    
    #export a text file with the results
    file1 = open("PyBank_YSS.txt", "w")
    file1.write("Financial Analysis \n")
    file1.write("--------------------------------------\n")
    file1.write("Total months: " + str(months) + "\n")
    file1.write("Net total amount: " + str(netTotal) + "\n")
    file1.write("Average change: " + str(averageChange) + "\n")
    file1.write("Greatest increase in profits: " + str(increaseDate) + "($" + str(increaseMax) + ")\n")
    file1.write("Greatest decrease in profits: " + str(decreaseDate) + "($" + str(decreaseMin) + ")\n")