import eel
import threading
import subprocess
import re
eel.init('GUI')

def update():
    t = threading.Timer(1.0, update)
    result = subprocess.run(['vcgencmd', 'measure_temp'], stdout=subprocess.PIPE)
    result1 = re.sub('[^0-9.]+', '', str(result.stdout))
    print(result1)
    eel.update(result1)
    t.start()

update()

eel.start('index.html')