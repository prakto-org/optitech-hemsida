const fs = require('fs');

const jsYaml = require('js-yaml');

/**
 * Reads and parses a YAML file.
 *
 * On Cloudflare Workers (OpenNext) .yaml files are not part of the bundled
 * in-memory filesystem, so fs.readFileSync fails at runtime there. In that
 * case we fall back to src/data/yaml-bundle.json — a build-time generated
 * JSON module with every YAML file under content/ pre-parsed
 * (scripts/generate-content-manifest.mjs, run in prebuild/predev).
 *
 * @param {string} absolutePath - absolute path to the YAML file
 * @returns {*} parsed YAML content
 */
const readYamlFile = (absolutePath) => {
  try {
    return jsYaml.load(fs.readFileSync(absolutePath, 'utf8'));
  } catch (_e) {
    const bundle = require('../data/yaml-bundle.json');
    const normalized = absolutePath.replaceAll('\\', '/');
    const idx = normalized.indexOf('content/');
    const key = idx >= 0 ? normalized.slice(idx) : normalized;
    if (Object.prototype.hasOwnProperty.call(bundle, key)) {
      return bundle[key];
    }
    throw _e;
  }
};

module.exports = readYamlFile;
