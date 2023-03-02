//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = window.parseInt(prompt("Primer Numero"));
let num2 = window.parseInt(prompt("Segundo Numero"));
let num3 = window.parseInt(prompt("Tercer Numero"));
if(num1 > num2 && num1 > num3)
{
    document.write(num1);
}

else if(num2 > num3)
{
    document.write(num2);
}
else
{
    document.write(num3);
}




