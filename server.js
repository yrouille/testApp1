import express from 'express';

// Node 18+ provides a global fetch implementation
const API_KEY = process.env.WORKFLOWAI_API_KEY;
if (!API_KEY) {
  console.error('WORKFLOWAI_API_KEY is required');
  process.exit(1);
}

const app = express();
app.use(express.json());
app.use(express.static('.'));

const WORKFLOW_URL =
  'https://run.workflowai.com/v1/@yannrouillegmailcom/tasks/generate-a-swot-analysis/schemas/1/run';

app.post('/swot', async (req, res) => {
  try {
    const { company_name } = req.body;
    if (!company_name) {
      res.status(400).json({ error: 'company_name required' });
      return;
    }

    const response = await fetch(WORKFLOW_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task_input: { company_name },
        version: 'production',
        use_cache: 'auto'
      })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('WorkflowAI error:', text);
      res.status(500).json({ error: 'Failed to generate analysis' });
      return;
    }

    const { output } = await response.json();
    res.json(output);
  } catch (error) {
    console.error('Failed to run :', error);
    res.status(500).json({ error: 'Failed to generate analysis' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
