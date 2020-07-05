import pyautogui as pg
import keyboard as kb
import time

print('test')

pg.FAILSAFE = False

#TODO: unlock comp

pg.press('win')
time.sleep(0.1)
time.sleep(0.1)
pg.press('enter')