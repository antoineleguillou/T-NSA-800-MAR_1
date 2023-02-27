# SLA

This repository contains files in order to setup a cluster using kubeadm or k3s and answer our client need to monitor infrastructure availability regarding our Service Level Agreement (SLA).

In order to be able to configure DNS properly we use OVH subdomain for applications. These are available at the following addresses :

- http://nsa-sla-vote.students-epitech.ovh/
- http://nsa-sla-result.students-epitech.ovh/
- http://nsa-sla-monitor.students-epitech.ovh/

With TLS enabled : 

- https://nsa-sla-vote.students-epitech.ovh/
- https://nsa-sla-result.students-epitech.ovh/
- https://nsa-sla-monitor.students-epitech.ovh/

### Docker hub repository

- antoineleguillou/kafka-redis-consumer
- antoineleguillou/vote
- antoineleguillou/result

### CI (Github + Github actions)

- [vote](https://github.com/antoineleguillou/T-NSA-800-MAR_1-vote/)
- [result](https://github.com/antoineleguillou/T-NSA-800-MAR_1-result/)
- [kafka-redis-consumer](https://github.com/antoineleguillou/T-NSA-800-MAR_1-kafka-redis-consumer/)

## Master VM

- control-plane: 
  - IP: 34.155.161.0
  - SSH command: ssh $USER@34.155.161.0 -i $HOME/.ssh/gcloud

## Azure VMs 

```bash
# get server ip
curl https://api.ipify.org?format=json
```

6YQ3s7n/XNxZjGh6oUP34w

- Web server: 
  - IP: 20.19.173.58
  - DNS: default-group8-web407675.francecentral.cloudapp.azure.com
  - SSH command: ssh admusr@default-group8-web407675.francecentral.cloudapp.azure.com -i $HOME/.ssh/group-8_rsa
- Docker server: 
  - IP: 20.19.175.159
  - DNS: default-group8-docker974909.francecentral.cloudapp.azure.com
  - SSH command: ssh admusr@default-group8-docker974909.francecentral.cloudapp.azure.com -i $HOME/.ssh/group-8_rsa
- Database server: 
 - IP: 20.19.172.206
 - DNS: default-group8-database545807.francecentral.cloudapp.azure.com
 - SSH command: ssh admusr@default-group8-database545807.francecentral.cloudapp.azure.com -i $HOME/.ssh/group-8_rsa


## Access prometheus monitoring stack 

Acces Prometheus starred dashboards at the following address:

[dashboards](http://nsa-sla-monitor.students-epitech.ovh/login)

## Setup using k3s

### Prerequisite

The following ports must be opened on the different hosts in the cluster

| Purpose | Port Range |
| --- | --- | 
| k3s api server | 6443 |
| k3s metrics server | 10250 |
| k3s etcd database | 2379-2380 |

K3S_TOKEN is stored at /var/lib/rancher/k3s/server/node-token on master node

kubeconfig file is stored at /etc/rancher/k3s/k3s.yaml

```bash
# opening a port on machine
sudo iptables -A INPUT -p tcp --dport $PORT -j ACCEPT
# start a service on the tested port to check if it is opened 
ls | nc -l -p $PORT
```

```bash
# issue kubectl command with default kubeconfig generated on installation
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

```bash
# initialize master (constrol plane)
SECRET=4MvZ9SSNHoXrAFXA
MASTER_IP=34.155.161.0
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.23.17+k3s1 K3S_TOKEN=$SECRET sh -s - server --cluster-init --node-external-ip=$MASTER_IP --flannel-backend=wireguard-native --flannel-external-ip
# join worker 1 in the cluster
WORKER_1_IP=20.19.173.58
TOKEN="<VALUE FROM /var/lib/rancher/k3s/server/node-token>"
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.23.17+k3s1 K3S_URL=https://$MASTER_IP:6443 K3S_TOKEN=$TOKEN sh -s - --node-external-ip=$WORKER_1_IP
# join worker 2 in the cluster
WORKER_2_IP=20.19.175.159
TOKEN="<VALUE FROM /var/lib/rancher/k3s/server/node-token>"
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.23.17+k3s1 K3S_URL=https://$MASTER_IP:6443 K3S_TOKEN=$TOKEN sh -s - --node-external-ip=$WORKER_2_IP
# join worker 3 in the cluster
WORKER_3_IP=20.19.172.206
TOKEN="<VALUE FROM /var/lib/rancher/k3s/server/node-token>"
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.23.17+k3s1 K3S_URL=https://$MASTER_IP:6443 K3S_TOKEN=$TOKEN sh -s - --node-external-ip=$WORKER_3_IP
# install longhorn
kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml
```

## Setup using kubeadm 

### Prerequisite

The following ports must be opened on the different hosts according to their role in the cluster

- Master node :

| Protocol | Direction | Port Range | Purpose | Used By
| --- | --- | --- | ---- | ---- |
| TCP | Inbound | 6443 | Kubernetes API server | All
| TCP | Inbound | 2379-2380 | etcd server client API | kube-apiserver, etcd
| TCP | Inbound | 10250	| Kubelet API | Self, Control plane
| TCP | Inbound | 10259	| kube-scheduler | Self
| TCP | Inbound | 10257 | kube-controller-manager | Self

- Worker node :

| Protocol | Direction | Port Range | Purpose | Used By
| --- | --- | --- | ---- | ---- |
| TCP | Inbound | 10250 | Kubelet API | Self, Control plane
| TCP | Inbound | 30000-32767 | NodePort Services | All

### Install using ansible playbooks 

Use the following ansible playbooks and roles in order to ease the process.

- Roles :
  - prepare-cluster-join: ensure files and directory structure exists on master and wrokers nodes (VMs) to transfer token for worker nodes to join the cluster
  - ssh-copy: ensure ssh key copy to perform rsync tasks between master and workers nodes to copy a file containing the join command generated by kubeadm.
  - init-k8s: setup necessary binaries and configurations in order to run kubeadm, kubelet, docker, kubectl services on the diffrent hosts and use docker as a the container runtime for kubernetes.

- Playbooks:
  - initialize-k8s-master-node: initialize kubernetes control plane using kubeadm and the Container Network Interface plugin Weavenet.
  - initialize-k8s-worker-node: initialize kubernetes worker node by copying a file containing the join command issued by kubeadm from the master to a worker node over ssh (rsync) and evaluating it on the worker node.

```bash 
# running a playbook initializing master node 
ansible-playbook --private-key ~/.ssh/<private key file>  -i inventory ./initialize-k8s-master-node.yml
#running a playbook initializing worker node
ansible-playbook --private-key ~/.ssh/<private key file>  -i inventory ./initialize-k8s-worker-node.yml
```

In order to expose applications to the outside world we have chosen to use ingress kubernetes resources we have thus to setup Metallb loadbalancer to act in front of our cluster and Ingress controller inside the cluster, we have chosen to setup metallb and nginx ingress controller using helm charts to ease the process

```bash
## Metallb installation to be followed on https://metallb.universe.tf/installation/
## Ingress nginx controller
# add the helm chart repository
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace -f ./k8s/ingress-nginx.values.yaml
# check the nginx ingress controller deployment status 
kubectl get deployment --namespace ingress-nginx
# uninstall the nginx ingress controller using the release name nginx-controller 
kubectl delete all --all -n ingress-nginx
```

## RBAC

Role Base Access Control (RBAC) has been configured in the kubernetes cluster with a developer role allowed to manage (all CRUD operations) for the following groups (kubernetes API paths):
- apps
- batch
- autoscaling
- apiextensions.k8s.io
- rbac.authorization.k8s.io
- networking.k8s.io
- longhorn.io
- storage.k8s.io

In order to set up access to the cluster from your local machine please use the following config file wich will get you the a developer access using the developers-sa-sla ServiceAccount and developers Role preconfigured on the cluster :

[k8s config file](/k8s/config)

Please use the following commands in order to set up a local access to the cluster from your computer.

```bash
# clone the repository
git clone https://github.com/EpitechMscProPromo2024/T-NSA-800-MAR_1
# place your terminal in the repository inside the k8s folder
cd T-NSA-800-MAR_1/k8s
# backup your current kubernetes cluster config file to a file called config.backup
cp $HOME/.kube/config $HOME/.kube/config.backup
# delete your current kubernetes cluster config file
sudo rm -f $HOME/.kube/config
# copy the new config file inside  $HOME/.kube/ folder
cp ./config $HOME/.kube/config
```

## Miscellaneous

In order to reset a worker node and remove it from the cluster the following command must be issued

```bash
#from master node 
# list the nodes
kubectl get nodes -o wide
# drain targeted node 
kubectl drain <node name> --delete-local-data --force --ignore-daemonsets
# from worker node
# reset kubeadm configurations
kubeadm reset
# from master node
# delete the node 
kubectl delete node  <node name>
```

In order to label nodes in the cluster use the following command

```bash
kubectl label node default-group8-docker node-role.kubernetes.io/worker=worker
kubectl label node default-group8-web node-role.kubernetes.io/worker=worker
```

In order to enable storage access and data replication between nodes in the cluster to be able to reschedule pods across the cluster in case of node failure we have chosen to use the following storage provider: longhorn

```bash
# Install longhorn dependencies
#install open-isci
kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.4.0/deploy/prerequisite/longhorn-iscsi-installation.yaml
# install nfsv4 client to enable readWriteMany binding mode to volume and data backups
kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.4.0/deploy/prerequisite/longhorn-nfs-installation.yaml
# Run the checkscript on master
curl -sSfL https://raw.githubusercontent.com/longhorn/longhorn/v1.4.0/scripts/environment_check.sh | bash
# Install longhorn 
kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.4.0/deploy/longhorn.yaml
# Watch pods status
kubectl get pods -n longhorn-system -w
```

In order to configure rbac groups access in a Role it is recommended to list the available api resources inside your cluster.

```bash
# list kubernetes api resources available in your cluster.
kubectl api-resources -o wide  
```

In order to monitor cluster resources we have chosen to use prometheus stack wich consist of the following components :
- prometheus API server: HTTP server responsible for pulling data from exporters defined metrics endpoints (default is /metrics)
- prometheus etcd database: Time series database responsible for storing exporters metrics pulled by the prometheus API server, it uses the PromQL query language.
- prometheus node exporters: Entities responsible for gathering metrics on systems and exposing them to a defined HTTP endpoint (default is metrics)
- prometheus alert manager: Entity responsible for emitting alerts on configured channel when specific conditions are met 
- prometheus ui dashboard: Entity responsible for presenting an administrator UI for the collected data and endpoints scrapped by the prometheus API server
- grafana dashboard: Entity responsible for presenting data in more elegant/efficient way than the one provided by prometheus, it uses the PromQL query language.
  
These components have been deployed using the helm chart provided by the community.

```bash
# add the helm chart repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
# check for updates
helm repo update
# install prometheus chart using the release name prometheus in the namespace prometheus using specified configuration file (from root of this repository) setting up grafana admin password and dashboards timezone
helm install prometheus prometheus-community/kube-prometheus-stack -n prometheus --create-namespace -f ./k8s/prometheus-stack.values.yaml
# uninstall prometheus chart using the release name prometheus in the namespace prometheus
helm uninstall prometheus -n prometheus
# install ingress to forward traffic to prometheus
kubectl apply -f ./k8s/ingress.yaml -n prometheus

```

## Applications and services 

### Redis 

```bash
# add the helm chart repository
helm repo add ot-helm https://ot-container-kit.github.io/helm-charts/
# check for updates
helm repo update
# install the redis operator
helm install redis-operator ot-helm/redis-operator -n redis-operator --create-namespace
# create secret containing authentication password
kubectl create secret generic redis-secret --from-literal=password=Nc89JggdSC1I180 -n redis-operator
# install the redis cluster using specified values.yaml file
helm install redis-cluster ot-helm/redis-cluster -f ./k8s/redis-cluster.values.yaml -n redis-operator
# uninstall the redis operator
helm uninstall redis-operator --namespace redis-operator --namespace redis-operator
# uninstall the redis cluster
helm uninstall redis-cluster --namespace redis-cluster --namespace redis-operator
# test the redis server connection
export HOST="host"
export PASSWORD="password"
export PORT=port
redis-cli -h $HOST -p $PORT -a $PASSWORD
# test the key is set properly when click is done in the vote UI (votes is a key containing a list with items appended to it each time we click on 'cats' or 'dogs')
export PASSWORD="password"
redis-cli -a $PASSWORD
LRANGE votes 0 -1
# enable redis keyspace notifications (https://redis.io/docs/manual/keyspace-notifications/) 
config set notify-keyspace-events KEA
# susbscribe to keyspace notifications
psubscribe '__key*__:*'
```

### Postgresql 

#### Install postresql operator 

```bash
# Create secret 
# kubectl create -f ./k8s/postgresql.operator.secret.yaml -n postgres-operator-system
# add the helm chart repository
helm repo add postgres-operator-charts https://opensource.zalando.com/postgres-operator/charts/postgres-operator
# check for updates
helm repo update
# install the postgres-operator using specified configuration file (from root of this repository) 
# helm install postgres-operator postgres-operator-charts/postgres-operator -n postgres-operator-system --create-namespace -f ./k8s/postgresql.operator.values.yaml
helm install postgres-operator postgres-operator-charts/postgres-operator -n postgres-operator-system --create-namespace
```

#### Create postresql cluster

```bash
# create a Postgres cluster
kubectl create -f ./k8s/database.postgresql.yaml -n postgres-operator-system
# test the postgresql server connection
export CONNECTION_STRING="postgres://username:password@host/database"
psql "$CONNECTION_STRING" -c "SELECT \l"
psql "$CONNECTION_STRING" -c "SELECT \dt"
```

### Kafka cluster

```bash
# add the helm chart repository
helm repo add strimzi https://strimzi.io/charts/
# check for updates
helm repo update
# install the operator
helm install kafka-operator strimzi/strimzi-kafka-operator -n kafka-operator-system --create-namespace
# uninstall 
helm uninstall kafka-operator -n kafka-operator-system
```

```bash
# install kafka cluster
kubectl apply -f ./k8s/kafka.cluster.yaml -n kafka-operator-system
# install kafka connect cluster
kubectl apply -f ./k8s/kafka.connect.yaml
# install source connector
kubectl apply -f ./k8s/kafka.connect.source.connector.yaml
# debug source connector (redis)
kubectl -n kafka-operator-system run -it kafka-tail-records --image confluentinc/cp-kafka:6.1.0 --command /bin/bash
# tail the topic 
kafka-console-consumer --bootstrap-server kafka-cluster-kafka-bootstrap.kafka-operator-system.svc.cluster.local:9092 --from-beginning --topic votes --partition 0
```

### Vote (web application)

#### Warning

Some changes have been made to the application code in order to account for new environnement variable easing the deployment process and ensuring proper credentials management instead of leaving it in the code wich could lead to credentials leaks and a compromised security

The following environnement variables are now available:

- PREFIX
- OPTION_A
- OPTION_B
- REDIS_PORT
- REDIS_HOST
- REDIS_PASSWORD

#### Build

Image targets linux/amd64 compatible hosts

```bash
# building the image and tagging it vote:latest
VOTE_IMAGE_NAME=ttl.sh/$(uuidgen | tr '[:upper:]' '[:lower:]'):24h
docker build -f ./analyse/Web/apps/vote/Dockerfile -t $VOTE_IMAGE_NAME ./analyse/Web/apps/vote/
```

### Result (web application)

#### Warning

Some changes have been made to the application code in order to account for new environnement variable easing the deployment process and ensuring proper credentials management instead of leaving it in the code wich could lead to credentials leaks and a compromised security

The following environnement variables are now available:

- PORT
- PORTGRES_URI

#### Build

Image targets linux/amd64 compatible hosts

```bash
# building the image and tagging it result:latest
RESULT_IMAGE_NAME=ttl.sh/$(uuidgen | tr '[:upper:]' '[:lower:]'):24h
docker build -f ./analyse/Web/apps/result/Dockerfile -t $RESULT_IMAGE_NAME ./analyse/Web/apps/result/
```

### Kafka redis consumer

This application consumes kafka events produced by the redis source connector and write new votes to the postgresql database where the result application fetch the vote results

#### Build

Image targets linux/amd64 compatible hosts

```bash
# building the image and tagging it result:latest
KAFKA_REDIS_IMAGE_NAME=ttl.sh/$(uuidgen | tr '[:upper:]' '[:lower:]'):24h
docker build -f ./analyse/Web/apps/kafka-redis-consumer/Dockerfile -t $KAFKA_REDIS_IMAGE_NAME ./analyse/Web/apps/kafka-redis-consumer
```


## Instruments applications

```bash
# add the helm chart repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
# check for updates
helm repo update
# install the charts using custom values
helm install blackbox-exporter prometheus-community/prometheus-blackbox-exporter --version 7.6.1 -n application -f ./k8s/blackbox-exporter.yaml
# uninstall the charts 
helm uninstall blackbox-exporter  -n application
```

```bash
# add the helm chart repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
# check for updates
helm repo update
# install the charts using custom values
helm install postgres-exporter prometheus-community/prometheus-postgres-exporter -n postgres-operator-system -f ./k8s/postgres-exporter.values.yaml
# uninstall the charts 
helm uninstall postgres-exporter -n postgres-operator-system
```

## Autoscaling 

```bash
kubectl autoscale deployment result-deployment -n application --cpu-percent=50 --min=3 --max=6
kubectl autoscale deployment vote-deployment -n application --cpu-percent=50 --min=3 --max=6
```

## TLS certificate renewal

We use cert-manager in order to renew TLS certificates automatically.

```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.1/cert-manager.yaml
```

## Notes

- Ask to add more space to vMS at least 50Gb each of disk space this must be done using the azure portal
- Ask to retrieve the lost machine 