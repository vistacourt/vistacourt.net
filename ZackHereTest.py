#!/usr/bin/python
print ("Content-Type: text/html\r\n\r\n")
print ("<html>")
print ("starting...")

import nmap
from datetime import datetime

nm = nmap.PortScanner()
nm.scan('192.168.1.*','62078-62079')


print('<br/>')
print (datetime.now())
print('<br/>')
print('<br/>')
for host in nm.all_hosts():
  if 'iPhone' in nm[host].hostname() and '-iPhone' not in nm[host].hostname():
    print('----------------------------------------------------')
    print('<br/>')
    print('Host : %s (%s)' % (host, nm[host].hostname()))
    print('<br/>')
    print('State : %s' % nm[host].state())
    print('<br/>')

    print("Zack's iPhone Detected")
    print('<br/>')
    print (datetime.now())
    print('<br/>')
    print('<br/>')
    print('<br/>')

  print('No Zack')
##  if '123-iPhone' not in nm[host].hostname():
##    print('Host : %s (%s)' % (host, nm[host].hostname()))
  print('<br/>')
  print('<br/>')
print("<html>")





