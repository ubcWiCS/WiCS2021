/* Content for the Resources page (/resources).
   Adapted from "How to Break Into Research: A Guide for UBC Undergraduates"
   by Irmak Bayir. Edit the text here — the page only renders it.

   Inline links: write [label](key) inside any `text`. `key` is a deptLinks key
   (rendered as a highlighted source-of-truth link), a full URL, or a #anchor.

   Block types: text | quote | heading | note | questions | steps | links |
                opportunities | researchGroupsTable */

export const meta = {
  title: "How to Break Into Research",
  subtitle: "A guide for UBC undergraduates",
  writtenBy: "Irmak Bayir",
  lastUpdated: "July 30, 2026",
  source: "https://irmikimikmik.github.io/wics_research/index.html",
  disclaimer:
    "This guide centralizes resources and provides an entry point for undergraduates exploring CS research. Departmental links (highlighted) are the source of truth. All information here is derived from those sources, so please verify details directly with official pages to ensure accuracy.",
  feedback:
    "For feedback or corrections, please contact [ubcwics@gmail.com](mailto:ubcwics@gmail.com).",
};

export const intro =
  "Our department has many research opportunities, and finding a starting point isn't always easy. We've organized resources into the paths below, which are not listed in any particular order. Exploring and applying often happen together, and having a sense of what excites you makes everything else easier.";

export const deptLinks = {
  researchAreas: "https://www.cs.ubc.ca/research-areas",
  researchGroups: "https://www.cs.ubc.ca/cs-research/lci",
  facultyDirectory: "https://www.cs.ubc.ca/people/faculty",
  departmentalNews: "https://www.cs.ubc.ca/news-events/news?year=All&tags=All",
  broaderReadingGroups: "https://www.cs.ubc.ca/cs-research/lci/reading-groups",
  mlFocusedReadingGroups: "https://ml.ubc.ca/reading-groups/",
  conferenceExamples:
    "https://www.cs.ubc.ca/students/undergrad/research-and-conferences",
  researchExperiences: "https://www.cs.ubc.ca/undergrads/research-opportunities",
  directedStudies: "https://www.cs.ubc.ca/students/undergrad/courses/specialty",
  researchAwards:
    "https://www.cs.ubc.ca/students/undergrad/research-and-conferences/undergraduate-student-research-awards",
  dataScienceForSocialGood: "https://dsi.ubc.ca/data-science-social-good",
};

export const researchGroups = [
  {
    researchGroup: "Systopia",
    website: "https://systopia.cs.ubc.ca/",
    readingGroupWebsite: "https://systopia.cs.ubc.ca/seminar",
    readingGroupHours: "Fridays, 10:00–11:00 am",
  },
  {
    researchGroup: "Security & Privacy Group",
    website: "https://spg.cs.ubc.ca/",
  },
  {
    researchGroup: "Integrated System Design",
    website: "https://www.cs.ubc.ca/labs/isd/",
  },
  {
    researchGroup: "Software Practices Lab",
    website: "https://spl.cs.ubc.ca/",
    readingGroupWebsite: "https://spl.cs.ubc.ca/reading-group.html",
    readingGroupHours: "Thursdays, 2:00–3:30 pm",
  },
  {
    researchGroup: "Digital Geometry Processing Group",
    website: "https://www.cs.ubc.ca/~sheffa/Graduate.html#prospective",
    readingGroupWebsite: "https://ubc-dgp.github.io/",
    readingGroupHours: "Tuesdays, 12:30–1:30 pm",
  },
  {
    researchGroup: "Algorithms Lab",
    website: "https://www.cs.ubc.ca/labs/algorithms/",
  },
  {
    researchGroup: "Mathematical Programming",
    website: "https://mathprog.cs.ubc.ca/",
  },
  {
    researchGroup: "The Scientific Computing Lab",
    website: "https://www.cs.ubc.ca/labs/scl/",
  },
  {
    researchGroup: "Human-AI Interaction Lab",
    website: "https://hai.cs.ubc.ca/",
  },
  {
    researchGroup: "Mathematics, Information, and Learning Data Group",
    website: "https://mild.ubc.ca/",
  },
  {
    researchGroup: "Social, Collaborative, and Inclusive User Systems Lab",
    website: "https://www.cs.ubc.ca/labs/socius/",
  },
  {
    researchGroup: "Multimodal User eXperience Group",
    website: "https://mux.cs.ubc.ca/",
  },
  {
    researchGroup: "Pacific Laboratory for Artificial Intelligence (PLAI)",
    website: "https://plai.cs.ubc.ca/",
    readingGroupWebsite: "https://plai.cs.ubc.ca/reading-group/",
    readingGroupHours: "Mondays (biweekly)",
  },
  {
    researchGroup: "Natural Language Processing Group",
    website: "https://nlp.cs.ubc.ca/",
    readingGroupWebsite: "https://nlp.cs.ubc.ca/reading-group",
    readingGroupHours: "Mondays, 1:00–2:00 pm (biweekly)",
  },
  {
    researchGroup: "eDAPT Group",
    website: "https://www.cs.ubc.ca/labs/edapt/",
  },
  {
    researchGroup: "Sensory Perception & Interaction Research Group",
    website: "https://www.cs.ubc.ca/labs/spin/",
    readingGroupWebsite: "https://www.cs.ubc.ca/labs/spin/get-involved",
    readingGroupHours: "Thursdays, 11:00 am–12:00 pm",
  },
  {
    researchGroup: "Computer Vision Lab",
    website: "https://vision.cs.ubc.ca/",
  },
  {
    researchGroup: "The Data Management and Mining (DMM) Group",
    website: "https://www.cs.ubc.ca/labs/db/home.php",
  },
  {
    researchGroup: "InfoVis Group",
    website: "https://www.cs.ubc.ca/group/infovis/",
  },
];

