// Replace this with your ConvertAPI Production Token
const CONVERT_API_TOKEN = "Zx2kkRJr55poIYavewstnIWxtfmrxIbb";

// Word to PDF
function convertWordToPDF() {
  const fileInput = document.getElementById("wordFile");
  if (!fileInput.files.length) { alert("Please select a Word file!"); return; }
  const file = fileInput.files[0];
  sendToConvertAPI(file, "docx", "pdf");
}

// JPG to PDF
function convertJPGToPDF() {
  const fileInput = document.getElementById("jpgFile");
  if (!fileInput.files.length) { alert("Please select a JPG file!"); return; }
  const file = fileInput.files[0];
  sendToConvertAPI(file, "jpg", "pdf");
}

// Merge PDFs
function mergePDFs() {
  const files = document.getElementById("mergeFiles").files;
  if (!files.length) { alert("Select PDF files to merge!"); return; }
  alert("Merge API integration pending. Multiple files will be sent to API.");
}

// Split PDF
function splitPDF() {
  const fileInput = document.getElementById("splitFile");
  if (!fileInput.files.length) { alert("Select PDF to split!"); return; }
  alert("Split API integration pending. File will be sent to API.");
}

// Generic API call function
function sendToConvertAPI(file, fromFormat, toFormat) {
  const formData = new FormData();
  formData.append("File", file);
  formData.append("Secret", CONVERT_API_TOKEN);

  fetch(`https://v2.convertapi.com/${fromFormat}/to/${toFormat}`, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.Files && data.Files[0].Url) {
      alert("Conversion ready! Download from: " + data.Files[0].Url);
      window.open(data.Files[0].Url, "_blank");
    } else {
      alert("Conversion failed. Check your API token or file format.");
    }
  })
  .catch(err => alert("Error: " + err));
}
