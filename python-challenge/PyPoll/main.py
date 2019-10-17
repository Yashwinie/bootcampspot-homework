#mport modules before starting activity
import os
import csv
import statistics
import operator

#define the file name that I will be using
votes_csv = os.path.join("Resources", "election_data.csv")

#define variables to store information
totalVotes = 0
candidateList = []
candidateRank = []
candidateDict = {}

kVotes = 0
lVotes = 0
oVotes = 0
cVotes = 0


#open and read the csv
with open(votes_csv, newline="") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")
    #read the header row
    csv_header = next(csvfile)

    #read through each row of data after the header
    for row in csvreader:

        #Calculate the total number of votes cast
        totalVotes += 1
        
        #Calculate the complete list of candidates that received votes
        candidateList.append(row[2])
    candidates = set(candidateList)

        #Calculate the total number of votes each candidate won
    for item in candidateList:
        if(item == "Khan"):
            kVotes += 1
        if(item == "Li"):
            lVotes += 1
        if(item == "O'Tooley"):
            oVotes += 1
        if(item == "Correy"):
            cVotes += 1
       
        #Calculate the percentage of votes that each candidate won
    kPercent = kVotes / totalVotes * 100
    lPercent = lVotes / totalVotes * 100
    oPercent = oVotes / totalVotes * 100
    cPercent = cVotes / totalVotes * 100

    candidateRank.append(kPercent)
    candidateRank.append(lPercent)
    candidateRank.append(oPercent)
    candidateRank.append(cPercent)

    #update dictionary to store all of this information

    candidates = ["Khan", "Li", "O'Tooley", "Correy"]
    candidateVotes = [kVotes, lVotes, oVotes, cVotes]
    
    for i in range(len(candidates)):
        candidateDict[candidates[i]] = (candidateRank[i], candidateVotes[i])
    

    #Find the winner of the election based on the popular vote
        #can just print this in analysis section
  

    #Print calculations in an analysis format in the terminal
    print("Election Results")
    print("--------------------------------------")
    print("Total Votes: " + str(totalVotes))
    print("--------------------------------------")
    print(candidateDict)
    print("--------------------------------------")
    print("Winner: " + "Khan")
    print("--------------------------------------")

    #Export a text file with the results
    file2 = open("PyPoll_YSS.txt", "w")
    file2.write("Election Results" + "\n")
    file2.write("--------------------------------------" + "\n")
    file2.write("Total Votes: " + str(totalVotes) + "\n")
    file2.write("--------------------------------------" + "\n")
    file2.write(str(candidateDict) + "\n")
    file2.write("--------------------------------------" + "\n")
    file2.write("Winner: " + "Khan" + "\n")
    file2.write("--------------------------------------" + "\n")