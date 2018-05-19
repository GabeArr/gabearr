
var tools = {
  /**
   *
   * Used to get the length of a rect
   *
   * @param el is the rect element ex $('.rect')
   * @return the length of the rect in px
   */
  getRectLength:function(el){
    var w = el.getAttribute('width');
    var h = el.getAttribute('height');

    return (w*2)+(h*2);
  },

  /**
   *
   * Used to get the length of a Polygon
   *
   * @param el is the Polygon element ex $('.polygon')
   * @return the length of the Polygon in px
   */
  getPolygonLength:function(el) {
    var points = el.getAttribute('points');
    points = points.split(' ');
    if (points.length > 1) {
      function coord(c_str) {
        var c = c_str.split(',');
        if (c.length != 2) {
          return; // return undefined
        }
        if (isNaN(c[0]) || isNaN(c[1])) {
          return;
        }
        return [parseFloat(c[0]), parseFloat(c[1])];
      }

      function dist(c1, c2) {
        if (c1 != undefined && c2 != undefined) {
          return Math.sqrt(Math.pow((c2[0]-c1[0]), 2) + Math.pow((c2[1]-c1[1]), 2));
        } else {
          return 0;
        }
      }

      var len = 0;
      // measure polygon
      if (points.length > 2) {
        for (var i=0; i<points.length-1; i++) {
          len += dist(coord(points[i]), coord(points[i+1]));
        }
      }
      // measure line or measure polygon close line
      len += dist(coord(points[0]), coord(points[points.length-1]));
      return len;
    } else {
      return 0;
    }
  },

  /**
   *
   * Used to get the length of a line
   *
   * @param el is the line element ex $('.line')
   * @return the length of the line in px
   */
  getLineLength:function(el){
    var x1 = el.getAttribute('x1');
    var x2 = el.getAttribute('x2');
    var y1 = el.getAttribute('y1');
    var y2 = el.getAttribute('y2');
    var lineLength = Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
    return lineLength;

  },

  /**
   *
   * Used to get the length of a circle
   *
   * @param el is the circle element
   * @return the length of the circle in px
   */
  getCircleLength:function(el){
    var r = el.getAttribute('r');
    var circleLength = 2 * Math.PI * r; 
    return circleLength;
  },


  /**
   *
   * Used to get the length of the path
   *
   * @param el is the path element
   * @return the length of the path in px
   */
  getPathLength:function(el){
    return el.getTotalLength();
  }
}




//USE IN ALL HTML FILES
function setDashArrayAndOffset(){
  var paths = document.getElementsByClassName('drawn-stroke');
  var pathLength = 0;
  Array.prototype.forEach.call(paths, function(p) {
    // pathLength = p.getTotalLength();
    switch(p.constructor) {
      case SVGPathElement:
        pathLength = tools.getPathLength(p);
        break;
      case SVGRectElement:
        pathLength = tools.getRectLength(p);
        break;
      case SVGCircleElement:
        pathLength = tools.getCircleLength(p);
        break;
      case SVGPolygonElement:
        pathLength = tools.getPolygonLength(p);
        break;
      case SVGLineElement:
        pathLength = tools.getLineLength(p);
        break;
    }

      // var pathLength = p.getTotalLength();
      p.style.strokeDasharray = pathLength;
      p.style.strokeDashoffset = pathLength;
  });
}

$( document ).ready(function() {
  setDashArrayAndOffset();
  coloredLetterShimmer();
  // ABOUT PAGE DRAWING ANIMATIONS
  $('#chatbox').delay(800).animate({'stroke-dashoffset':0}, 2500, "swing");
  $('.skills-animation-delay').delay(500).animate({'stroke-dashoffset':0}, 2000);
  $('.power-cord').delay(1000).animate({'stroke-dashoffset':0}, 1500);
  $('.electric-current').delay(3000).animate({'stroke-dashoffset':0}, 1000);
  $('.contact-animation-delay').delay(1000).animate({'stroke-dashoffset':0}, 2000);
  $('.drawn-stroke').animate({'stroke-dashoffset': 0}, 2000, "swing");

  var contactSpaceWidth = document.getElementById("contactformspace").getAttribute("width");
  document.getElementById("contact-form").setAttribute("style", "width:" + contactSpaceWidth.toString() + "px");
});


// function drawElements() {
//   $('#chatbox').delay(800).animate({'stroke-dashoffset':0}, 2500, "swing");
//   $('.skills-animation-delay').delay(500).animate({'stroke-dashoffset':0}, 2000);
//   $('.power-cord').delay(1000).animate({'stroke-dashoffset':0}, 1500);
//   $('.electric-current').delay(3000).animate({'stroke-dashoffset':0}, 1000);
//   $('.drawn-stroke').animate({'stroke-dashoffset': 0}, 2000, "swing");
// }

