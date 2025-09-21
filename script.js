const TOKEN = "Zx2kkRJr55poIYavewstnIWxtfmrxIbb"; // Production Token

// Word → PDF
function convertWordToPDF() {
  const fileInput = document.getElementById("wordFile");
  if (!fileInput.files.length) return alert("Please select a Word file first!");

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("Secret", TOKEN);
  formData.append("File", file);

  fetch("https://v2.convertapi.com/convert/docx/to/pdf", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    const link = document.getElementById("downloadLink");
    link.href = data.Files[0].Url;
    link.style.display = "inline-block";
    link.textContent = "Download PDF";
  })
  .catch(err => alert("Conversion failed: " + err));
}

// JPG → PDF
function convertJPGToPDF() {
  const fileInput = document.getElementById("jpgFile");
  if (!fileInput.files.length) return alert("Please select a JPG file first!");

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("Secret", TOKEN);
  formData.append("File", file);

  fetch("https://v2.convertapi.com/convert/jpg/to/pdf", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    const link = document.getElementById("downloadLink");
    link.href = data.Files[0].Url;
    link.style.display = "inline-block";
    link.textContent = "Download PDF";
  })
  .catch(err => alert("Conversion failed: " + err));
}

// Merge PDFs
function mergePDFs() {
  const filesInput = document.getElementById("mergeFiles");
  if (!filesInput.files.length) return alert("Please select PDF files to merge!");

  const formData = new FormData();
  formData.append("Secret", TOKEN);
  for (let i = 0; i < filesInput.files.length; i++) {
    formData.append("Files[" + i + "]", filesInput.files[i]);
  }

  fetch("https://v2.convertapi.com/convert/pdf/merge", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    const link = document.getElementById("downloadLink");
    link.href = data.Files[0].Url;
    link.style.display = "inline-block";
    link.textContent = "Download Merged PDF";
  })
  .catch(err => alert("Merge failed: " + err));
}

// Split PDF
function splitPDF() {
  const fileInput = document.getElementById("splitFile");
  if (!fileInput.files.length) return alert("Please select a PDF to split!");

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("Secret", TOKEN);
  formData.append("File", file);

  fetch("https://v2.convertapi.com/convert/pdf/split", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    const link = document.getElementById("downloadLink");
    link.href = data.Files[0].Url;
    link.style.display = "inline-block";
    link.textContent = "Download Split PDF";
  })
  .catch(err => alert("Split failed: " + err));
}
