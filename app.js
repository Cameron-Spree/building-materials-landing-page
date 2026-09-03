// Briants Building Materials - Section Builder Dashboard Controller

// State Management
let activePageId = 'main-building'; // Default loaded page template ('main-building', 'machinery-spotlight', 'trade-heavy-side')
let activeMode = 'isolate'; // 'isolate' or 'builder'
let activeSectionId = 'top-banner'; // Default selected section in isolate mode
let activeCodeTab = 'html'; // 'content', 'html', 'css', 'js', or 'global'
let viewportWidth = '100%'; // '100%', '768px', '375px'
let viewportDevice = 'desktop'; // 'desktop', 'tablet', 'mobile'

// Clone sections from data (excluding base styles global section for builders)
let builderSections = SECTIONS_DATA.filter(section => section.id !== 'global');

// Selected section IDs for builder mode (all active by default)
let selectedSectionIds = builderSections.map(s => s.id);

// DOM Elements
let selectionListEl;
let previewIframeEl;
let codeOutputEl;
let contentInspectorEl;
let activeTitleEl;
let activeCategoryEl;
let copyTextFeedbackEl;
let savedLocallyStatusEl;
let btnResetSectionEl;
let liveEditBadgeEl;
let modeDescEl;
let btnSelectAllEl;
let btnClearAllEl;
let pageTemplateSelectEl;

// Debounce timer for direct textarea typing
let codeInputDebounceTimer = null;

document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM Elements
    selectionListEl = document.getElementById('selection-list');
    previewIframeEl = document.getElementById('preview-iframe');
    codeOutputEl = document.getElementById('code-output');
    contentInspectorEl = document.getElementById('content-inspector');
    activeTitleEl = document.getElementById('active-title');
    activeCategoryEl = document.getElementById('active-category');
    copyTextFeedbackEl = document.getElementById('copy-text-feedback');
    savedLocallyStatusEl = document.getElementById('saved-locally-status');
    btnResetSectionEl = document.getElementById('btn-reset-section');
    liveEditBadgeEl = document.getElementById('live-edit-badge');
    modeDescEl = document.getElementById('mode-desc');
    btnSelectAllEl = document.getElementById('btn-select-all');
    btnClearAllEl = document.getElementById('btn-clear-all');
    pageTemplateSelectEl = document.getElementById('page-template-select');

    // Initialize Dashboard UI
    init();
});

// Initial Setup
function init() {
    populatePageTemplates();
    loadPageTemplate(activePageId);
    
    // Automatically setup iframe interactivity once loaded
    previewIframeEl.addEventListener('load', () => {
        setupIframeInteractivity();
    });

    // Listen for live edit messages from within the preview iframe
    window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'BRIANTS_SECTION_MUTATED') {
            if (activeMode === 'isolate' && event.data.sectionId === activeSectionId) {
                saveSectionHtmlLocally(activeSectionId, event.data.html, false);
            }
        }
    });
}

// --------------------------------------------------------------------------
// Local Storage Persistence Helpers
// --------------------------------------------------------------------------

// Get current section HTML (returns localStorage customized version if saved, else default)
function getSectionHtml(sectionId) {
    if (sectionId === 'global') return '';
    const stored = localStorage.getItem('briants_custom_html_' + sectionId);
    if (stored) return stored;
    
    const sec = SECTIONS_DATA.find(s => s.id === sectionId);
    return sec ? sec.html : '';
}

// Check if section has custom local edits
function isSectionCustomized(sectionId) {
    return Boolean(localStorage.getItem('briants_custom_html_' + sectionId));
}

// Save customized HTML into localStorage
function saveSectionHtmlLocally(sectionId, newHtml, shouldUpdateIframe = true) {
    if (!sectionId || sectionId === 'global') return;
    
    localStorage.setItem('briants_custom_html_' + sectionId, newHtml);
    
    showSavedFeedback();
    updateSectionStatusUI();
    
    if (shouldUpdateIframe) {
        syncIframeBodyInPlace(newHtml);
    }
    
    if (codeOutputEl && activeCodeTab === 'html') {
        codeOutputEl.value = newHtml;
    }
}

// In-place live sync without full iframe reload (prevents scroll jump to top)
function syncIframeBodyInPlace(newHtml) {
    try {
        const iframeDoc = previewIframeEl.contentDocument || previewIframeEl.contentWindow.document;
        const root = iframeDoc.getElementById('briants-landing-page');
        if (root && activeMode === 'isolate') {
            root.innerHTML = newHtml;
            setupIframeInteractivity();
            return;
        }
    } catch (e) {
        console.warn('In-place iframe sync fallback:', e);
    }
    updatePreview();
}

// Reset current active section back to default template
function resetActiveSection() {
    if (!activeSectionId || activeSectionId === 'global') return;
    
    if (confirm(`Reset the "${activeSectionId}" section to its default text and links?`)) {
        localStorage.removeItem('briants_custom_html_' + activeSectionId);
        updateSectionStatusUI();
        updatePreview();
        updateCodeDisplay();
        renderSidebar();
    }
}

// Reset all sections back to default template
function resetAllCustomizations() {
    if (confirm('Reset ALL customized text and links across all sections back to defaults?')) {
        SECTIONS_DATA.forEach(sec => {
            localStorage.removeItem('briants_custom_html_' + sec.id);
        });
        updateSectionStatusUI();
        updatePreview();
        updateCodeDisplay();
        renderSidebar();
    }
}

// Flash green saved badge
function showSavedFeedback() {
    if (!savedLocallyStatusEl) return;
    savedLocallyStatusEl.style.display = 'inline-flex';
    savedLocallyStatusEl.style.opacity = '1';
    setTimeout(() => {
        if (savedLocallyStatusEl) {
            savedLocallyStatusEl.style.opacity = '0.8';
        }
    }, 2500);
}

