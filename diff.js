/*
Author  : Chandan kumar
emailid : chandan.kumar877@gmail.com
mob     : 8317692521
date    : 28 March 2021

About the progarm : The task of the progarm is to replicate git diff coomand.

This program is written for the completion of of the assignment given
in the hiring process of Zoho.

*/

const path = require('path');
const fs = require('fs');

var arg = process.argv.slice(2);
//console.log(arg);

const directoryPath = path.join(__dirname, 'Documents');

const stat1 = fs.statSync(arg[0]);
//console.log(stat1.isDirectory());

const stat2 = fs.statSync(arg[1]);
//console.log(stat2.isDirectory());

var data = "";
var datastring = "";
var firstlines = [];
var secondlines = [];
function checkfordir()
{
    if(stat1.isDirectory() && stat2.isDirectory())
    {
        firstlines = fs.readdirSync(arg[0]);
        //console.log(firstlines);

        secondlines = fs.readdirSync(arg[1]);
        //console.log(secondlines);
    }
    else if(stat1.isFile() && stat2.isFile())
    {
        data = fs.readFileSync(arg[0]); 
        datastring = data.toString();
        firstlines = datastring.split("\n");
        //console.log(firstlines);
        data = fs.readFileSync(arg[1]); 
        datastring = data.toString();
        secondlines = datastring.split("\n");
        //console.log(secondlines); 
    }
    else
    {
        console.log('invalid combination of arguments');
        console.log('exiting program');
        process.exit();
    }
}

checkfordir();

var col = secondlines.length;
var row = firstlines.length;
//console.log(row,col);

// initiliaze LCS table
var table = [];
var temp = [];

for (let i = 0; i <= row; i++) 
{
    temp = [];
    for (let j = 0; j <= col; j++) 
    {
        temp[j] = 0;
    }
    table[i] = temp;
}

//console.log(table);

//function to find length of LCS 
function longestCommonSubsequence()
	{	
		for(let i=1; i<=row; i++)
		{
			for(let j=1; j<=col; j++)
			{
				if(firstlines[i-1] == secondlines[j-1])
				{
					table[i][j] = table[i-1][j-1] +1;
				}
				else
				{
					table[i][j] = Math.max(table[i-1][j], table[i][j-1]);
				}
			}
		}
		return table[row][col];
	}

longestCommonSubsequence();

//console.log(table); // debugging stuff

// Function to find LCS string
var rows =[];
var cols =[];

for(let i=0; i<row; i++)
{
    rows[i] = 0;
}

for(let i=0; i<col; i++)
{
    cols[i] = 0;
}

function updatelines()
{
    let i=row;
    let j=col;
    while(i >0 && j >0 )
    {
        if(table[i][j] == table[i][j-1])
        {
            j--;
        }
        else if(table[i][j] == table[i-1][j])
        {

            i--;
        }
        else
        {
            rows[i-1] = 1;
            cols[j-1] = 1;
            i--;
            j--;
        }
    }
}

updatelines();

//console.log(rows); //debugging stuff
//console.log(cols); // debugging stuff

function printdiff()
{
    let i=0;
    let j=0;
    while(i<row || j<col)
    {
        while(i<row && rows[i] != 1)
        {
            console.log('-  ' + firstlines[i]);
            i++;
        }
        while(j<col && cols[j] != 1)
        {
            console.log('+  ' + secondlines[j]);
            j++;
        }

        if(j != col)
            console.log('   ' + secondlines[j]);
        i++;
        j++;
    }
}

printdiff();

