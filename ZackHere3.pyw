import nmap
import winsound
from datetime import datetime
import requests

nm = nmap.PortScanner()

freq1 = 800
freq2 = 400

dur1 = 1000  
dur2 = 300



def loop():
  while True:
    nm.scan('192.168.1.*','62078-62079')
     # a more usefull example :
    print()
    print (datetime.now())
    for host in nm.all_hosts():
      if 'iPhone' in nm[host].hostname() and '-iPhone' not in nm[host].hostname():
        print('----------------------------------------------------')
        print('Host : %s (%s)' % (host, nm[host].hostname()))
        print('State : %s' % nm[host].state())
        print()
        print("Zack's iPhone Detected")
        print (datetime.now())
        print()
        print()
        print()
        winsound.Beep(freq1, dur1)
        x= ("Zack's iPhone Detected")

    
      if '123-iPhone' not in nm[host].hostname():
     
        print('Host : %s (%s)' % (host, nm[host].hostname()))
    
        winsound.Beep(freq2, dur2)
        
  return x  

loop()