// Update status badges and buttons
function updateSectionStatusUI() {
    const isCustom = isSectionCustomized(activeSectionId);
    if (btnResetSectionEl) {
        btnResetSectionEl.style.display = (activeMode === 'isolate' && isCustom && activeSectionId !== 'global') ? 'inline-flex' : 'none';
    }
    if (savedLocallyStatusEl) {
        savedLocallyStatusEl.style.display = (activeMode === 'isolate' && isCustom && activeSectionId !== 'global') ? 'inline-flex' : 'none';
    }
    if (liveEditBadgeEl) {
        liveEditBadgeEl.style.display = (activeMode === 'isolate' && activeSectionId !== 'global') ? 'inline-flex' : 'none';
    }
}

// --------------------------------------------------------------------------
// Template & Mode Management
// --------------------------------------------------------------------------

// Populate the page template selector dropdown
function populatePageTemplates() {
    if (!pageTemplateSelectEl) return;
    pageTemplateSelectEl.innerHTML = '';
    
    PAGE_TEMPLATES.forEach(template => {
        const option = document.createElement('option');
        option.value = template.id;
        option.textContent = template.name;
        pageTemplateSelectEl.appendChild(option);
    });
}

// Switch between page templates from the UI dropdown
function switchPageTemplate(pageId) {
    activePageId = pageId;
    loadPageTemplate(pageId);
}

// Load a page template's sections, active check states, and order
function loadPageTemplate(pageId) {
    const template = PAGE_TEMPLATES.find(p => p.id === pageId);
    if (!template) return;
    
    const templateSectionIds = template.sections;
    const activeSections = [];
    
    // Group and order sections (ONLY those belonging to this template)
    templateSectionIds.forEach(id => {
        const sec = SECTIONS_DATA.find(s => s.id === id);
        if (sec && id !== 'global') {
            activeSections.push(sec);
        }
    });
    
    // Update builder bank to ONLY contain the template's sections
    builderSections = activeSections;
    selectedSectionIds = builderSections.map(s => s.id);
    
    // Set isolated focus to the page's first section if focus was lost or irrelevant
    const currentIsActiveInTemplate = templateSectionIds.includes(activeSectionId);
    if (!currentIsActiveInTemplate || activeSectionId === 'global') {
        const firstSec = templateSectionIds.find(id => id !== 'global');
        if (firstSec) {
            activeSectionId = firstSec;
        }
    }
    
    // Refresh all UI elements
    renderSidebar();
    updatePreview();
    updateCodeDisplay();
    updateSectionStatusUI();
}

// Switch Mode between Isolated Preview and Page Builder
function setMode(mode) {
    if (activeMode === mode) return;
    activeMode = mode;
    
    // Toggle active tabs
    document.getElementById('btn-mode-isolate').classList.toggle('active', mode === 'isolate');
    document.getElementById('btn-mode-builder').classList.toggle('active', mode === 'builder');
    
    if (mode === 'isolate') {
        modeDescEl.textContent = 'Select a section to isolate. Click directly on text/links in the preview or use the inspector below to edit & save.';
        btnSelectAllEl.style.display = 'none';
        btnClearAllEl.style.display = 'none';
        if (activeCodeTab === 'global') activeCodeTab = 'html';
    } else {
        modeDescEl.textContent = 'Check building sections to combine them into a custom landing page. Arrange layout order with arrows.';
        btnSelectAllEl.style.display = 'flex';
        btnClearAllEl.style.display = 'flex';
        if (activeCodeTab === 'content') activeCodeTab = 'html';
    }
    
    renderSidebar();
    updatePreview();
    updateCodeDisplay();
    updateSectionStatusUI();
}

// Render Sidebar selection items
function renderSidebar() {
    selectionListEl.innerHTML = '';
    
    const template = PAGE_TEMPLATES.find(p => p.id === activePageId);
    const templateSectionIds = template ? template.sections : [];
    
    if (activeMode === 'isolate') {
        // Show global stylesheet as a selectable item first
        const globalSection = SECTIONS_DATA.find(s => s.id === 'global');
        if (globalSection) {
            const globalItem = createIsolateItem(globalSection);
            selectionListEl.appendChild(globalItem);
        }

        // Show only the template's components
        SECTIONS_DATA.filter(s => s.id !== 'global' && templateSectionIds.includes(s.id)).forEach(section => {
            const item = createIsolateItem(section);
            selectionListEl.appendChild(item);
        });
    } else {
        // Page Builder Checklist Items (allow reordering)
        builderSections.forEach((section, index) => {
            const item = createBuilderItem(section, index);
            selectionListEl.appendChild(item);
        });
    }
}

// Create isolated item row for sidebar
function createIsolateItem(section) {
    const li = document.createElement('li');
    li.className = 'selection-item';
    if (activeSectionId === section.id) {
        li.classList.add('selected', 'active-preview');
    }
    
    const isCustom = isSectionCustomized(section.id);
    const customBadge = isCustom ? `<span style="color:#22c55e; font-size:0.7rem; margin-right:0.35rem;" title="Custom text saved locally"><i class="fa-solid fa-pen-circle-check"></i></span>` : '';
    
    li.innerHTML = `
        <label>
            <i class="fa-solid ${getCategoryIcon(section.category)}"></i>
            <span>${section.name}</span>
            <span class="item-meta" style="display:flex; align-items:center;">
                ${customBadge}${section.category}
            </span>
        </label>
    `;
    
    li.addEventListener('click', () => {
        document.querySelectorAll('.selection-item').forEach(item => {
            item.classList.remove('selected', 'active-preview');
        });
        li.classList.add('selected', 'active-preview');
        activeSectionId = section.id;
        
        updatePreview();
        updateCodeDisplay();
        updateSectionStatusUI();
    });
    
    return li;
}

