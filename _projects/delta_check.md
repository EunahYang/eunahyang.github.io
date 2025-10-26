---
layout: page
title: Similarity-based Patient Identification
description: 2024-
img: assets/img/deltacheck_thumbnail.jpg
importance: 3
category: Current
---

Electronic medical records (EMR) often contain hidden risks of data corruption due to human error—such as mislabeled samples or mistakes during the digitization of handwritten documents. Even if such cases are rare, they can have a critical impact on accurately tracking a patient’s clinical trajectory and prognosis.

In hospital settings, a delta-check is commonly used to identify suspicious records by flagging unusually large changes in specific measurements compared to previous values. When flagged, clinicians manually review nearby records to verify and annotate possible errors. However, this process cannot fully distinguish between genuine physiological changes and data contamination from another patient with a similar status, leaving many cases in a diagnostic gray zone.

Traditional delta-check systems rely on the change of a single measure to detect potential data errors, but such approaches often overlook the broader context of a patient’s physiological profile. In this project, I explore a multi-measure representation of each clinical visit, allowing the comparison of visits in a more holistic way—closer to how representational similarity analysis (RSA) is used in neuroscience to compare high-dimensional patterns.

By quantifying the similarity between visits rather than simply measuring raw differences, this approach aims to identify when data deviate from an individual’s typical pattern, potentially distinguishing genuine clinical transitions from mislabeled or corrupted records. This framework could extend the logic of delta-checks into a richer, multidimensional space for assessing data integrity and patient trajectory.
