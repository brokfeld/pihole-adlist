# @brokfeld/pihole-merge-adlists

## Pihole-Adlist

`https://raw.githubusercontent.com/brokfeld/pihole-merge-adlists/master/build/adlist.txt`

## Setup autoupdate

```bash
# Setup git
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git config --global credential.helper store

# Setup pihole-merge-adlists
cd
git clone https://github.com/brokfeld/pihole-merge-adlists
cd pihole-merge-adlists
npm i

# Start update manually
./update.sh

# Setup autoupdate
crontab -e
0 5 * * * /home/myuser/pihole-merge-adlists/update.sh
```

## Development

```bash
# Clone repository
git clone https://github.com/brokfeld/pihole-merge-adlists
cd pihole-merge-adlists

# Install dependencies
npm i

# Build build/adlist.txt
npm run merge
```
