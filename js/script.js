
function getLength() {
	window.alert("hi");
	for (i = 0; i < arguments.length; i++) {
		var myPath = document.getElementById(arguments[i]);
		var length = myPath.getTotalLength();
		window.alert(arguments[i] + ' ' + length);
  }
}

function setDashArrayAndOffset() {
    window.alert("hi");
    var paths = document.getElementsByClassName('drawn-stroke');
    Array.prototype.forEach.call(paths, function(p) {
        var pathLength = p.getTotalLength();
        window.alert(p);
        window.alert(pathLength);
        p.style.strokeDasharray = pathLength;
        p.style.strokeDashoffset = pathLength;
    });
}

var paths = document.getElementsByClassName('drawn-stroke');

Array.prototype.forEach.call(paths, function(p) {
    var pathLength = p.getTotalLength();
    p.style.strokeDasharray = pathLength;
    p.style.strokeDashoffset = pathLength;
});

var letterpoptext = document.getElementsByClassName("popup-letters");
Array.prototype.forEach.call(letterpoptext, function(e){
    var classedLetters = "";
    var startTime = 0.5;
    for (var i = 0; i < e.innerHTML.length; i++) {
        if (e.innerHTML[i] === " ") {
            classedLetters += " ";
        } else {
            classedLetters += "<span class='popin' style='animation-delay:" + startTime + "s'>" + e.innerHTML[i] + "</span>";
            startTime += 0.08;
        }
    }
    e.innerHTML=classedLetters;
});

var coloredletters = document.getElementsByClassName("colored-letters");
Array.prototype.forEach.call(coloredletters, function(e){
  var classedLetters = "";
  var startTime = 3.2;
  for (var i = 0; i < e.innerHTML.length; i++) {
    if (e.innerHTML[i] === " ") {
      classedLetters += " ";
    }
    else {
      classedLetters += "<span class='text-color-change' style='animation-delay:" + startTime + "s'>" + e.innerHTML[i] + "</span>";
      startTime += 0.1;
    }
  }
  e.innerHTML = classedLetters;
});

var skills = [{
  "name":"python", 
  "level": 5
},{
  "name":"java",
  "level": 3
},{
  "name":"html",
  "level":5
},{
  "name":"css",
  "level":5
},{
  "name":"javascript",
  "level":4
},{
  "name":"illustrator",
  "level":5
},{
  "name":"photoshop",
  "level":3
}];

var skillDiv = "";
var circles = "";
var level = 0;
var delayTime = 0;
var classSkillName = "";
for (var i = 0; i < skills.length; i++) {
  classSkillName = skills[i].name + "-skill";
  // window.alert(classSkillName);
  circles = document.getElementById(skills[i].name + '-skill').children;
  level = skills[i].level;
  delayTime = 4;
  for (var j = 0; j < circles.length; j++) {
    circles[j].style.opacity=0;
    if (j < level) {
      circles[j].classList.add("glitchy-fade-in-to-half");
      circles[j].style.animationDelay = delayTime + "s";
      circles[j].style.animationDuration = ".5s";
      delayTime += .5;
    }
  }
}


// var projIndex = {};
// projIndex["breezy"] = 0;
// projIndex["shopkick"] = 1;
// projIndex["calappointments"] = 2;
// projIndex["awkotaco"] = 3;
// projIndex["graphicdesign"] = 4;
// projIndex["youtube"] = 5;
// projIndex["labassistant"] = 6;
// projIndex["comics"] = 7;
// projIndex["securefiles"] = 8;
// projIndex["shakespeare"] = 9;
// projIndex["steal"] = 10;
// projIndex["car "] = 11;

var messageIndex = 0;
// window.alert('hey sup');
window.addEventListener("DOMContentLoaded", function() {
  let items = document.querySelectorAll(".grid-item");
  // window.alert(items);
  Array.from(items, function(item) {
    item.addEventListener("click", function() {
    	var project = $('.project_num', item).text();

    	// messageIndex = projIndex[item.id]
    	// $("#projectdescription").text(projects[projIndex[item.id]].content);
    	// $("#projecttitle").text(projects[projIndex[item.id]].title);
    	// document.getElementById('myhands').style.display = 'inline';
    	// document.getElementById('nav-bar').style.display = 'none';
    	// document.getElementById('proj-grid').style.display = 'none';
    	// document.body.style.background = 'black';
    });
  });
});

