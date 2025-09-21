<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PDF Tools</title>
</head>
<body>
  <h2>Word to PDF</h2>
  <input type="file" id="wordFile" />
  <button onclick="convertWordToPDF()">Convert Word</button>

  <h2>JPG to PDF</h2>
  <input type="file" id="jpgFile" />
  <button onclick="convertJPGToPDF()">Convert JPG</button>

  <h2>Merge PDF</h2>
  <button onclick="mergePDFs()">Merge PDFs</button>

  <h2>Split PDF</h2>
  <button onclick="splitPDF()">Split PDF</button>

  <!-- JavaScript link -->
  <script src="script.js"></script>
</body>
</html>
