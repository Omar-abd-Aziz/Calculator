let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')
let b8 = document.getElementById('b8')
let b9 = document.getElementById('b9')
let b10 = document.getElementById('b10')
let b11 = document.getElementById('b11')
let b12 = document.getElementById('b12')
let b13 = document.getElementById('b13')
let b14 = document.getElementById('b14')
let b15 = document.getElementById('b15')
let b16 = document.getElementById('b16')
let b17 = document.getElementById('b17')
let b18 = document.getElementById('b18')
let b19 = document.getElementById('b19')
let b20 = document.getElementById('b20')
let ss = document.querySelector('.d2')
let d3 = document.querySelector('.d3')
let k1 = document.querySelector('.k1')
let k2 = document.querySelector('.k2')
let ee = document.querySelector('.ee')
/* stat style */

b1.ontouchstart = function() {
  b1.style = `background: white !important;`
}

b1.ontouchend = function() {
  b1.style = `background: #A5A5A5 !important;`
}



b2.ontouchstart = function() {
  b2.style = `background: white !important;`
}

b2.ontouchend = function() {
  b2.style = `background: #A5A5A5 !important;`
}




b3.ontouchstart = function() {
  b3.style = `background: white !important;`
}

b3.ontouchend = function() {
  b3.style = `background: #A5A5A5 !important;`
}



k1.ontouchstart = function() {
  k1.style = `background: white !important;`
}

k1.ontouchend = function() {
  k1.style = `background: #A5A5A5 !important;`
}




k2.ontouchstart = function() {
  k2.style = `background: white !important;`
}

k2.ontouchend = function() {
  k2.style = `background: #A5A5A5 !important;`
}







b19.ontouchstart = function() {
  b19.style = `background: #F1B563 !important;`
}

b19.ontouchend = function() {
  b19.style = ``
}



b18.ontouchstart = function() {
  b18.style = `background: #575757 !important;`
}

b18.ontouchend = function() {
  b18.style = ``
}

b17.ontouchstart = function() {
  b17.style = `background: #575757 !important;`
}

b17.ontouchend = function() {
  b17.style = ``
}


b20.ontouchstart = function() {
  b20.style = `background: #575757 !important;`
}

b20.ontouchend = function() {
  b20.style = ``
}


b15.ontouchstart = function() {
  b15.style = `background: #575757 !important;`
}

b15.ontouchend = function() {
  b15.style = ``
}


b14.ontouchstart = function() {
  b14.style = `background: #575757 !important;`
}

b14.ontouchend = function() {
  b14.style = ``
}


b9.ontouchstart = function() {
  b9.style = `background: #575757 !important;`
}

b9.ontouchend = function() {
  b9.style = ``
}


b10.ontouchstart = function() {
  b10.style = `background: #575757 !important;`
}

b10.ontouchend = function() {
  b10.style = ``
}


b13.ontouchstart = function() {
  b13.style = `background: #575757 !important;`
}

b13.ontouchend = function() {
  b13.style = ``
}


b11.ontouchstart = function() {
  b11.style = `background: #575757 !important;`
}

b11.ontouchend = function() {
  b11.style = ``
}



b5.ontouchstart = function() {
  b5.style = `background: #575757 !important;`
}

b5.ontouchend = function() {
  b5.style = ``
}


b6.ontouchstart = function() {
  b6.style = `background: #575757 !important;`
}

b6.ontouchend = function() {
  b6.style = ``
}


b7.ontouchstart = function() {
  b7.style = `background: #575757 !important;`
}

b7.ontouchend = function() {
  b7.style = ``
}

/* end style */

let n1 = 0
let n2 = 0
let z = ''


/*  */

b1.onclick = function () {
  ss.value = ''
}

/*  */

b2.onclick = function () {
  ss.value = -ss.value
}

/*  */



/*  */
b4.onclick = function() {
  ss.value+='/'
}
/*  */
b16.onclick = function() {
  ss.value+='+'
}
/*  */
/*  */
b8.onclick = function() {
  ss.value+='*'
}
/*  */
b12.onclick = function() {
  ss.value+='-'
}
/*  */
/*  */
b20.onclick = function() {
  ss.value+='**'
}
/*  */
k1.onclick = function() {
  ss.value+='**0.5'
}
/*  */
k2.onclick = function() {
  ss.value +='%'
}






///////*start  enter*/////////

document.querySelector(".d2").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    b19.click();
  }
});

///////*end  enter*/////////

/* = btn */


b19.onclick = function() {
  
  d3.value=ss.value
  
  let F=Number(eval(ss.value).toFixed(4))
  
  ss.value=F
  
}

/*  */

b17.onclick = function() {
  ss.value += 0
}

/*  */

b13.onclick = function() {
  ss.value += 1
}

/*  */

b14.onclick = function() {
  ss.value += 2
}

/*  */

b15.onclick = function() {
  ss.value += 3
}
/*  */

b9.onclick = function() {
  ss.value += 4
}

/*  */

b10.onclick = function() {
  ss.value += 5
}
/*  */

b11.onclick = function() {
  ss.value += 6
}

/*  */

b5.onclick = function() {
  ss.value += 7
}
/*  */

b6.onclick = function() {
  ss.value += 8
}

/*  */

b7.onclick = function() {
  ss.value += 9
}

/*  */

b18.onclick = function() {
  ss.value += `.`
}



b3.onclick = function () {
  let y = ss.value
  let j = y.slice(0, y.length-1)
  ss.value = j
}




/* setting */

let icon = document.querySelector('.icon')


icon.onclick = function () {
  ee.style = `display: block;`
}

ee.onclick = function () {
  ee.style = `display: none;`
}







