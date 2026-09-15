const projects = [
  {
    website: "Random Video Chat",
    link: "https://video-app-29gw.onrender.com/",
    languages: ["HTML", "JavaScript", "PeerJS", "Node.js"],
    img: "images/Screenshot_20250407-190050~2.png",
    url: "https://github.com/E40sr/test.git",
    description:
      "This is a video app that connects users randomly. I used Node.js for the backend and PeerJS for video/audio.",
  },
  {
    website: "Larby",
    link: "",
    languages: ["HTML", "CSS", "JavaScript"],
    img: "images/Capture.JPG",
    url: "",
    description: "",
  },
  {
    website: "Homecare Website",
    link: "https://e40sr.github.io/comforthomecare-",
    languages: ["HTML", "CSS", "JavaScript"],
    img: "images/homecare-img.jpg",
    url: "https://github.com/E40sr/comforthomecare",
    description: "A website for a homecare service, built with HTML, CSS, and JavaScript."
  }
];

const projectHTML = projects
  .map((project) => {
    const {
      website,
      link,
      img,
      url,
      languages,
      description,
    } = project;

    return `
      

      <div class="project-div">
          <div class="card-bar">
            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
            <span class="filename">dashboard.js</span>
          </div>
          <div class="project-thumb"><img scr="${img}" alt="${website}" class="project-img" /></div>
          <div class="project-body">
            <h3>${website}</h3>
            <p>${description || "No description available."}</p>
    
            <div class="project-tags">
              <span>${languages[0]}</span><span>${languages[1]}</span><span>${languages[2]}</span><span>${languages[3] || "..."}</span>
            </div>
            <div class="project-links">
<a href="${url || "#"}" target="_blank">Code</a>
          <a href="${link || "#"}" target="_blank">Visit site</a>
     
              
            </div>
          </div>
        </div>
    `;
  })
  .join("");

document.querySelector("#projects").innerHTML += projectHTML;