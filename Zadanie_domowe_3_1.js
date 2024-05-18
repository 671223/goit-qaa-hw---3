// Funkcja wykorzystująca funkcję map do podwojenia wartości
function Double(lista){
    // funkcja strzałkowa
    return lista.map(x=>x * 2)
}

//tablica początkowa numer 1
listaLiczb = [1,2,3,4,5]

console.log("Tablica początkowa: " + listaLiczb)
console.log("Tablica po wykonaniu funkcji: " + Double(listaLiczb))

//tablica początkowa numer 2
listaLiczb = [8,20,1,42,82]

console.log("Tablica początkowa: " + listaLiczb)
console.log("Tablica po wykonaniu funkcji: " + Double(listaLiczb))

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Klasa reprezentująca studenta
class Student{
    constructor(Imie, Nazwisko, Wiek) {
        this.Imie = Imie;
        this.Nazwisko = Nazwisko;
        this.Wiek = Wiek;
      }
}
//Funkcja wykorzystująca funkcję map do zwrócenia imion
function ZwrocImione(Studenci){
    // funkcja strzałkowa
    return Studenci.map(Student=>Student.Imie)
}
//Funkcja wykorzystująca funkcję map do wyświetlenia danych studneta
function WyświetlStudenta(Studenci){
    // funkcja strzałkowa
    return Studenci.map(Student=>Student.Imie + " "+Student.Nazwisko + " "+Student.Wiek)
}

// Utworzenie pustej listy
ListaStudentow = []

// Dodanie obiektów studentów do listy
ListaStudentow.push(new Student("Jan", "Kowalski",19))
ListaStudentow.push(new Student("Agnieszka", "Jakaś",21))
ListaStudentow.push(new Student("Janusz", "Banuć",24))
ListaStudentow.push(new Student("Łukasz", "Miruć",26))
ListaStudentow.push(new Student("Sylwia", "Nijaka",18))
ListaStudentow.push(new Student("Janek", "Kowalski",23))

//wyświetlenie
console.log("Tablica początkowa: " + WyświetlStudenta(ListaStudentow))
console.log("Tablica po wykonaniu funkcji: " + ZwrocImione(ListaStudentow))