export const sections = [
  {
    id: "explore",
    label: "Explore",
    title: "Explore: Finding Research Areas",
    blocks: [
      {
        type: "text",
        text: "The departmental websites provide a list of [research areas](researchAreas).",
      },
      {
        type: "quote",
        text: "Our department's research is organised around 24 research groups, across the full spectrum of Computer Science topics. Particular strengths include Artificial Intelligence, Machine Learning, Graphics, HCI, Software Engineering, Programming Languages, Formal Methods, Systems, Security & Privacy, Data Science, Data Management and Mining, Theory and Scientific Computing.",
        citation: "https://www.cs.ubc.ca/students/grad/admissions",
        citationLabel: "UBC CS Graduate Admissions",
      },
      {
        type: "text",
        text: "Research is organized into [research groups](researchGroups), each led by one or more professors.",
      },
      {
        type: "quote",
        text: "There are currently eight groups under the AI umbrella.",
        citation: "https://www.cs.ubc.ca/cs-research/lci",
        citationLabel: "Laboratory for Computational Intelligence",
      },
    ],
    subsections: [
      {
        id: "guiding-questions",
        title: "Guiding Questions",
        blocks: [
          {
            type: "text",
            text: "It's normal to feel lost in technical terminology, especially when many terms overlap across labs and are unfamiliar if you're new to research. To narrow down your interests, start with what you know about yourself. Below are some guiding questions, to which you do not have to have all the answers. We believe the key is to start by focusing on what you like and what you're good at:",
          },
          {
            type: "questions",
            categories: [
              {
                title: "Courses",
                items: [
                  "Has there been a course you've taken and you've really enjoyed?",
                  "What about a course you did quite well in? Was that interesting?",
                  "Have you TA'ed a course that you enjoyed doing so?",
                ],
              },
              {
                title: "Professors",
                items: [
                  "Who are teaching these courses you've taken or you've TA'ed for and enjoyed?",
                  "If you've TA'ed a course, has there been a particular professor you aligned with in terms of communication and working style?",
                ],
              },
              {
                title: "Skills",
                items: [
                  "What kind of skills would you say are the most fun for you to work on?",
                  "Some examples are mathematical and theoretical thinking, implementation and systems design, data analysis and visualization, statistics and probability theory, etc.",
                ],
              },
            ],
          },
          {
            type: "text",
            text: "Once you've identified a course, skill, or professor, mapping it to a research area becomes easier. Start by eliminating groups you know you aren't passionate about. You can use our [research groups table](#research-groups-table) below to do so — just turn on cross-out mode.",
          },
        ],
      },
      {
        id: "research-groups-table",
        title: "Research Groups Table",
        blocks: [
          { type: "text", text: "Browse the department's research groups below." },
          { type: "researchGroupsTable" },
          {
            type: "text",
            text: "Note: Some professors have groups but no separate website. Please check the [faculty directory](facultyDirectory) to learn more about them. (For example: [Daochen Wang](https://wdaochen.com/#:~:text=Teaching%20and%20advising), [Khanh Dao Duc](https://kdaoduc.com/group/), and [Mijung Park](https://www.cs.ubc.ca/~mijungp/people.html) have groups listed on their personal pages.)",
          },
          {
            type: "text",
            text: "Finally, the [departmental news](departmentalNews) is one of the most up-to-date resources for emerging research from the department.",
          },
        ],
      },
    ],
  },

  {
    id: "connect",
    label: "Connect",
    title: "Connect: Getting Involved & Meeting People",
    subsections: [
      {
        id: "reading-groups",
        title: "Reading Groups",
        blocks: [
          {
            type: "text",
            text: "Reading groups are where professors and students gather to discuss research: whether that's a student's work, emerging trends in the field, or exciting new developments. The department has [broader reading groups](broaderReadingGroups) and [ML-focused reading groups](mlFocusedReadingGroups) websites. On this page, we expand on specific reading groups from the research labs listed above — turn on \"reading group info\" in the [research groups table](#research-groups-table) to view them.",
          },
          {
            type: "note",
            text: "⚠️ Important: dates and times listed may be outdated. Please confirm with the lab directly.",
          },
          { type: "heading", text: "What You Can Gain" },
          {
            type: "text",
            text: "Many reading groups welcome undergrads. It's a place to listen to presentations, see who's doing what in the department, and build presentation skills by watching senior students present. You learn just by showing up, and we highly recommend them.",
          },
          { type: "heading", text: "What It Takes" },
          {
            type: "steps",
            items: [
              {
                title: "Checking registration requirements",
                text: "Some reading groups ask you to email to register, join a Discord, etc.",
              },
              {
                title: "Finding the right time and place",
                text: "Lab websites can be outdated or unclear about reading group info. This is actually an opportunity to reach out! If reading group information isn't available, is ambiguous, or outdated, you can email the lab or a professor you're interested in.",
              },
              {
                title: "Bringing curiosity and enthusiasm",
                text: "We highly recommend reading the papers in advance, which are usually posted on the reading group scheduling page or via mailing lists. This prepares you to contribute to discussion. You don't need to present, but if you do, it's an excellent way to challenge yourself and make an impression.",
              },
            ],
          },
        ],
      },
      {
        id: "attending-conferences",
        title: "Attending Conferences",
        blocks: [
          {
            type: "text",
            text: "Participating in conferences and meeting people is incredibly useful — you don't need to have research work to benefit.",
          },
          {
            type: "text",
            text: "One of the best ways to learn is not by sitting at home buried in papers. Here, you can talk to students and ask questions. They come prepared to answer.",
          },
          {
            type: "text",
            text: "The department lists [conference examples](conferenceExamples) on their website. Here are some smaller-scale, local alternatives:",
          },
          {
            type: "links",
            items: [
              {
                title: "Computer Science Student Research Conference (CSSRC)",
                description: "Organized by CSSS and CSGSA at UBC.",
                url: "https://ubccsss.org/cssrc/",
              },
              {
                title:
                  "Canadian Celebration of Women in Computing (CAN-CWiC) WEST",
                tag: "Funding available",
                description:
                  "Organized by UBC and SFU. Compensation of the registration fee might be available in the form of awards — keep an eye on the CS newsletter.",
                url: "https://cscan-infocan.ca/celebration-of-women-in-computing/",
              },
            ],
          },
        ],
      },
      {
        id: "other-methods",
        title: "Other Methods",
        blocks: [
          {
            type: "group",
            title: "Join Us Pages",
            blocks: [
              {
                type: "text",
                text: "Some labs might have dedicated pages on how to get involved. Check the lab websites for a \"Join Us\" page with specific instructions! If something looks outdated, you can email the lab to let them know. It's nice to give a heads-up and a good excuse to introduce yourself.",
              },
              {
                type: "badges",
                items: [
                  {
                    title: "edapt Lab",
                    url: "https://www.cs.ubc.ca/labs/edapt/joinus.html",
                  },
                  {
                    title: "Socius Lab",
                    url: "https://www.cs.ubc.ca/labs/socius/join.html",
                  },
                  {
                    title: "SPIN Lab",
                    url: "https://www.cs.ubc.ca/labs/spin/get-involved",
                  },
                ],
              },
            ],
          },
          {
            type: "group",
            title: "Participate in User Studies",
            blocks: [
              {
                type: "text",
                text: "Another way to engage is to be a user study participant. Some labs recruit for studies, providing a low-commitment and fun way to see research in action.",
              },
              {
                type: "badges",
                items: [
                  {
                    title: "SPIN Lab — Current Studies",
                    url: "https://www.cs.ubc.ca/labs/spin/study",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "apply",
    label: "Apply",
    title: "Apply: Learning About Opportunities",
    subsections: [
      {
        id: "ubc-resources",
        title: "UBC Resources",
        blocks: [
          {
            type: "text",
            text: "The department has an incredibly helpful website on [research experiences](researchExperiences). These are common first steps for UBC undergraduate researchers. Having a research area or professor in mind helps, but isn't required.",
          },
          { type: "text", text: "Some examples from this link are:" },
          {
            type: "opportunities",
            items: [
              {
                title: "Directed Studies",
                meta: "During school terms, for course credit",
                description: "A one-on-one collaboration with a professor.",
                tip: "[Email professors whose work interests you](#cold-emailing-tips). Most collaborations start this way.",
                link: "directedStudies",
              },
              {
                title: "Research Awards",
                meta: "Summer internship, paid",
                description:
                  "Work full-time with a professor for 4 months over the summer. The government of BC subsidizes the salary, making it appealing for professors to mentor undergraduates.",
                details: [
                  "[USRA](https://students.ubc.ca/career/undergraduate-student-research-awards-nserc-cihr-sshrc/) / [SURE](https://science.ubc.ca/students/undergrad-research/sure) Awards are for domestic students and permanent residents.",
                  "[WLIURA](https://students.ubc.ca/career/work-learn-international-undergraduate-research-awards/) Awards are for international students.",
                ],
                tip: "[Email professors whose work interests you](#cold-emailing-tips)! In addition, the CS department holds info sessions for these awards. Keep an eye on the CS newsletter.",
                link: "researchAwards",
              },
              {
                title: "Data Science for Social Good (DSSG)",
                meta: "Summer internship, paid",
                description:
                  "Provides an opportunity to do interdisciplinary research projects focused on social impact.",
                link: "dataScienceForSocialGood",
              },
              {
                title: "Volunteering",
                description:
                  "Some labs accept unpaid volunteers. We believe people should be paid for their work, but this is an option if you are willing and have the capacity to do so.",
              },
            ],
          },
          {
            type: "heading",
            id: "cold-emailing-tips",
            text: "Tips on Cold Emailing",
          },
          {
            type: "text",
            text: "Most of these opportunities require reaching out. Here's some advice on how to do it well:",
          },
          {
            type: "steps",
            items: [
              {
                title: "Check their preferred method of contact",
                text: "If you are reaching out to a professor, do they have a preferred method of being contacted? This is usually listed on the personal website of the professor. Some might require you to include a specific piece of information, and some might ask you to use a specific format.",
              },
              {
                title: "You don't need a groundbreaking idea",
                text: "You don't need a groundbreaking research idea; what professors usually look for is curiosity, genuine interest, an overall understanding of what you're talking about, and motivation.",
              },
              {
                title: "Be authentic",
                text: "Professors can tell when you're not being genuine. Please be mindful of your AI usage.",
              },
              {
                title: "Be clear about what you want",
                text: "What are you hoping to get out of this interaction? Be clear in the answer to this question, and let that guide your email. Are you interested in Directed Studies? USRA? Just exploring?",
              },
              {
                title: "Use a clear subject line",
                text: "Professors get a lot of emails. If you're inquiring about Directed Studies, USRA, SURE, or WLIURA, please ensure that you put that in the subject line.",
              },
            ],
          },
        ],
      },
      {
        id: "non-ubc-resources",
        title: "Non-UBC Resources",
        blocks: [
          {
            type: "links",
            items: [
              {
                title: "Mitacs Accelerate",
                description: "Provides industry-partnered research internships.",
                url: "https://www.mitacs.ca/our-programs/accelerate/",
              },
              {
                title: "Mitacs RISE Globalink Research Internship",
                description: "An international research exchange program.",
                url: "https://www.mitacs.ca/our-programs/rise-globalink-research-internship/",
              },
            ],
          },
        ],
      },
    ],
  },
];
