document.addEventListener('DOMContentLoaded', () => {
  // Bouton impression
  const printButton = document.createElement('button');
  printButton.classList.add('print-button');
  printButton.innerHTML = `<i class="fas fa-print"></i> Imprimer`;
  printButton.addEventListener('click', () => window.print());
  document.body.appendChild(printButton);

  // Bouton PDF
  const pdfButton = document.createElement('button');
  pdfButton.classList.add('pdf-button');
  pdfButton.style.right = '10rem';
  pdfButton.innerHTML = `<i class="fas fa-file-pdf"></i> Télécharger PDF`;
  pdfButton.addEventListener('click', () => {
    const element = document.getElementById('cv');
    const opt = {
      margin: 0.5,
      filename: 'CV-Touny-Kamal.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  });
  document.body.appendChild(pdfButton);
});
