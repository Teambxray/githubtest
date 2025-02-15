gsap.to(".scan-line", {
    y: "100vh", // Move from top to bottom
    duration: 3, // 3 seconds for a full pass
    ease: "power2.inOut",
    repeat: -1, // Infinite loop
    yoyo: true // Moves up and down continuously
});