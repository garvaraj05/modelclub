document.querySelector(".logos").addEventListener("click", function () {
    window.location.href = "./index.html"
});
document.querySelector(".links #event-btn").addEventListener("click", function () {
    window.location.href = "./events.html"
    console.log("hi")
});
document.querySelector(".links #member-btn").addEventListener("click", function () {
    window.location.href = "./members.html"
});
document.querySelector(".links #sandhaan-btn").addEventListener("click", function () {
    window.location.href = "./sandhaan.html"
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".links #contact-btn").addEventListener('click', function () {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
    document.querySelector(".ham-menu #contact-btn").addEventListener('click', function () {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
    document.querySelector(".hamburger").addEventListener("click", function () {
        let ele = document.querySelector(".ham-menu");
        if (ele.style.display == "none") {
            ele.style.display = "flex";
        }
        else {
            ele.style.display = "none"
        }
    });
    document.querySelector(".ham-menu #event-btn").addEventListener("click", function () {
        window.location.href = "./events.html"
        console.log("hi")
    });
    document.querySelector(".ham-menu #member-btn").addEventListener("click", function () {
        window.location.href = "./members.html"
    });
    document.querySelector(".ham-menu #sandhaan-btn").addEventListener("click", function () {
        window.location.href = "./sandhaan.html"
    });
    document.querySelector(".ham-menu #about-btn").addEventListener("click", function () {
        window.scrollTo({
            top: document.querySelector(".aboutinfo").offsetTop - 10,
            behavior: 'smooth'
        });
    });
    document.querySelector(".links #about-btn").addEventListener("click", function () {
        window.scrollTo({
            top: document.querySelector(".aboutinfo").offsetTop - 10,
            behavior: 'smooth'
        });
    });
    
})
//loading screen
document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
      // by default loading screen is visible and content is hidden
      // Hide the loading screen
      document.getElementById("loading-screen").style.display = "none";
      // Show the main content
      document.querySelector(".container").style.display="block"
      document.querySelector(".container").scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  
  });

// scrolling animation 
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    function revealOnScroll() {
        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#fb").addEventListener("click", function(){
        window.location.href="https://www.facebook.com/modelclubbit";
    })
    document.querySelector("#github").addEventListener("click", function(){
        window.location.href="https://github.com/Model-Club-BIT-Sindri";
    })
    document.querySelector("#linkedin").addEventListener("click", function(){
        window.location.href="https://www.linkedin.com/company/modelclub-bitsindri";
    })
    document.querySelector("#insta").addEventListener("click", function(){
        window.location.href="https://www.instagram.com/modelclubbit/";
    }) 
});





// // members page content changfer
document.querySelector('#members-button1').addEventListener('click', function () {
    document.querySelectorAll('.members-button').forEach(btn => btn.classList.remove('selected'));
    this.classList.add('selected');
    document.querySelector("#membersContent1").style.display = "block";
    document.querySelector("#membersContent2").style.display = "none";

});

document.querySelector('#members-button2').addEventListener('click', function () {
    document.querySelectorAll('.members-button').forEach(btn => btn.classList.remove('selected'));
    this.classList.add('selected');
    document.querySelector("#membersContent2").style.display = "block";
    document.querySelector("#membersContent1").style.display = "none";
});

