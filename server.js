import express from 'express';
import { WorkflowAI } from '@workflowai/workflowai';

const app = express();
app.use(express.json());
app.use(express.static('.'));

const workflowAI = new WorkflowAI({
  // optional, defaults to process.env.WORKFLOWAI_API_KEY
  key: 'wai-yS7LWhHODAVtQAb4_sD880sAU2rzKjnxpBQDj1PmBww'
});

const generateASWOTAnalysis = workflowAI.agent({
  id: 'generate-a-swot-analysis',
  schemaId: 1,
  version: 'production',
  useCache: 'auto'
});

app.post('/swot', async (req, res) => {
  try {
    const { company_name } = req.body;
    if (!company_name) {
      res.status(400).json({ error: 'company_name required' });
      return;
    }
    const { output } = await generateASWOTAnalysis({ company_name });
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
