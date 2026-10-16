---
layout: page
permalink: /research-interests/
title: Research Interests
description: What excites me keeps changing. Here is a record of my academic journey and current curiosities. Reading from the bottom section might help, since the sections are in reverse chronological order.
nav: true
nav_order: 1
toc:
  sidebar: left
---
Last updated: October 2026

<h4 style="font-weight:700;">Current</h4>

Life experiences are transient, yet they often leave lasting footprints on the mind and brain. Two people can live through nearly identical moments and come out changed in entirely different ways. Why are you and I different? What does “different” mean, and how can it be quantified reliably? These two questions are where my current interest begins.

> <p style="font-weight:700;">a. Why do individuals interpret and weigh the same experience so differently, to the point where one person forgets it and another carries it for years?</p>

What we perceive is not a direct copy of the world. It is already a reconstruction built from whatever the senses picked up. Processes such as attention allocation, executive control, and mind wandering interact to shape which aspects of incoming information and internally generated thought are amplified or fade from consciousness. Some impressions dimmed quickly, while others persist and shape how later information is processed. Over time, these experiences may reshape an individual’s expectations and priors (biases). I want to understand why individuals differ in how these processes operate, how these differences are reflected in large-scale brain organization, and how they relate to emotional and behavioral patterns.

> <p style="font-weight:700;">How can we better represent the brain to capture individual differences in biologically interpretable ways?</p>

