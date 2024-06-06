<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">CALCULUS-STATS</h1>
</p>
<p align="center">
    <em><code>A comprehensive web application for solving and visualizing calculus and statistics problems. Simplify your calculations and enhance your understanding with intuitive tools and interactive visualizations.</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/LofoMarin/Calculus-Stats?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/LofoMarin/Calculus-Stats?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/LofoMarin/Calculus-Stats?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/LofoMarin/Calculus-Stats?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/electronbuilder-FFFFFF.svg?style=flat&logo=electron-builder&logoColor=black" alt="electronbuilder">
	<img src="https://img.shields.io/badge/Chart.js-FF6384.svg?style=flat&logo=chartdotjs&logoColor=white" alt="Chart.js">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat&logo=styled-components&logoColor=white" alt="styledcomponents">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Electron-47848F.svg?style=flat&logo=Electron&logoColor=white" alt="Electron">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running Calculus-Stats](#-running-Calculus-Stats)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

NRC: 
Luis Marin - 200097059
Kevin Ruiz - 200166261
Santiago Carval - 200152335
Yordi Gonzales - 200166406

---

## 📦 Features

- **Comprehensive Calculators:** Provides tools for derivatives, integrals, and various calculus problems.
- **Interactive Graphs:** Visualize functions and data with interactive charts.
- **Statistical Analysis:** Perform statistical calculations including mean, median, mode, and standard deviation.
- **User-Friendly Interface:** Intuitive design for easy navigation and use.
- **Customization Options:** Tailor the application to suit your specific needs.
- **Offline Capability:** Use the application without an internet connection.

---

## 📂 Repository Structure

```sh
└── Calculus-Stats/
    ├── README.md
    ├── assets
    │   └── icons
    │       └── win
    │           └── icon.ico
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.png
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── main.js
    │   ├── manifest.json
    │   ├── myfav.jpg
    │   ├── plugin
    │   │   ├── Calculus.js
    │   │   ├── MathJax.js
    │   │   └── bootstrap.min.css
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── Icons
        │   ├── balance.png
        │   ├── calculator.png
        │   ├── close-fill.svg
        │   ├── code-bold.svg
        │   ├── documents.png
        │   ├── hamburger-lg.svg
        │   ├── letsStart.svg
        │   └── recycle.png
        ├── components
        │   ├── Icons.js
        │   ├── NavBar.css
        │   └── NavBar.js
        ├── images
        │   └── fixbg.jpg
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── pages
        │   ├── History.js
        │   ├── Home.js
        │   ├── InnerIcons
        │   │   ├── algebracheat.jpg
        │   │   ├── analytics.png
        │   │   ├── area.png
        │   │   ├── average.png
        │   │   ├── calculus.jpg
        │   │   ├── calculus.png
        │   │   ├── circle.png
        │   │   ├── cylinder.png
        │   │   ├── factors.png
        │   │   ├── flexibility.png
        │   │   ├── geometry.png
        │   │   ├── integral.png
        │   │   ├── length.png
        │   │   ├── line-chart.png
        │   │   ├── linear.png
        │   │   ├── logarithm.png
        │   │   ├── math.png
        │   │   ├── mean (2).png
        │   │   ├── mean.png
        │   │   ├── median.png
        │   │   ├── menu.png
        │   │   ├── mode.png
        │   │   ├── paint.png
        │   │   ├── quardratic.png
        │   │   ├── quardratmean.png
        │   │   ├── slopecheat.jpg
        │   │   ├── solve.png
        │   │   ├── steel.png
        │   │   ├── system.png
        │   │   ├── temperature.png
        │   │   ├── tiles.png
        │   │   ├── varience.png
        │   │   ├── weight.png
        │   │   └── winter.png
        │   ├── Notebook.js
        │   ├── Theme.js
        │   ├── Welcom.css
        │   ├── Welcom.js
        │   ├── graphs.css
        │   ├── home.css
        │   ├── homePages
        │   │   ├── AllCalculators
        │   │   │   ├── Algebra
        │   │   │   ├── Algebra.js
        │   │   │   ├── Calculus
        │   │   │   ├── Calculus.js
        │   │   │   ├── Others
        │   │   │   ├── Others.js
        │   │   │   ├── State.js
        │   │   │   └── Statistics
        │   │   ├── Calculator.js
        │   │   ├── CheatSheat.js
        │   │   ├── Converters.js
        │   │   ├── Estimators.js
        │   │   ├── converters
        │   │   │   ├── Area.jsx
        │   │   │   ├── Length.jsx
        │   │   │   ├── Temperature.jsx
        │   │   │   ├── Volume.jsx
        │   │   │   └── Weight.jsx
        │   │   ├── estimate
        │   │   │   ├── BmiCalc.jsx
        │   │   │   ├── BodyFatCalc.jsx
        │   │   │   ├── CalorieCalc.jsx
        │   │   │   ├── LoanCalc.jsx
        │   │   │   └── TaxCalc.jsx
        │   │   ├── homeModule
        │   │   └── more
        │   │       ├── AboutUs.jsx
        │   │       ├── Blog.jsx
        │   │       └── ContactUs.jsx
        │   ├── history.css
        │   ├── notebook.css
        │   ├── page.css
        │   └── welcomePages
        │       ├── About.js
        │       ├── Contact.js
        │       └── Info.js
        ├── reportWebVitals.js
        ├── serviceWorker.js
        └── setupTests.js
```

## 🧩 Modules

### Cálculus
- **Derivatives**: Calculates derivatives of algebraic and transcendental functions.
- **Integrals**: Solve definite and indefinite integrals.
- **Limits**: Determine limits of functions at specific points.

### Stadístics
- **Measures of central tendency**: Calculates mean, median and mode.
- **Measures of dispersion**: Calculates variance, standard deviation and range.
- **Distributions**: Work with normal, binomial and Poisson distributions.


## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the Calculus-Stats repository:

```sh
git clone https://github.com/LofoMarin/Calculus-Stats
```

2. Change to the project directory:

```sh
cd Calculus-Stats
```

3. Install the dependencies:

```sh
npm install -r
```

### 🤖 Running Calculus-Stats

Use the following command to run Calculus-Stats:

```sh
npm start
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```


## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/LofoMarin/Calculus-Stats/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/LofoMarin/Calculus-Stats/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/LofoMarin/Calculus-Stats/issues)**: Submit bugs found or log feature requests for Calculus-stats.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/LofoMarin/Calculus-Stats
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
