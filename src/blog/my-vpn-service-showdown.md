---
title: My VPN Service Showdown
date: 2017-04-28 20:47:18
excerpt: Choosing a VPN service.
type: post
blog: true
tags:
    - Geek
    - CSS
---

You need to determine what things are important to when when looking for a VPN Service.

Features I wanted:

1. reasonable P2P allowances
2. support for pfSense
3. speed, ideally 80-100% of my bandwidth capability
4. streaming video, eg, Netflix or Amazon Video not blocked

I am less concerned about:

* company location, ie, if the company is US-based
* logs, since all services shy away from keeping logs

I imagined that I may use some online-service (eg, Netflix) which wouldn't work correctly, so I also setup another wifi network which bypasses all VPN connections.

## My Top Service

### [Mullvad](https://mullvad.net)

I like Mullvad a lot. The pricing is very simple at $5/mo and there isn't any long-term commitment necessary to get that pricing (ie, no need to pay for a full-year up front). I switched to a different server and was getting consistent 100-110 Mb/s download.

Signing up is dead simple. And the installation on pfSense seemed to be one of the easiest as well.

Mullvad also has port-forwarding capabilities. Unfortunately it didn't help with my Plex issues.

## Tested Services

### [Private Internet Access](https://www.privateinternetaccess.com)

I used a friend's PIA account for this. Initially the speeds were great at around 110-120 Mbps, but after a few days they would drop to 5 Mbps and never recover.

### [ExpressVPN](https://expressvpn.com)

ExpressVPN was decent. Their server speeds were consistent but pretty slow. On average, I was getting only 1/2 of my regular bandwidth.

The look of the website is clean, but I found it difficult to find out how to actually install their desktop software.

### [NordVPN](https://nordvpn.com)

Separate server choices for P2P. Crazy number of US servers ! (but I don't know where they are)

Downloaded software directly from their website. After launch it notified me that there were updates ! (Hmm, that's bad ! The download should have _already_ been the latest version.)

NordVPN had relatively higher speeds – definitely over 70-80 Mbps. However, it was hard to consistently test with testmy.net.

Their pfsense configuration was much more complex, including special DNS configurations which no one else had. My browsers would hang while surfing, etc. I seemed to be because the DNS queries took awhile to work – for example, on the command line I would `ping` a server. The first two responses would be `icmp errors`, then the ping would go through and would resolve the IP address.

### iVPN

(to try)

### IPvanish

This was the first VPN service I tried, however at the time I didn't yet have my pfSense router. The service seemed good, so I'd like to try it again.

### Vypr

(to try)

## References

* <https://thatoneprivacysite.net/simple-vpn-comparison-chart/>
* <https://www.top10vpn.com/top10-lists/>
* <http://www.top10bestvpn.com/>
* <https://www.bestvpn.com/best-vpn-services/>
