const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
    newColor: function (setNewColor){
        this.color = setNewColor;
    }
  };

  console.log(backpack)
  backpack.newColor("XXXXXXXXXXXX")
  backpack.toggleLid(true)
  console.log(backpack.color)
  console.log(backpack.lidOpen)