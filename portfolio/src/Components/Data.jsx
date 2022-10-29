import c from "./assest/c.png";
import java from "./assest/java.png";
import python from "./assest/python.png";
import html from "./assest/html.png";
import css from "./assest/css.png";
import tailwind from "./assest/tailwind.png";
import js2 from "./assest/js2.png";
import rect from "./assest/rect.png";
import php from "./assest/php.png";
import dj from "./assest/dj.png";
import sql from "./assest/sql.png";
import github from "./assest/github.png";
import vote from "./assest/vote.png";
import algo from "./assest/algo.png";
import ds from "./assest/ds.png";

/* Skills Data-Set */

const Data = [
    {
        id : 1,
        imgsrc : c,
    },
    {
        id: 2,
        imgsrc : java,
    },
    {
        id: 3,
        imgsrc: python,
    },
    {
        id: 4,
        imgsrc: html,
    },
    {
        id: 5,
        imgsrc: css,
    },
    {
        id: 6,
        imgsrc: tailwind,
    },
    {
        id: 7,
        imgsrc: js2,
    },
    {
        id: 8,
        imgsrc: rect,
    },
    {
        id: 9,
        imgsrc: php,
    },
    {
        id: 10,
        imgsrc: dj,
    },
    {
        id: 11,
        imgsrc: sql,
    },
    {
        id: 12,
        imgsrc: github,
    }
]


/* Project Data-set */

const projectData = [
    {
       id : 1,
       imgsrc : "https://user-images.githubusercontent.com/68802755/168081638-05a3933b-9f36-4c6f-98a4-581fd265123d.png",
       title : "Library Management System",
       details : "I have developed library management system using tkinter libraries in python. so all components are used in libarary management system.",
       github : "https://github.com/Adityasingh39/LibrarySystempython",
       youtube : "https://youtu.be/gfKtsv5npWY",
    },

    {
        id : 2,
        imgsrc : "https://user-images.githubusercontent.com/68802755/168091567-fc485a56-8f5a-442c-832a-1e61460d7296.png",   
        title : "Student Management System",
        details : "I have developed students management system using PyQt5 libraries in python. so all components are used in Students management system",
        github : "https://github.com/Adityasingh39/Student-management-System",
        youtube : "https://youtu.be/dVb0inSkKjA",
    },

    {
        id : 3,
        imgsrc : vote,
        title : "Online Voting System",
        details : "I have developed Online Voting System using fronted languages(HTML5,CSS,JavaScript) and Backend languages(PHP) and MySql Database.",
        github : "",
        youtube : "",
    },

    {
        id : 4,
        imgsrc : "https://user-images.githubusercontent.com/68802755/168384063-69377546-1e64-446d-a51d-b9e567081c59.png",
        title : "Simple Calculator",
        details : "I have developed Online Voting System using fronted languages(HTML5,CSS,JavaScript) and Backend languages(PHP) and MySql Database.",
        github : "https://github.com/Adityasingh39/Calculator-with-Python",
        youtube : "https://youtu.be/0swFdwO2YaU",
    }
]

/* Repositories Data-set */



const RepData = [
    {
        id : 1,
        imgsrc : ds,
        title : "Data Structure With Python",
        details : "Inside Repositories, All Data Structure Concept like as Linked List, Stack, Queue, Tree, Graph, Heaps are included.",
        link : "https://github.com/Adityasingh39/Data-Structure-with-Python",
    },

    {
        id : 2,
        imgsrc : algo,
        title : "Algorithms With Python",
        details : "Inside Repositories, All Algorithms like as a Searching, Sorting, Greedy are included.",
        link : "https://github.com/Adityasingh39/Algorithms-with-Python",
    },
]

export default Data;
export {projectData};
export {RepData};