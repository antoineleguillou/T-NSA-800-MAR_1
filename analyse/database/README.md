# Database VM analysis 

## Postgresql database

### Connection 

passphrase : 6YQ3s7n/XNxZjGh6oUP34w
ssh user: admusr
ssh host: default-group8-database545807.francecentral.cloudapp.azure.com

```bash
# open ssh session using private key
ssh -i $HOME/.ssh/group-8_rsa admusr@default-group8-database545807.francecentral.cloudapp.azure.com
```

### Current state

```bash
# get version
sudo --login --user=postgres psql
# in the postgresql shell
SELECT VERSION()
```

Version: PostgreSQL 10.23 (Ubuntu 10.23-0ubuntu0.18.04.1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0, 64-bit

```bash
# show environnement variables
printenv
# output 
SSH_CONNECTION=163.5.23.20 18818 10.0.0.43 22
LESSCLOSE=/usr/bin/lesspipe %s %s
LANG=C.UTF-8
S_COLORS=auto
XDG_SESSION_ID=127
USER=admusr
PWD=/home/admusr
HOME=/home/admusr
LC_CTYPE=C.UTF-8
SSH_CLIENT=163.5.23.20 18818 22
XDG_DATA_DIRS=/usr/local/share:/usr/share:/var/lib/snapd/desktop
PGDATA=/var/lib/postgresql/10/main
SSH_TTY=/dev/pts/0
MAIL=/var/mail/admusr
TERM=xterm-256color
SHELL=/bin/bash
SHLVL=1
LOGNAME=admusr
DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus
XDG_RUNTIME_DIR=/run/user/1000
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/lib/postgresql/10/bin
LESSOPEN=| /usr/bin/lesspipe %s
```

```bash
# open connection to postgresql database
sudo --login --user=postgres psql
```

```bash
# list users
\du
```

```bash
# list database 
\l
```

```bash
# list tables 
\dt
```

[printscreen](./images/psql_command_output.png)

```bash
# dump database 
pg_dump --dbname=postgresql://postgres:postgres@127.0.0.1:5432/postgres
```

```bash
# display information about how postgresql can be accessed from the exetrnal world
 sudo cat /etc/postgresql/10/main/pg_hba.conf 
```

[printscreen](./images/pg_hba_conf.png)

### Recommendations 

- Harden security configuration:

  -  redefine users 
  -  redefine users roles
  -  change default port 
  -  harden security exposing psql to the external world (define authorized hosts and users)

- Deploy on HA environnement
  
    - Move from classic database environnement to High availability environnement using Kubernetes cluster and postgresql Zalando operator deploying 1 leader and 2 followers to have failover for database environnement and avoid single point of failure.


## Redis database

### Current state

```bash
# open connection to redis database
redis-cli
```

```bash
# obtain configuration file location
redis-cli config get dir
```

```bash
# backup redis conf file
cat /etc/redis/redis.conf 
```

```bash
# backup redis database (dump will be accessible at /var/lib/redis/dump.rdb)
redis-cli SAVE
```

### Recommendations 

- Harden security configuration:

  -  redefine users 
  -  redefine users roles
  -  change default port 
  -  harden security exposing redis to the external world (define authorized hosts and users)

- Deploy on HA environnement
  
    - Move from classic database environnement to High availability environnement using Kubernetes cluster operator to be defined