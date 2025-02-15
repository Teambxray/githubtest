gsap.to(".scan-line", {
    y: "100vh", // Moves from top to bottom
    duration: 3, // Duration of movement
    ease: "power2.inOut",
    repeat: -1, // Infinite loop
    yoyo: true, // Moves up and down continuously
});