## Exercice 00 : The basic
<br>

<details>
<summary> :bulb: Things to know first. :bulb: </summary>
Linux man Command Syntax<br>
The basic man command syntax is:<br>

```shell
man [option] [section number] [command name]
```
option – the search result output.<br>
section number – the section in which to look for the man page.<br>
command name – the name of the command which man page you want to see.<br>
Example : 
```shell
man mkdir
```
</details>

<br>

- [:pushpin:] **Create a folder discovery_piscine the root of your home, and move inside.**

``` shell 
    mkdir -p ~/discovery_piscine && cd ~/discovery_piscine
```
| Command   | Option    |Description                                                   |
| ------    |-------    |-----------------------------------------                     |
|mkdir      |           |make directories                                              |
|           |-p, --parents | no error if existing, make parent directories  as needed, with their file modes unaffected by any -m option.                                      |
|cd         |           | Change the shell working directory.                           |

> The && is referred to as AND_IF in the posix shell grammar. Execute the command that follows the && only if the first command is successful. 

<br>

- [:pushpin:] **Create a new folder cell00 and move into it.**

``` shell 
    mkdir -p cell00 && cd cell00
```

<br>

- [:pushpin:] **Create a new folder ex00. Do not put anything in it.**

``` shell 
    mkdir -p ex00
```

- [:pushpin:] **From now on, all exercises should be in the correct folder rendering. Exercise 00 in the ex00 folder, Exercise 01 in the ex01 folder, etc ... you get the logic.**

Example : \
. \
├── cell00 \
│   └── ex00 \
├── cell01 \
│   ├── ex01 \
│   └── \
. \
. \
. 