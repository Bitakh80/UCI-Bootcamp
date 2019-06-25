import csv

# Files to load and potput
File_To_Load = "raw_data/election_data_1.csv"
File_To_OutPut = "analysis/election_analysis_1.txt"

#Total vote counter
Total_Votes = 0

#candita options and vote counters
Candidate_Options = []
Candidate_Votes = {}

# winning candidate and winning count tracker
Winning_Candidate = ""
Winning_Count = 0

# read in the csv and convert it to a list of candidate
with open(File_To_Load) as Election_Date:
    reader = csv.DictReader(Election_Date)

# for loop
for row in reader:

    # add to the vote counter
    Total_Votes = Total_Votes + 1

# extract the candidate name from each row
Candidate_Name = row["candidate"]

# if the candidate goes nit match to the existing candidate
if Candidate_Name not in Candidate_Options:

    #add it to the list of candidate in the running
    Candidate_Options.append(Candidate_Name)

    #start tracking that candidate's voter count
    Candidate_Votes[Candidate_Name] = 0

# Then add a vote to that candidate's count
Candidate_Votes[Candidate_Name] = Candidate_Votes[Candidate_Name] + 1

# print the results and expor the data to text file
with open(File_To_OutPut, "w") as Txt_File:

#print the final vote count
Election_Results = (
    f"\n\nElection Results\n"
    f"--------------------------------\n"
    f"Total Votes: {Total_Votes}\n"
    f"--------------------------\n"

)

print(Election_Results)
# f formating it allowes us write or print directly
#save file to text file
Txt_File.Write(Election_Results)

# determine the winner by looping through the count
for candidate in Candidate_Votes:

#retrive the vote count and percetage
Vote_Percentage = float(votes) / float(Total_Votes) * 100

if (votes > Winning_Count):
    winning < count = votes
    Winning_Candidate = candidate

# print each candidate voter count and percentage
Voter_OutPut = f"{candidate}: {Vote_Percentage:.3f}% ({votes})\n"
print(Voter_OutPut)

#cave each candidate's voter count and percentage to text file
Text_File.writer(Voter_OutPut)

# print the winning candidate
Winning_Candidate_Summary = (
    f"--------------------\n"
    f"Winner: {Winnng_Candidate}\n"
    f"--------------------\n"
)
print(Winning_Candidate_Summary)

# save the winning candidate name to the text file
Text_File.writer(Winning_Candidate_Summary)