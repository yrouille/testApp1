# testApp1

This small project provides a Python CLI and a simple web page to
invoke the WorkflowAI API that generates a SWOT analysis for a given
company name.

## Web interface

Open `index.html` in a browser. Enter a company name in the text field
and click the button to call the API. The SWOT analysis is rendered in a
four‑column grid for readability. Technical details returned by
WorkflowAI (version, duration, cost and metadata) are available via a
tooltip icon. The last ten analyses are saved in your browser storage
and can be reloaded through the history drop‑down.

## Python CLI

Run the CLI with `python swot_interface.py` and follow the prompt to
enter the company name. The script prints the JSON response.
