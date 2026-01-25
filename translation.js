export const translations = {
    CS: {
        pageTitle: "Václav Jež - Portfolio",
        navAbout: "O mně",
        navSkills: "Dovednosti",
        navProjects: "Projekty",
        navContact: "Kontaktujte mě",
        aboutTitle: "O mně",
        aboutText:
            "Absolvent bakalářského programu Ekonomie na Masarykově univerzitě, nyní student navazujícího magisterského programu Matematické a statistické metody v ekonomii. Kombinuji praktické zkušenosti ze svých projektů a samostudia s formálním vzděláním. Přináším tak přesah znalostí od ekonomie, podnikové ekonomie, statistiky, ekonometrie po obecné programování, práci s daty a webový vývoj. Jsem nadšený do data science, technologií a pokroku, ve volném čase rád sbírám znalosti z těchto oblastí. Neustále rozšiřuji svoje technické dovednosti a hledám příležitosti k jejich uplatnění v praktických úkolech. Přehled mých hlavních projektů je dostupný níže. Detailnější popis a výsledky projektů spolu s reporty projektů jsou dostupné na GitHubu.",
        skillsTitle: "Dovednosti",
        skillsML: "Strojové učení",
        skillsMCMC: "MCMC Simulace",
        skillsStat: "Statistika (+ Ekonometrie, Modely časových řad, Bayesiánská analýza)",
        filters: ["Vše", "Strojové učení", "Statistika", "Webový vývoj"],
        projectsTitle: "Projekty",
        footerText: "© 2025 Václav Jež. Všechna práva vyhrazena.",

        project_title_0: "Netradiční data, tradiční modely",
        project_desc_0: `
            Projekt v jazyce <strong>R</strong> zaměřený na analýzu časových řad, zkoumající, zda netradiční data (NLP sentiment) mohou vylepšit predikci cen akcií.
            <br><br>
            <strong>Klíčové prvky:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Metodologie:</strong> Porovnání tradičních statistických modelů (ARIMA) s modely rozšířenými o exogenní proměnné (Tweets sentiment, VIX).</li>
                <li><strong>Data Science:</strong> Využití PCA (analýza hlavních komponent) pro snížení dimenzionality finančních indikátorů.</li>
                <li><strong>Výsledek:</strong> Projekt ukázal, že nejjednodušší model <strong>ARIMA</strong> byl pro akcie TSLA nejlepším prediktorem. Přidání sentimentu ani PCA nevedlo ke statisticky významnému zlepšení predikce.</li>
            </ul>
        `,

        project_title_1: "Netradiční data, netradiční modely",
        project_desc_1: `
            Rozšíření předchozí analýzy do prostředí <strong>Pythonu</strong> s využitím moderních modelů strojového učení (Machine Learning) pro regresní i klasifikační úlohy.
            <br><br>
            <strong>Použité modely:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Gradient Descent (Linear & Logistic Regression)</li>
                <li>Tree-based modely: Decision Trees, <strong>Random Forest, XGBoost, LightGBM</strong>.</li>
            </ul>
            <strong>Výsledky:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Regrese:</strong> Nejlepší model (RandomForest) dosáhl podobných chybových metrik (MSE, MAE) jako ARIMA v předchozí části, což potvrzuje náročnost predikce "náhodné procházky" cen akcií.</li>
                <li><strong>Klasifikace:</strong> Predikce významného růstu (> 0.5 %) dosáhla accuracy ~55 % a F1 skóre 0.58 (GD Logistic Regression).</li>
            </ul>
        `,

        project_title_2: "RAG LLM ChatBOT pro dokumentaci python knihoven",
        project_desc_2: `
            End-to-end implementace <strong>RAG (Retrieval-Augmented Generation)</strong> pipeline v Pythonu, která umožňuje chatovat s technickou dokumentací knihoven (Pandas, Numpy, Sklearn).
            <br><br>
            <strong>Tech Stack & Architektura:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Backend:</strong> Python, parsování HTML dokumentace na "chunky", OpenAI Embeddings.</li>
                <li><strong>Databáze:</strong> PostgreSQL s rozšířením <code>pgvector</code> (Supabase) pro vektorové vyhledávání.</li>
                <li><strong>AI Model:</strong> ChatGPT (přes API) dostává relevantní kontext vyhledaný pomocí eukleidovské vzdálenosti.</li>
                <li><strong>Frontend & Deploy:</strong> UI vytvořené s pomocí Gemini Code Agenta, aplikace je kontejnerizována v <strong>Dockeru</strong> a hostována na Renderu.</li>
            </ul>
            <a href='https://docs-rag-chat-bot.onrender.com' target='_blank'>Otevřít aplikaci</a>
        `,

        project_title_3: "Analýza finančního sentimentu: Bayesovská statistika vs. Transformers (FinBERT)",
        project_desc_3: `
            Tento projekt řeší dilema „Black Box vs. Glass Box“ v oblasti NLP porovnáním predikční síly moderních jazykových modelů (LLM) s interpretovatelností pravděpodobnostních modelů.
            <br><br>
            <strong>Klíčové prvky a výsledky:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Modelování:</strong> Implementace a porovnání tří přístupů: Fine-tuned <strong>FinBERT</strong> (Hugging Face), <strong>Bayesovská logistická regrese</strong> (vlastní model v PyMC s MCMC/NUTS samplerem) a <strong>Complement Naive Bayes</strong>.</li>
                <li><strong>Feature Engineering:</strong> Vlastní tokenizační pipeline pro zachování sémantiky čísel (např. konverze „+5%“ na <code>POS_PERC_TOKEN</code>).</li>
                <li><strong>Výsledky:</strong> FinBERT dominoval v přesnosti (<strong>77 % Accuracy, 0.92 ROC AUC</strong>). Bayesovský model (63 % Accuracy) však poskytl klíčovou byznysovou hodnotu skrze kvantifikaci nejistoty a interpretovatelnost vah (Forest Plots).</li>
            </ul>
            <strong>Tech Stack:</strong> Python, PyTorch, PyMC, Hugging Face, Scikit-learn, ArviZ.
        `,

        project_title_4: "Bakalářská práce: Analýza vlivu nekonvenčních nástrojů centrálních bank",
        project_desc_4: `
            Ekonometrická analýza v <strong>R</strong> zkoumající dopad nekonvenční monetární politiky na inflační očekávání v ČR, eurozóně a Švédsku.
            <br><br>
            <strong>Metodologie:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Využití <strong>VAR modelů</strong> (Vektorová autoregrese) rozšířených o exogenní proměnné.</li>
                <li>Manuální sestrojení unikátního datasetu z veřejných prohlášení centrálních bank.</li>
                <li>Vlastní custom funkce from scratch pro výpočet funkcí impulsních odezev (IRF) pro exogenní proměnné (R neobsahuje).</li>
            </ul>
            <strong>Závěr:</strong> Kvantitativní uvolňování nemělo statisticky významný dopad, zatímco <em>Forward Guidance</em> vykazovala významný vliv v závislosti na směru politiky.
            <br>
            <a href='https://is.muni.cz/th/dzkyy/?fakulta=1421;obdobi=181;lang=cs;id=300358' target='_blank'>Odkaz na práci v IS MU</a>.
        `,

        project_title_5: "Predikce cen akcií v simulované kolektivní VŠ hře",
        project_desc_5: `
            Projekt v <strong>R</strong> zaměřený na analýzu trhu v rámci simulované manažerské hry (Manahra) na Masarykově univerzitě.
            <br><br>
            <strong>Cíl & Realizace:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Získání dat z herního rozhraní pomocí <strong>Web Scrapingu</strong>.</li>
                <li>Tvorba lineárního regresního modelu pro predikci cen akcií fiktivních autovýrobců v uzavřeném tržním prostředí.</li>
                <li>Analýza chování studentů jako tržních agentů.</li>
            </ul>
        `,

        project_title_6: "Webová aplikace pro testování modelů (Time Series)",
        project_desc_6: `
            Interaktivní webová aplikace, která umožňuje uživatelům experimentovat s hyperparametry modelů na reálných finančních datech.
            <br><br>
            <strong>Funkcionalita:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Výběr libovolné akcie a automatické stažení historických dat.</li>
                <li>Trénink a evaluace modelů: <strong>ARIMA, LSTM, Gradient Descent Regression</strong>.</li>
                <li>Vizualizace výsledků pomocí interaktivních grafů.</li>
            </ul>
            <em>Status: In-progress (plánováno rozšíření o další modely a veřejný deployment).</em>
        `,

        project_title_7: "FitApp: Správa kalorií a aktivit",
        project_desc_7: `
            Full-stack webová aplikace pro sledování životního stylu, příjmu makroživin a sportovních aktivit.
            <br><br>
            <strong>Technologie:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Napojení na externí API pro získávání nutričních dat.</li>
                <li><strong>SQL databáze</strong> pro ukládání historie uživatele.</li>
                <li>Hosting backendu i frontendu na platformě Render.</li>
            </ul>
            <a href='https://fitapp-mo2k.onrender.com/' target='_blank'>Otevřít aplikaci</a>
        `,

        project_title_8: "Real-time Chat s WebSockety",
        project_desc_8: `
            Chatovací aplikace umožňující komunikaci v reálném čase, včetně podpory pro emoji a GIFy.
            <br><br>
            <strong>Technické řešení:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Využití protokolu <strong>WebSocket (Socket.io)</strong> pro instantní přenos zpráv.</li>
                <li>Správa chatovacích místností (vytváření, připojování, mazání).</li>
            </ul>
            <em>Poznámka: Demo verze má omezenou funkcionalitu z důvodu limitací free-tier hostingu pro WebSockety.</em>
            <br>
            <a href='https://chatapp-three-orpin.vercel.app/login' target='_blank'>Otevřít demo</a>
        `,

        project_title_9: "Webová stránka pro portfolio",
        project_desc_9: `
            Stránka, na které se právě nacházíte! :)
            <br><br>
            Nejedná se o stažený template, ale o ručně psaný kód v čistém <strong>JavaScriptu, HTML a CSS</strong>. Cílem bylo vytvořit rychlou, jednoduchou a responzivní prezentaci mých projektů s deploymentem na GitHub Pages.
        `
    },
    EN: {
        pageTitle: "Václav Jež - Portfolio",
        navAbout: "About Me",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact Me",
        aboutTitle: "About Me",
        aboutText:
            "Graduate of the Bachelor's program in Economics at Masaryk University, currently pursuing a Master's in Mathematical and Statistical Methods in Economics. I combine practical experience from my projects and self-study with formal education. My expertise spans economics, business, statistics, econometrics, programming, data analysis, and web development. I am passionate about data science, technology, and innovation, continuously expanding my technical skills and seeking opportunities to apply them in real-world projects. A summary of my main projects is available below, and detailed reports can be found on GitHub.",
        skillsTitle: "Skills",
        skillsML: "Machine Learning",
        skillsMCMC: "MCMC Simulations",
        skillsStat: "Statistics (+ Econometrics, Time Series Models, Bayesian Analysis)",
        filters: ["All", "Machine Learning", "Statistics", "Web Development"],
        projectsTitle: "Projects",
        footerText: "© 2025 Václav Jež. All rights reserved.",

        project_title_0: "Unconventional Data, Traditional Models",
        project_desc_0: `
            An <strong>R</strong> project focused on analyzing whether unconventional financial data (NLP sentiment) can improve stock price prediction using traditional time-series models.
            <br><br>
            <strong>Key Highlights:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Methodology:</strong> Benchmarking ARIMA models against models incorporating exogenous variables (Tweet sentiment, VIX).</li>
                <li><strong>Data Science:</strong> Implemented PCA to reduce the dimensionality of financial indicators.</li>
                <li><strong>Outcome:</strong> The simplest <strong>ARIMA</strong> model proved to be the best predictor for TSLA stock. Neither sentiment data nor PCA yielded statistically significant performance improvements.</li>
            </ul>
        `,

        project_title_1: "Unconventional Data, Unconventional Models",
        project_desc_1: `
            An extension of the previous analysis using <strong>Python</strong> and Machine Learning models for both regression and classification tasks.
            <br><br>
            <strong>Models Used:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Gradient Descent (Linear & Logistic Regression).</li>
                <li>Tree-based models: Decision Trees, <strong>Random Forest, XGBoost, LightGBM</strong>.</li>
            </ul>
            <strong>Results:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Regression:</strong> The best model (RandomForest) matched the error metrics (MSE, MAE) of ARIMA, confirming the "Random Walk" nature of stock prices.</li>
                <li><strong>Classification:</strong> Predicting significant returns (> 0.5%) achieved ~55% accuracy and an F1 score of 0.58 (GD Logistic Regression).</li>
            </ul>
        `,

        project_title_2: "RAG LLM ChatBOT for Python Documentation",
        project_desc_2: `
            End-to-end implementation of a <strong>RAG (Retrieval-Augmented Generation)</strong> pipeline in Python, enabling users to chat with technical documentation (Pandas, Numpy, Sklearn).
            <br><br>
            <strong>Tech Stack & Architecture:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Backend:</strong> Python, HTML parsing/chunking, OpenAI Embeddings.</li>
                <li><strong>Database:</strong> PostgreSQL with <code>pgvector</code> (Supabase) for vector similarity search.</li>
                <li><strong>AI Model:</strong> ChatGPT (via API) receives relevant context retrieved via Euclidean distance.</li>
                <li><strong>Frontend & Deploy:</strong> UI built with Gemini Code Agent, containerized in <strong>Docker</strong>, and hosted on Render.</li>
            </ul>
            <a href='https://docs-rag-chat-bot.onrender.com' target='_blank'>Open App</a>
        `,

        project_title_3: "Financial Sentiment Analysis: Bayesian Statistics vs. Transformers (FinBERT)",
        project_desc_3: `
            This project addresses the "Black Box vs. Glass Box" dilemma in financial NLP by benchmarking the predictive power of Large Language Models against the interpretability of probabilistic models.
            <br><br>
            <strong>Key Highlights & Results:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li><strong>Modeling:</strong> Implemented and compared three distinct approaches: A fine-tuned <strong>FinBERT</strong> model (Hugging Face), <strong>Bayesian Logistic Regression</strong> (built from scratch in PyMC using MCMC/NUTS sampling), and <strong>Complement Naive Bayes</strong>.</li>
                <li><strong>Feature Engineering:</strong> Developed a custom tokenization pipeline to preserve the semantic value of numerical data (e.g., converting "+5%" to <code>POS_PERC_TOKEN</code>).</li>
                <li><strong>Outcome:</strong> FinBERT achieved state-of-the-art performance (<strong>77% Accuracy, 0.92 ROC AUC</strong>). However, the Bayesian model (63% Accuracy) delivered critical business value through uncertainty quantification and interpretability (Forest Plots).</li>
            </ul>
            <strong>Tech Stack:</strong> Python, PyTorch, PyMC, Hugging Face, Scikit-learn, ArviZ.
        `,

        project_title_4: "Bachelor Thesis: Unconventional Central Bank Tools Analysis",
        project_desc_4: `
            Econometric analysis in <strong>R</strong> examining the impact of unconventional monetary policy on inflation expectations in the Czech Republic, Eurozone, and Sweden.
            <br><br>
            <strong>Methodology:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Utilized <strong>VAR models</strong> (Vector Autoregression) with exogenous variables.</li>
                <li>Manually constructed a unique dataset from central bank statements.</li>
                <li>Own custom function from scratch to computed Impulse Response Functions (IRF) (isn't available in R).</li>
            </ul>
            <strong>Conclusion:</strong> Quantitative easing showed no statistically significant impact, whereas <em>Forward Guidance</em> had a significant effect depending on the policy direction.
            <br>
            <a href='https://is.muni.cz/th/dzkyy/?fakulta=1421;obdobi=181;lang=cs;id=300358' target='_blank'>Thesis available at IS MU</a>.
        `,

        project_title_5: "Stock Price Prediction in Simulated University Game",
        project_desc_5: `
            An <strong>R</strong> project analyzing a simulated market within the "Manahra" management game at Masaryk University.
            <br><br>
            <strong>Goal & Implementation:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Acquired game data via <strong>Web Scraping</strong>.</li>
                <li>Built a Linear Regression model to predict stock prices of fictional car manufacturers in a closed-loop economy.</li>
                <li>Analyzed student behavior as market agents.</li>
            </ul>
        `,

        project_title_6: "Web App for Model Testing (Time Series)",
        project_desc_6: `
            Interactive web application allowing users to experiment with model hyperparameters on real-world stock data.
            <br><br>
            <strong>Features:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>User selection of any stock symbol to fetch historical data.</li>
                <li>Training & Evaluation of models: <strong>ARIMA, LSTM, Gradient Descent Regression</strong>.</li>
                <li>Result visualization via interactive charts.</li>
            </ul>
            <em>Status: In-progress (planned expansion for more models and public deployment).</em>
        `,

        project_title_7: "FitApp: Calorie and Activity Manager",
        project_desc_7: `
            Full-stack web application for tracking lifestyle, macronutrient intake, and sports activities.
            <br><br>
            <strong>Tech Stack:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>External API integration for nutritional data.</li>
                <li><strong>SQL Database</strong> for storing user history.</li>
                <li>Backend and frontend hosted on Render.</li>
            </ul>
            <a href='https://fitapp-mo2k.onrender.com/' target='_blank'>Open App</a>
        `,

        project_title_8: "Real-time Chat with WebSockets",
        project_desc_8: `
            Chat application enabling real-time communication, including support for emojis and GIFs.
            <br><br>
            <strong>Technical Solution:</strong>
            <ul style="margin-top: 5px; margin-bottom: 10px; padding-left: 20px;">
                <li>Utilized <strong>WebSocket (Socket.io)</strong> protocol for instant messaging.</li>
                <li>Room management (create, join, delete chat rooms).</li>
            </ul>
            <em>Note: The demo has limited functionality due to free-tier hosting limitations for WebSockets.</em>
            <br>
            <a href='https://chatapp-three-orpin.vercel.app/login' target='_blank'>Open Demo</a>
        `,

        project_title_9: "Portfolio Webpage",
        project_desc_9: `
            The page you are currently viewing! :)
            <br><br>
            This is not a template, but pure <strong>JavaScript, HTML, and CSS</strong> written from scratch. The goal was to create a fast, simple, and responsive showcase of my projects deployed via GitHub Pages.
        `
    }
}
