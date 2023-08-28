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