var breezy = 
    {   "svg" : "1-2-12",
        "title" : "Breezy",
        "content": "Here’s a project that incorporates smart watches! As the final assignment for my user interfaces course at Berkeley, I was put in a group with 4 other randos (actually really great people) and was challenged to whip up a dual device app that related in some way to health. The result? Breezy! This app works in a way which allows parents to monitor and track children with respiratory problems. The child wears the smartwatch (this is the future) which keeps track of their breathing rate while their parent(s) monitor this rate through the mobile app and are alerted in case of an emergency. Although the functionality of the app is limited (the projects main focus was UI/UX) their was still quite a bit of work into understanding android and dual device coding. My responsibilities lied in developing the mobile side (coded in android studio IE Java) and also identity design. Which means I got to code as well as make the logo!"
    };

var shopkick = 
    {
        "svg" : "none",
        "title" : "Shopkick",
        "content": "Ever heard of Shopkick, cuz its like FREE MONEY. To quickly explain, this app is basically a point rewarding system which encourages consumers to shop (or just go to stores) in exchange for gift cards at various retailers. As an intern I was brought in to help on a pretty big project: targeting. The company was under the process of targeting users for specific ads based on demographic, behavioral, and locational data. My task was to create forms on the admin panel which allowed the company to specify this kind of targeting. I then relayed this information to a matchmaking service made by another engineer on the team. I also was responsible for creating a service which automated the rewarding of kicks after users complete demographic in-app surveys. In addition to contributing to this survey side project I was also able to implement web design concepts throughout the admin panel!"
    };

var calappointments = 
    {
    	"svg": "none",
    	"title": "Calappointments",
    	"content": "As a graduate of UC Berkeley I have a lot of great things to say about it, but there are also some complaints. One being the appointment system which was in place during my time there. Most everyone I knew was put off by trying to make appointments with a general counselor. In response to this I teamed up with others in my database management class and created a prototype website that focused on a better system. With what we learned about relational databases we focused on managing data on counselors, students, sub-schools, and majors in order to better organize the setting of appointments, from both the counselor and student side of the process. My role in the project was mainly as a server side engineer. However I also was able to create a logo for the team!"
    };

var awkotaco = 
    {
    	"svg": "none",
    	"title": "Awkotaco",
    	"content": "Ever been in a situation where you don’t know what to say, or even worse you said something which just made things even more awkward? Well fear no more! Introducing AWKOTACO. As my final project for a web architecture class, I teamed up with three other students and created this site which focuses on delivering the best phrases, jokes, and comebacks for any situation you could ask for. By making use of self made APIs, we were able to fetch appropriate responses based on what type of “taco” a user wishes to use. As a more recent development, a user is even able to create their own taco, which is submitted and added to an API that users can see. My role was as a server side developer, but I also played a big role in helping design the site."
    };

var graphic_design =
    {
    	"svg": "none",
    	"title": "Graphic Design",
    	"content": "Even though I decided to pursue a technical passion with my degree, I never gave up on my artistic passion. Throughout the second hand of college I decided to take a student run course on graphic design and have been dabbing in the field ever since. I’ve created various logos and posters for different competitions and projects. Recently I’ve been creating for others and the companies and ideas they wish to pursue. I’ve showcased this aspect of my career by designing my personal website, illustrations and all!"
    };

var youtube = 
    {
    	"svg": "none",
    	"title": "Youtube",
    	"content": "Last year there was quite a buzz around youtube’s restricted mode, which served as a way for parents to safeguard their children against inappropriate content. The controversy surrounded the fact that this guarded against material revolving around material which some found unfair such as lgbtq, and video gaming. As someone who takes pride in lgbt content and who also dabbles in some gaming, I decided to create a project which analyzed the validity of these claims. Using methods taught to me in a data mining and analytics course, I gathered random samples of video information from youtube’s API and recorded the correlation between these topics and their status on restricted mode. "
    };

