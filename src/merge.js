const fs = require(`fs`).promises;
const axios = require(`axios`);
const lists = require(`${__dirname}/lists.js`);

(async () => {
  let domainsText = ``;
  let domainsArray = [];

  for (let i = 0; i < lists.length; i++) {
    let counter = 0;
    const list = lists[i];
    console.log(list);
    const content = await axios.get(list);
    const lines = content.data.split(`\n`);

    for (let j = 0; j < lines.length; j++) {
      const line = lines[j].trim();
      if (!line.startsWith(`#`)) {
        if (line !== ``) {
          domainsArray.push(line);
          counter++;
        }
      }
    }
    console.log(`  ${counter} Domains`);
  }

  const domainsSet = new Set(domainsArray);
  delete domainsArray;
  domainsSet.forEach((v) => {
    domainsText += `${v}\n`;
  });

  await fs.writeFile(`${__dirname}/../build/adlist.txt`, domainsText, { encoding: `utf8` });

})();

