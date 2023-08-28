## Exercice 04: argv

Files to turn in : argv.sh

- [:pushpin:] Write an argv.sh program that displays the arguments passed to this program (3 maximum).

---

<br>

:point_right:  **command as follows** :

**Step 1** : craete directory name `ex04` with mkdir command and create file name `argv.sh` with touch command.

```Shell
mkdir -p ex04 && touch ./ex04/argv.sh 
```

|Command  |Description |
|--- |--- |
|touch|change file timestamps <br> A  FILE  argument  that  does not exist is created empty, unless -c or -h is supplied. |

SYNOPSIS

```Shell
touch [OPTION]... FILE...
```
<br>

**Step 2** : Open the file `argv.sh` and write the script.

***2.1 Knowledge Base*** : _Shell Scripting_ <br>

`IF ELSE`   : https://www.tutorialspoint.com/unix/if-else-statement.htm <br> 
`WHILE`     : https://www.tutorialspoint.com/unix/unix-shell-loops.htm <br>
`SHIFT`     : https://www.tutorialspoint.com/unix_commands/shift.htm

Definition: https://www.tutorialspoint.com/unix/unix-special-variables.htm
> - `$@` is all of the arguments passed to the script
> - `$#` is the number of arguments passed to the script (same as $*)
> - `$*` is all of the arguments passed to the script
> - `$0` is the name of the script
> - `$1` is the first argument passed to the script
> - `$2` is the second argument passed to the script
> - `$n` is the nth argument passed to the script

 Operator: https://www.tutorialspoint.com/unix/unix-basic-operators.htm
> - `-gt` : greater than

 Option: 
> - `shift` is a built-in function of bash that operates on the positional parameters.
 When shift is invoked, the value of $1 becomes the value of $2, the value of $2 becomes the value of $3, and so on.

<br>

***2.2 Write Script*** 

Pseudo code : <br>

```pseudo code
if there are more than 0 arguments 
  then while there are more than 0 arguments 
      print the first argument 
      shift the arguments 
  done
else
  print "No arguments passed" 
fi 
```
<sub>"Coding for each problem There may be several solutions. This is just one method."</sub><br>

[Code : argv.sh](https://github.com/ntthrk-cpd/42Discovery_piscine_2023/blob/main/cell04/ex04/argv.sh) 

<br>

**Step 3** : Test

commannd : 
```shell
sh argv.sh 
```
or
```shell
./argv.sh 
```

Example : 

```shell
$ sh argv.sh Hello world ! 42
Hello world ! 42
Hello
world
!
42
$
```

If it doesn't run, use the chmod command to grant permissions first. or check code agin.