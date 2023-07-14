import tkinter as tk
from tkinter import ttk

window = tk.Tk()
window.title("Tkinter variables")

def btn_func():
    string_var.get()
    string_var.set('button pressed')

#tkinterVariable
string_var = tk.StringVar(value= 'start value')

label = ttk.Label(master = window, text="label", textvariable = string_var)
label.pack()

entry = ttk.Entry(master= window, textvariable= string_var)
entry.pack()

button = ttk.Button(master=window, text="button",command =  btn_func)
button.pack()

#exercise create 2 entry fields and 1 label, they should all be connected via a stringVar
#set a start value of 'test'
window.mainloop()