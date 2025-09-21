// Word to PDF
function convertWordToPDF() {
  const fileInput = document.getElementById("wordFile");
  if (!fileInput.files.length) {
    alert("Please select a Word file first!");
    return;
  }
  const file = fileInput.files[0];
  alert("File selected: " + file.name + "\nConversion will work when API is integrated.");
}

// JPG to PDF
function convertJPGToPDF() {
  const fileInput = document.getElementById("jpgFile");
  if (!fileInput.files.length) {
    alert("Please select a JPG file first!");
    return;
  }
  const file = fileInput.files[0];
  alert("File selected: " + file.name + "\nConversion will work when API is integrated.");
}

// Merge PDF
function mergePDFs() {
  const files = document.getElementById("mergeFiles").files;
  if (!files.length) {
    alert("Please select at least 2 PDF files to merge!");
    return;
  }
  alert(files.length + " files selected for merging.\nMerge will work when API is integrated.");
}

// Split PDF
function splitPDF() {
  const fileInput = document.getElementById("splitFile");
  if (!fileInput.files.length) {
    alert("Please select a PDF file to split!");
    return;
  }
  const file = fileInput.files[0];
  alert("File selected: " + file.name + "\nSplit will work when API is integrated.");
}
