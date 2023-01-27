type alignment = "left" | "right" | "center";

enum ShapeType {
  Circle,
  Square,
  Triangle,
}

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

type Shape =
  | { kind: ShapeType.Circle; radius: number }
  | { kind: ShapeType.Square; x: number }
  | { kind: ShapeType.Triangle; x: number; y: number };

function height(s: Shape) {
  if (s.kind === ShapeType.Circle) {
    // s.kind: "circle"
    return 2 * s.radius;
  } else {
    // s.kind: "square" | "triangle"
    return s.x;
  }
}

function area(s: Shape) {
  if (s.kind === ShapeType.Circle) {
    return Math.PI * s.radius * s.radius;
  } else if (s.kind === ShapeType.Square) {
    return s.x * s.x;
  } else {
    return (s.x * s.y) / 2;
  }
}

// variable list
let x1: number;
x1 = 12;
x1 = 12.45335665555555555555555555;
console.log(x1);
let x123: alignment;
x123 = "left";
