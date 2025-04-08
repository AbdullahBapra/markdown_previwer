// Get references to the editor and preview elements
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// Initial markdown text that will be loaded when the page starts
const defaultMarkdown = `
# Heading 1
## Heading 2
[Google](https://www.google.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- Item 1
- Item 2
> Blockquote

![Image](https://via.placeholder.com/150)

**Bold Text**
`;

// Set the default markdown content in the editor
editor.value = defaultMarkdown;

// Function to update the preview with parsed markdown
function updatePreview() {
  // Parse the markdown input using the Marked library
  const markdownText = editor.value;
  preview.innerHTML = marked(markdownText);
}

// Add event listener to update preview as the user types
editor.addEventListener("input", updatePreview);

// Call the function initially to load the default content
updatePreview();
