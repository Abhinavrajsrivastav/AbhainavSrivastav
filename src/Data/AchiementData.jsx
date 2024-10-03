import React from 'react';

const AchiementData = () => {
    const AchivementsData = [
        {
            src: "./images/Achivements/leetcode.png",
            gitHub: "",
            org: "",
            name: "Leetcode",
            about: "Rating 1564+ ✨",
            link: "https://leetcode.com/Abhinav254/",
            techs: ["Java", "DSA", "Competitive Programming", "C", "Coding Contest"]
        },
        {
            src: "./images/Achivements/Codfolio.png",
            gitHub: "",
            org: "",
            name: "Codfolio",
            about: "Solved 850+ Questions | 300+ Active Days | 1620+ Rating ✨",
            link: "https://codolio.com/profile/2llPokxI",
            techs: ["Java", "DSA", "Competitive Programming"]
        },
        {
            src: "./images/Achivements/github.png",
            gitHub: "",
            org: "",
            name: "Github Stats",
            about: "🏆 Achived 15+ Stars | 1100+ Commits",
            link: "https://github.com/Abhinavrajsrivastav",
            techs: ["Core Java", "DSA", "Competitive Programming", "Contribution", "Open Source", "JavaScript", "React.js", "Node.js", "Spring Boot"]
        },
        {
            src: "./images/Achivements/gfg.png",
            gitHub: "",
            org: "",
            name: "GeeksForGeeks",
            about: "🏆 Institution Rank 27 | 1670+ Rating | 3 ⭐",
            link: "https://auth.geeksforgeeks.org/user/abhirajsrivast254",
            techs: ["Java", "DSA", "Competitive Programming", "C", "Coding Contest"]
        },
        {
            src: "./images/Achivements/Hackerranks.png",
            gitHub: "",
            org: "",
            name: "Hackerrank Stats",
            about: "🏆 Java - 3 🌟| C - 4 🌟| PS - 3 🌟",
            link: "https://www.hackerrank.com/profile/CSME2A_b1531174",
            techs: ["Java", "DSA", "Competitive Programming", "C", "Problem Solving", "SQL", "Python"]
        },
        {
            src: "./images/Achivements/leetcode200days.png",
            gitHub: "",
            org: "",
            name: "Letcode Badge",
            about: "First 200 Days at Leetcode ✨",
            link: "https://leetcode.com/Abhinav254/",
            techs: ["Java", "DSA", "Competitive Programming", "Coding Contest"]
        },
    ];


    const certificationsData = [
        {
            src: "./images/Achivements/JPMC.png",
            gitHub: "",
            org: "JPMorgan Chase",
            name: "Investment Banking Job Simulation",
            about: "Find some M&A targets | Target information and auction process | Financial analysis – run the numbers | Provide an investment recommendation",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_JPMorgan%20Chase_h5n9PSyivWSGLrxvf_1726312522251_completion_certificate.pdf",
            techs: ["Java", "Advanced Data Structures","Software Architecture", "Relational Database Design", "Data Munging",  "Java", "Python"]
        },
        {
            src: "./images/Achivements/Java_Pw.png",
            gitHub: "",
            org: "Walmart USA",
            name: "Advanced Software Engineering Job Simulation",
            about: "Advanced Data Structures | Software Architecture | Relational Database Design | Data Munging | Java | Python",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_h5n9PSyivWSGLrxvf_1720003653339_completion_certificate.pdf?trk=public_profile_see-credential",
            techs: ["Java", "Advanced Data Structures","Software Architecture", "Relational Database Design", "Data Munging",  "Java", "Python"]
        },
        {
            src: "./images/Achivements/Accenture.png",
            gitHub: "",
            org: "Accenture Virtual Program",
            name: "Accenture Technology Consulting Job Simulation",
            about: "Project kickoff | Requirements gathering | Voting application design | Create agile stories",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Australia/AMZXXaKrixhEK2T72_Accenture%20Australia_h5n9PSyivWSGLrxvf_1722110441603_completion_certificate.pdf",
            techs: ["Designing", "Researching", "Implementing", "Communicating"]
        },
        {
            src: "./images/Achivements/Java_Pw.png",
            gitHub: "",
            org: "iNeuron.ai",
            name: "Java With DSA And System Design 2.0",
            about: "Java | DSA | CP | SQL | MongoDB | Spring Boot | System Design",
            link: "https://learn.pwskills.com/certificate/15a6646c-67ba-4222-b36b-0e732e9c100c",
            techs: ["Java", "DSA", "Competitive Programming", "SQL", "MongoDB", "Spring Boot", "JDBC", "DataBase", "System Design", "Object Oriented Programming"]
        },
        {
            src: "./images/Achivements/Web_Development_Bootcamp.png",
            gitHub: "",
            org: "Udemy",
            name: "Web Development Bootcamp",
            about: "JavaScript | Bootstrap | React.js ",
            link: "https://www.udemy.com/certificate/UC-c18bbb12-d072-4ac8-85c5-b5cc1c0fc43a/",
            techs: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js", "Express.js", "SQL", "MongoDB"]
        },
        {
            src: "./images/Achivements/Jav_Basics.png",
            gitHub: "",
            org: "Hackerrank",
            name: "Problem Solving In Java",
            about: "Java | Problem Solving ",
            link: "https://www.hackerrank.com/profile/CSME2A_b1531174",
            techs: ["Java"]
        },
        {
            src: "./images/Achivements/Problem_solving.png",
            gitHub: "",
            org: "Hackerrank",
            name: "Problem Solving In Java",
            about: "Java | C | Problem Solving",
            link: "https://www.hackerrank.com/profile/CSME2A_b1531174",
            techs: ["Java"]
        },
        {
            src: "./images/Achivements/SQL_Basics.png",
            gitHub: "",
            org: "Hackerrank",
            name: "SQL Certified",
            about: "SQL | Problem Solving",
            link: "https://www.hackerrank.com/profile/CSME2A_b1531174",
            techs: ["SQL", "MYSQL"]
        },
        {
            src: "./images/Achivements/Java_Script_Essential.png",
            gitHub: "",
            org: "Cisco",
            name: "Javascript Essential",
            about: "JavaScript | DSA | JavaScript fundamentals",
            link: "https://www.credly.com/badges/59f9792a-a875-4d85-9652-0ce7712868ca/public_url",
            techs: ["JavaScript"]
        },
        {
            src: "./images/Achivements/Python_Essential.png",
            gitHub: "",
            org: "Cisco",
            name: "Python Essential",
            about: "Python Basics",
            link: "https://www.credly.com/badges/ac023cac-33f0-4422-a0f2-4d9337262942/public_url",
            techs: ["Python Basics", "Fundamentals"]
        }
    ];

    const Hackathons = [
        {
            src: "./images/Hackathons/GFGHackFest.png",
            gitHub: "",
            org: "GFG",
            name: "GFG Hackfest 2024 | Noida",
            about: "Attended GFG's recent hackathon",
            link: "https://drive.google.com/file/d/1NjTk3KImfc442bSj_4ghzNk9AgaD9iUh/view",
            techs: []
        },
        {
            src: "./images/Hackathons/Hackoverse.png",
            gitHub: "",
            org: "ABES EC",
            name: "Data Science Community",
            about: "Attended Hackoverse Hackathon",
            link: "https://credsverse.com/credentials/ceedaea9-21b4-46eb-baed-811b76834361",
            techs: []
        },
        {
            src: "./images/Achivements/Educome.jpg",
            gitHub: "https://abhinavrajsrivastav.github.io/pacifics-path/",
            org: "Google Gemini Developer Competition - 2024",
            name: "Educome",
            about: "A Platform For an Engineering Aspirants",
            link: "https://ai.google.dev/competition/projects/educome",
            techs: []
        }
    ]

    return { AchivementsData, certificationsData,Hackathons };
}

export default AchiementData;
