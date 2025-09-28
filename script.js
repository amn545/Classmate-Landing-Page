function cursor() {
              var body = document.querySelector("body");
              var cursor = document.querySelector("#cursor")

              body.addEventListener("mousemove", function (dets) {
                            gsap.to(cursor, {
                                          x: dets.x,
                                          y: dets.y,
                                          duration: 1,
                                          opacity: 1,
                                          ease: "back.out"
                            })
              })       
}

cursor()