Studying during my [cross-atlas connectome transformation project](https://eunahyang.github.io/projects/cat/), I questioned how our choices in processing and summarizing brain data shape what we can learn about individuals. Raw brain data are too high-dimensional to interpret directly, so they have to be processed and abstracted, but every abstraction also discards something. I want to understand which aspects of individual variation different representations capture, how reliably they capture them, and what those differences mean biologically. I want to use these representations to better understand brain organization and the mechanisms that support cognition (brain-behavior relationships), and to contribute to the broader field of understanding why people differ in how they process and respond to experience.

> <p style="font-weight:700;">c. Of what we call individual differences, how much is a shared computational principle expressed differently across people, how much is genuine individual signal, and how much is simply noise?</p>

These three may never be fully separable. What looks like noise in one analysis can turn out to be someone else's signal, and a lot of what gets called "individual" may just be a shared principle wearing a different face. If people were simply different, with no shared basis at all, thought and behavior would look random. They don't: there's a shared principle underneath, and we diverge from it just enough to become who we are. Any claim about what makes someone different also depends on what we're calling shared or normal to begin with, so defining that baseline is crucial. What interests me is that the line between the two doesn't stay put. It holds fairly steady in basic sensory processing, and loosens considerably in higher-order cognition, like interpreting a story or reasoning about someone else's mind. I want to know where the shared principle still dominates, where individual signal takes over, and what's actually happening in the brain when it does.

Precision approaches are only as good as the data they're built on. What raises that ceiling, I think, is a combination of deeply sampled datasets with larger subject numbers and methods that help us compare across people without smoothing away the very differences we're trying to find. I hope to eventually contribute to better-timed and more personalized mental-health intervention. But that's a destination, not the starting point. I'm also open to the means shifting, toward brain-computer interfaces, or further toward building the large-scale datasets this kind of question actually requires. What's settled is that I want to study this in the human brain with human MRI.

Brief descriptions of my current projects: [Click 'Current' section of the Project menu.](https://eunahyang.github.io/projects/)

<br>
<h4 style="font-weight:700;">Post-master's (early)</h4>

<div class="row"> 
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/curr_concept_2026.png" title="current concept" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic figure of my research questions. A shared experience reaches two people. They assign it different weight, their brains diverge over time, and one significantly changes their behavior, while the other doesn't. Hand-drawn-style illustrations were made with ChatGPT <a href="https://docs.google.com/document/d/1yk_ldRVAIIzMDgKmq9tm0DEIMPSBLERuiD17354Y180/edit?usp=sharing">[prompt]</a>, other graphs and the overall composition were made in Adobe Illustrator.
</div>



<br>
<h4 style="font-weight:700;" data-toc-text="Master's (2nd half)">Second half of the master's program</h4>

My research began to take a new direction toward human neuroimaging and network-level approaches. It felt like entering an entirely new world. I didn't even know how to open a raw T1 file at first. Everything felt foreign and overly abstract. But as I learned and practiced, I realized that what initially felt abstract was simply a different way to describe the same brain from a network/system level. It was interesting to see how distal brain regions synchronize and collectively generate human behavior as an output. Working with human MRI felt closer to real life. Instaed of focusing on a single circuit, I learned to analyze structural networks and closely followed functional analyses from non-invasive human MRI data.

Detailed information about the Parkinson's disease project with Yonsei Severance Hospital: [Click here](https://eunahyang.github.io/projects/pd-amyloid/)

> <p style="font-weight:700;"> How would the individuals behave, think or feel? What would it mean to live with reduced drive or emotional flatness?<br>And how could those phenotype originate from the brain's architecture?

While working on this project, I began to think deeply about disease complexity and individual heterogeneity. Patient with the same diagnosis could differ significantly in their symptoms and experiences. When I saw columns labeled 'apathy' or 'motivation' in the dataset (represented as numerical scores), I found it difficult to envision what those numbers actulally represented in an actual human being. Even after reading the questionnaires that was used to derive those scores, I kept wondering what these humans with that score/lables felt like from the inside. That gap between quantified measures and realities became one of the most interesting and unresolved questions for me.

<br>
<h4 style="font-weight:700;" data-toc-text="Master's (1st half)">First half of the master's program</h4>

In the early part of my master’s program, I was interested in how how the brain distributes energy with precise spatiotemporal coordination. Neurons fire within milliseconds, while vessels adjust over seconds, yet the resulting hemodynamic signal remains coherent across space and time.

> <p style="font-weight:700;"> How is such temporal precision and region specific coordination maintained in the neurovascular system?<br>What happens when the mechanical condition of this system begin to fail?

These questions led me to view neurovascular coupling as a dynamic control problem embedded in a hierarchical vascular network. I learned that the hierarchical organization of the brain vessel especially interesting. Vessels close to proximal branches (or small-order branches) are surrounded by smooth muscle cells with active contractility, but as vessels bifurcate into smaller perforating branches that penetrate deeper into the parenchyma, they are no longer wrapped by smooth muscle cells but by less contractile pericytes and even endothelial cells. This graudal loss of contractility makes deeper vessels respond more paassively. Then how does a neuronal response occurring deep in the tissue communicate upstream to secure the needed blood supply?

Before tackling these big questions, I wanted to start by examining one aspect of the system that mechanical properties of vessels being the boundary conditions for neurovascular coupling. I focused on how mechanical stress (originating from arterial stiffness) could distort the fine balance between neuronal demand and vascular response, even when pathology didn't originate in the brain. Although I had to discontinue this work after developing severe mouse allergies, this experience was a turning point for me to shift toward network neuroscience.

For early stage ideas of that time: [you can take a look here.](https://eunahyang.github.io/projects/pericyte-NVJ/)

<br>
<h4 style="font-weight:700;">Undergraduate years</h4>

I majored biology, studying fundamental disciplines such as biochem, genetics, molecular, cellular, and developmental biology. My first exposure to neuroscience came during a short summer session at UC Berkeley, where I found how differently the brain could be studied compared to the biology I have known.  

Later, during a fully funded exchange semester, returning at Berkeley, I took <i>Genetic Factors of Neuropsychology</i>, and this course changed how I thought about science. Until then, I had viewed “intervention” only through pharmacological means. But learning about the transition from DSM-IV to DSM-5 and how redefining autism as a spectrum could expand access to care and insurance coverage, was a <i>eureka</i> moment. I realized that research doesn’t need to end with a prescription to have an impact. 
Sometimes, understanding a disorder more accurately and carefully measuring its risk factors could directly improve quality of lives. That was the moment I began to see neuroscience not just as molecular mechanisms of the brain, but as a way to connect scientific understanding to real human outcomes.

At that time, I was obsessed with the idea:
> <p style="font-weight:700;"> What makes something truly interventible? Are there modifiable and systmic factors that can indirectly have an impact on brain health in broad populations?

Returning to Korea, I began my first full-time internship with this question in mind. For detailed project description: [click here](https://eunahyang.github.io/projects/eosinophil-bbb/)

Through this project, I began to study brain vasculature and realized how dynamic it is. I learned that blood flow can contribute to the clearance system (such as glympathic pathway). And the blood flow are altered by neurovascular coupling and pathological proteins. Growing interest in coordination between neural activity and local blood supply drove me to apply master program.
