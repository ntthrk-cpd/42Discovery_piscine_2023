## Exercise 03: count_files

- [:pushpin:] Files to turn in : count_files.sh <br>
Write a command line that counts and displays the number of regular files and directories in the current directory.
---
<br>

:point_right: **command as follows** :
```shell
echo "find . | wc -l" > count_files.sh && chmod 744 count_files.sh
```
<br>

:computer: **For test**: <br>
```shell
./count_files.sh | cat -e
```
<br>
