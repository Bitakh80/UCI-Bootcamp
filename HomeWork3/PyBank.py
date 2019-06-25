# import dependencies
import csv

# files to load output
File_To_Load = "raw_data/budget_data_1.csv"
File_To_OutPut = "analysis/budget_analysis_1.txt"

# track various revenue parameters
Total_Months = 0
Prev_Revenue = 0
Month_Of_Change = []
Revenue_Change_List = []
Greatest_Increase = ["", 0]
Greatest_Decrease = ["", 999999999999999]
Total_Revenue = 0

# read the csv and convert to the list
with open(File_To_Load) as Revenue_Data:
    Reader = csv.DictReader(Revenue_Data)

    for row in Reader:
        # keep track the totals
        Total_Months = Total_Months +1
        Total_Revenue = Total_Revenue + int(row["Revenue"])

        # track the revenue change
        Revenue_Change = int(row["Revenue"]) - Prev_Revenue
        Prev_Revenue = int(row["Revenue"])
        Revenue_Change_List = Revenue_Change_List + [Revenue_Change]
        Month_Of_Change = Month_Of_Change + [row["Date"]]

        # calculate the greatest increase
        if (Revenue_Change > Greatest_Increase[1]):
            Greatest_Increase[0] = row["Date"]
            Greatest_Increase[1] = Revenue_Change

        # calculate the greatest increase
        if (Revenue_Change > Greatest_Decrease[1]):
            Greatest_Decrease[0] = row["Date"]
            Greatest_Decrease[1] = Revenue_Change    

# calculate the average revenue change
Revenue_Avg = sum(Revenue_Change_List) / len(Revenue_Change_List)
       
        # calculate output summary
        OutPut = (
            f"\nFinacial Analysis\n"
            f"---------------------------\n"
            f"Total Months: {Total_Months}\n"
            f"Total Revenue: ${Total_Revenue}\n"
            f"Average Revenue Change: ${Revenue_Avg}\n"
            f"Greatest Increase in Revenue: {Greatest_Increase[0]} (${Greatest_Increase[1]})\n"
            f"Greatest Decrease in Revenue: {Greatest_Decrease[0]} (${Greatest_Decrease[1]})\n"
        )
    # print the output
    print(output)

    #export the results to text file
    with open(File_To_OutPut, "w") as Txt_File:
        Txt_File.write(output)
            
        )