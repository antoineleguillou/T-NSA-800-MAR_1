provider "ssh" {
  host        = var.master_ip
  user        = var.user
  private_key = file("~/.ssh/test_rsa")
  port        = 22
  timeout     = "2m"
}

locals {
  env_file = file("${path.root}/terraform.env")
}

resource "ssh_remote_exec" "master" {
  connection {
    type        = "ssh"
    host        = var.worker_ip
    user        = var.user
    private_key = file("~/.ssh/test_rsa")
    port        = 22
    timeout     = "2m"
  }

  inline = [
    "apt-get update && apt install rsync"
    "rsync /var/lib/rancher/k3s/server/node-token maxence_gassier@34.155.141.213:./token.txt",
    "SECRET=4MvZ9SSNHoXrAFXA",
    "MASTER_IP=34.155.92.148",
    "curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.23.17+k3s1 K3S_TOKEN=$SECRET sh -s - server --cluster-init --node-external-ip=$MASTER_IP --flannel-backend=wireguard-native --flannel-external-ip",
  ]
}

resource "ssh_remote_exec" "worker" {
  count = var.worker_count

  connection {
    type        = "ssh"
    host        = "${var.worker_ip}_${count.index}"
    user        = var.user
    private_key = file("~/.ssh/test_rsa")
    port        = 22
    timeout     = "2m"
  }

  inline = [
    "apt-get update && apt install rsync"
    "MASTER_IP=34.155.92.148",
    "WORKER_1_IP=34.155.141.213",
    "K3S_TOKEN=${cat token.txt}",
    "curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.23.17+k3s1 K3S_URL=https://$MASTER_IP:6443 K3S_TOKEN=$K3S_TOKEN sh -s - --node-external-ip=$WORKER_1_IP",
  ]

  environment = {
    WORKER_COUNT = "${var.worker_count}"
    TOKEN        = "${var.token}"
    MASTER_IP    = "${var.master_ip}"
    WORKER_IP    = "${var.worker_ip}"
    USER         = "${var.user}"
    ${local.env_file}
  }
}
