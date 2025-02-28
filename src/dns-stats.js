const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsStats = {};

  domains.forEach(el => {
    let parts = el.split('.').reverse();
    let currentDNS = '';
    parts.forEach(part => {
      currentDNS += `.${part}`;
      if (dnsStats[currentDNS]) {
        dnsStats[currentDNS]++;
      } else {
        dnsStats[currentDNS] = 1;
      }
    });
  });
  return dnsStats;
}

module.exports = {
  getDNSStats
};
