## Exercise 02: midLS

<br>

- [:pushpin:] In amidLSfile, place the command line that will list all files and directories in yourcurrent directory (except for hidden files or any file that starts by a dot - yes, thatincludes double-dots), separated by a comma.

---

<br>

:point_right: **command as follows** :

```shell
mkdir -p ex02 && echo ls -m > ./ex02/midLS && chmod 777 ./ex02/midLS
```
Make directory with command `mkdir  -p [directory name]` <br>
Create file with command `echo [text] > [address file/file name]`
Set file permissions with the `chmod` command.

|Command  | Description |
|----|----|
|chmod| change file mode bits|
See more at `man chmod` on terminal.
<br>

If you want to use the commands contained in the `midLS` file <br>
```shell
./midLS
```
or
```shell
sh ./midLS
```
That is, type ./ followed by the file name. or file locations separated by / with file names or sh command followed path address.

See more about paths here. https://en.wikipedia.org/wiki/Path_(computing)


