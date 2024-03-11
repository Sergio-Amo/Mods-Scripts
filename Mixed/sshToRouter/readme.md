## How to add an alias to ssh to old router ignoring all your ssh keys (using fish)

**requirements: sshpass**

### Examples
Being 192.168.1.1 your router ip address and `~/scripts/routerpassword` a file with your router password and `root` your router user name.

```bash
alias sshRouter='sshpass -f~/scripts/routerpassword ssh -oPubkeyAuthentication=no -oIdentitiesOnly=yes -oHostKeyAlgorithms=+ssh-dss root@192.168.1.1 22' 
```

Run this to make it persistent.
```bash
funcsave sshRouter
```