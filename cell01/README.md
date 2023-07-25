## Exercise 01: Z

<br>

- [:pushpin:] Create a file calledzthat returns "Z", followed by a new line, whenever the commandcatis used on it.

```shell
?>cat z
Z
?>
```
|Command  | Description |
|----|----|
|cat |concatenate files and print on the standard output |

SYNOPSIS :
```shell
       cat [OPTION]... [FILE]...
```
<br>

---

<br>

:point_right: **command as follows** :

```shell 
mkdir -p ex01 && echo z > ./ex01/Z
```

Make directory with command `mkdir  -p [directory name]` .

|Command  | Description |
|----|----|
|echo| display a line of text|

SYNOPSIS : \

```shell
       echo [SHORT-OPTION]... [STRING]...
```

The output of the `echo` can be redirected to a file instead of displaying it on the terminal. We can achive this by using the `>` or `>>` operators for output redirection. \
This will write the output of the echo command to the file name `Z` in directory `ex01`.

<br>