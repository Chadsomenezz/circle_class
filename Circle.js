//USING FUNCTION CONSTRUCTOR
// function Circle (menu,container,bgcolor){
//     this.menu = document.getElementsByClassName(menu)[0];
//     this.container = document.getElementsByClassName(container)[0];
//     this.bgcolor = bgcolor;
//
//
//
//     this.circleEvent = (e)=>{
//
//         //random number between 10-200;
//         let radius = Math.floor(Math.random() * 201) + 10;
//         //position the Circle X axis at the center where the mouse pointer
//         let xAxis = e.offsetX - (radius / 2);
//         //position the Circle Y axis at the center where the mouse pointer
//         let yAxis = e.offsetY - (radius / 2);
//         //create an element
//         let p = document.createElement("p");
//         //get a static copy of the previous color so that when we choose the color, the circle colors will not change
//         let staticBgColo = this.bgcolor;
//         p.setAttribute("style", `position:absolute; z-index: -999;border: 1px solid black; top:${yAxis}px; left:${xAxis}px; width:${radius}px; height:${radius}px; border-radius:100%; background-color: ${staticBgColo}`);
//
//         //append the actual reference element   p into the container div, note: this is a reference type like an array,
//         //therefore when we change any value or attribute of the that "p" element, it will reflect back into the container
//         this.container.appendChild(p);
//
//         //Set an interval that will run every 100ms or 10% of a 1 second
//         let animationCircle = setInterval(() => {
//             p.setAttribute("style", `position:absolute; z-index: -999;border: 1px solid black; top:${yAxis}px; left:${xAxis}px; width:${radius}px; height:${radius}px; border-radius:100%; background-color: ${staticBgColo}`);
//             radius--;
//             //Will trigger if radius is less than 1;
//             //Will remove the "p" element from the container, and clear that interval
//             if (radius < 1) {
//                 clearInterval(animationCircle);
//                 //if the the reset button is not yet press
//                 //therefore the element "p" is still in the container then run this if statement
//                 if (this.container.contains(p)) {
//                     this.container.removeChild(p);
//                 }
//             }
//         }, 50)
//     }
//
//
//     this.removeAll =  function (e)
//     {
//         if (e.target.className === "colors") {
//             this.bgcolor = e.target.getAttribute("data-color");
//         }
//         if (e.target.className === "reset") {
//             this.container.innerHTML = "";
//         }
//     }
//
//     //USING FAT ARROW FUNCTION WE DON'T NEED TO USE THE BIND, AS THE "THIS" WILL REFER TO WHERE THE CURRENT "THIS" WAS CALLED
//     this.container.addEventListener("click", this.circleEvent)
//     //USING OLD FUNCTION WE NEED TO USE THE BIND TO BIND THE "THIS"
//     this.menu.addEventListener("click", this.removeAll.bind(this));
// }
//
// let circle = new Circle("menu","container","#CCE8CC");
//
//
//
//
//

//FUNCTION CONSTRUCTOR WITH PROTOTYPAL INHERITANCE

