from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/api/execute-automation', methods=['POST'])
def execute_automation():
    try:
        # Substituir pelo caminho do script que executa as macros e o envio de e-mail
        subprocess.run(["python", "app/automation.py"])
        return jsonify({"message": "Automação executada com sucesso"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
