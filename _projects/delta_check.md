---
layout: page
title: Similarity-based patient identification
description: 2024-
img: assets/img/deltacheck_thumbnail.jpg
importance: 2
category: Current
---

Electronic medical records (EMR) sometimes contain risks of data corruption due to human error: such as mislabeled samples or mistakes during the digitization of handwritten documents. Even if such cases are rare, they can have a critical impact on accurately tracking a patient’s clinical history and prognosis.

In hospital settings, a delta-check is commonly used to identify suspicious records by flagging unusually large changes in specific measurements compared to previous values. When flagged, clinicians could manually review nearby records to verify and annotate possible errors. However, this process cannot fully distinguish between genuine physiological changes and data contamination from another patient with a similar status, leaving many cases in a gray zone.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/delta_check.jpg" title="delta-check" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Traditional delta-check scheme. Calculating derivatives of a single measure.
</div>

Traditional delta-check systems rely on the change of a single measure to detect potential data errors, but such approaches often overlook the broader context of a patient’s physiological profile. In this project, I purpose a multi-measure representation of each clinical visit, allowing the comparison of visits in a more holistic way. This is closer to how representational similarity analysis (RSA) is used in neuroscience to compare high dimensional patterns.

By quantifying the similarity between visits with multiple measures rather than simply measuring raw differences, this approach aims to identify when data deviate from an individual’s typical pattern, distinguishing genuine clinical transitions and mislabeled or corrupted records. This trial could extend the concept of delta-checks into a richer, multidimensional space for assessing data with integrity.
