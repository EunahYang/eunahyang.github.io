// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-interests",
          title: "Research Interests",
          description: "What excites me keeps changing. Here is a record of my academic journey and current curiosities. Reading from the bottom section might help, since the sections are in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research-interests/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Current and past experiences of mine",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-developing-ideas",
          title: "Developing Ideas",
          description: "This section introduces conceptual lines of work that I am currently developing. These concepts originate from me and may include ongoing discussions with my current PI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/developing-ideas/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Last updated in October 2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
          },
        },{id: "nav-personal",
          title: "Personal",
          description: "More information of myself, including non-academic ones",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-cross-atlas-connectome-transformation-modeling-addressing-atlas-dependent-discrepancies-in-brain-network-analysis",
          title: 'Cross-atlas connectome transformation modeling: addressing atlas-dependent discrepancies in brain network analysis',
          description: "[&quot;2025-&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a2a/";
            },},{id: "projects-differential-gene-expression-and-functional-profiling-in-er-recurrent-breast-cancer",
          title: 'Differential gene expression and functional profiling in ER+ recurrent breast cancer',
          description: "2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bioinfo_erbc/";
            },},{id: "projects-similarity-based-patient-identification",
          title: 'Similarity-based patient identification',
          description: "2024-",
          section: "Projects",handler: () => {
              window.location.href = "/projects/delta_check/";
            },},{id: "projects-parasite-induced-hypercoagulability-and-its-potential-harmful-effect-on-cerebrovascular-system",
          title: 'Parasite-induced hypercoagulability and its potential harmful effect on cerebrovascular system',
          description: "[&quot;2020-2022&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eosinophil-bbb/";
            },},{id: "projects-association-of-amyloid-copathology-and-white-matter-network-in-parkinson-disease",
          title: 'Association of amyloid copathology and white matter network in Parkinson’ disease',
          description: "[&quot;2023-2025&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pd-amyloid/";
            },},{id: "projects-mechanical-constraints-with-arterial-stiffness-having-impact-on-neurovascular-coupling-and-microvascular-flow-regulation",
          title: 'Mechanical constraints with arterial stiffness having impact on neurovascular coupling and microvascular flow...',
          description: "[2022]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pericyte-NVJ/";
            },},{id: "projects-neuroimaging-based-transdiagnostic-approach-to-psychiatric-disorders-in-adolescents",
          title: 'Neuroimaging-based transdiagnostic approach to psychiatric disorders in adolescents',
          description: "2025-",
          section: "Projects",handler: () => {
              window.location.href = "/projects/transdiagnostics/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%75%6E%61%68%79%79%61%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/eunahyang", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/eunahyyang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
