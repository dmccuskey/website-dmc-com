---
title: Auto Connect to VPN on Boot & Login in MacOS Sierra
date: 2017-04-01 20:47:18
excerpt: Activate VPN connection on Mac boot
type: post
blog: true
tags:
    - Code Sample
    - Geek
---

I added VPN connectivity to my network and I wanted to make sure the connection to the remote VPN was always running. One way to do this is to use AppleScript to check the connection status. The problem I had was that the AppleScripts that I found no longer worked with MacOS Sierra.

After some digging, I got it to work. Here's my script:

```applescript
on idle
  set myVPN to "VPN (dallas)" -- set name of VPN connection
  try
    set isConnected to do shell script "scutil --nc show \"" & myVPN & "\" | grep -c Connected"
  on error
    set isConnected to "0"
  end try
  if isConnected = "0" then
    do shell script "scutil --nc start \"" & myVPN & "\""
  end if
  return 15 -- how often to check, seconds
end idle
```

## Modifications

Change the variable `myVPN` to the name of your network connection. Here mine is `VPN (dallas)`.

Also modify the `return` value if you want the time between checks to be longer or shorter. Here I've set mine to 15 seconds.

## References

These are the some of the pages that I started with. The instructions for script generation and auto-boot still apply. So you can still reference them for those other tasks:

* <http://osxdaily.com/2016/08/10/auto-connect-vpn-mac-boot-login/>
* <https://www.maketecheasier.com/auto-connect-vpn-mac-startup/>

Some other tech references which helped:

* <https://www.cyberciti.biz/faq/mac-osx-applescript-run-shell-script/>
* ["on idle" reference](https://books.google.com/books?id=t0snCgAAQBAJ&amp;pg=PA672&amp;lpg=PA672&amp;dq=applescript+let+idle&amp;source=bl&amp;ots=feTq73ZGcD&amp;sig=p1nbgb4hxOKfWd-lCvSUJyAi2A4&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwjdpIqe-ITTAhWJeSYKHU7-C98Q6AEIGjAA#v=onepage&amp;q=applescript%20let%20idle&amp;f=false)
