#!/usr/bin/python

import nmap
from datetime import datetime
import time


print ("Content-Type: text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ('<meta http-equiv="refresh" content="60" />')
print ("<title>Hello</title>")
print ('<link rel="icon" type="image/png"  href="img/clover.png">')
print ("<style>")
print ("sm-txt {font-size: 60px;color: blue}")
print ("body {background-color: black;color: blue;font-family: verdana;text-align: center}")
print ("p {color: yellow;font-size: 80px}")
print ("</style>")
print ("</head>")
print ("<body>")


nm = nmap.PortScanner()
nm.scan('192.168.1.*','62078-62079')

print ("<br/>")
print ("<div style='display: inline-block; text-align: left;'>")
for host in nm.all_hosts():
  if 'iPhone' in nm[host].hostname() and '-iPhone' not in nm[host].hostname():
    print("<p>Zack <sm-txt>%s %s</sm-txt></p>" % (host, nm[host].hostname()))

  if 'Tess-iPhone' in nm[host].hostname() and 'Tess-iPhone-2' not in nm[host].hostname():
    print("<p>Tess <sm-txt>%s %s</sm-txt></p>" % (host, nm[host].hostname()))

  if 'Tom-iPhone' in nm[host].hostname():
    print("<p>Tom <sm-txt>%s %s</sm-txt></p>" % (host, nm[host].hostname()))

print ("</div>")
print ("</body>")
print ("</html>")






