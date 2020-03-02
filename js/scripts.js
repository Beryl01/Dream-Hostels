// Back end Logic
function theBrucePizzas(selectedSize, selectedCrust, toppingSelect, quantityChosen){
    this.selectedSize = selectedSize;
    this.selectedCrust = selectedCrust;
    this.toppingSelect = toppingSelect;
    this.quantityChosen = quantityChosen;
  }
  // ->topping cost to be determined by pizza size chosen.
  theBrucePizzas.prototype.toppingCost = function(){
    if (this.selectedSize === 500 && this.toppingSelect === 220){
      return 220 + 50;
    }
    else if(this.selectedSize === 500 && this.toppingSelect === 320){
      return 320 + 50;
    }
    else if(this.selectedSize === 500 && this.toppingSelect === 420){
      return 420 + 50;
    }
     else if(this.selectedSize === 500 && this.toppingSelect === 520){
      return 520 + 50;
    }
     else if(this.selectedSize === 500 && this.toppingSelect === 620){
      return 620 + 50;
    }
     else if(this.selectedSize === 500 && this.toppingSelect === 720){
      return 720 + 50;
    }
     else if(this.selectedSize === 500 && this.toppingSelect === 820){
      return 820 + 50;
    }
     else if(this.selectedSize === 600 && this.toppingSelect === 420){
      return 420 + 50;
    }
  };
  
  
  // User Logic
  $(document).ready(function(){
    $("select#sizeSelect").change(function(){
      let selectedSize = parseInt($(this).children("option:selected").val());
    });
    $("select#crustSelect").change(function(){
      let selectedCrust = parseInt($(this).children("option:selected").val());
    });
    $("select#toppingSelect").change(function(){
      let toppingSelect = parseInt($(this).children("option:selected").val());
    });
    $("#placeOrder").click(function(){
      let quantityChosen = parseInt($("#numInput").val());
    });
  
    // let brucePizzas = new theBrucePizzas(selectedSize, selectedCrust, toppingSelect, quantityChosen);
  
    // document.getElementById("demo").innerHTML = brucePizzas.toppingCost;
  });
  