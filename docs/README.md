# Documentation

## Setup autoupdate

```bash
# Setup git
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git config --global credential.helper store

# Setup pihole-adlist
cd
git clone https://github.com/brokfeld/pihole-adlist
cd pihole-adlist
npm i

# Start update manually
./update.sh

# Setup autoupdate
crontab -e
0 5 * * * /home/myuser/pihole-adlist/update.sh
```

## Development

### Setup

```bash
# Clone repository
git clone https://github.com/brokfeld/pihole-adlist
cd pihole-adlist

# Install dependencies
npm i

# Build build/adlist.txt
npm run merge
```

### Files

* `src/lists.js` → Array of adlists
* `src/merge.js` → Executes the merge process (`node src/merge.js`)
  * `build/adlist.txt` → Result of the merge process
* `src/whitelist.js` → Whitelist (exact match)
* `src/whitelistEndsWith.js` → Whitelist (ends with match)
