// Briants Building Materials - Section Builder Dashboard Controller

// State Management
let activePageId = 'main-building'; // Default loaded page template ('main-building', 'machinery-spotlight', 'trade-heavy-side')
let activeMode = 'isolate'; // 'isolate' or 'builder'
let activeSectionId = 'top-banner'; // Default selected section in isolate mode
let activeCodeTab = 'html'; // 'html', 'css', 'js', or 'global'
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
let activeTitleEl;
let activeCategoryEl;
let copyTextFeedbackEl;
let modeDescEl;
let btnSelectAllEl;
let btnClearAllEl;
let pageTemplateSelectEl;

document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM Elements
    selectionListEl = document.getElementById('selection-list');
    previewIframeEl = document.getElementById('preview-iframe');
    codeOutputEl = document.getElementById('code-output');
    activeTitleEl = document.getElementById('active-title');
    activeCategoryEl = document.getElementById('active-category');
    copyTextFeedbackEl = document.getElementById('copy-text-feedback');
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
}

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
}

// Switch Mode between Isolated Preview and Page Builder
function setMode(mode) {
    if (activeMode === mode) return;
    activeMode = mode;
    
    // Toggle active tabs
    document.getElementById('btn-mode-isolate').classList.toggle('active', mode === 'isolate');
    document.getElementById('btn-mode-builder').classList.toggle('active', mode === 'builder');
    
    if (mode === 'isolate') {
        modeDescEl.textContent = 'Select a single building section below to isolate and view its dedicated HTML, CSS, and JS.';
        btnSelectAllEl.style.display = 'none';
        btnClearAllEl.style.display = 'none';
        if (activeCodeTab === 'global') activeCodeTab = 'html';
    } else {
        modeDescEl.textContent = 'Check building sections to combine them into a custom landing page. Arrange their layout order with arrows.';
        btnSelectAllEl.style.display = 'flex';
        btnClearAllEl.style.display = 'flex';
    }
    
    renderSidebar();
    updatePreview();
    updateCodeDisplay();
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
    
    li.innerHTML = `
        <label>
            <i class="fa-solid ${getCategoryIcon(section.category)}"></i>
            <span>${section.name}</span>
            <span class="item-meta">${section.category}</span>
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
    
    const docData = generateIframeContent();
    previewWindow.document.open();
    previewWindow.document.write(docData);
    previewWindow.document.close();
}

// Generate compiled HTML content to inject in Iframe
function generateIframeContent() {
    const globalSection = SECTIONS_DATA.find(s => s.id === 'global');
    const globalStyle = globalSection ? globalSection.css : '';
    let combinedHtml = '';
    let combinedCss = '';
    let combinedJs = '';
    
    if (activeMode === 'isolate') {
        const section = SECTIONS_DATA.find(s => s.id === activeSectionId);
        if (section) {
            combinedHtml = section.html;
            combinedCss = section.css || '';
            combinedJs = section.js || '';
        }
    } else {
        // Builder mode - combine all checked sections in order
        builderSections.forEach(section => {
            if (selectedSectionIds.includes(section.id)) {
                combinedHtml += `\n<!-- Section: ${section.name} -->\n` + section.html + '\n';
                combinedCss += `\n/* Section: ${section.name} */\n` + (section.css || '') + '\n';
                combinedJs += `\n/* Section: ${section.name} */\n` + (section.js || '') + '\n';
            }
        });
        
        if (combinedHtml === '') {
            combinedHtml = '<div style="display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif; color:#64748b; text-align:center;"><div><i class="fa-solid fa-folder-open" style="font-size:3rem; margin-bottom:1rem; display:block; color:#94a3b8;"></i><h3>No sections selected</h3><p style="font-size:0.85rem; margin-top:0.25rem;">Check some boxes in the sidebar to build your building materials landing page preview.</p></div></div>';
        }
    }
    
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

// Switch code viewer tabs
function setCodeTab(tab) {
    activeCodeTab = tab;
    
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

// Get the text to show inside the code console
function getActiveCodeText() {
    const globalSection = SECTIONS_DATA.find(s => s.id === 'global');
    
    if (activeCodeTab === 'global') {
        return globalSection ? globalSection.css : '';
    }
    
    if (activeMode === 'isolate') {
        const section = SECTIONS_DATA.find(s => s.id === activeSectionId);
        if (!section) return '';
        
        switch (activeCodeTab) {
            case 'html': return section.html;
            case 'css': return section.css || '/* No component-specific CSS needed. Uses Global Theme styles. */';
            case 'js': return section.js || '// No JavaScript required for this section.';
            default: return '';
        }
    } else {
        // Builder mode compiled output
        let combined = '';
        builderSections.forEach(section => {
            if (selectedSectionIds.includes(section.id)) {
                if (activeCodeTab === 'html') {
                    combined += `<!-- Section: ${section.name} -->\n` + section.html + '\n\n';
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
    } else {
        const template = PAGE_TEMPLATES.find(p => p.id === activePageId);
        const templateName = template ? template.name : 'Custom';
        activeTitleEl.textContent = `${templateName} (${selectedSectionIds.length} Sections)`;
        activeCategoryEl.textContent = 'Mode: Page Builder Combined View';
    }
    
    codeOutputEl.value = getActiveCodeText();
}

// Copy Console code directly to clipboard
function copyConsoleCodeToClipboard() {
    const code = codeOutputEl.value;
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
