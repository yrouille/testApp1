# testApp1

Cette application fournit une page Web permettant de saisir le nom d'une entreprise et de générer une analyse SWOT.

## Installation

```bash
npm install
```

## Utilisation

Lancez le serveur Node puis ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000).

```bash
npm start
```

Le champ texte permet de saisir le nom d'une entreprise. Lorsque vous cliquez sur **Analyser**, le serveur envoie une requête REST au service WorkflowAI pour générer l'analyse SWOT et affiche les forces, faiblesses, opportunités et menaces retournées.

Le service nécessite une clé API WorkflowAI. Vous pouvez la fournir via la variable d'environnement `WORKFLOWAI_API_KEY` avant de démarrer le serveur. Par exemple :

```bash
WORKFLOWAI_API_KEY=wai-yS7LWhHODAVtQAb4_sD880sAU2rzKjnxpBQDj1PmBww npm start
```
