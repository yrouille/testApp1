document.getElementById('analyze-button').addEventListener('click', () => {
  const company = document.getElementById('company-name').value.trim();
  const result = document.getElementById('result');
  if (!company) {
    result.textContent = "Veuillez saisir le nom d'une entreprise.";
    return;
  }

  const analysis = generateSwot(company);
  result.innerHTML = `
    <h2>Analyse SWOT de ${company}</h2>
    <h3>Forces</h3>
    <ul>${analysis.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
    <h3>Faiblesses</h3>
    <ul>${analysis.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
    <h3>Opportunités</h3>
    <ul>${analysis.opportunities.map(o => `<li>${o}</li>`).join('')}</ul>
    <h3>Menaces</h3>
    <ul>${analysis.threats.map(t => `<li>${t}</li>`).join('')}</ul>
  `;
});

function generateSwot(company) {
  return {
    strengths: [
      `Notoriété de la marque ${company}`,
      "Produits innovants",
      "Bonne situation financière"
    ],
    weaknesses: [
      "Présence géographique limitée",
      "Gamme de produits réduite",
      "Dépendance à quelques grands clients"
    ],
    opportunities: [
      "Expansion du marché",
      "Nouvelles technologies émergentes",
      "Possibilités de partenariats stratégiques"
    ],
    threats: [
      "Concurrence accrue",
      "Crises économiques",
      "Évolutions réglementaires"
    ]
  };
}