// window.onload=drawElements();

//USE IN ABOUT HTML
function popUpLetterEntrance() {
  var letterpoptext = document.getElementsByClassName("popup-letters");
  Array.prototype.forEach.call(letterpoptext, function(e){
      var classedLetters = "";
      var startTime = 0.5;
      for (var i = 0; i < e.innerHTML.length; i++) {
          if (e.innerHTML[i] === " ") {
              classedLetters += " ";
          } else {
              classedLetters += "<span class='popin' style='animation-delay:" + 
                startTime + 
                "s'>" + 
                e.innerHTML[i] + "</span>";
              startTime += 0.08;
          }
      }
      e.innerHTML=classedLetters;
  });
}

//USE IN CONTACT HTML
function coloredLetterShimmer() {
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
        startTime += 0.05;
      }
    }
    e.innerHTML = classedLetters;
  });
}

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

//USE IN SKILLS HTML
function lightBulbsGlitchyFadeIn(){
  // window.alert("i am now entering the glitchy fade in");
  var skillDiv = "";
  var circles = "";
  var level = 0;
  var delayTime = 0;
  var classSkillName = "";
  for (var i = 0; i < skills.length; i++) {
    classSkillName = skills[i].name + "-skill";
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
}

var projIndex = {};
projIndex["breezy"] = 0;
projIndex["shopkick"] = 1;
projIndex["calappointments"] = 2;
projIndex["awkotaco"] = 3;
projIndex["graphicdesign"] = 4;
projIndex["youtube"] = 5;
projIndex["labassistant"] = 6;
projIndex["comics"] = 7;
projIndex["securefiles"] = 8;
projIndex["shakespeare"] = 9;
projIndex["steal"] = 10;
projIndex["car "] = 11;

//USE IN PROJECTS HTML

window.addEventListener("DOMContentLoaded", function() {
  let items = document.querySelectorAll(".grid-item");
  Array.from(items, function(item) {
    item.addEventListener("click", function() {
        sessionStorage.setItem("messageIndex", projIndex[item.id]);
      });
    });
  });

function listItems(items) {
  htmlList = "";
  for (var i = 0; i < items.length; i++) {
    htmlList += "<li>" + items[i] + "</li>";
  }
  return htmlList;
}

function loadProject() {
  var title = document.getElementById('projecttitle').innerHTML;
  project = projects[sessionStorage.getItem("messageIndex")];
  document.getElementById('projecttitle').innerHTML = project.title.toUpperCase();
  document.getElementById('projectdescription').innerHTML = project.content;
  document.getElementById('projectsvg').innerHTML = project.svg;
  document.getElementById('projectskills').innerHTML = listItems(project.skills);

}

var breezy = 
    {   "svg" : "<use xlink:href='#breezy_svg'/>",
        "title" : "Breezy",
        "content": "Here’s a project that incorporates smart watches! As the final assignment for my user interfaces course at Berkeley, I was put in a group with 4 other randos (actually really great people) and was challenged to whip up a dual device app that related in some way to health. The result? Breezy! This app works in a way which allows parents to monitor and track children with respiratory problems. The child wears the smartwatch (this is the future) which keeps track of their breathing rate while their parent(s) monitor this rate through the mobile app and are alerted in case of an emergency. Although the functionality of the app is limited (the projects main focus was UI/UX) their was still quite a bit of work into understanding android and dual device coding. My responsibilities lied in developing the mobile side (coded in android studio IE Java) and also identity design. Which means I got to code as well as make the logo!",
        "skills": ["Java","Android Studio","XML","UI/UX Design","Identity Branding"]
    };

var shopkick = 
    {
        "svg" : "<use xlink:href='#shopkick_svg'/>",
        "title" : "Shopkick",
        "content": "Ever heard of Shopkick, cuz its like FREE MONEY. To quickly explain, this app is basically a point rewarding system which encourages consumers to shop (or just go to stores) in exchange for gift cards at various retailers. As an intern I was brought in to help on a pretty big project: targeting. The company was under the process of targeting users for specific ads based on demographic, behavioral, and locational data. My task was to create forms on the admin panel which allowed the company to specify this kind of targeting. I then relayed this information to a matchmaking service made by another engineer on the team. I also was responsible for creating a service which automated the rewarding of kicks after users complete demographic in-app surveys. In addition to contributing to this survey side project I was also able to implement web design concepts throughout the admin panel!",
        "skills": ["Python", "Mako Templating", "CSS", "Javascript", "SQL"]
    };

var calappointments = 
    {
    	"svg": "<use xlink:href='#calappointments_svg'/>",
    	"title": "Calappointments",
    	"content": "As a graduate of UC Berkeley I have a lot of great things to say about it, but there are also some complaints. One being the appointment system which was in place during my time there. Most everyone I knew was put off by trying to make appointments with a general counselor. In response to this I teamed up with others in my database management class and created a prototype website that focused on a better system. With what we learned about relational databases we focused on managing data on counselors, students, sub-schools, and majors in order to better organize the setting of appointments, from both the counselor and student side of the process. My role in the project was mainly as a server side engineer. However I also was able to create a logo for the team!",
      "skills": ["HTML", "CSS", "Python", "Flask"]
   };

var awkotaco = 
    {
    	"svg": "<use xlink:href='#awkotaco_svg'/>",
    	"title": "Awkotaco",
    	"content": "Ever been in a situation where you don’t know what to say, or even worse you said something which just made things even more awkward? Well fear no more! Introducing AWKOTACO. As my final project for a web architecture class, I teamed up with three other students and created this site which focuses on delivering the best phrases, jokes, and comebacks for any situation you could ask for. By making use of self made APIs, we were able to fetch appropriate responses based on what type of “taco” a user wishes to use. As a more recent development, a user is even able to create their own taco, which is submitted and added to an API that users can see. My role was as a server side developer, but I also played a big role in helping design the site.",
      "skills": ["HTML", "CSS", "Javascript", "NodeJS"]
    };

var graphic_design =
    {
    	"svg": "<use xlink:href='#graphic_design_svg'/>",
    	"title": "Graphic Design",
    	"content": "Even though I decided to pursue a technical passion with my degree, I never gave up on my artistic passion. Throughout the second hand of college I decided to take a student run course on graphic design and have been dabbing in the field ever since. I’ve created various logos and posters for different competitions and projects. Recently I’ve been creating for others and the companies and ideas they wish to pursue. I’ve showcased this aspect of my career by designing my personal website, illustrations and all!",
      "skills": ["Illustrator", "Photoshop", "InDesign"]    
    };

var youtube = 
    {
    	"svg": "<use xlink:href='#restricted_youtube_svg'/>",
    	"title": "Youtube",
    	"content": "Last year there was quite a buzz around youtube’s restricted mode, which served as a way for parents to safeguard their children against inappropriate content. The controversy surrounded the fact that this guarded against material revolving around material which some found unfair such as lgbtq, and video gaming. As someone who takes pride in lgbt content and who also dabbles in some gaming, I decided to create a project which analyzed the validity of these claims. Using methods taught to me in a data mining and analytics course, I gathered random samples of video information from youtube’s API and recorded the correlation between these topics and their status on restricted mode. ",
      "skills": ["Python", "Jupyter Notebook", "Pandas"]
    };

var lab_assistant = 
    {
    	"svg": "<use xlink:href='#lab_svg'/>",
    	"title": "Lab Assistant",
    	"content": "Majoring in computer science at Berkeley is tough and leaves little room for anything else in life, but I still tried to pursue some kinda of extracurricular career during my time there. For about a year I was a lab assistant for the introductory computer science course known as CS61A. It was pretty rewarding to teach students who were as scared (or maybe less scared) as I was about computer science.  Around this time I also became part of an organization on campus known as CS Scholars which aimed to celebrate diversity in the CS program while also allowing students to collaborate and help each other. We were taken on field trips and had special sections which allowed us to grow as a group in the scary world of college.",
      "skills": ["Python"]    
    };

var comics = 
    {
    	"svg": "<use xlink:href='#comics_svg'/>",
    	"title": "Comics",
    	"content": "Oh cool! You wanna see some comics. Here are some examples and attempts at comics that I’ve dreamt of making a reality ever since childhood. I’m glad to say that my first passion of drawing has persisted into early adulthood and is here on display for you, my glorious website visitor! Now for the sake of filling out the space here with text, here's a horrifying story. As a senior in highschool I thought I’d create a doodle for google in hopes of getting scholarship money. I finished and was about to submit minutes before midnight only to realize I was too late due to my TIME ZONE. You can see that project below along with others.",
      "skills": ["Illustrator", "Photoshop"]
    };

var secure_files = 
    {
    	"svg": "<use xlink:href='#secure_files_svg'/>",
    	"title": "Secure Files",
    	"content": "A relatively early project in my CS career at Berkeley, secure files was a project for a class known as...security! The goal was to create a system which allowed for the sharing of files while also protecting against a malicious server. It was a great exercise in project design since it wasn't something you could just start coding. My partner and I had to sit and think about our plan of attack and it turned out to be extremely enjoyable. With the use of asymmetric keys, symmetric keys, and MACs, we were able to safeguard those made up files! ",
      "skills": ["Python"]
    };

var shakespeare = 
    {
    	"svg": "<use xlink:href='#shakespeare_svg'/>",
    	"title": "Shakespeare",
    	"content": "Do you love a good blend of technology and literature? Well boy is this your type of project. As part of an assignment at school I was tasked to use software which allowed for the ",
      "skills": ["Python", "Jupyter Notebook", "Pandas"]
    };

var steal = 
    {
    	"svg": "<use xlink:href='#steal_svg'/>",
    	"title": "Steal",
    	"content": "Good artists copy; great artists steal! What a twisted yet exceptionally true quote. This idea is what the theme for this in-process iOS app. The app allows users to snap pictures of images with inspiring color themes. Then the hex codes for those colors are extracted and given to the user so they may use it for their own projects. I can’t speak for other designers or artists, but this is something I think would really benefit myself. This is a personal project so I’d be in charge of everything, coding and design, that's why it's such an exciting project! Stay tuned to see the final outcome!",
      "skills": ["Swift", "UI/UX Design", "Identity Branding"]
    };

var cars = 
    {
    	"svg": "<use xlink:href='#car_svg'/>",
    	"title": "Self Driving Cars",
    	"content": "My experience with research! During my last summer at Berkeley I aimed to put myself in a position to learn about new topics my classes hadn’t teached me. After emailing a professor and research assistant about my interest, I was finally put on a research team which specialized in self driving cars. I was tasked with helping to create an interface which allowed users to identify and track cars in videos. This would then be fed to the machine learning algorithm as to help a self driving car identify other cars on the road. The project is still ongoing even after i left after that summer, but it was a great introduction into the world of research!",
      "skills": ["HTML", "CSS", "Javascript"]
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

var pIndex = 0;


$("#previous").on("click", function(){
    // JavaScript modulo behavior requires us to make a lengthy decrement call
    // var messageIndex = parseInt(sessionStorage.getItem("messageIndex"));
    // sessionStorage.setItem("messageIndex", (messageIndex + projects.length -1) % (projects.length));
    // messageIndex = parseInt(sessionStorage.getItem("messageIndex"));  
    pIndex = (pIndex+projects.length-1) % projects.length;
    project = projects[pIndex];
    // document.getElementById("tv-content").animate({opacity:[1,0,1]},800);
    // $("#tv-content").animate({"opacity":[1,0,1]},800);
    setTimeout(function(){
      document.getElementById('projecttitle').innerHTML = project.title.toUpperCase();
      document.getElementById('projectdescription').innerHTML = project.content;
      document.getElementById('projectsvg').innerHTML = project.svg;
      document.getElementById('projectskills').innerHTML = listItems(project.skills);
    },0);
    // document.getElementById('projecttitle').innerHTML = project.title.toUpperCase();
    // document.getElementById('projectdescription').innerHTML = project.content;
    // document.getElementById('projectsvg').innerHTML = project.svg;
    // document.getElementById('projectskills').innerHTML = listItems(project.skills);
});

$("#next").on("click", function(){
    // var messageIndex = parseInt(sessionStorage.getItem("messageIndex"));
    // sessionStorage.setItem("messageIndex", ((messageIndex + 1) % (projects.length)));
    // messageIndex = parseInt(sessionStorage.getItem("messageIndex"));
    // project = projects[sessionStorage.getItem("messageIndex")];
    pIndex = (pIndex+1) % projects.length;
    project = projects[pIndex];
    // document.getElementById("tv-content").animate({opacity:[1,0,1]},800);
    // $("#tv-content").animate({"opacity":[1,0,1]},800);
    setTimeout(function(){
      document.getElementById('projecttitle').innerHTML = project.title.toUpperCase();
      document.getElementById('projectdescription').innerHTML = project.content;
      document.getElementById('projectsvg').innerHTML = project.svg;
      document.getElementById('projectskills').innerHTML = listItems(project.skills);
    },0);
});

$("#message").text(projects[0].content);


function tvTime(i){
  var navbar = document.getElementById('projNavBar');
  navbar.style.webkitFilter = "blur(20px)";
  var cds = document.getElementById('projects');
  cds.style.webkitFilter = "blur(30px)";
  var tv = document.getElementById('tvset');
  tv.style.display = "block";
  pIndex = i;
  project = projects[pIndex];
  document.getElementById('projecttitle').innerHTML = project.title.toUpperCase();
  document.getElementById('projectdescription').innerHTML = project.content;
  document.getElementById('projectsvg').innerHTML = project.svg;
  document.getElementById('projectskills').innerHTML = listItems(project.skills);
}

function exitTV(){
  var navbar = document.getElementById('projNavBar');
  navbar.style.webkitFilter = "blur(0px)";
  var cds = document.getElementById('projects');
  cds.style.webkitFilter = "blur(0px)";
  var tv = document.getElementById('tvset');
  tv.style.display = "none";
}

var  mylink = document.getElementById("github_link");

