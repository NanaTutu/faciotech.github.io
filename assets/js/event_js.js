const tabWrapper = document.querySelector(".tab-wrapper");

const tabBtns = tabWrapper.querySelectorAll(".tab-btn");
const underline = tabWrapper.querySelector(".underline");
const tabContent = tabWrapper.querySelectorAll(".tab-content");

// add styling on page load

// add active to first button
tabBtns[0].classList.add('.active');
underline.style.width = `${tabBtns[0].offsetWidth}px`;
underline.style.left = `${tabBtns[0].offsetLeft}px`;

tabBtns.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        // Remove Already Active Class
        tabBtns.forEach((btn)=>btn.classList.remove("active"));  
        // Add active class on clicked
        btn.classList.add("active");

        // move underline to active btn
        underline.style.left = `${btn.offsetLeft}px`;

        // set width of underline equals to btn width
        underline.style.width = `${btn.offsetWidth}px`;

         // show the active tab content
        tabContent.forEach((content) => {
            content.style.transform = `translateX(-${index * 100}%)`; 
        })
    }) 

   

})
