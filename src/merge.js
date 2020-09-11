const fs = require(`fs`).promises;
const axios = require(`axios`);
const lists = require(`${__dirname}/lists.js`);
const whitelist = require(`${__dirname}/whitelist.js`);
const whitelistEndsWith = require(`${__dirname}/whitelistEndsWith.js`);

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
      
      let line = lines[j].trim();
      if (!line.startsWith(`#`)) {
        if (line !== ``) {

          // removes trash before and behind the line
          if(line.includes(` `)){
            line = line.split(` `)[1].trim();
          }

            // check whitlists
          let lineInWhitelist = false;
          for (let k = 0; k < whitelist.length; k++) {
            const entry = whitelist[k];
            if(line === entry){
              lineInWhitelist = true;
              break;
            }
          }
          for (let k = 0; k < whitelistEndsWith.length; k++) {
            const entry = whitelistEndsWith[k];
            if(line.endsWith(entry)){
              lineInWhitelist = true;
              break;
            }
          }
          if(!lineInWhitelist){
            domainsArray.push(line);
          }
          counter++;
        }
      }
    }
    console.log(`  ${counter} domains`);
  }

  // removes duplicates
  const domainsSet = new Set(domainsArray);
  delete domainsArray;

  // create adlist
  let domainsSetLength = 0;
  domainsSet.forEach((v) => {
    domainsSetLength++;
    domainsText += `${v}\n`;
  });

  // write adlist
  console.log(`\nBuild build/adlist.txt ...`);
  await fs.writeFile(`${__dirname}/../build/adlist.txt`, domainsText, { encoding: `utf8` });
  console.log(`  Input ${domainsArray.length} domains -> Output ${domainsSetLength} domains (${domainsArray.length - domainsSetLength} domains removed)`);
})();

