<img width="92" alt="image" src="https://github.com/user-attachments/assets/185cbfa9-c21c-4c9d-9023-9fd069c7d022" />


# 🛠️ Autonome Integration in Hadi AI

## Overview
[Autonome](https://autonome.io/) is a platform for **building, deploying, and distributing autonomous AI agents**. It supports frameworks like **Eliza & AgentKit**, allowing **secure AI hosting** with **TEE plug-in** for enhanced **verifiability and security**.

## 🚀 How Hadi AI Uses Autonome
Hadi AI is a **multi-agent system for ethical DeFi investments**. We use Autonome to:  
✅ **Deploy AI agents** that research, validate, and strategize DeFi investments.  
✅ **Secure transactions & execution** using the **TEE plug-in**.  
✅ **Enable user interactions** via **a Telegram & X (Twitter) bot** for real-time investment insights.

## 🛠️ Technical Implementation
1. **Upload AI Agents to Autonome**:
    ```python
    autonome_agent = deploy_agent(
        framework="Eliza",
        agent_name="Hadi_Research_Agent",
        secure_execution=True
    )
    ```

2. **Host AI Agents Securely**:
    ```python
    hosted_agent = autonome_host(
        agent=autonome_agent,
        tee_enabled=True
    )
    ```

3. **Enable Telegram Bot for Users**:
    ```python
    start_telegram_bot(agent=hosted_agent)
    ```

## 🔧 Setup Instructions
1. **Clone Hadi AI Repo**:
    ```bash
    git clone https://github.com/hadi-ai/hadi-autonome.git
    cd hadi-autonome
    ```

2. **Deploy AI Agents**:
    ```bash
    autonome deploy --agent Hadi_Research_Agent
    ```

3. **Run User Interface (Telegram/X Bot)**:
    ```bash
    python bot.py
    ```

## 🔹 Benefits to Hadi AI
✔️ **Scalable AI Hosting** – Ensures real-time, high-performance execution.  
✔️ **Security & Verifiability** – Prevents unauthorized AI modifications.  
✔️ **Seamless User Experience** – Enables easy interaction via chatbots.  

## 🔮 Future Enhancements
🚀 **Expand Autonome deployment** for AI-driven trading execution.  
🚀 **Add web-based AI dashboards** for DeFi insights.  
