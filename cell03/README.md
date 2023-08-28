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

|Command  |Option |Description |Synopsis |
|--- |--- |--- |--- |
|find ||search for files in a directory hierarchy |`find` [starting-point]|
|wc |print newline, word,<br>and byte counts for each file |`-l` : print the newline counts |`wc` [OPTION] [FILE] |

Use `echo` command `"find . | wc -l"` on the file named `count_files.sh` and the `chmod` command. Permissions are `744` to use the file..

--- 
<br>

:computer: **For test**: <br>

```shell
./count_files.sh | cat -e
```

The result is the number of files starting from the start-point [.].

<br>

