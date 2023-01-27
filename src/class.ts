enum ShapeKind {
  Circle,
  Square,
}

class Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public dob: string,
    public gender: string
  ) {}
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

// let c: Circle = {
//   kind: ShapeKind.Square, //Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
//   radius: 100,
// };

interface User {
  id?: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(update: Partial<User>) {
  const user: User = {
    id: 131,
    firstName: "vinay",
    lastName: "avasthi",
    role: "admin",
  };

  const newUser = { ...user, ...update };
  console.log(newUser);
}

let x: Human = {
  firstName: "Vinay",
  lastName: "Avasthi",
  dob: "22-07-1988",
  gender: "Male",
};

console.log(x);

updateUser({ role: "manager" });
