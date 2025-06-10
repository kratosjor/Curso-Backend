nombre = "Juan"
edad = 30

print(f"Hola {nombre}, tienes {edad} años")

class Persona():
    def __init__(self, nombre, edad, nacionalidad):
        self.nombre = nombre
        self.edad = edad
        self.nacionalidad = nacionalidad
        
    def presentarse(self):
        print(f"Hola, me llamo {self.nombre}, tengo {self.edad} años y mi nacionalidad es {self.nacionalidad}")
        
persona1 = Persona("Juan", 30, "Española")
persona1.presentarse()

lista = ["manzana", "banana", "cereza","mango","kiwi","sandia"]
lista2 = ["naranja", "kiwi", "mango", "manzana","banana","melon"]
nueva_lista = []
print("Lista de frutas:")

for fruta in lista + lista2:
    if fruta not in nueva_lista:
        nueva_lista.append(fruta)

print(nueva_lista)