// Create builder list item row with checkboxes and ordering arrows
function createBuilderItem(section, index) {
    const li = document.createElement('li');
    li.className = 'selection-item';
    const isChecked = selectedSectionIds.includes(section.id);
    if (isChecked) {
        li.classList.add('selected');
    }
    
    li.innerHTML = `
        <label onclick="toggleSectionSelection('${section.id}', event)">
            <input type="checkbox" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); toggleSectionSelection('${section.id}')">
            <span>${section.name}</span>
        </label>
        <div style="display: flex; gap: 0.35rem; padding-right: 0.75rem; align-items: center;">
            <button onclick="moveSection('${section.id}', -1, event)" class="action-icon-btn" style="width:24px; height:24px; font-size:0.65rem;" title="Move Up" ${index === 0 ? 'disabled' : ''}>
                <i class="fa-solid fa-arrow-up"></i>
            </button>
            <button onclick="moveSection('${section.id}', 1, event)" class="action-icon-btn" style="width:24px; height:24px; font-size:0.65rem;" title="Move Down" ${index === builderSections.length - 1 ? 'disabled' : ''}>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
    `;
    
    return li;
}

// Toggle section checked/unchecked in builder mode
function toggleSectionSelection(id, event) {
    if (event) event.preventDefault();
    
    const index = selectedSectionIds.indexOf(id);
    if (index === -1) {
        selectedSectionIds.push(id);
    } else {
        selectedSectionIds.splice(index, 1);
    }
    
    renderSidebar();
    updatePreview();
    updateCodeDisplay();
}

// Move section order up/down
function moveSection(id, direction, event) {
    if (event) event.stopPropagation();
    
    const index = builderSections.findIndex(s => s.id === id);
    if (index === -1) return;
    const targetIndex = index + direction;
    
    if (targetIndex < 0 || targetIndex >= builderSections.length) return;
    
    // Swap
    const temp = builderSections[index];
    builderSections[index] = builderSections[targetIndex];
    builderSections[targetIndex] = temp;
    
    renderSidebar();
    updatePreview();
    updateCodeDisplay();
}

// Select or Deselect all sections in Builder Mode
function selectAllSections(select) {
    if (select) {
        selectedSectionIds = builderSections.map(s => s.id);
    } else {
        selectedSectionIds = [];
    }
    
    renderSidebar();
    updatePreview();
    updateCodeDisplay();
}

// Category icon helper
function getCategoryIcon(category) {
    switch (category) {
        case 'Base Styles': return 'fa-palette';
        case 'Header': return 'fa-window-maximize';
        case 'Hero': return 'fa-image';
        case 'Promotions': return 'fa-tags';
        case 'Navigation': return 'fa-compass';
        case 'Products Grid': return 'fa-cubes';
        case 'Workshop': return 'fa-screwdriver-wrench';
        case 'Information': return 'fa-info-circle';
        case 'Footer': return 'fa-window-minimize';
        default: return 'fa-layer-group';
    }
}

// Viewport width resizing controls
function setViewport(widthPercent, device) {
    viewportWidth = widthPercent === 100 ? '100%' : widthPercent + 'px';
    viewportDevice = device;
    
    document.getElementById('btn-vp-desktop').classList.toggle('active', device === 'desktop');
    document.getElementById('btn-vp-tablet').classList.toggle('active', device === 'tablet');
    document.getElementById('btn-vp-mobile').classList.toggle('active', device === 'mobile');
    
    document.getElementById('iframe-wrapper').style.width = viewportWidth;
}

// Refresh Iframe preview
function refreshPreview() {
    updatePreview();
}

// Open active preview in new window
function openPreviewInNewWindow() {
    const previewWindow = window.open('', '_blank');
    if (!previewWindow) {
        alert('Pop-up blocked! Please allow pop-ups to open the preview in a new window.');
        return;
    }
    
    const docData = generateIframeContent(false);
    previewWindow.document.open();
    previewWindow.document.write(docData);
    previewWindow.document.close();
}

// --------------------------------------------------------------------------
// Iframe Content Generation & Live In-Page Editing
// --------------------------------------------------------------------------

