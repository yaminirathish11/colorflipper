
 function  RandomColorChange () {
    let color = Math.floor(Math.random() * 255);
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    console.log(color);
    document.querySelector('body').style.backgroundColor = `rgb(${color},${color1},${color2})`;
    console.log(`rgb(${color},${color1},${color2})`);
    const hexCode = rgbToHex(color, color1, color2);
    const someColor = colorNameList.find(color => color.hex === '#a59344')?.name;
    document.querySelector('p').innerHTML = `Color: ${someColor}, Hex Code: ${hexCode}`;;
};


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


