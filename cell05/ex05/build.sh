#!/bin/bash
if [ $# -gt 0 ]
    then 
    while [ $# -gt 0 ]
    do 
        mkdir ex$1  # create a folder with the name ex$1
        shift
    done 
else 
    echo "No arguments passed"; 
fi

