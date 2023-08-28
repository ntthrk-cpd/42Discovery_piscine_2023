#!/bin/bash
if [ $# -gt 0 ]
    then 
    while [ $# -gt 0 ]
    do 
        echo $1 
        shift
    done 
else 
    echo "No arguments passed"; 
fi 

###
#test
#./argv.sh 1 2 3 4 5 6 7 8 9 10
# or
#./argv.sh {1..10}
# or
#./argv.sh $(seq 1 10)
# or