// function Circle (menu,container,bgcolor){
//     this.menu = document.getElementsByClassName(menu)[0];
//     this.container = document.getElementsByClassName(container)[0];
//     this.bgcolor = bgcolor;
//
//     //USING FAT ARROW FUNCTION WE DON'T NEED TO USE THE BIND, AS THE "THIS" WILL REFER TO WHERE THE CURRENT "THIS" WAS DECLARED
//
//     this.container.addEventListener("click", this.circleEvent.bind(this))
//     //USING OLD FUNCTION WE NEED TO USE THE BIND TO BIND THE "THIS"
//     this.menu.addEventListener("click", this.removeAll.bind(this));
//
//
// }
//
// Circle.prototype.circleEvent = function (e) {
//     console.log(this)
//     //random number between 10-200;
//     let radius = Math.floor(Math.random() * 201) + 10;
//     //position the Circle X axis at the center where the mouse pointer
//     let xAxis = e.offsetX - (radius / 2);
//     //position the Circle Y axis at the center where the mouse pointer
//     let yAxis = e.offsetY - (radius / 2);
//     //create an element
//     let p = document.createElement("p");
//     //get a static copy of the previous color so that when we choose the color, the circle colors will not change
//     let staticBgColo = this.bgcolor;
//     p.setAttribute("style", `position:absolute; z-index: -999;border: 1px solid black; top:${yAxis}px; left:${xAxis}px; width:${radius}px; height:${radius}px; border-radius:100%; background-color: ${staticBgColo}`);
//
//     //append the actual reference element   p into the container div, note: this is a reference type like an array,
//     //therefore when we change any value or attribute of the that "p" element, it will reflect back into the container
//     this.container.appendChild(p);
//
//     //Set an interval that will run every 100ms or 10% of a 1 second
//     let animationCircle = setInterval(() => {
//         p.setAttribute("style", `position:absolute; z-index: -999;border: 1px solid black; top:${yAxis}px; left:${xAxis}px; width:${radius}px; height:${radius}px; border-radius:100%; background-color: ${staticBgColo}`);
//         radius--;
//         //Will trigger if radius is less than 1;
//         //Will remove the "p" element from the container, and clear that interval
//         if (radius < 1) {
//             clearInterval(animationCircle);
//             //if the the reset button is not yet press
//             //therefore the element "p" is still in the container then run this if statement
//             if (this.container.contains(p)) {
//                 this.container.removeChild(p);
//             }
//         }
//     }, 50)
// }
//
// Circle.prototype.removeAll =  function (e)
// {
//     if (e.target.className === "colors") {
//         this.bgcolor = e.target.getAttribute("data-color");
//     }
//     if (e.target.className === "reset") {
//         this.container.innerHTML = "";
//     }
// }
//
//
//
// let circle = new Circle("menu","container","#CCE8CC");
//
//



// CLASSICAL INHERITANCE
class Circle {
    constructor(menu,container,bgcolor) {
        this.menu = document.getElementsByClassName(menu)[0];
        this.container = document.getElementsByClassName(container)[0];
        this.bgcolor = bgcolor;

        this.container.addEventListener("click", this.circleEvent.bind(this))
        this.menu.addEventListener("click", this.removeAll.bind(this));
    }

    circleEvent(e) {

        //random number between 10-200;
        let radius = Math.floor(Math.random() * 201) + 10;
        //position the Circle X axis at the center where the mouse pointer
        let xAxis = e.offsetX - (radius / 2);
        //position the Circle Y axis at the center where the mouse pointer
        let yAxis = e.offsetY - (radius / 2);
        //create an element
        let p = document.createElement("p");
        //get a static copy of the previous color so that when we choose the color, the circle colors will not change
        let staticBgColo = this.bgcolor;
        p.setAttribute("style", `position:absolute; z-index: -999;border: 1px solid black; top:${yAxis}px; left:${xAxis}px; width:${radius}px; height:${radius}px; border-radius:100%; background-color: ${staticBgColo}`);

        //append the actual reference element   p into the container div, note: this is a reference type like an array,
        //therefore when we change any value or attribute of the that "p" element, it will reflect back into the container
        this.container.appendChild(p);

        //Set an interval that will run every 100ms or 10% of a 1 second
        let animationCircle = setInterval(() => {
            p.setAttribute("style", `position:absolute; z-index: -999;border: 1px solid black; top:${yAxis}px; left:${xAxis}px; width:${radius}px; height:${radius}px; border-radius:100%; background-color: ${staticBgColo}`);
            radius--;
            //Will trigger if radius is less than 1;
            //Will remove the "p" element from the container, and clear that interval
            if (radius < 1) {
                clearInterval(animationCircle);
                //if the the reset button is not yet press
                //therefore the element "p" is still in the container then run this if statement
                if (this.container.contains(p)) {
                    this.container.removeChild(p);
                }
            }
        }, 50)
    }


    removeAll(e)
    {
        if (e.target.className === "colors") {
            this.bgcolor = e.target.getAttribute("data-color");
        }
        if (e.target.className === "reset") {
            this.container.innerHTML = "";
        }
    }

}

let circle = new Circle("menu","container","#CCE8CC");
