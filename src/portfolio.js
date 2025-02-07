/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Atharva Soundankar",
  title: "Hi all, I'm Atharva",
  subTitle: emoji(
    "An aspiring data scientist who turns raw data into valuable insights, like a sculptor shaping a masterpiece from stone. Always learning, always evolving."
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=1FcwnODkhAL-N6sSy7yGISzpLiozA2dZx", 
displayGreeting: true // This will show the greeting section in the landing page
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mercydeez",
  linkedin: "https://www.linkedin.com/in/atharva-soundankar/",
  gmail: "atharva3895@gmail.com",
  facebook: "https://www.facebook.com/atharva.soundankar.7/",
  twitter: "https://x.com/Atharva3895",
  instagram: "https://www.instagram.com/atharva_soundankar/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS DATA SCIENTIST WHO LOVES FINDING HIDDEN PATTERNS IN DATA",
  skills: [
    emoji(
      "⚡ Gather and clean data using Python libraries like Pandas."
    ),
    emoji("⚡ Visualize and analyze data patterns with Matplotlib and Seaborn."),
    emoji(
      "⚡ Create, train, and evaluate machine learning models using Scikit-Learn."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/ico ns?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R programming",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Sql-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
       skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "Hacherrank",
      fontAwesomeClassname: "fab fa-hackerrank"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune  University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Master of Science in Computer Application",
      duration: "September 2023 - July 2025"
    },
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - July 2023",
      desc: "Passed with 'A' Grade"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "70%"
    },
    {
      Stack: "Leadership",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr.Data Analyst",
      company: "Manasvi Tech Solutions Pvt.Ltd.",
      companylogo: require("./assets/images/manasvi.png"),
      date: "December 2024 – Present",
      desc: "In my role as a Data Analyst, I collected, cleaned, and analyzed data to identify trends and patterns, created reports and dashboards, and provided actionable insights to support business decisions and improve operational efficiency."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: " Projects💡",
  subtitle: "SHOWCASING MY BEST WORK",
  projects: [
    {
      image: require("./assets/images/no_risk.png.png"),
      projectName: "Forest Fire Risk Prediction",
projectDesc: "A beginner-friendly Machine Learning project that predicts the risk of forest fires based on environmental factors. Built with Streamlit, this project provides real-time predictions and insightful visualizations.",
footerLink: [
  {
    name: "Live Demo",
    url: "https://forest-fire-risk-prediction-d9vmff5zuuvjvgoyjqjvpr.streamlit.app/"
  },
  {
    name: "GitHub Repository",
    url: "https://github.com/yourusername/forest-fire-risk-prediction/"
  }
]

    },
    {
      image: require("./assets/images/image.png"),
      projectName: "UPI_Transactions Analysis Dashboard",
      projectDesc: "This Power BI dashboard analyzes UPI transaction trends, payment methods, and regional insights. It provides data-driven insights into UPI growth, helping to understand patterns and improve decision-making in digital payments.",
      footerLink: [
        {
          name: "View Dashboard",
          url: "https://app.powerbi.com/groups/3497fe1f-7ddc-47fb-9bbd-61ef5071b8fa/reports/9150a168-6ce6-4760-afad-4956636faa14?ctid=d0d192ac-6b94-47ea-b38c-5bb83fd8c443&pbi_source=linkShare"
        },
        {
          name: "Github Repository",
          url: "https://github.com/mercydeez/UPI_Dashboard_PowerBI"
        }
      ]
    },
    {
      image: require("./assets/images/google.png"),
      projectName: "Google Play Store Analysis",
      projectDesc: "This project looks at Google Play Store data to find trends in app categories, ratings, installations, and performance. Using Python, Pandas, Seaborn, and Matplotlib, it shows key insights through simple and interactive visualizations.",
      footerLink: [
        {
          name: "Github Repository",
          url: "https://github.com/mercydeez/Google-Play-Analysis"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",


  achievementsCards: [
    {
      title: "Goethe Institute A2 Certification",
      subtitle:
        "Successfully passed the Goethe Institute A2 Exam, demonstrating proficiency in basic German language skills, including reading, writing, listening, and speaking, for everyday communication.",
      image: require("./assets/images/goethe.png"),
      imageAlt: "Goethe Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/19TwlmV_o3cNUJFYVjbYromEMSkZASjqE/view?usp=drive_link"
        }
      ]
    },
    {
      title: "HackerRank SQL Certified",
      subtitle:
        "Earned the HackerRank Basic SQL Certificate, demonstrating proficiency in SQL fundamentals, including querying databases, filtering data, and performing basic joins and aggregations.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Hackerrank l",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.hackerrank.com/certificates/iframe/55fe6e819027"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7798884495",
  email_address: "atharva3895@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};