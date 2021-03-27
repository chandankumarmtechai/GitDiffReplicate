Author  : Chandan kumar
emailid : chandan.kumar877@gmail.com
mob     : 8317692521
date    : 28 March 2021
******************************************************************************
About the progarm : The task of the progarm is to replicate git diff coomand.
This program compare contents of two files or two directroies line by line.
Output convention:
line starting with - is deleted from the first file.
line statting with + is added to the second file.
line starting without + or - are common to both files.

*******************************************************************************

All the contents of the Assignments directory
.
├── diff.js
├── dir1
│   ├── file1
│   └── file2
├── dir2
│   ├── file1
│   └── file2
├── dir3
│   ├── file1
│   ├── file2
│   └── file3
├── dir4
│   ├── file1
│   ├── file2
│   ├── file3
│   └── file4
└── README.md

diff.js is main program file.  This program takes two command line arguments.
********************************************************************************


How to run:
********************************************************************************
node diff arg1 arg2

Here arg1 and arg2 both should be directories or both should be files. Otherwise
arguments combination is invalid causes program to exit.
********************************************************************************

Sample output:
node diff dir1/file2 dir2/file2

   apple
-  cat
   ball
   cat
+  dog
+  apple
   fruit

node diff dir4 dir3

   file1
   file2
   file3
-  file4

node diff dir4 dir3/file2

invalid combination of arguments
exiting program

node diff dir4/file3 dir3/file3

   India is our country.
-  Teradata is a database.
   I am living in Hyderabad.
   Teradata is a database.
+  Haskell is a language.
+  India is our country.
   I love cricket.

********************************************************************************
