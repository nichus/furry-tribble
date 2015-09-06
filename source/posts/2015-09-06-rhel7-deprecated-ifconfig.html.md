---
title: RHEL7 has deprecated ifconfig
date: 2015-09-06 02:06 UTC
tags: ifconfig, ip, rhel7
image_src: /images/goodbye-ifconfig-my-old-friend.png
description: Turns out that my first real lesson from RHEL7, isn&rsquo;t systemd, it&rsquo;s ip
---

If you&rsquo;ve been following the developments of recent Linux distributions,
this probably was news, last year.  But for me it&rsquo;s news today.  So,
since it&rsquo;s officially news to me, I&rsquo;m going to document this
transition so that others might have an easier time with this transition, than
I did. For starters, if all you want is to get your preferred command back for
managing your network, the simple answer is to install the
&ldquo;**net-tools**&rdquo; package, and `ifconfig` will be back on your
system. A word of caution however, the reasoning given by the RHEL maintainers
for deciding not to include net-tools in the core distribution, is that
ifconfig is built upon the deprecated `ioctl` kernel interface, which means
someday it will stop working.  Eventually, you&rsquo;ll have to move to the
newer tools.

If you, like me, are ready to accept the direction of the package mantainers
and embrace the replacement before it&rsquo;s forced upon you, allow me to
introduce you to `ip`.  `ip` is distributed as part of the
&ldquo;**iproute2**&rdquo; package.  With the new command name, there is also a
matching set of new arguments.  As with ifconfig before it, there is a
comprehensive man page that describes a seemingly limitless number of use
cases. Fortunately, with just a couple examples we can get back up and running
similarly to how we&rsquo;re accustomed.

Display configured interfaces:

```shell
$ ifconfig -a
eth0      Link encap:Ethernet  HWaddr c8:60:00:14:9d:e1
          inet addr:192.168.0.126  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::ca60:ff:fe14:9de1/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:3322631 errors:0 dropped:0 overruns:0 frame:0
          TX packets:2041018 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:3520175878 (3.5 GB)  TX bytes:258689433 (258.6 MB)
          Interrupt:18 Memory:fa700000-fa720000 
$ ip addr list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default
    <snip/>
2: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether c8:60:00:14:9d:e1 brd ff:ff:ff:ff:ff:ff
    inet 192.168.0.126/24 brd 192.168.0.255 scope global eth1
       valid_lft forever preferred_lft forever
    inet6 fe80::ca60:ff:fe14:9de1/64 scope link
       valid_lft forever preferred_lft forever
```

A new feature with the ip command, greppable interfaces!

```shell
$ ip -o addr list
2: eth1    inet 192.168.0.126/24 brd 192.168.0.255 scope global eth1\       valid_lft forever preferred_lft forever
$ ip -o link list
2: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000\    link/ether c8:60:00:14:9d:e1 brd ff:ff:ff:ff:ff:ff
```

Adding a new route:

```shell
$ ip route add 192.168.1.0/24 dev eth0
$ ip route list
default via 192.168.0.1 dev eth1  proto static
192.168.2.0/24 dev eth1  scope link             # This is the new one
```

For more information, including the discussion related to why net-tools is not
longer in the core package list, you can see the RedHat discussion in [their
bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1119297). Hopefully, this
helps soften the blow for your transition to RHEL7.

