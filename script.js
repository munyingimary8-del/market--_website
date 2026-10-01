const jobs=[
 {type:"Job",title:"Marketing Officer",company:"Tony Company Ltd",location:"Nakuru",mode:"Full-time",tag:"blue"},
 {type:"Internship",title:"ICT Intern",company:"St. Francis Motto Hope",location:"Molo",mode:"Internship",tag:"purple"},
 {type:"Attachment",title:"Reprographic Assistant",company:"Baraka College",location:"Molo",mode:"Attachment",tag:"green"},
 {type:"Volunteer",title:"Youth Mentor",company:"Molo Community Initiative",location:"Molo",mode:"Volunteer",tag:"orange"},
 {type:"Job",title:"Office Assistant",company:"Lakeview Hotel",location:"Molo",mode:"Part-time",tag:"blue"},
 {type:"Internship",title:"ICT Support Intern",company:"Molo Technical College",location:"Molo",mode:"Internship",tag:"purple"},
 {type:"Job",title:"Customer Service Agent",company:"KCB Branch",location:"Nakuru",mode:"Full-time",tag:"blue"},
 {type:"Job",title:"Field Officer",company:"NGO Kenya",location:"Nakuru",mode:"Contract",tag:"blue"}
];
function render(list=jobs){document.getElementById("cards").innerHTML=list.map(j=>`<article class="card"><span class="tag ${j.tag}">${j.type}</span><h3>${j.title}</h3><p><b>${j.company}</b><br>📍 ${j.location} • ${j.mode}</p><button class="btn small" onclick="details('${j.title.replace(/'/g,"\\'")}')">View Details</button></article>`).join("")}
function searchJobs(){let q=document.getElementById("searchInput").value.toLowerCase(), c=document.getElementById("category").value, l=document.getElementById("location").value;let r=jobs.filter(j=>(!q||(`${j.title} ${j.company} ${j.type}`).toLowerCase().includes(q))&&(c==="All Categories"||j.type===c)&&(l==="Other Towns"||j.location===l));render(r);document.getElementById("jobs").scrollIntoView({behavior:"smooth"});}
function showAll(){document.getElementById("searchInput").value="";document.getElementById("category").value="All Categories";render();document.getElementById("jobs").scrollIntoView({behavior:"smooth"})}
function details(t){let j=jobs.find(x=>x.title===t);openCustom(`<h2>${j.title}</h2><p><b>${j.company}</b> • ${j.location}</p><div class="notice">Application details will appear here when the employer publishes the full vacancy.</div><br><button class="btn" onclick="openModal('login')">Login to Apply</button>`)}
function openModal(type){let c=document.getElementById("modalContent");let html="";
if(type==="login")html=`<h2>Welcome back</h2><p>Login to manage your applications.</p><div class="form"><label>Email</label><input type="email" placeholder="you@example.com"><label>Password</label><input type="password" placeholder="Password"><button class="btn">Login</button><div class="notice">Demo website — connect this form to your database/authentication system.</div></div>`;
if(type==="register")html=`<h2>Create your account</h2><p>Join Molo Opportunities.</p><div class="form"><label>Account type</label><select><option>Job Seeker / Student</option><option>Employer</option></select><label>Full Name</label><input placeholder="Full Name"><label>Email</label><input type="email" placeholder="Email Address"><label>Phone</label><input placeholder="Phone Number"><label>Password</label><input type="password" placeholder="Password"><button class="btn">Create Account</button></div>`;
if(type==="services")html=`<h2>CV & Application Services</h2><p>Professional documents for your next opportunity.</p><div class="cards"><div class="card"><h3>CV Writing</h3><p>CV tailored to your field.</p><button class="btn small">Order</button></div><div class="card"><h3>Application Letter</h3><p>Professional application letter.</p><button class="btn small">Order</button></div></div>`;
if(type==="post")html=`<h2>Post a Vacancy</h2><p>Reach job seekers and students in Molo and Nakuru.</p><div class="form"><label>Company</label><input placeholder="Company name"><label>Position</label><input placeholder="Job title"><label>Location</label><input placeholder="Molo / Nakuru"><label>Description</label><textarea rows="4" placeholder="Describe the opportunity"></textarea><button class="btn">Continue</button></div>`;
c.innerHTML=html;document.getElementById("modal").classList.add("show")}
function openCustom(html){document.getElementById("modalContent").innerHTML=html;document.getElementById("modal").classList.add("show")}
function closeModal(){document.getElementById("modal").classList.remove("show")}
function closeOutside(e){if(e.target.id==="modal")closeModal()}
function toggleMenu(){document.querySelector(".nav").classList.toggle("open")}
render();