<a id="readme-top"></a>

> [!CAUTION]
> This project is currently under development

<!-- PROJECT SHIELDS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![CodeCov][codecov-shield]][codecov-url]
[![CodeClimate][codeclimate-shield]][codeclimate-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tsutsu3/unbound-web-ui">
    <img src="images/Unbound_Outlined_Black.svg" alt="Logo" height="100" >
  </a>

<h3 align="center">Unbound Web UI</h3>

  <p align="center">
    A graphical user interface for managing and monitoring Unbound
    <br />
    <br />
    <a href="https://github.com/tsutsu3/unbound-web-ui">View Demo</a>
    ·
    <a href="https://github.com/tsutsu3/unbound-web-ui/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/tsutsu3/unbound-web-ui/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

> [!IMPORTANT]
> **This is an unofficial project, not affiliated with the official Unbound or its maintainers.**

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li>
      <a href="#usages">Usages</a>
    </li>
    <li>
      <a href="#development">Development</a>
      <ul>
        <li><a href="#pre-requisites">Pre requisites</a></li>
        <li><a href="#developer-setup">Developer Setup</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

`Unbound Web UI` is a graphical user interface designed to manage and monitor the Unbound DNS resolver, which is widely
used for caching and recursive DNS lookups. This UI provides a more accessible and user-friendly way to interact with
Unbound, offering functionalities that allow users to view real-time query statistics, manage cache, and configure
various settings without needing to use command-line tools.

## Key Features

- **Real-Time Monitoring**: Displays live statistics such as query rates, cache hit ratios, and server uptime, helping users monitor the DNS resolver's performance at a glance.
- **Cache Management**: Allows users to inspect, flush, or selectively remove cached entries, which is particularly useful for testing DNS changes or troubleshooting.
- **Configuration Management**: Provides options to modify and apply Unbound configurations, such as setting up access control lists (ACLs), enabling or disabling DNSSEC, and adjusting logging preferences.
- **Security and Access Control**: Offers authentication mechanisms to restrict access to authorized users, ensuring that only trusted individuals can manage Unbound settings.

## Usages

### Automated Install

Those who want to get started quickly and conveniently may install `Unbound Web UI` using the following command:

```bash
curl -sSL https://raw.githubusercontent.com/tsutsu3/unbound-web-ui/refs/heads/main/scripts/install-unbound-web-ui.sh | bash
```

### Access Web UI

- `http://localhost:3000/admin/`


<!-- GETTING STARTED -->
## Development

This section provides guidance for developers and contributors who want to work on the project.

### Pre requisites

- Node.js

Here’s how you can update the **Develop** section to include the Node.js requirement:

### Developer Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/tsutsu3/unbdound-web-ui.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd unbdound-web-ui
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Run in Development Mode**:

   ```bash
   npm run dev
   ```

   - Starts a local development server.

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tsutsu3/unbound-web-ui?style=for-the-badge
[contributors-url]: https://github.com/tsutsu3/unbound-web-ui/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tsutsu3/unbound-web-ui?style=for-the-badge
[forks-url]: https://github.com/tsutsu3/unbound-web-ui/network/members
[stars-shield]: https://img.shields.io/github/stars/tsutsu3/unbound-web-ui?style=for-the-badge
[stars-url]: https://github.com/tsutsu3/unbound-web-ui/stargazers
[issues-shield]: https://img.shields.io/github/issues/tsutsu3/unbound-web-ui?style=for-the-badge
[issues-url]: https://github.com/tsutsu3/unbound-web-ui/issues
[license-shield]: https://img.shields.io/github/license/tsutsu3/unbound-web-ui?style=for-the-badge
[license-url]: https://github.com/tsutsu3/unbound-web-ui/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

[codecov-shield]: https://img.shields.io/codecov/c/github/tsutsu3/unbound-web-ui?token=KLIM50QN1V&style=for-the-badge&logo=codecov

[codecov-url]: https://codecov.io/gh/tsutsu3/unbound-web-ui

[codeclimate-shield]: https://img.shields.io/codeclimate/maintainability/tsutsu3/unbound-web-ui?style=for-the-badge&logo=codeclimate

[codeclimate-url]: https://codeclimate.com/github/tsutsu3/unbound-web-ui/maintainability