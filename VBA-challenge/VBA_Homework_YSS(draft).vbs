'''Create a script that will loop through all the stocks for one year for each run and take the following information.
    'The ticker symbol. --just show what value of the ticker is for a row (ex. A, AB, etc.) in a new column
    'Yearly change from opening price at the beginning of a given year to the closing price at the end of that year. (difference between value of closing of the last date of a ticker and opening of the first date of a ticker) in a new column
    'The percent change from opening price at the beginning of a given year to the closing price at the end of that year. (calculate the percent change from the value found in yearly change) in a new column
    'The total stock volume of the stock. (stock value is defined as number of shares traded over a specified period of time; total stock volume would be total volume in column G added up for all the dates of a ticker) in a new column
    'You should also have conditional formatting that will highlight positive change in green and negative change in red.

'''''PROJECT STARTS HERE''''''

Sub stocks()

For Each ws In Worksheets

'Create variables to hold values I'm working with, including new information that I will find through this script
    Dim Ticker As String
    Dim PriceOpen As Double
    Dim PriceHigh As Double
    Dim PriceLow As Double
    Dim PriceClose As Double
    Dim Stocks As Long
      Dim TotalStock As Long
        TotalStock = 0
    Dim PriceChange As Double
        PriceChange = 0
    Dim FirstAmount as Double
        FirstAmount = 2.00
    Dim PercentChange As Double
        PercentChange = 0.00
    Dim GreatestIncrease as Double
        GreatestIncrease = 0.00
    Dim GreatestDecrease as Double
        GreatestDecrease = 0.00
    Dim GreatestTotalStock as Long
        GreatestTotalStock = 0
    Dim LastRow as Long
    Dim LastColumn as Long

'Variable to help add content to the new table I am creating
    Dim NewTable as Long
    NewTable = 2
        'I'm setting this new variable as a 'long' because it will have to work for the stocks, which will be long
        'I'm setting this new variable as = 2, because I already have values in row one (i.e. the header titles)
'Set headings for new columns
Cells(1,11).Value = "Ticker Name"
Cells(1,12).Value = "Yearly Change"
Cells(1,13).Value = "Percent Change"
Cells(1,14).Value = "Total Stock Volume"

'Determine the last row
    LastRow = ws.Cells(Rows.Count, 1).End(xlUp).Row
'Determine the last columns
    LastColumn = ws.Cells(Columns.Count, 1).End(xlUp).Column
'Autofit all columns
    ws.Cells.SpecialCells(xlCellTypeVisible).EntireColumn.AutoFit

    '''This is where I start writing code to find the information requested: each ticker symbol, yearly change, percentage yearly change,and total volume of each ticker.
   For i = 2 to LastRow

    'Starting by finding each Ticker's volume, because it is easiest to calculate the total volume while the code checks each row for a change in Ticker name.
    TotalStock = TotalStock + ws.Cells(i,7).Value
    'Check if the Ticker name changes; if it it not the same as the above, proceed with the following code for the Ticker before i.e. for that which TotalStock was calculated.
    If ws.Cells(i + 1, 1).Value <> ws.Cells(i, 1).Value then
        
        'Part 1: Publish each ticker name in the new table
        Ticker = ws.Cells(i, 1).Value
        ws.Range("K2").Value = Ticker 'need to edit syntax to make it change rows each time

        'Part 4: Write each Ticker's total volume in the new table (completing this part here because it is easiest for me since I already have this information)
        ws.Range("N2").Value = TotalStock
        'need to reset TotalStock each time after Total Stock Volume of each Ticker is calculated to prepare for new Ticker calculations
        TotalStock = 0

        'Part 2: Determine yearly change for each ticker by setting the formuals to find the values I'm looking for and then calculating
        PriceOpen = ws.Range("C" + FirstAmount)
        PriceClose = ws.Range("F" + i)
        YearlyChange = PriceOpen - PriceClose
        ws.Range("L" + NewTable).Value = YearlyChange

        'Part 3: The percentage yearly change for each ticker
        'start by setting value in case the change is 0, to avoid an error of dividing by 0
        If PriceOpen = 0 then
            PercentChange = 0
        Else PriceOpen = ws.Range("C" + FirstAmount)
            PercentChange = YearlyChange / PriceOpen
        End if
        'then format findings into percentage format
        ws.Range("M" + NewTable).NumberFormat = "0.00%"
        ws.Range("M" + NewTable).Value = PercentChange

        'Part 5: Conditional formating highlighting positive and negative change
        If ws.Range("L" + NewTable).Value >= 0 then
            ws.Range ("L" + NewTable).Interior.ColorIndex = 4
            Else ws.Range("L" + NewTable).Interior.ColorIndex = 3
        End If

        'Now add another row to the new table to continue the process for other tickers
        NewTable = NewTable + 1
        FirstAmount = i + 1
    
    End if

Next i

Next ws

End Sub