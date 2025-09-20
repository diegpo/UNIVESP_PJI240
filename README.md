> PJI240 - UNIVESP
                                                       

# Sistema de Gestão de Condomínios - Projeto Integrador UNIvesp II

Este projeto foi desenvolvido como parte do **Projeto Integrador** da **Universidade UNIvesp**, e tem como objetivo 
fornecer um sistema completo para gestão de condomínios residenciais. Ele inclui funcionalidades para gerenciamento 
de moradores, veículos, funcionários, encomendas, alertas e avisos, tudo em um painel administrativo moderno e responsivo.

---

## 🚀 Funcionalidades Principais

- Login e logout de usuários com autenticação segura via POST.
- Dashboard interativo com cards e data/hora dinâmica.
- Gerenciamento de:
  - Moradores
  - Veículos
  - Funcionários
  - Encomendas e entregas
  - Alertas e avisos
- Submenus expansíveis para melhor organização.
- Interface responsiva para desktop, tablet e mobile.
- Logout via Django, garantindo segurança do sistema.

---

## 🛠 Tecnologias Empregadas

| Categoria             | Ferramenta / Tecnologia                  |
|----------------------|----------------------------------------|
| Backend              | Python, Django 4.x                      |
| Banco de Dados       | SQLite (padrão Django)                  |
| Frontend             | HTML5, CSS3, JavaScript                 |
| Framework CSS        | Personalizado / Flexbox                 |
| Ícones               | Font Awesome                             |
| Versionamento        | Git, GitHub                              |
| Desenvolvimento      | VSCode, Windows 11                       |

---

## ⚙ Estrutura do Projeto

UNIVESP_PJI240/
├── manage.py
├── app/
│ ├── migrations/
│ ├── static/
│ │ ├── css/
│ │ └── js/
│ ├── templates/
│ │ ├── index.html
│ │ └── dashboard.html
│ ├── views.py
│ └── urls.py
├── db.sqlite3
└── README.md

---

## 💻 Como Rodar o Projeto

1. Clone o repositório:
git clone https://github.com/diegpo/UNIVESP_PJI240.git

2. Acesse a pasta do projeto:
cd UNIVESP_PJI240

3. Crie e ative o ambiente virtual:
python -m venv venv
Windows
venv\Scripts\activate
Linux/Mac
source venv/bin/activate

4. Instale as dependências:
pip install -r requirements.txt

5. Aplique as migrações:
python manage.py migrate

6. Crie um superusuário:
python manage.py createsuperuser

7. Rode o servidor:
python manage.py runserver

8. Acesse o sistema no navegador:
http://127.0.0.1:8000/



🎨 Observações de Design
Dashboard inspirado em sistemas modernos com submenus animados.
Data e hora atualizadas dinamicamente.
Logout seguro via Django.
Estilo e cores personalizadas para melhor experiência do usuário.


🔒 Login e Logout
O sistema utiliza o Django Auth para autenticação.
Logout seguro via botão no dashboard.
Dashboard protegido com @login_required.

📚 Referências
Documentação Django
Font Awesome
W3Schools – HTML/CSS/JS


