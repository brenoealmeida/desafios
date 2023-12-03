let numberOfStudents = parseInt(gets());
let matricula;
let max = 8.0;

for (var i = 0; i < numberOfStudents; i++) {
  let line = gets();
  line = line.split(" ")

  if (parseFloat(line[1]) >= max) {
    matricula = line[0]
    max = parseFloat(line[1])
  }
}

if (matricula)
  print(matricula)
else
  print("Minimum note not reached")
