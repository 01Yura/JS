// Пример проверки типов данных 
function assertType(value, type) {
    if (typeof value !== type) {
      throw new TypeError(`Expected ${type}, but got ${typeof value}`);
    }
   }
   
   function add(a, b) {
    assertType(a, "number");
    assertType(b, "number");
    return a + b;
   }

// Еще пример
function assertType(value, type, paramName) {
    if (typeof value !== type) {
      throw new TypeError(`${paramName} must be a ${type}`);
    }
   }
   
   class Backpack {
    constructor(
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen
    ) {
      assertType(name, "string", "name");
      assertType(volume, "number", "volume");
      assertType(color, "string", "color");
      assertType(pocketNum, "number", "pocketNum");
      assertType(strapLengthL, "number", "strapLengthL");
      assertType(strapLengthR, "number", "strapLengthR");
      assertType(lidOpen, "boolean", "lidOpen");
   
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.pocketNum = pocketNum;
      this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
      };
      this.lidOpen = lidOpen;
    }
   
    toggleLid(lidStatus) {
      assertType(lidStatus, "boolean", "lidStatus");
      this.lidOpen = lidStatus;
    }
   
    newStrapLength(lengthLeft, lengthRight) {
      assertType(lengthLeft, "number", "lengthLeft");
      assertType(lengthRight, "number", "lengthRight");
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    }
   }