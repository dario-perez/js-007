const me = {
  nombre: 'Darío',
  apellido: 'Pérez',
  edad: 34,
  altura: 1.72,
  eresDesarrollador: true,
};

const edad = me.edad;

const meAndFriends = [
  me,
  {
    nombre: 'Alejandra',
    apellido: 'Molina Torres',
    edad: 34,
    altura: 1.62,
    eresDesarrollador: false,
  },
  {
    nombre: 'Andrés',
    apellido: 'Nieto',
    edad: 29,
    altura: 1.75,
    eresDesarrollador: false,
  },
  {
    nombre: 'Fernanda',
    apellido: 'Molina Torres',
    edad: 33,
    altura: 1.65,
    eresDesarrollador: false,
  },
];

const edadOrdenada = meAndFriends.sort((a, b) => {
  return b.edad - a.edad;
});

console.log(edadOrdenada);
