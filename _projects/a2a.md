---
layout: page
title: "Cross-atlas connectome transformation modeling: addressing atlas-dependent discrepancies in brain network analysis"
description: [2025-]
img: assets/img/a2a-thumbnail.jpg
importance: 1
category: Current
# giscus_comments: false
---

Publicly available neuroimaging datasets typically provide preprocessed, parcellated data (e.g., brain connectomes) based on specific brain atlases as a pragmatic solution to maximize data accessibility and reuse under privacy, computational, and storage constraints. However, reliance on predefined parcellations limits interoperability, as structural or functional connectomes (FC) from different atlases cannot be directly compared due to variations in spatial distribution. Understanding and resolving these atlas-dependent differences is essential for improving reproducibility in connectome-based brain research.

To address this interoperability challenge, I introduce a cross-atlas connectome transformation model by adapting the connectome transformation modeling framework (Yoo et al., 2022). This approach learns low-dimensional representations and mapping between source and target parcellations through PCAs and PLS regression, allowing reconstruction of target-atlas whole-brain connectomes solely from one source-atlas representation without requiring raw fMRI data.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/a2a_scheme.jpg" title="a2a scheme" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scheme of cross-atlas transformation model.
</div>

Overall, the connectome transformation modeling framework provides a flexible and generalizable approach for bridging atlas-specific functional connectomes. By enabling cross-atlas mapping without direct access to raw imaging data, this approach helps enhance the comparison and interpretation of large-scale connectome research.

Main Reference:
Yoo, K., Rosenberg, M. D., Kwon, Y. H., Scheinost, D., Constable, R. T., & Chun, M. M. (2022). A cognitive state transformation model for task-general and task-specific subsystems of the brain connectome. NeuroImage, 257, 119279–119279. https://doi.org/10.1016/j.neuroimage.2022.119279

<p style="font-weight:700;">Presentations (inculding upcoming events):</p>
- SfN 2025 (Society for Neuroscience), San Diego, US (Abstract accepted; co-author and co-presenter)
- KHBM 2025 Fall Conference (Korean Society of Human Brain Mapping), Seoul, Korea (2025, November 06-07)

<p style="font-weight:700;">Presentations (inculding upcoming events):</p>
- Best Poster Award (KHBM 2025 Fall Conference)

<p style="font-weight:700;">Presentation Materials:</p>
<div style="position:relative; padding-top: 0;">
  <iframe
    src="https://drive.google.com/file/d/1Vnc5w74dyiCa_Ur_m5zIn3R-mS6A-MZV/preview"
    width="100%"
    height="600"
    allow="autoplay"
    style="border:0;">
  </iframe>
</div>
