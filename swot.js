document.getElementById('analyze-button').addEventListener('click', async () => {
  const company = document.getElementById('company-name').value.trim();
  const result = document.getElementById('result');
  if (!company) {
    result.textContent = "Veuillez saisir le nom d'une entreprise.";
    return;
  }

  result.textContent = 'Analyse en cours...';
  try {
    const response = await fetch('/swot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ company_name: company })
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la requête');
    }
    const analysis = await response.json();
    result.innerHTML = `
      <h2>Analyse SWOT de ${company}</h2>
      <h3>Forces</h3>
      <ul>${(analysis.strengths || []).map(s => `<li>${s}</li>`).join('')}</ul>
      <h3>Faiblesses</h3>
      <ul>${(analysis.weaknesses || []).map(w => `<li>${w}</li>`).join('')}</ul>
      <h3>Opportunités</h3>
      <ul>${(analysis.opportunities || []).map(o => `<li>${o}</li>`).join('')}</ul>
      <h3>Menaces</h3>
      <ul>${(analysis.threats || []).map(t => `<li>${t}</li>`).join('')}</ul>
    `;
  } catch (error) {
    console.error(error);
    result.textContent = "Erreur lors de l'analyse.";
  }
});
