## Exercice 05: build

Files to turn in : build.sh

- [:pushpin:] Write a build.sh program which will create the folders using the argument of this program by adding "ex" to the beginning of the name.

**Step 1** : craete directory name `ex05` with mkdir command and create file name `build.sh` with touch command.

command for build file : 
```shell
touch ./ex05/build.sh
```

**Step 2** : Open the file `argv.sh` and write the script.

That's Exercice 05, similar to Exercice 04. In Exercice 04, show the arguments received, but in Exercice 05, change the name of the argument to floders and create floders starting with "ex", resulting in the following psuedo code:

```psuedo code 
if the number of arguments is greater than 0
then
    while the number of arguments is greater than 0
    do
        create a folder with the name ex$1
        shift
    done
else
    print "No arguments passed"
fi
```

That is, change `echo $1` to `mkdir ex$1`.

[Code : argv.sh](https://github.com/ntthrk-cpd/42Discovery_piscine_2023/blob/main/cell04/ex04/argv.sh) <br>
[Code : build.sh]()

**Step 3** : Test

commannd : 
```shell
sh build.sh
```
or
```shell
./build.sh
```

Example : 
```shell
$ ls -l
total 4
-rw-rw-r-- 1 ntthrk-ch ntthrk-ch 193 ส.ค.  28 15:37 build.sh
$ sh build.sh 01 02 03 04
$ ls -la
total 28
-rw-rw-r-- 1 ntthrk-ch ntthrk-ch  193 ส.ค.  28 15:37 build.sh
drwxrwxr-x 2 ntthrk-ch ntthrk-ch 4096 ส.ค.  28 15:51 ex01
drwxrwxr-x 2 ntthrk-ch ntthrk-ch 4096 ส.ค.  28 15:51 ex02
drwxrwxr-x 2 ntthrk-ch ntthrk-ch 4096 ส.ค.  28 15:51 ex03
drwxrwxr-x 2 ntthrk-ch ntthrk-ch 4096 ส.ค.  28 15:51 ex04
$ 
```

