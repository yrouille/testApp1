import json
import requests

API_URL = "https://run.workflowai.com/v1/@yannrouillegmailcom/tasks/generate-a-swot-analysis/schemas/1/run"
API_TOKEN = "wai-yS7LWhHODAVtQAb4_sD880sAU2rzKjnxpBQDj1PmBww"

def main():
    company_name = input("Entrez le nom de l'entreprise: ")
    payload = {
        "task_input": {"company_name": company_name},
        "version": "production",
        "use_cache": "auto",
    }
    headers = {
        "Authorization": f"Bearer {API_TOKEN}",
        "Content-Type": "application/json",
    }
    try:
        response = requests.post(API_URL, headers=headers, json=payload)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Erreur lors de l'appel à WorkflowAI: {e}")
        return
    try:
        data = response.json()
    except json.JSONDecodeError:
        print("Réponse non valide")
        print(response.text)
        return
    print(json.dumps(data, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
