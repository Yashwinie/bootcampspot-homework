'''Create a script that will loop through all the stocks for one year for each run and take the following information.
    'The ticker symbol. --just show what value of the ticker is for a row (ex. A, AB, etc.) in a new column
    'Yearly change from opening price at the beginning of a given year to the closing price at the end of that year. (difference between value of closing of the last date of a ticker and opening of the first date of a ticker) in a new column
    'The percent change from opening price at the beginning of a given year to the closing price at the end of that year. (calculate the percent change from the value found in yearly change) in a new column
    'The total stock volume of the stock. (stock value is defined as number of shares traded over a specified period of time; total stock volume would be total volume in column G added up for all the dates of a ticker) in a new column
    'You should also have conditional formatting that will highlight positive change in green and negative change in red.

-----------------------------

Sub stocks()

For each ws in Worksheets

'Create variables to hold values I'm working with
    Dim Ticker as String
    Dim Dates as Date
    Dim PriceOpen as Double
    Dim PriceHigh as Double
    Dim PriceLow as Double
    Dim Price Close as Double
    Dim Stocks as Long
    Dim StockTotal as Long
        StockTotal = 0
'Retrieve and store the data values in each variable
    Ticker = Range("A2").Value
    Dates = Range("B2").Value
    PriceOpen = Range("C2").Value
    PriceHigh = Range("D2").Value
    PriceLow = Range("E2").Value
    PriceClose = Range("F2").Value
    Stocks = Range("G2").Value
  
'Determine the last row
    LastRow = ws.Cells(Rows.Count, 1).End(xlUp.Row)

'Part 1: Loop through all the tickers
    For i = 2 to LastRow

            'Print the Ticker name into a new table
            Range("K").EntireColumn.Insert 
            Cells(1, 11).Value = "Ticker"
            '''missing some parts -- research

        End if

    
'Part 2: Determine yearly change for each ticker
    For i = 2 to LastRow
        'define yearly change
        'formulas here
        'Print the yearly change value into the new table
        Range("L").EntireColumn.Insert
        Cells(1,12).Value = "Yearly Change"
        '''missing some part -- research




'Part 3: The percentage yearly change for each ticker
    For i = 2 to LastRow
        'define percentage change
        'formulas here
        'Print the percentage change value into the new table
        Range("M").EntireColumn.Insert
        Cells(1,13).Value = "Percent Change"
        '''missing some parts


'Part 4: The total stock volume of the stock for each ticker
        'keep track of information in a table (ie input values in a table?)
        Dim StockTotal_Table_Row as Long
        StockTotal_Table_Row = 2
            'missing some parts
            'add to the StockTotal total
            StockTotal = StockTotal + Cells(i,3).Value '''check what the cells should be
            Range("N").EntireColumn.Insert
            Cells(1,15).Value = "Total Stock Volume"
            'reset the StockTotal
             StockTotal = 0
            

'Part 5: Conditional formating highlighting positive and negative change

Next i

Next ws

End Sub