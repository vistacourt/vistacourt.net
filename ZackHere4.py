import nmap
from datetime import datetime
from datetime import timedelta
from time import time

nm = nmap.PortScanner()
zack=0
zack1=datetime.today()
status=''
print(datetime.today())
def loop():
  global zack
  global zack1
  status = 'Gone'
  while True:
    print('Zack is',status)
    if zack!=0:     
      print (zack)
      print()
    print()    
    nm.scan('192.168.1.*','62078-62079') 
    for host in nm.all_hosts():
      x=datetime.now().strftime("%A, %B %d - %I:%M:%S %p")
      x1=datetime.today()-timedelta(hours=0,minutes=15)
      if ('iPhone' in nm[host].hostname() and '-iPhone' not in nm[host].hostname()): #or zack1 < x1:
        print()
        zack = x
        zack1 = datetime.today()
        status = 'Here'       
loop()