// Generate compiled HTML content to inject in Iframe
function generateIframeContent(enableEditingInIsolated = true) {
    const globalSection = SECTIONS_DATA.find(s => s.id === 'global');
    const globalStyle = globalSection ? globalSection.css : '';
    let combinedHtml = '';
    let combinedCss = '';
    let combinedJs = '';
    
    const isEditing = enableEditingInIsolated && activeMode === 'isolate' && activeSectionId !== 'global';
    
    if (activeMode === 'isolate') {
        const section = SECTIONS_DATA.find(s => s.id === activeSectionId);
        if (section) {
            combinedHtml = getSectionHtml(section.id);
            combinedCss = section.css || '';
            combinedJs = section.js || '';
        }
    } else {
        // Builder mode - combine all checked sections in order using saved/custom HTML
        builderSections.forEach(section => {
            if (selectedSectionIds.includes(section.id)) {
                const secHtml = getSectionHtml(section.id);
                combinedHtml += `\n<!-- Section: ${section.name} -->\n` + secHtml + '\n';
                combinedCss += `\n/* Section: ${section.name} */\n` + (section.css || '') + '\n';
                combinedJs += `\n/* Section: ${section.name} */\n` + (section.js || '') + '\n';
            }
        });
        
        if (combinedHtml === '') {
            combinedHtml = '<div style="display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif; color:#64748b; text-align:center;"><div><i class="fa-solid fa-folder-open" style="font-size:3rem; margin-bottom:1rem; display:block; color:#94a3b8;"></i><h3>No sections selected</h3><p style="font-size:0.85rem; margin-top:0.25rem;">Check some boxes in the sidebar to build your building materials landing page preview.</p></div></div>';
        }
    }
    
    // Injected in-frame editing stylesheet & popover handler for Isolated mode
    const inFrameEditingStyle = isEditing ? `
        /* In-Iframe Live Content & Link Editing Styles */
        [data-briants-editable="true"] {
            transition: outline 0.15s ease, background-color 0.15s ease;
            position: relative;
        }
        [data-briants-editable="true"]:hover {
            outline: 1.5px dashed #d2a138 !important;
            outline-offset: 2px;
            cursor: text !important;
        }
        [data-briants-editable="true"]:focus {
            outline: 2px solid #005c30 !important;
            outline-offset: 3px;
            background-color: rgba(210, 161, 56, 0.15) !important;
        }
        .briants-link-editor-popover {
            position: fixed;
            z-index: 999999;
            background: #0f172a;
            border: 1px solid #334155;
            color: #ffffff;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            font-family: 'Poppins', sans-serif;
            font-size: 0.8rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            min-width: 280px;
        }
        .briants-link-editor-popover label {
            font-size: 0.7rem;
            color: #94a3b8;
            font-weight: 600;
            text-transform: uppercase;
        }
        .briants-link-editor-popover input {
            background: #1e293b;
            border: 1px solid #475569;
            color: #ffffff;
            padding: 0.4rem 0.6rem;
            border-radius: 4px;
            font-size: 0.8rem;
            outline: none;
            width: 100%;
        }
        .briants-link-editor-popover input:focus {
            border-color: #d2a138;
        }
        .briants-link-editor-popover .popover-btns {
            display: flex;
            justify-content: flex-end;
            gap: 0.4rem;
            margin-top: 0.25rem;
        }
        .briants-link-editor-popover button {
            background: #005c30;
            color: #ffffff;
            border: none;
            padding: 0.3rem 0.75rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            cursor: pointer;
        }
        .briants-link-editor-popover button.btn-close {
            background: #334155;
        }
    ` : '';

    const inFrameEditingScript = isEditing ? `
        // In-Iframe Live Selection & Editing Controller
        (function() {
            const root = document.getElementById('briants-landing-page');
            if (!root) return;

            // Target candidate text and link elements
            const selector = 'h1, h2, h3, h4, h5, p, span.brand-title, span.brand-sub, span.tile-spec, span.cat-link, span.price-val, span.price-label, span.deal-sub, span.deal-stock-status, span.hero-highlight, .tile-badge, .feat-pill, .ins-badge, .panel-badge, .workshop-badge, .m-highlight, li, a, button, td, th';
            const editables = root.querySelectorAll(selector);

            let activeLinkPopover = null;

            function removePopover() {
                if (activeLinkPopover && activeLinkPopover.parentNode) {
                    activeLinkPopover.parentNode.removeChild(activeLinkPopover);
                    activeLinkPopover = null;
                }
            }

            function syncChangesToParent() {
                removePopover();
                const currentHtml = root.innerHTML;
                window.parent.postMessage({
                    type: 'BRIANTS_SECTION_MUTATED',
                    sectionId: '${activeSectionId}',
                    html: currentHtml
                }, '*');
            }

            editables.forEach(el => {
                el.setAttribute('contenteditable', 'true');
                el.setAttribute('data-briants-editable', 'true');

                // Prevent links from navigating in isolate mode
                if (el.tagName === 'A' || el.closest('a')) {
                    el.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const linkEl = el.tagName === 'A' ? el : el.closest('a');
                        showLinkEditor(linkEl);
                    });
                }

                el.addEventListener('input', () => {
                    syncChangesToParent();
                });

                el.addEventListener('blur', () => {
                    syncChangesToParent();
                });
            });

            function showLinkEditor(linkEl) {
                removePopover();
                if (!linkEl) return;

                const rect = linkEl.getBoundingClientRect();
                const popover = document.createElement('div');
                popover.className = 'briants-link-editor-popover';
                
                // Position popover
                const top = Math.min(window.innerHeight - 150, Math.max(10, rect.bottom + 8));
                const left = Math.min(window.innerWidth - 300, Math.max(10, rect.left));
                popover.style.top = top + 'px';
                popover.style.left = left + 'px';

                popover.innerHTML = \`
                    <label><i class="fa-solid fa-link"></i> Edit Link URL (href):</label>
                    <input type="text" id="popover-href-input" value="\${linkEl.getAttribute('href') || '#'}" placeholder="e.g. #briants-trade-form or tel:01844343663">
                    <div class="popover-btns">
                        <button type="button" class="btn-close" id="popover-btn-close">Close</button>
                        <button type="button" id="popover-btn-save">Apply Link</button>
                    </div>
                \`;

                document.body.appendChild(popover);
                activeLinkPopover = popover;

                const hrefInput = popover.querySelector('#popover-href-input');
                hrefInput.focus();
                hrefInput.select();

                popover.querySelector('#popover-btn-save').addEventListener('click', () => {
                    linkEl.setAttribute('href', hrefInput.value);
                    removePopover();
                    syncChangesToParent();
                });

                popover.querySelector('#popover-btn-close').addEventListener('click', () => {
                    removePopover();
                });

                hrefInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        linkEl.setAttribute('href', hrefInput.value);
                        removePopover();
                        syncChangesToParent();
                    }
                });
            }

            // Close popover when clicking elsewhere
            document.addEventListener('click', (e) => {
                if (activeLinkPopover && !activeLinkPopover.contains(e.target) && !e.target.closest('a')) {
                    removePopover();
                }
            });
        })();
    ` : '';
    
    return `
    <!DOCTYPE html>
    <html lang="en-GB">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Briants Building Materials Preview</title>
        <!-- Fonts & Icons -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        
        <style>
            /* Reset body padding for iframe preview */
            html, body {
                margin: 0;
                padding: 0;
                background-color: #ffffff;
                scroll-behavior: smooth;
            }
            ${globalStyle}
            ${combinedCss}
            ${inFrameEditingStyle}
        </style>
    </head>
    <body>
        <div id="briants-landing-page" class="briants-landing-wrapper">
            ${combinedHtml}
        </div>
        
        <script>
            // Execute active scripts after DOM content loaded inside iframe
            document.addEventListener('DOMContentLoaded', () => {
                ${combinedJs}
            });
            
            // Force fire initializations if frame loads after DOMContentLoaded
            try {
                ${combinedJs}
            } catch(e) {
                console.error("Iframe Script Execution Error:", e);
            }

            ${inFrameEditingScript}
        </script>
    </body>
    </html>
    `;
}

