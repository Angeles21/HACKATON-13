1. ¿Por qué evitar los callbacks en las llamadas asíncronas?

Porque la función básica de los callbacks es devolver algo en ese mismo instante, o toman un poco de tiempo para
ello (descarga de imagenes, por ejemplo ). En cambio, las funciones asíncronas suceden en el futuro pero no necesariamente
se obtiene de manera rápida, requiere de un mecanismo específico para que funcinen.

---

2. ¿Qué es una promesa?

Es un objeto que en esencia encapsula 2 caminos posibles: donde el enunciado se cumple, o cuando no lo hace.
Son representadas mediante la palabra reservada "promise", un constructor que usa 2 parámetros (resolve y reject).
Su finalidad es hacer más sencillo el trabajar con asincronía.

---

3.¿Qué es un Callback Hell?

Es un término que hace referencia al anidado excesivo de información dentro de un mismo proyecto, el cual
termina dificultando la lectura y comprensión de las funciones. Usualmente se da porque se escribe el código
de tal manera que todo lo que ocurre en una línea termine en ese mismo espacio antes de pasar al siguiente, pero
esto solo incrementa la complejidad y tamaño del proyecto.
