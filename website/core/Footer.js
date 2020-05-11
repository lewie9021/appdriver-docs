/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('tutorial/configuring-the-runner.html')}>
              Tutorial
            </a>
          </div>
          <div>
            <h5>API</h5>
            <a href={this.docUrl('api/device.html')}>
              Top-level
            </a>
            <a href={this.docUrl('api/runner/cli-options.html')}>
              Runner
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/lewie9021/appdriver-docs">Edit The Docs</a>
            <a href="https://github.com/lewie9021/appdriver-native-demo-app">Native Demo App</a>
            <a href={`${this.props.config.repoUrl}`}>GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