// Write generated content directly to iframe document
function updatePreview() {
    const iframeContent = generateIframeContent();
    const iframeDoc = previewIframeEl.contentDocument || previewIframeEl.contentWindow.document;
    
    iframeDoc.open();
    iframeDoc.write(iframeContent);
    iframeDoc.close();
}

// Setup extra interactivity in iframe after load
function setupIframeInteractivity() {
    const iframeWindow = previewIframeEl.contentWindow;
    const iframeDoc = iframeWindow.document;
    
    // Brand Slider hover pause handler
    const brandTrack = iframeDoc.querySelector('#briants-brands .brand-track');
    if (brandTrack) {
        brandTrack.addEventListener('mouseenter', () => {
            brandTrack.style.animationPlayState = 'paused';
        });
        brandTrack.addEventListener('mouseleave', () => {
            brandTrack.style.animationPlayState = 'running';
        });
    }
}

// --------------------------------------------------------------------------
// Code Console & Content Inspector Logic
// --------------------------------------------------------------------------

// Switch code viewer tabs
function setCodeTab(tab) {
    activeCodeTab = tab;
    
    const tabContentBtn = document.getElementById('tab-btn-content');
    if (tabContentBtn) tabContentBtn.classList.toggle('active', tab === 'content');
    document.getElementById('tab-btn-html').classList.toggle('active', tab === 'html');
    document.getElementById('tab-btn-css').classList.toggle('active', tab === 'css');
    document.getElementById('tab-btn-js').classList.toggle('active', tab === 'js');
    document.getElementById('tab-btn-global').classList.toggle('active', tab === 'global');
    
    // Update toolbar copy button text
    const copyBtn = document.querySelector('.sidebar-footer button');
    if (copyBtn) {
        copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy Active ${tab.toUpperCase()}`;
    }

    updateCodeDisplay();
}

// Direct HTML typing handler from the code textarea
function onConsoleHtmlInput(val) {
    if (activeMode !== 'isolate' || activeCodeTab !== 'html' || activeSectionId === 'global') return;
    
    clearTimeout(codeInputDebounceTimer);
    codeInputDebounceTimer = setTimeout(() => {
        saveSectionHtmlLocally(activeSectionId, val, true);
    }, 300);
}

// Get the text to show inside the code console textarea
function getActiveCodeText() {
    const globalSection = SECTIONS_DATA.find(s => s.id === 'global');
    
    if (activeCodeTab === 'global') {
        return globalSection ? globalSection.css : '';
    }
    
    if (activeMode === 'isolate') {
        const section = SECTIONS_DATA.find(s => s.id === activeSectionId);
        if (!section) return '';
        
        switch (activeCodeTab) {
            case 'content':
                return ''; // Rendered via DOM inspector form instead
            case 'html':
                return getSectionHtml(section.id);
            case 'css':
                return section.css || '/* No component-specific CSS needed. Uses Global Theme styles. */';
            case 'js':
                return section.js || '// No JavaScript required for this section.';
            default:
                return '';
        }
    } else {
        // Builder mode compiled output
        let combined = '';
        builderSections.forEach(section => {
            if (selectedSectionIds.includes(section.id)) {
                if (activeCodeTab === 'html') {
                    combined += `<!-- Section: ${section.name} -->\n` + getSectionHtml(section.id) + '\n\n';
                } else if (activeCodeTab === 'css' && section.css) {
                    combined += `/* Section: ${section.name} */\n` + section.css + '\n\n';
                } else if (activeCodeTab === 'js' && section.js) {
                    combined += `/* Section: ${section.name} */\n` + section.js + '\n\n';
                }
            }
        });
        
        if (!combined.trim()) {
            if (activeCodeTab === 'js') return '// No custom JavaScript in active sections.';
            if (activeCodeTab === 'css') return '/* No custom CSS in active sections. Uses Global Theme styles. */';
            return '<!-- No sections selected -->';
        }
        
        return combined;
    }
}

// Update the code console contents and header metadata
function updateCodeDisplay() {
    if (!codeOutputEl) return;
    
    const activeSection = SECTIONS_DATA.find(s => s.id === activeSectionId);
    
    if (activeMode === 'isolate' && activeSection) {
        activeTitleEl.textContent = activeSection.name;
        activeCategoryEl.textContent = 'Category: ' + activeSection.category;
        // Make HTML textarea directly editable in Isolated view
        codeOutputEl.readOnly = (activeCodeTab !== 'html');
    } else {
        const template = PAGE_TEMPLATES.find(p => p.id === activePageId);
        const templateName = template ? template.name : 'Custom';
        activeTitleEl.textContent = `${templateName} (${selectedSectionIds.length} Sections)`;
        activeCategoryEl.textContent = 'Mode: Page Builder Combined View';
        codeOutputEl.readOnly = true;
    }
    
    if (activeCodeTab === 'content' && activeMode === 'isolate' && activeSectionId !== 'global') {
        codeOutputEl.style.display = 'none';
        contentInspectorEl.style.display = 'flex';
        renderContentInspector();
    } else {
        codeOutputEl.style.display = 'block';
        contentInspectorEl.style.display = 'none';
        codeOutputEl.value = getActiveCodeText();
    }
}

// --------------------------------------------------------------------------
// Visual Card-by-Card Text & Links Inspector Form Builder
// --------------------------------------------------------------------------

function renderContentInspector() {
    if (!contentInspectorEl) return;
    contentInspectorEl.innerHTML = '';

    const currentHtml = getSectionHtml(activeSectionId);
    if (!currentHtml) {
        contentInspectorEl.innerHTML = '<div style="color:#94a3b8; padding:1rem;">Select an isolated section to view and edit its text & links.</div>';
        return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(currentHtml, 'text/html');

    // Helper: Save DOM modifications live without unmounting form or reloading iframe
    function applyInspectorChanges() {
        const updatedHtml = doc.body.innerHTML;
        localStorage.setItem('briants_custom_html_' + activeSectionId, updatedHtml);
        showSavedFeedback();
        updateSectionStatusUI();
        syncIframeBodyInPlace(updatedHtml);
        if (codeOutputEl && activeCodeTab === 'html') {
            codeOutputEl.value = updatedHtml;
        }
    }

    // Header info
    const headerInfo = document.createElement('div');
    headerInfo.className = 'inspector-header-info';
    headerInfo.innerHTML = `
        <h4><i class="fa-solid fa-cubes"></i> Category & Content Editor</h4>
        <span>Edits update live in preview & save in your browser. Add or remove categories below.</span>
    `;
    contentInspectorEl.appendChild(headerInfo);

    // 1. Section Header Block (Subtitle, Main Title, Intro Paragraph)
    const sectionHeader = doc.querySelector('.briants-section-header');
    if (sectionHeader) {
        const headerCard = document.createElement('div');
        headerCard.className = 'inspector-card';
        headerCard.innerHTML = `<div class="inspector-card-title"><i class="fa-solid fa-heading"></i> Section Title & Introduction</div>`;

        // Subtitle
        const subtitleEl = sectionHeader.querySelector('.briants-section-subtitle');
        if (subtitleEl) {
            const field = document.createElement('div');
            field.className = 'inspector-field';
            field.innerHTML = `
                <label class="inspector-label"><i class="fa-solid fa-tag"></i> Section Subtitle Pill:</label>
                <input type="text" class="inspector-input" value="${escapeHtmlAttr(subtitleEl.textContent.trim())}">
            `;
            const input = field.querySelector('input');
            input.addEventListener('input', () => {
                subtitleEl.textContent = input.value;
                applyInspectorChanges();
            });
            headerCard.appendChild(field);
        }

        // H2 Main Heading
        const h2El = sectionHeader.querySelector('h2');
        if (h2El) {
            const field = document.createElement('div');
            field.className = 'inspector-field';
            field.innerHTML = `
                <label class="inspector-label"><i class="fa-solid fa-heading"></i> Main Section Heading (H2):</label>
                <input type="text" class="inspector-input" value="${escapeHtmlAttr(h2El.textContent.trim())}">
            `;
            const input = field.querySelector('input');
            input.addEventListener('input', () => {
                h2El.textContent = input.value;
                applyInspectorChanges();
            });
            headerCard.appendChild(field);
        }

        // Intro Paragraph
        const pEl = sectionHeader.querySelector('p');
        if (pEl) {
            const field = document.createElement('div');
            field.className = 'inspector-field';
            field.innerHTML = `
                <label class="inspector-label"><i class="fa-solid fa-align-left"></i> Section Introduction Paragraph:</label>
                <textarea class="inspector-textarea">${pEl.textContent.trim()}</textarea>
            `;
            const textarea = field.querySelector('textarea');
            textarea.addEventListener('input', () => {
                pEl.textContent = textarea.value;
                applyInspectorChanges();
            });
            headerCard.appendChild(field);
        }

        contentInspectorEl.appendChild(headerCard);
    }

    // 2. Identify Repeatable Category Cards / Items
    const cardSelectors = [
        '.quick-cat-card',
        '.product-tile',
        '.insulation-card',
        '.machinery-card',
        '.deal-card',
        '.feature-box',
        '.trade-promo-col',
        '.extra-item',
        '.brand-item',
        '.faq-item',
        '.showroom-card'
    ];

    let matchedCards = [];
    let matchedSelector = '';
    let gridContainer = null;

    for (const sel of cardSelectors) {
        const found = doc.querySelectorAll(sel);
        if (found.length > 0) {
            matchedCards = Array.from(found);
            matchedSelector = sel;
            gridContainer = matchedCards[0].parentElement;
            break;
        }
    }

    // If repeatable cards exist, render Card-by-Card with Add/Delete
    if (matchedCards.length > 0) {
        const cardsGroupContainer = document.createElement('div');
        cardsGroupContainer.style.display = 'flex';
        cardsGroupContainer.style.flexDirection = 'column';
        cardsGroupContainer.style.gap = '1rem';

        matchedCards.forEach((cardEl, idx) => {
            const cardBox = document.createElement('div');
            cardBox.className = 'inspector-card';

            // Find elements inside this card
            const titleEl = cardEl.querySelector('h3, h4, strong');
            const descEl = cardEl.querySelector('p');
            const linkEl = cardEl.tagName === 'A' ? cardEl : cardEl.querySelector('a');
            const linkTextEl = cardEl.querySelector('.cat-link, .cat-action-link, .briants-btn') || (cardEl.tagName === 'A' ? null : linkEl);
            const iconEl = cardEl.querySelector('i');

            const currentTitle = titleEl ? titleEl.textContent.trim() : `Category ${idx + 1}`;

            // Card Header with Delete Button
            const cardHeader = document.createElement('div');
            cardHeader.className = 'inspector-card-title';
            cardHeader.innerHTML = `
                <span><i class="fa-solid fa-cube"></i> Category ${idx + 1}: ${escapeHtmlAttr(currentTitle)}</span>
                ${matchedCards.length > 1 ? `<button type="button" class="btn-delete-card"><i class="fa-solid fa-trash"></i> Delete</button>` : ''}
            `;

            if (matchedCards.length > 1) {
                const deleteBtn = cardHeader.querySelector('.btn-delete-card');
                deleteBtn.addEventListener('click', () => {
                    if (confirm(`Remove "${currentTitle}" from this section?`)) {
                        cardEl.remove();
                        applyInspectorChanges();
                        renderContentInspector(); // Refresh cards list
                    }
                });
            }

            cardBox.appendChild(cardHeader);

            // 1. Category Title Field
            if (titleEl) {
                const titleField = document.createElement('div');
                titleField.className = 'inspector-field';
                titleField.innerHTML = `
                    <label class="inspector-label"><i class="fa-solid fa-heading"></i> Category Title:</label>
                    <input type="text" class="inspector-input" value="${escapeHtmlAttr(titleEl.textContent.trim())}">
                `;
                const titleInput = titleField.querySelector('input');
                titleInput.addEventListener('input', () => {
                    titleEl.textContent = titleInput.value;
                    cardHeader.querySelector('span').innerHTML = `<i class="fa-solid fa-cube"></i> Category ${idx + 1}: ${escapeHtmlAttr(titleInput.value || `Category ${idx + 1}`)}`;
                    applyInspectorChanges();
                });
                cardBox.appendChild(titleField);
            }

            // 2. Category Description Field
            if (descEl) {
                const descField = document.createElement('div');
                descField.className = 'inspector-field';
                descField.innerHTML = `
                    <label class="inspector-label"><i class="fa-solid fa-align-left"></i> Description / Offer Summary:</label>
                    <textarea class="inspector-textarea">${descEl.textContent.trim()}</textarea>
                `;
                const descTextarea = descField.querySelector('textarea');
                descTextarea.addEventListener('input', () => {
                    descEl.textContent = descTextarea.value;
                    applyInspectorChanges();
                });
                cardBox.appendChild(descField);
            }

            // 3. Link Target & Button Label Fields
            if (linkEl) {
                const linkField = document.createElement('div');
                linkField.className = 'inspector-field';
                const isAnchorCard = cardEl.tagName === 'A';
                const hrefVal = linkEl.getAttribute('href') || '#';
                const linkLabel = linkTextEl ? linkTextEl.textContent.trim() : (isAnchorCard ? 'Card Link Target' : linkEl.textContent.trim());

                linkField.innerHTML = `
                    <div class="inspector-link-row">
                        <div>
                            <label class="inspector-label"><i class="fa-solid fa-font"></i> Link / Action Label:</label>
                            <input type="text" class="inspector-input link-label-input" value="${escapeHtmlAttr(linkLabel)}">
                        </div>
                        <div>
                            <label class="inspector-label"><i class="fa-solid fa-link"></i> Link Target (href):</label>
                            <input type="text" class="inspector-input link-href-input" value="${escapeHtmlAttr(hrefVal)}">
                        </div>
                    </div>
                `;

                const labelInput = linkField.querySelector('.link-label-input');
                const hrefInput = linkField.querySelector('.link-href-input');

                labelInput.addEventListener('input', () => {
                    if (linkTextEl) {
                        const icon = linkTextEl.querySelector('i');
                        if (icon) {
                            linkTextEl.innerHTML = labelInput.value + ' ' + icon.outerHTML;
                        } else {
                            linkTextEl.textContent = labelInput.value;
                        }
                    } else if (!isAnchorCard) {
                        linkEl.textContent = labelInput.value;
                    }
                    applyInspectorChanges();
                });

                hrefInput.addEventListener('input', () => {
                    linkEl.setAttribute('href', hrefInput.value);
                    applyInspectorChanges();
                });

                cardBox.appendChild(linkField);
            }

            // 4. Icon Selector (if present)
            if (iconEl) {
                const iconField = document.createElement('div');
                iconField.className = 'inspector-field';
                const currentIconClass = iconEl.className;
                iconField.innerHTML = `
                    <label class="inspector-label"><i class="fa-solid fa-icons"></i> FontAwesome Icon Class:</label>
                    <input type="text" class="inspector-input" value="${escapeHtmlAttr(currentIconClass)}">
                `;
                const iconInput = iconField.querySelector('input');
                iconInput.addEventListener('input', () => {
                    iconEl.className = iconInput.value;
                    applyInspectorChanges();
                });
                cardBox.appendChild(iconField);
            }

            cardsGroupContainer.appendChild(cardBox);
        });

        // "➕ Add New Category" Button
        if (gridContainer) {
            const addBtn = document.createElement('button');
            addBtn.type = 'button';
            addBtn.className = 'btn-add-card';
            addBtn.innerHTML = `<i class="fa-solid fa-plus-circle"></i> Add New Category / Card`;

            addBtn.addEventListener('click', () => {
                const lastCard = matchedCards[matchedCards.length - 1];
                const clone = lastCard.cloneNode(true);

                // Reset texts on new clone
                const cloneTitle = clone.querySelector('h3, h4, strong');
                if (cloneTitle) cloneTitle.textContent = 'New Category';

                const cloneDesc = clone.querySelector('p');
                if (cloneDesc) cloneDesc.textContent = 'Explore our full range of quality building materials.';

                const cloneLink = clone.tagName === 'A' ? clone : clone.querySelector('a');
                if (cloneLink) cloneLink.setAttribute('href', '#briants-quick-categories');

                gridContainer.appendChild(clone);
                applyInspectorChanges();
                renderContentInspector(); // Refresh inspector so new card appears ready to edit
            });

            cardsGroupContainer.appendChild(addBtn);
        }

        contentInspectorEl.appendChild(cardsGroupContainer);
    } else {
        // Fallback for non-card sections (e.g., Hero, Top Banner, Footer)
        renderGenericInspector(doc, applyInspectorChanges);
    }
}

// Fallback generic element-by-element inspector
function renderGenericInspector(doc, applyInspectorChanges) {
    const headings = doc.querySelectorAll('h1, h2, h3, h4');
    if (headings.length > 0) {
        const card = document.createElement('div');
        card.className = 'inspector-card';
        card.innerHTML = `<div class="inspector-card-title"><i class="fa-solid fa-heading"></i> Headings & Titles</div>`;
        headings.forEach((heading, idx) => {
            const field = document.createElement('div');
            field.className = 'inspector-field';
            const tag = heading.tagName.toLowerCase();
            field.innerHTML = `
                <label class="inspector-label">&lt;${tag}&gt; Heading ${idx + 1}:</label>
                <input type="text" class="inspector-input" value="${escapeHtmlAttr(heading.textContent.trim())}">
            `;
            const input = field.querySelector('input');
            input.addEventListener('input', () => {
                heading.textContent = input.value;
                applyInspectorChanges();
            });
            card.appendChild(field);
        });
        contentInspectorEl.appendChild(card);
    }

    const paragraphs = doc.querySelectorAll('p');
    if (paragraphs.length > 0) {
        const card = document.createElement('div');
        card.className = 'inspector-card';
        card.innerHTML = `<div class="inspector-card-title"><i class="fa-solid fa-align-left"></i> Body Text</div>`;
        paragraphs.forEach((p, idx) => {
            const field = document.createElement('div');
            field.className = 'inspector-field';
            field.innerHTML = `
                <label class="inspector-label">Paragraph ${idx + 1}:</label>
                <textarea class="inspector-textarea">${p.textContent.trim()}</textarea>
            `;
            const textarea = field.querySelector('textarea');
            textarea.addEventListener('input', () => {
                p.textContent = textarea.value;
                applyInspectorChanges();
            });
            card.appendChild(field);
        });
        contentInspectorEl.appendChild(card);
    }

    const links = doc.querySelectorAll('a, button.briants-btn');
    if (links.length > 0) {
        const card = document.createElement('div');
        card.className = 'inspector-card';
        card.innerHTML = `<div class="inspector-card-title"><i class="fa-solid fa-link"></i> Links & Buttons</div>`;
        links.forEach((link, idx) => {
            const field = document.createElement('div');
            field.className = 'inspector-field';
            const isAnchor = link.tagName === 'A';
            const linkText = link.textContent.trim();
            const hrefVal = isAnchor ? (link.getAttribute('href') || '#') : '(Button)';

            field.innerHTML = `
                <div class="inspector-link-row">
                    <div>
                        <label class="inspector-label">Link Label:</label>
                        <input type="text" class="inspector-input link-text-input" value="${escapeHtmlAttr(linkText)}">
                    </div>
                    <div>
                        <label class="inspector-label">Link URL:</label>
                        <input type="text" class="inspector-input link-href-input" value="${escapeHtmlAttr(hrefVal)}" ${!isAnchor ? 'disabled' : ''}>
                    </div>
                </div>
            `;

            const textInput = field.querySelector('.link-text-input');
            const hrefInput = field.querySelector('.link-href-input');

            textInput.addEventListener('input', () => {
                const icon = link.querySelector('i');
                if (icon) {
                    link.innerHTML = textInput.value + ' ' + icon.outerHTML;
                } else {
                    link.textContent = textInput.value;
                }
                applyInspectorChanges();
            });

            if (isAnchor) {
                hrefInput.addEventListener('input', () => {
                    link.setAttribute('href', hrefInput.value);
                    applyInspectorChanges();
                });
            }

            card.appendChild(field);
        });
        contentInspectorEl.appendChild(card);
    }
}

// HTML attribute escaper helper
function escapeHtmlAttr(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// --------------------------------------------------------------------------
// Clipboard & Panel Controls
// --------------------------------------------------------------------------

// Copy Console code directly to clipboard
function copyConsoleCodeToClipboard() {
    let code = codeOutputEl.value;
    if (activeCodeTab === 'content') {
        code = getSectionHtml(activeSectionId);
    }
    if (!code) return;
    
    navigator.clipboard.writeText(code).then(() => {
        showCopyFeedback();
    }).catch(err => {
        console.error('Failed to copy: ', err);
        codeOutputEl.select();
        document.execCommand('copy');
        showCopyFeedback();
    });
}

// Trigger copying current active code from sidebar button
function triggerCopyActiveCode() {
    copyConsoleCodeToClipboard();
}

// Flash green feedback badge
function showCopyFeedback() {
    copyTextFeedbackEl.classList.add('show');
    setTimeout(() => {
        copyTextFeedbackEl.classList.remove('show');
    }, 2000);
}

// Collapsible Panels (Sidebar and Console)
function toggleSidebar(collapse) {
    const sidebar = document.querySelector('.sidebar');
    const btnRestore = document.getElementById('btn-restore-sidebar');
    
    if (collapse) {
        sidebar.classList.add('collapsed');
        btnRestore.style.display = 'flex';
    } else {
        sidebar.classList.remove('collapsed');
        btnRestore.style.display = 'none';
    }
}

function toggleConsole(collapse) {
    const consoleEl = document.querySelector('.code-console');
    const btnRestore = document.getElementById('btn-restore-console');
    
    if (collapse) {
        consoleEl.classList.add('collapsed');
        btnRestore.style.display = 'flex';
    } else {
        consoleEl.classList.remove('collapsed');
        btnRestore.style.display = 'none';
    }
}