var lab_assistant = 
    {
    	"svg": "none",
    	"title": "Lab Assistant",
    	"content": "Majoring in computer science at Berkeley is tough and leaves little room for anything else in life, but I still tried to pursue some kinda of extracurricular career during my time there. For about a year I was a lab assistant for the introductory computer science course known as CS61A. It was pretty rewarding to teach students who were as scared (or maybe less scared) as I was about computer science.  Around this time I also became part of an organization on campus known as CS Scholars which aimed to celebrate diversity in the CS program while also allowing students to collaborate and help each other. We were taken on field trips and had special sections which allowed us to grow as a group in the scary world of college."
    };

var comics = 
    {
    	"svg": "none",
    	"title": "Comics",
    	"content": "Oh cool! You wanna see some comics. Here are some examples and attempts at comics that I’ve dreamt of making a reality ever since childhood. I’m glad to say that my first passion of drawing has persisted into early adulthood and is here on display for you, my glorious website visitor! Now for the sake of filling out the space here with text, here's a horrifying story. As a senior in highschool I thought I’d create a doodle for google in hopes of getting scholarship money. I finished and was about to submit minutes before midnight only to realize I was too late due to my TIME ZONE. You can see that project below along with others."
    };

var secure_files = 
    {
    	"svg": "none",
    	"title": "Secure Files",
    	"content": "A relatively early project in my CS career at Berkeley, secure files was a project for a class known as...security! The goal was to create a system which allowed for the sharing of files while also protecting against a malicious server. It was a great exercise in project design since it wasn't something you could just start coding. My partner and I had to sit and think about our plan of attack and it turned out to be extremely enjoyable. With the use of asymmetric keys, symmetric keys, and MACs, we were able to safeguard those made up files! "
    };

var shakespeare = 
    {
    	"svg": "none",
    	"title": "Shakespeare",
    	"content": "Do you love a good blend of technology and literature? Well boy is this your type of project. As part of an assignment at school I was tasked to use software which allowed for the "
    };

var steal = 
    {
    	"svg": "none",
    	"title": "Steal",
    	"content": "Good artists copy; great artists steal! What a twisted yet exceptionally true quote. This idea is what the theme for this in-process iOS app. The app allows users to snap pictures of images with inspiring color themes. Then the hex codes for those colors are extracted and given to the user so they may use it for their own projects. I can’t speak for other designers or artists, but this is something I think would really benefit myself. This is a personal project so I’d be in charge of everything, coding and design, that's why it's such an exciting project! Stay tuned to see the final outcome!"
    };

var cars = 
    {
    	"svg": "none",
    	"title": "Self Driving Cars",
    	"content": "My experience with research! During my last summer at Berkeley I aimed to put myself in a position to learn about new topics my classes hadn’t teached me. After emailing a professor and research assistant about my interest, I was finally put on a research team which specialized in self driving cars. I was tasked with helping to create an interface which allowed users to identify and track cars in videos. This would then be fed to the machine learning algorithm as to help a self driving car identify other cars on the road. The project is still ongoing even after i left after that summer, but it was a great introduction into the world of research!"
    };

var projects = [];

projects[0]=breezy;
projects[1]=shopkick;
projects[2]=calappointments;
projects[3]=awkotaco;
projects[4]=graphic_design;
projects[5]=youtube;
projects[6]=lab_assistant;
projects[7]=comics;
projects[8]=secure_files;
projects[9]=shakespeare;
projects[10]=steal;
projects[11]=cars;

// var messageIndex = 0;

$("#previous").on("click", function(){
    // JavaScript modulo behavior requires us to make a lengthy decrement call
    messageIndex = (messageIndex + projects.length -1) % (projects.length);    
    $("#projecttitle").text(projects[messageIndex].title);
    $("#projectdescription").text(projects[messageIndex].content);
});

$("#next").on("click", function(){
    messageIndex = (messageIndex+1) % (projects.length);    
    $("#projecttitle").text(projects[messageIndex].title);
    $("#projectdescription").text(projects[messageIndex].content);
});

$("#message").text(projects[0].content);

// window.alert("is this going to work")
