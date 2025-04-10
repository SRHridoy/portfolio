// Typed.js initialization
var typed = new Typed("#element", {
	strings: ["Flutter Developer", "Backend Developer", "Problem Solver"],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true,
	smartBackspace: true,
	showCursor: true,
	cursorChar: "|",
	autoInsertCss: true,
});

// Custom cursor effect
const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
	// Main cursor
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";

	// Dot cursor (follows with slight delay)
	requestAnimationFrame(() => {
		cursorDot.style.left = e.clientX + "px";
		cursorDot.style.top = e.clientY + "px";
	});
});

// Mouse trail effect
function createTrail(e) {
	const trail = document.createElement("div");
	trail.className = "trail";
	trail.style.left = e.clientX + "px";
	trail.style.top = e.clientY + "px";
	document.body.appendChild(trail);

	setTimeout(() => {
		document.body.removeChild(trail);
	}, 1000);
}

document.addEventListener("mousemove", (e) => {
	// Update existing cursor
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
	cursorDot.style.left = e.clientX + "px";
	cursorDot.style.top = e.clientY + "px";

	// Create trail with throttling
	if (!window.trailThrottle) {
		createTrail(e);
		window.trailThrottle = true;
		setTimeout(() => {
			window.trailThrottle = false;
		}, 50);
	}
});

// Add click effect
document.addEventListener("mousedown", () => {
	cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
	cursorDot.style.transform = "translate(-50%, -50%) scale(0.5)";
});

document.addEventListener("mouseup", () => {
	cursor.style.transform = "translate(-50%, -50%) scale(1)";
	cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
});

// Hide cursor when leaving the window
document.addEventListener("mouseleave", () => {
	cursor.style.display = "none";
	cursorDot.style.display = "none";
});

document.addEventListener("mouseenter", () => {
	cursor.style.display = "block";
	cursorDot.style.display = "block";
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksA = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navLinks.classList.toggle("active");
});

// Close menu when clicking a link
navLinksA.forEach((link) => {
	link.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navLinks.classList.remove("active");
	});
});
